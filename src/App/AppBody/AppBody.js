import React from 'react';
import './AppBody.scss';
import PhoneDialog from './PhoneDialog/PhoneDialog';
// import PhoneList from './PhoneList/PhoneList';

let AppBody = (props) => {
  let html = <section className='app-body-container'>
    <div className="app-body-content-container">
      {/* <PhoneList phoneManager={props.phoneManager}/> */}
      <PhoneDialog phone={props.phoneManager.phones[1]}/>
    </div>
  </section>;
  return html;
};

export default AppBody;
