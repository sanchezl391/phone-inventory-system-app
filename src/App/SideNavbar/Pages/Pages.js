import React from 'react';
import './Pages.scss';
import Inbox from '../Pages/Inbox/Inbox'

let Pages = (props) => {
  let html = 
  <div className="pages-container">
    <h2 className="sm-txt">PAGES</h2>
    <ul className='navigation md-txt'>
      <li>
        <div className="page-identifier">
          <i className="fas fa-tachometer-alt"></i>
          Dashboard
        </div>  
      </li>
      <li onClick={()=>props.setBodyContent(
          <Inbox phoneManager={props.phoneManager} setBodyContent={props.setBodyContent}/>)
          } >
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
