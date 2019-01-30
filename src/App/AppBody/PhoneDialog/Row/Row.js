import React from 'react';
import './Row.scss';

let criticalPhoneKeys = [
  'status', 
  'condition',
  'imei',
  'originalPrice',
  'company',
  'brand',
  'model'
];

// should receive name of row 
// should determine if it is critical or not
// depending if critical, do appropriate styles
let Row = (props) => {
  let name = props.name;
  let isCritical = criticalPhoneKeys.includes(name);
  let isEmpty = !((props.value + '').length > 0); // assumes empty = ''
  console.log(name, isCritical, isEmpty, props.value);


  let valueClassName = 'value ';
  let value = props.value;
  if(isEmpty){
    valueClassName += ' empty';
    value = 'Empty';
    console.log('\tIs Empty');
  } 
  if(isCritical) valueClassName += ' isCritical';

  let html = <div className="row">
        <p className='name'>{name}</p>
        <div className="divider"></div>
        <div className="valueContainer">
            <p className={valueClassName}>{value + ''}</p>
        </div>            
    </div>;
  return html;
};

export default Row;
