import React from 'react';
import './Pages.scss';

let Pages = (props) => {
  let dashboardClassName = 
    (props.sectionManager.currentActiveSection === 'dashboard') ? 
    'active-section' : '';
  let inboxClassName = 
    (props.sectionManager.currentActiveSection === 'inbox') ? 
    'active-section' : '';

  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">PAGES</h2>
    <ul className='navigation md-txt'>
      <li 
        className={dashboardClassName}
        onClick={ () => props.sectionManager.setCurrentActiveSection('dashboard') }>
        <div className="page-identifier">
          <i className="fas fa-tachometer-alt"></i>
          Dashboard
        </div>  
      </li>
      <li 
        className={inboxClassName}
        onClick={ () => props.sectionManager.setCurrentActiveSection('inbox') } >
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
