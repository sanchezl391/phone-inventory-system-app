import React from 'react';
import './AppBody.scss';
import PhoneList from './PhoneList/PhoneList';

let AppBody = (props) => {
  let html = <section className='app-body-container'>
    <div className="app-body-content-container">
      <PhoneList phoneManager={props.phoneManager}/>
    </div>
  </section>;
  return html;
};

export default AppBody;
