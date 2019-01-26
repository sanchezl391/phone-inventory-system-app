import React from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';

let PhoneItem = () => {
    let html = <li className='phone-item-container'>
        <div className="md-txt top-row">
            <p>T-Mobile Galaxy S8</p>
            <p>Aug 20th</p>
        </div>
        <div className="bottom-row">
            <p className='sm-txt number almost-completed'>2 Categories Left</p>
        </div>
    </li>;
    return html;
  };
  
export default PhoneItem;
  

