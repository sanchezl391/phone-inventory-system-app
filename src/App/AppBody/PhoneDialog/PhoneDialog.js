import React from 'react';
import Row from './Row/Row';
import './PhoneDialog.scss';

let phoneKeys = [
  'status',
  'id', 
  'model',
  'brand',
  'company', 
  'color', 
  'condition',
  'comments',
  'dateAdded',
  'datePurchased',
  'dateSold',
  'dateReturned',
  'customerName', 
  'imei', 
  'originalPrice', 
  'goalPrice', 
  'priceSold'
];

let AddPhoneDialog = (props) => {
  let phone = props.phone;
  console.log(props.phone);

  let generateJsx = () => {
    let jsx = [];
    phoneKeys.forEach((key) => {
      jsx.push(
        <Row
          key={key}
          name={key}
          value={phone[key]}
        />
      );
    });
    return jsx;
  };

  let html = <div className="add-phone-dialog-container">
    <div className="header">
        <h2>Header Depends on wether adding or not</h2>
    </div>
    <div className="form sm-txt">
        {generateJsx()}
    </div>
  </div>;
  return html;
};

export default AddPhoneDialog;
