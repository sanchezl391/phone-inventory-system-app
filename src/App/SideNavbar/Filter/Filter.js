import React from 'react';
import './Filter.scss';
import FilterCategory from './FilterCategory/FilterCategory';
import brand from './brand.png';
import condition from './condition.png';

let Filter = (props) => {
  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">FILTER</h2>
    <ul className='navigation md-txt'>
      <FilterCategory 
        filterManager={props.filterManager}
        category='status' categoryIcon='fas fa-exclamation-circle'
        dropdownValues={['Sold', 'Selling', 'Repair']}
      />
      <FilterCategory 
        filterManager={props.filterManager}
        category='company' categoryIcon='fas fa-building'
        dropdownValues={['T-Mobile', 'Sprint', 'Verizon']}
      />
      <FilterCategory 
        filterManager={props.filterManager}
        category='condition' icon={condition}
        dropdownValues={['A', 'B', 'C']}
      />
      <FilterCategory 
        filterManager={props.filterManager}
        category='brand' icon={brand}
        dropdownValues={['Apple', 'LG', 'Samsung']}
      />
    </ul>
  </div>;
  return html;    
};

export default Filter;
