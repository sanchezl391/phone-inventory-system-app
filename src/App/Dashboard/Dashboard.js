import React, {useState} from 'react';
import './Dashboard.scss';
import '../../App/text.css';
import Settings from './Settings/Settings'
import SalesInfo from './SalesInfo/SalesInfo';

let Dashboard = (props) => {
  let [timeMode, setTimeMode] = useState("day");
  let modeManager = {timeMode: timeMode, setTimeMode:setTimeMode};

  let html = <div className="dashboard-container">
    <Settings modeManager={modeManager}/>
    <h2>{timeMode}</h2>
    <SalesInfo mode={timeMode} phoneManager={props.phoneManager}/>
  </div>;
  return html;    
};

export default Dashboard;
