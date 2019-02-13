import React, {useState} from 'react';
import PhoneItem from './PhoneItem/PhoneItem';
import PhoneDialog from './PhoneItem/PhoneDialog/PhoneDialog'

let PhoneList = (props) => {
    let phones = props.phones;
    let [checkedPhoneIds, setCheckedPhoneIds] = useState([]);

    // let handleAddPhoneBtnClicked = () => {
    //     props.setBodyContent(
    //         <PhoneDialog 
    //             isCreatingNewPhone={true}
    //             phoneManager={props.phoneManager}           
    //     />
    //     );
    // };

    let notifyCheckChange = (isChecked, id) => {
        let copyOfPhoneIds = checkedPhoneIds.slice();
        if(isChecked){
            copyOfPhoneIds.push(id);
        }
        else{
            copyOfPhoneIds = copyOfPhoneIds.filter(i => i !== id);
        }
        setCheckedPhoneIds(copyOfPhoneIds);
    };

    let deletePhones = () => {
        for(let i in checkedPhoneIds) {
            console.log('i', i);
            for(let id in phones) {
                console.log('id', id);
                if(id === checkedPhoneIds[i]) {
                    let tmpPhones = phones;
                    let tmpPhoneIds = checkedPhoneIds;
                    delete tmpPhoneIds[i];
                    delete tmpPhones[id];
                    // setPhones(tmpPhones);
                }
            }
        }
    };

    let generatePhoneItemJsx = () => {
        let phones = props.phones;
        let jsx = [];
        for(let id in phones){
            let phone = phones[id];

            jsx.push( 
                <PhoneItem 
                    id={id}
                    key={id}
                    phone={phone}
                    notifyCheckChange={notifyCheckChange} 
                    phoneManager={props.phoneManager}/> 
            );
        }
        return jsx;
    };

    let html = <div className="phone-list-container">
        <div className="controls-container">
            <i 
                // onClick={() => handleAddPhoneBtnClicked()}
                className="far fa-edit"></i>
            <i 
                onClick={ () => deletePhones() } 
                className="md-txt far fa-trash-alt"></i>            
        </div>
        <ul>
            {generatePhoneItemJsx()}
        </ul>
        <PhoneDialog 
            phone={phones[1]}
            phoneManager={props.phoneManager}
        />
    </div>;
    return html;
  };
  
export default PhoneList;
  
