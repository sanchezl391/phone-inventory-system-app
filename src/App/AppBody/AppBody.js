import React,{useState} from 'react';
import './AppBody.scss';
import PhoneDialog from './PhoneDialog/PhoneDialog';
import PhoneList from './PhoneList/PhoneList';

let AppBody = (props) => {
  let [bodyContent, setBodyContent] = useState();

  let html = <section className='app-body-container'>
    <div className="app-body-content-container">
      {bodyContent || <PhoneList setBodyContent={setBodyContent} phoneManager={props.phoneManager}/>}
    </div>
  </section>;
  return html;
};

export default AppBody;
