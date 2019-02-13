import React from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';
import Checkbox from './Checkbox/Checkbox' ;
import PhoneDialog from './PhoneDialog/PhoneDialog';

let PhoneItem = (props) => {
    let phone = props.phone;
    let missingCriticalCategoriesCount = 0;
    let getMissingCriticalCategoriesCount = () => {
        let criticalPhoneKeys = [
            'status', 
            'condition',
            'imei',
            'originalPrice',
            'company',
            'brand',
            'model'
          ];
        for(let i in criticalPhoneKeys){
            let key = criticalPhoneKeys[i];
            let val = phone[key];
            let isEmpty = !((val + '').length > 0); 
            if(isEmpty) missingCriticalCategoriesCount+=1;
        }
    };
    
    getMissingCriticalCategoriesCount();    

    let brand = phone.brand;
    let dateAdded = phone.dateAdded;
    let model = phone.model;
    let company = phone.company;

    let handlePhoneItemClicked = () => {
        props.setBodyContent(
            <PhoneDialog 
                id={props.id}
                phoneManager={props.phoneManager}
                phone={props.phone}
            />
        ); 
    };

    let html = <li onClick={() => handlePhoneItemClicked()} className='phone-item-container'>
        <Checkbox id={props.id} notifyCheckChange={props.notifyCheckChange}/>
        <div className="phone-info-container">
            <div className="md-txt top-row">
                <p>{company} {brand} {model}</p>
                <p>{dateAdded}</p>
            </div>
            <div className="bottom-row">
                <p className='sm-txt number almost-completed'>{missingCriticalCategoriesCount} Categories Left</p>
            </div>
        </div>
    </li>;
    return html;
  };
  
export default PhoneItem;
  

