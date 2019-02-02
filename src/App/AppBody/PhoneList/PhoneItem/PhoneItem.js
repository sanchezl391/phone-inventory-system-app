import React from 'react';
import './PhoneItem.scss';
import '../PhoneList.scss';
import Checkbox from './Checkbox/Checkbox' ;
import PhoneDialog from '../../PhoneDialog/PhoneDialog';

let PhoneItem = (props) => {
    console.log(props.id);
    let phone = props.phone;

    let brand = phone.brand;
    let dateAdded = phone.dateAdded;
    let model = phone.model;
    let company = phone.company;

    let handlePhoneItemClicked = () => {
        props.setBodyContent(
            <PhoneDialog 
                id={props.id}
                phoneManager={props.phoneManager}
                setBodyContent={props.setBodyContent} 
                phone={props.phone}
            />
        ); 
    };

    let html = <li onClick={() => handlePhoneItemClicked()} className='phone-item-container'>
        <Checkbox id={props.id} notifyCheckChange={props.notifyCheckChange}/>
        <div className="phone-info-container">
            <div className="md-txt top-row">
                <p>{company} {brand} {model}</p>
                <p>{dateAdded}</p>
            </div>
            <div className="bottom-row">
                <p className='sm-txt number almost-completed'>2 Categories Left</p>
            </div>
        </div>
    </li>;
    return html;
  };
  
export default PhoneItem;
  

