import React from 'react';
import './AppBody.scss';
import PhoneList from './PhoneList/PhoneList';

let AppBody = () => {
  let html = <section className='app-body-container'>
    <div className="app-body-content-container">
      <PhoneList />
    </div>
  </section>;
  return html;
};

export default AppBody;
