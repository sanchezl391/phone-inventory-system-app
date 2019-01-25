import React, {useState} from 'react';
import './FilterCategory.scss';
import Dropdown from './Dropdown/Dropdown'

let FilterCategory = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let iconJsx = (props.categoryIcon) ? 
        <i className={props.categoryIcon}></i>  : 
        <img src={props.icon} alt="icon for category"/>;

    let dropdownIconClassName = (isOpen) ? 'fas fa-less-than' : 'fas fa-chevron-up';
    let filterHeaderClassName = (isOpen) ? 'filter-category-header not-open' : 'filter-category-header is-open';

    let html = 
    <div onClick={()=> setIsOpen(!isOpen)} className="filter-category-container">
        <li className={filterHeaderClassName}>
            <div className="page-identifier">
            {iconJsx} 
            {props.category}
            </div>
            <i className={dropdownIconClassName}></i>  
        </li>
        <Dropdown isOpen={isOpen} dropdownValues={props.dropdownValues}/>
    </div>;
    return html;    
};

export default FilterCategory;
