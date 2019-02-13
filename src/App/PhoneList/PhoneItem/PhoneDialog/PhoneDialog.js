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
  console.log('rendering phone dialog');
  let createNewPhone = () => {
    let phone = {};
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
    phone.id = idCount;  
    return phone;
  };
  let phone = props.phone || createNewPhone();
  let id = phone.id;
  console.log(phone);
  
  let handleBackBtnClicked = (e) => {
    e.stopPropagation();
    // save current phone
    let phones = props.phoneManager.phones;
    phones[phone.id] = phone;
    props.phoneManager.setPhones(phones);
    props.setIsDialogOpen(false);
  };

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
          id={id}
        />
      );
    });
    return jsx;
  };

  let html = <div className="dialog-background">
      <div className="phone-dialog-container">
        <div className="header">
            <h2>{props.header}</h2>
        </div>
        <div className="white-bg-color">
          <i 
            onClick={(e) => handleBackBtnClicked(e)}
            className="fas fa-arrow-left lg-txt"></i>
          <div className="form sm-txt">
              {generateJsx()}
          </div>
        </div>
      </div>
    </div>;

  return html;
};

export default PhoneDialog;
