import React from 'react';
import './Pages.scss';

let Pages = () => {
  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">PAGES</h2>
    <ul className='navigation md-txt'>
      <li className='dropdown'>
        <div className="page-identifier">
          <i className="fas fa-tachometer-alt"></i>
          Dashboard
        </div>
        <i className="fas fa-less-than"></i>     
      </li>
      <li>
        <div className="page-identifier">
          <i className="fas fa-inbox"></i>
          Inbox
        </div>
      </li>
    </ul>
  </div>;
  return html;    
};

export default Pages;
