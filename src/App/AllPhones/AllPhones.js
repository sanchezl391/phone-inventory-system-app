import React from 'react';
import './AllPhones.scss';
import PhoneList from '../PhoneList/PhoneList';

let AllPhones = (props) => {
  
  // have count of filter categories

  // phone list
  
  // for every phone
  //     add to phone list
  //     for every filter category
  //         get value at phone[filter]
  //         check if phone does not have at least one of category   
  //         if not then 
  //             remove phone from phone list
  //             break

  let activeFilters = props.activeFilters;
  console.log(activeFilters);
  let phones = props.phoneManager.phones;
  let filteredPhones = {};
  for(let id in props.phoneManager.phones){
    let phone = phones[id];
    filteredPhones[id] = phone;
    // console.log('phone being checked', phone);
    // console.log('adding phone to filteredPhones', filteredPhones);
    
    
    for(let category in activeFilters){
      let filterValues = activeFilters[category];
      // console.log('filter values', filterValues);
      let phoneValue = phone[category];
      // console.log('phone value', phoneValue);
      let hasValue = filterValues.includes(phoneValue);
      // console.log('phone has value', hasValue);
      if(!hasValue){
        delete filteredPhones[id];
      }
    }
  }
  // console.log('filtered phones', filteredPhones);



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
