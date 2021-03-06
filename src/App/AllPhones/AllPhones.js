import React from 'react';
import './AllPhones.scss';
import PhoneList from '../PhoneList/PhoneList';

let AllPhones = (props) => {
    let getFilteredPhones = () => {
    let activeFilters = props.activeFilters;
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
      if(Object.keys(activeFilters).length === 0)
        delete filteredPhones[id];
    }  

    let completePhones = {};
    let allPhones = (Object.keys(filteredPhones).length === 0) ? 
      phones:
      filteredPhones;
    // console.log();
    console.log(allPhones);
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
      if(missingCriticalCategoriesCount === 0) completePhones[id] = phone;
    }
  
    return completePhones;
  };



  let html = <div className="all-phones-container">
    <PhoneList 
      phoneManager={props.phoneManager} 
      phones={getFilteredPhones()}
      />
  </div>;
  return html;    
};

export default AllPhones;
