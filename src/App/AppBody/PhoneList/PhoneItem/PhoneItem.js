import React from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';
import Checkbox from './Checkbox/Checkbox' ;

let PhoneItem = (props) => {
    let phone = props.phone;

    let brand = phone.brand;
    let dateAdded = phone.dateAdded;
    let model = phone.model;
    let company = phone.company;


    let html = <li className='phone-item-container'>
        <Checkbox id={props.id} notifyCheckChange={props.notifyCheckChange}/>
        <div className="phone-info-container">
            <div className="md-txt top-row">
                <p>{company} {brand} {model}</p>
                <p>{dateAdded}</p>
            </div>
            <div className="bottom-row">
                <p className='sm-txt number almost-completed'>2 Categories Left</p>
            </div>
        </div>
    </li>;
    return html;
  };
  
export default PhoneItem;
  

