import React from 'react';
import PhoneItem from './PhoneItem/PhoneItem';

let PhoneList = () => {
    let html = <div className="phone-list-container">
        <ul>
            <PhoneItem />
            <PhoneItem />
        </ul>
    </div>;
    return html;
  };
  
export default PhoneList;
  

