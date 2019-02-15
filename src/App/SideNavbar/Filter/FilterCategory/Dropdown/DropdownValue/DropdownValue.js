import React, {useState} from 'react';
import './DropdownValue.scss';

let DropdownValue = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    let dropValueClassName = (isSelected) ? 'drop-value is-selected': 'drop-value not-selected';

    let handleClick = (e) => {
        e.stopPropagation();
        setIsSelected(!isSelected);

        let activeFilters = props.filterManager.activeFilters;
        let filterCategory = props.category;
        let filterValues = activeFilters[props.category];

        if(filterCategory in activeFilters){
            console.log('category exists');
            if(filterValues.includes(props.value)) // delete if it already contains value
                activeFilters[filterCategory] = activeFilters[filterCategory].filter((value) => value !== props.value);
            else
                activeFilters[filterCategory].push(props.value);
            if(activeFilters[filterCategory].length === 0) {
                delete activeFilters[filterCategory];
            }
                
        } else{
            activeFilters[filterCategory] = [];
            activeFilters[filterCategory].push(props.value);
        }
        props.filterManager.setActiveFilters(activeFilters);

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
