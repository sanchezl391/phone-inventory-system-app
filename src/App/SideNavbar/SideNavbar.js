import React, {useState} from 'react';
import './SideNavbar.scss';
import userImage from './user.jpg'
import Filter from './Filter/Filter';
import Pages from './Pages/Pages';

let SideNavbar = (props) => {
  let showPhonesContainerClassName = 
    (props.sectionManager.currentActiveSection === 'all phones') ? 
      'show-phones-container active-section' : 'show-phones-container' ;

  let html = <nav className='side-navbar-container'>
    <header>
      <div className="user-info-container">
        <img src={userImage} alt="current user"/>
        <p>Briana Sanchez</p>
      </div>
    </header>
    <div className="side-navbar-body">
      <div className="input-container">
        <input className='sm-txt' placeholder="Phone Search..." type="text"/>
      </div>
      <Pages 
        phoneManager={props.phoneManager} 
        sectionManager={props.sectionManager}/>
        <div className={showPhonesContainerClassName} 
          onClick={()=>props.sectionManager.setCurrentActiveSection('all phones')}>
          <i className="fas fa-list-ul"></i>Show Phones
        </div>
      <Filter filterManager={props.filterManager}/> 
    </div>
  </nav>;
  return html;    
};

export default SideNavbar;
