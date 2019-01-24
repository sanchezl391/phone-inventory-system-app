import React from 'react';
import './Dropdown.scss';

let Dropdown = (props) => {
    let dropValuesJSX = props.dropdownValues.map((value) =>
        <div key={value} className="drop-value">
            <p className="value">{value}</p>
        </div>
    );

    console.log(props.isOpen);
    let dropdownClassName = (props.isOpen) ? 'dropdown visible-dropdown' : 'dropdown hidden-dropdown';

    let html = 
    <div className={dropdownClassName}>
        {dropValuesJSX}
    </div>;
    return html;    
};

export default Dropdown;
