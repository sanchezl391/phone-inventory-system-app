import React, {useState} from 'react';
import './Input.scss';

let Input = (props) => {
  let [value, setValue] = useState(props.displayVal);
  let handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  let handleSaveBtnClicked = () => {
    let phones = props.phoneManager.phones;
    let setPhones = props.phoneManager.setPhones;

    let phone = props.phone;
    console.log(phone);
    phone[props.name] = value;

    phones[props.phone.id] = phone;
    setPhones(phones);

    props.setDisplayVal(value);
    props.handleCloseBtnClicked();  
  };

  let inputJsx = <input type={props.type} onChange={handleChange} value={value}/>;
  let list;
  if(props.name === 'status')
    inputJsx = <input list="status" type={props.type} onChange={handleChange} value=""/>;
  else if(props.name === 'company')
    inputJsx = <input list="company" type={props.type} onChange={handleChange} value=""/>;
  else if(props.name === 'condition')
    inputJsx = <input list="condition" type={props.type} onChange={handleChange} value=""/>;
  else if(props.name === 'brand')
    inputJsx = <input list="brand" type={props.type} onChange={handleChange} value=""/>;

  let html = <div className="input-container">
        <datalist id="status">
          <option value="Sold"></option>
          <option value="Selling"></option>
          <option value="Repair"></option>
        </datalist>
        <datalist id="company">
          <option value="T-Mobile"></option>
          <option value="Sprint"></option>
          <option value="Verizon"></option>
        </datalist>
        <datalist id="condition">
          <option value="A"></option>
          <option value="B"></option>
          <option value="C"></option>
        </datalist>
        <datalist id="brand">
          <option value="Apple"></option>
          <option value="LG"></option>
          <option value="Samsung"></option>
        </datalist>
        <p>Enter {props.name}</p>
        <div className="row">
            {inputJsx}
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
