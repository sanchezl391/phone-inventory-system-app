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


// render Input only when value was clicked
let Value = (props) => {
    let handleClick = () => {
        setInputJsx(<Input name={props.name}/>);
    };

    let [value, setValue] = useState(props.value);
    let [inputJsx, setInputJsx] = useState('');
    let isEmpty = !((props.value + '').length > 0); 
    let isCritical = criticalPhoneKeys.includes(props.name);
    let valueClassName = 'value ';

    if(isEmpty){
      valueClassName += ' empty';
      value = 'Empty';
    } 
    if(isCritical) valueClassName += ' isCritical';

  let html = <div className="valueContainer">
        {inputJsx}
        <p 
            onClick={() => handleClick()}
            className={valueClassName}>
            {value + ''}
        </p>
    </div>;
  return html;
};

export default Value;
