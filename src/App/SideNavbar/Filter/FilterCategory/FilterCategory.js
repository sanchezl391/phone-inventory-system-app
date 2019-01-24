import React, {useState} from 'react';
import './FilterCategory.scss';
import Dropdown from './Dropdown/Dropdown'

let FilterCategory = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    let dropdownIconClassName = (isOpen) ? 'fas fa-less-than' : 'fas fa-chevron-up';
    let filterHeaderClassName = (isOpen) ? 'filter-category-header not-open' : 'filter-category-header is-open';

    let html = 
    <div onClick={()=> setIsOpen(!isOpen)} className="filter-category-container">
        <li className={filterHeaderClassName}>
            <div className="page-identifier">
            <i className={props.categoryIcon}></i>
            {props.category}
            </div>
            <i className={dropdownIconClassName}></i>   
        </li>
        <Dropdown isOpen={isOpen} dropdownValues={props.dropdownValues}/>
    </div>;
    return html;    
};

export default FilterCategory;
