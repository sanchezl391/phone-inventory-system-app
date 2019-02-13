import React, {useState} from 'react';
import './Value.scss';
import Input from './Input/Input';

let criticalPhoneKeys = [
    'status', 
    'condition',
    'imei',
    'originalPrice',
    'company',
    'brand',
    'model'
  ];

let Value = (props) => {
  let [displayVal, setDisplayVal] = useState(props.value);
  let [inputJsx, setInputJsx] = useState('');
  let isEmpty = !((displayVal + '').length > 0); 
  let isCritical = criticalPhoneKeys.includes(props.name);
  let valueClassName = 'value ';

  let handleCloseBtnClicked = () => {
    setInputJsx('');
  };
  let handleClick = () => {
    setInputJsx(
      <Input 
        id={props.phone.id}
        phoneManager={props.phoneManager}
        setDisplayVal={setDisplayVal} 
        displayVal={displayVal} 
        handleCloseBtnClicked={handleCloseBtnClicked} 
        name={props.name}
        phone={props.phone}/>
    );
  };

  if(isEmpty){
    valueClassName += ' empty';
    setDisplayVal('Empty');
  } 
  if(isCritical) valueClassName += ' isCritical';

  let html = <div className="valueContainer">
        {inputJsx}
        <p 
            onClick={() => handleClick()}
            className={valueClassName}>
            {displayVal + ''}
        </p>
    </div>;
  return html;
};

export default Value;
