import React, {useState} from 'react';
import './Input.scss';

let Input = (props) => {
  let [value, setValue] = useState(props.displayVal);
  let handleChange = (e) => {
    setValue(e.target.value);
  };
  let handleSaveBtnClicked = () => {
    props.setDisplayVal(value);
    props.handleCloseBtnClicked();
  };
  console.log('inside Input', value);

  let html = <div className="input-container">
        <p>Enter {props.name}</p>
        <div className="row">
            <input onChange={handleChange} value={value}/>
            <i 
              onClick={() => handleSaveBtnClicked()}
              className="input-btn fas fa-check"></i>
            <i 
              className="input-btn fas fa-times"
              onClick={() => props.handleCloseBtnClicked()}></i>
        </div>
        <i className="lg-txt fas fa-caret-down"></i>
  </div>;
  return html;
};

export default Input;
