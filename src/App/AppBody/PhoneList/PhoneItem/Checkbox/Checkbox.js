import React, { useState } from 'react';
import './Checkbox.scss';

let Checkbox = () => {
    let [isChecked, setIsChecked] = useState(false);
    let innerHtml = '';
    let checkboxClassName = '';
    if(isChecked){
        innerHtml = <i className="fas fa-check"></i>;
        checkboxClassName = 'checkbox-container checked';
    } else{
        checkboxClassName = 'checkbox-container';
    }

    let html = <div onClick={()=>setIsChecked(!isChecked)} className={checkboxClassName}>
        {innerHtml}
    </div>;

    return html;
  };
  
export default Checkbox;
  