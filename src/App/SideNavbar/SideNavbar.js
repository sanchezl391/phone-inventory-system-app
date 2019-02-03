import React, {useState} from 'react';
import './SideNavbar.scss';
import userImage from './user.jpg'
import Filter from './Filter/Filter';
import Pages from './Pages/Pages';
import Inbox from './Pages/Inbox/Inbox';

let SideNavbar = (props) => {
  let [pageActivated, setPageActivated] = useState();

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
      <Pages phoneManager={props.phoneManager} setBodyContent={props.setBodyContent}/>
      <Filter/> 
    </div>
  </nav>;
  return html;    
};


export default SideNavbar;
