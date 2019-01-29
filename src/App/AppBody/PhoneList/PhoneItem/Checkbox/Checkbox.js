import React, { useState } from 'react';
import './Checkbox.scss';

let Checkbox = (props) => {
    let [isChecked, setIsChecked] = useState(false);
    let innerHtml = '';
    let checkboxClassName = '';

    let toggleCheck = () =>{
        setIsChecked(!isChecked);
        props.notifyCheckChange(!isChecked, props.id);
    };

    if(isChecked){
        innerHtml = <i className="fas fa-check"></i>;
        checkboxClassName = 'checkbox-container checked';
    } else{
        checkboxClassName = 'checkbox-container';
    }

    let html = <div onClick={() => toggleCheck()} className={checkboxClassName}>
        {innerHtml}
    </div>;

    return html;
  };
  
export default Checkbox;
  