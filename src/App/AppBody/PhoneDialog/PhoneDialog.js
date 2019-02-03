import React from 'react';
import Row from './Row/Row';
import './PhoneDialog.scss';
import PhoneList from '../PhoneList/PhoneList';

let PhoneDialog = (props) => {
  let phone = props.phone;

  let generateJsx = () => {
    let jsx = [];
    props.phoneKeys.forEach((key) => {
      jsx.push(
        <Row
          phone={phone}
          phoneManager={props.phoneManager}
          key={key}
          name={key}
          value={phone[key]}
          id={props.id}
        />
      );
    });
    return jsx;
  };

  let html = <div className="add-phone-dialog-container">
    <i 
      onClick={() => props.setBodyContent(
        <PhoneList 
          setBodyContent={props.setBodyContent} 
          phoneManager={props.phoneManager}
        />
      )}
      className="fas fa-arrow-left lg-txt"></i>
    <div className="header">
        <h2>Header Depends on wether adding or not</h2>
    </div>
    <div className="form sm-txt">
        {generateJsx()}
    </div>
  </div>;
  return html;
};

export default PhoneDialog;
