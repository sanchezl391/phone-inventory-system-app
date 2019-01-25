import React from 'react';
import './Filter.scss';
import FilterCategory from './FilterCategory/FilterCategory';
import brand from './brand.png';
import condition from './condition.png';

let Filter = () => {
  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">FILTER</h2>
    <ul className='navigation md-txt'>
      <FilterCategory 
        category='Status' categoryIcon='fas fa-exclamation-circle'
        dropdownValues={['Sold', 'Selling', 'Repair']}
      />
      <FilterCategory 
        category='Company' categoryIcon='fas fa-building'
        dropdownValues={['T-Mobile', 'Sprint', 'Verizon']}
      />
      <FilterCategory 
        category='Condition' icon={condition}
        dropdownValues={['A', 'B', 'C']}
      />
      <FilterCategory 
        category='Brand' icon={brand}
        dropdownValues={['Apple', 'LG', 'Samsung']}
      />
    </ul>
  </div>;
  return html;    
};

export default Filter;
