import React from 'react';
import './Row.scss';
import Value from './Value/Value';

let Row = (props) => {
  let html = <div className="row">
        <p className='name'>{props.name}</p>
        {/* <div className="divider"></div> */}
        <Value 
          phoneManager={props.phoneManager}
          id={props.id} 
          name={props.name} 
          value={props.value}
          phone={props.phone} />       
    </div>;
  return html;
};

export default Row;
