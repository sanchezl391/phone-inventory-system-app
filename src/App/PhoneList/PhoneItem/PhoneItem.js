import React, {useState} from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';
import Checkbox from './Checkbox/Checkbox' ;
import PhoneDialog from './PhoneDialog/PhoneDialog';

let PhoneItem = (props) => {
    let [isDialogOpen, setIsDialogOpen] = useState(false);
    let phone = props.phone;
    let dialogJsx = (isDialogOpen) ? 
        <PhoneDialog 
            setIsDialogOpen={setIsDialogOpen} 
            phone={phone} 
            phoneManager={props.phoneManager} /> : '';
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
    
    // let handlePhoneClick = (e) => {
    //     e.stopPropagation();
    //     setIsDialogOpen(true)
    // };

    getMissingCriticalCategoriesCount();    

    let brand = phone.brand;
    let dateAdded = phone.dateAdded;
    let model = phone.model;
    let company = phone.company;

    let html = <li onClick={() => setIsDialogOpen(true)} className='phone-item-container'>
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
        {dialogJsx}
    </li>;
    return html;
};
  
export default PhoneItem;
  

