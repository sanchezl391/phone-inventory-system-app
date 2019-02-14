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
        console.log(filterCategory);

        if(filterCategory in activeFilters && filterValues.includes(props.value)){
            activeFilters[filterCategory] = activeFilters[filterCategory].filter((value) => value != props.value);
            console.log(activeFilters);
            if(filterValues.length === 0) delete activeFilters[filterCategory];
        } 
        else {
            if(!(filterCategory in activeFilters))
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
