import React from 'react';
import './Dropdown.scss';
import DropdownValue from './DropdownValue/DropdownValue'

let Dropdown = (props) => {
    let dropValuesJSX = props.dropdownValues.map((value) => 
        <DropdownValue 
            category={props.category} 
            key={String(value)} 
            value={value} 
            filterManager={props.filterManager}/>
    );

    let dropdownClassName = (props.isOpen) ? 'dropdown visible-dropdown' : 'dropdown hidden-dropdown';

    let html = 
    <div className={dropdownClassName}>
        {dropValuesJSX}
    </div>;
    return html;    
};

export default Dropdown;
