import React from 'react';
import PhoneItem from './PhoneItem/PhoneItem';

let PhoneList = () => {
    let html = <div className="phone-list-container">
        <div className="controls-container">
            <i className="md-txt far fa-trash-alt"></i>
        </div>
        <ul>
            <PhoneItem />
            <PhoneItem />
        </ul>
    </div>;
    return html;
  };
  
export default PhoneList;
  

