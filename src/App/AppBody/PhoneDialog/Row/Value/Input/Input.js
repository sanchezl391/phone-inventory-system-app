import React, {useState} from 'react';
import './Input.scss';

let Input = (props) => {
  let html = <div className="input-container">
        <p>Enter {props.name}</p>
        <div className="row">
            <input />
            <i className="input-btn fas fa-check"></i>
            <i className="input-btn fas fa-times"></i>
        </div>
        <i class="lg-txt fas fa-caret-down"></i>
  </div>;
  return html;
};

export default Input;
