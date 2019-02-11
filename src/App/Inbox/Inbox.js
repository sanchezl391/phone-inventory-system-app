import React, {useState} from 'react';
import './Inbox.scss';
// import PhoneList from '../../../AppBody/PhoneList/PhoneList';

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
    // console.log('Inbox rendered');
    // let phones = props.phoneManager.phones;
    // let inboxPhones = {};
    // let generateInboxPhones = () => {
    //     for(let id in phones) {
    //         let phone = phones[id];
    //         console.log('phone', phone);
    //         for(let i in criticalPhoneKeys){
    //             let key = criticalPhoneKeys[i];
    //             console.log('key', key);
    //             let value = phone[key];
    //             let isEmpty = !((value + '').length > 0);
    //             console.log('isEmpty', isEmpty);
    //             if(isEmpty) 
    //                 inboxPhones[id] = phone; 
    //         }
    //     }
    // };
    // generateInboxPhones();
    // console.log(inboxPhones);
  let html = 'Inbox Component';
    // <PhoneList 
    // setBodyContent={props.setBodyContent}
    // phoneManager={props.phoneManager}
    // inboxPhones={inboxPhones}
    // />;

  return html;    
};

export default Inbox;
