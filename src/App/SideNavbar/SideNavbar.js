import React, {useState} from 'react';
import './SideNavbar.scss';
import userImage from './user.jpg'
import Filter from './Filter/Filter';
import Pages from './Pages/Pages';

let SideNavbar = (props) => {
  let [menuOpen, setMenuOpen] = useState(false);
  let sideNavbarClassName = (menuOpen) ? 'side-navbar-body open-menu' : 'side-navbar-body closed-menu';

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
    <div className="menu-container">
      <i onClick={() => setMenuOpen(!menuOpen)} className="lg-txt menu hide-desktop fas fa-bars"></i>
    </div>  
    <div className={sideNavbarClassName}>
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
