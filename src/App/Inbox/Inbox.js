import React, {useState} from 'react';
import './Inbox.scss';
import PhoneList from '../PhoneList/PhoneList';

let criticalPhoneKeys = [
    'status', 
    'condition',
    'imei',
    'originalPrice',
    'company',
    'brand',
    'model'
  ];

let Inbox = (props) => {
  let phones = props.phoneManager.phones;
  let inboxPhones = {};
  let generateInboxPhones = () => {
      for(let id in phones) {
          let phone = phones[id];
          
          for(let i in criticalPhoneKeys){
              let key = criticalPhoneKeys[i];
              
              let value = phone[key];
              let isEmpty = !((value + '').length > 0);
              
              if(isEmpty) 
                inboxPhones[id] = phone; 
          }
      }
  };
  generateInboxPhones();
  let html = <div className="inbox-container">
    <PhoneList 
      phones={inboxPhones}
      phoneManager={props.phoneManager}
      inboxPhones={inboxPhones}
    />
  </div>;

  return html;    
};

export default Inbox;
