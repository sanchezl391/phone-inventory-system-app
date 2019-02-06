import React from 'react';
import './AppBody.scss';

import PhoneList from './PhoneList/PhoneList';

let AppBody = (props) => {

  console.log(props);
  let html = <section className='app-body-container'>
    <div className="app-body-content-container">
      {props.bodyContent}
    </div>
  </section>;
  return html;
};

export default AppBody;
