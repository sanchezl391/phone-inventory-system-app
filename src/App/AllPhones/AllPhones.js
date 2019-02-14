import React from 'react';
import './AllPhones.scss';
import PhoneList from '../PhoneList/PhoneList';

let AllPhones = (props) => {
  
  // returns phones without missing categories
  let getFinishedPhones = () => {
    let completePhones = {};
    let allPhones = props.phoneManager.phones;
    let criticalPhoneKeys = [
      'status', 
      'condition',
      'imei',
      'originalPrice',
      'company',
      'brand',
      'model'
    ];
    
    for(let id in allPhones){
      let phone = allPhones[id];
      let missingCriticalCategoriesCount = 0;
      for(let i in criticalPhoneKeys){
        let key = criticalPhoneKeys[i];
        let val = phone[key];
        let isEmpty = !((val + '').length > 0); 
        if(isEmpty) missingCriticalCategoriesCount+=1;
      }
      if(missingCriticalCategoriesCount == 0) completePhones[id] = phone;
    }
    return completePhones;
  };

  let html = <div className="all-phones-container">
    <PhoneList 
      phoneManager={props.phoneManager} 
      phones={getFinishedPhones()}
      />
  </div>;
  return html;    
};

export default AllPhones;
