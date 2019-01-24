import React, {useState} from 'react';
import './DropdownValue.scss';

let DropdownValue = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    let dropValueClassName = (isSelected) ? 'drop-value is-selected': 'drop-value not-selected';

    let handleClick = (e) => {
        e.stopPropagation();
        setIsSelected(!isSelected)
    };

    let html = 
    <div 
        onClick={(event)=>handleClick(event)} 
        key={String(props.value)} 
        className={dropValueClassName}>
        {props.value}
    </div>;
    return html;
};

export default DropdownValue;
