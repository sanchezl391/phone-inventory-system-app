import React from 'react';
import Row from './Row/Row';
import './PhoneDialog.scss';
import PhoneList from '../PhoneList/PhoneList';

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

let PhoneDialog = (props) => {
  let id;
  let phone = props.phone;
  let createNewPhone = () => {
    phone = {};
    for(let i in phoneKeys){
      let key = phoneKeys[i];
      phone[key] = '';
    }
    let phoneManager = props.phoneManager;
    let phones = phoneManager.phones;
    let idCount = Object.keys(phones).length + 1; 
    phones[idCount] = phone;
    phoneManager.setPhones(phones);
  };
  
  if(!props.id) createNewPhone();
  

  let generateJsx = () => {
    let jsx = [];
    phoneKeys.forEach((key) => {
      jsx.push(
        <Row
          phone={phone}
          phoneManager={props.phoneManager}
          key={key}
          name={key}
          value={phone[key]}
          id={props.id || id}
        />
      );
    });
    return jsx;
  };

  let html = <div className="add-phone-dialog-container">
    <i 
      onClick={() => props.setBodyContent(
        <PhoneList 
          setBodyContent={props.setBodyContent} 
          phoneManager={props.phoneManager}
        />
      )}
      className="fas fa-arrow-left lg-txt"></i>
    <div className="header">
        <h2>Header Depends on wether adding or not</h2>
    </div>
    <div className="form sm-txt">
        {generateJsx()}
    </div>
  </div>;
  return html;
};

export default PhoneDialog;
