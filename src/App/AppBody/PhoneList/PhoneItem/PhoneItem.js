import React from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';
import Checkbox from './Checkbox/Checkbox' ;

let PhoneItem = () => {
    let html = <li className='phone-item-container'>
        <Checkbox />
        <div className="phone-info-container">
            <div className="md-txt top-row">
                <p>T-Mobile Galaxy S8</p>
                <p>Aug 20th</p>
            </div>
            <div className="bottom-row">
                <p className='sm-txt number almost-completed'>2 Categories Left</p>
            </div>
        </div>

    </li>;
    return html;
  };
  
export default PhoneItem;
  

