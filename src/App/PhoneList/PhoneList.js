import React, {useState} from 'react';
import PhoneItem from './PhoneItem/PhoneItem';
import PhoneDialog from './PhoneItem/PhoneDialog/PhoneDialog'

let PhoneList = (props) => {
    let phones = props.phones;
    let [checkedPhoneIds, setCheckedPhoneIds] = useState([]);
    let [isDialogOpen, setIsDialogOpen] = useState(false);

    let dialogJsx = (isDialogOpen) ? 
        <PhoneDialog 
            isCreatingNewPhone={true} 
            phoneManager={props.phoneManager}
            setIsDialogOpen={setIsDialogOpen}/>
        : '' ;

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
            for(let id in phones) {
                if(id === checkedPhoneIds[i]) {
                    let tmpPhones = props.phoneManager.phones;
                    let tmpPhoneIds = checkedPhoneIds;
                    delete tmpPhoneIds[i];
                    delete tmpPhones[id];
                    props.phoneManager.setPhones(tmpPhones);
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
        {dialogJsx}
        <div className="controls-container">
            <i 
                onClick={() => setIsDialogOpen(true)}
                className="far fa-edit"></i>
            <i 
                onClick={ () => deletePhones() } 
                className="md-txt far fa-trash-alt"></i>            
        </div>
        <ul>
            {generatePhoneItemJsx()}
        </ul>
    </div>;
    return html;
  };
  
export default PhoneList;
  

