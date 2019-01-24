import React from 'react';
import './Filter.scss';
import FilterCategory from './FilterCategory/FilterCategory';

let Filter = () => {
  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">FILTER</h2>
    <ul className='navigation md-txt'>
      <FilterCategory 
        category='Status' categoryIcon='fas fa-exclamation-circle'
        dropdownValues={['Verizon', 'T-Mobile']}
      />
      {/* <FilterCategory category='Company' categoryIcon='fas fa-building'/>
      <FilterCategory category='Condition' categoryIcon='fas fa-mobile-alt'/>
      <FilterCategory category='Price' categoryIcon='fas fa-dollar-sign'/> */}
    </ul>
  </div>;
  return html;    
};

export default Filter;
