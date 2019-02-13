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

let PhoneDialog = (props) => {
  let id;
  let phone = props.phone;
  console.log(phone);
  let createNewPhone = () => {
    phone = {};
    for(let i in phoneKeys){
      let key = phoneKeys[i];
      phone[key] = '';
    }

    let today = new Date();
    let day = today.getDate();
    day =  (day < 10) ? day = '0' + day : '' + day;

    let year = today.getFullYear();

    let month = today.getMonth() + 1;
    month =  (month < 10) ? month = '0' + month : '' + month;

    phone['dateAdded'] = `${month}/${day}/${year}`;
    let phoneManager = props.phoneManager;
    let phones = phoneManager.phones;
    let idCount = Object.keys(phones).length + 1;
    id = idCount;  

    phones[idCount] = phone;
    phoneManager.setPhones(phones);
  };
  
  if(props.isCreatingNewPhone) createNewPhone();
  

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

  let html = <div className="phone-dialog-container">
    <i 
      // onClick={() => props.setBodyContent(
      //   <PhoneList 
      //     setBodyContent={props.setBodyContent} 
      //     phoneManager={props.phoneManager}
      //   />
      // )}
      className="fas fa-arrow-left lg-txt"></i>
    <div className="header">
        <h2>{props.header}</h2>
    </div>
    <div className="form sm-txt">
        {generateJsx()}
    </div>
  </div>;
  return html;
};

export default PhoneDialog;
