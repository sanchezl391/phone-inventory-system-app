import React, {useState} from 'react';
import './Dashboard.scss';
import '../../App/text.css';
import Settings from './Settings/Settings'

let Dashboard = () => {
  let [timeMode, setTimeMode] = useState("day");
  let modeManager = {timeMode: timeMode, setTimeMode:setTimeMode};

  let html = <div className="dashboard-container">
    <Settings modeManager={modeManager}/>
    <h2>{timeMode}</h2>
    <div className="sales-information-container">
      <div className="sales-info-component">
        <p><strong>4996</strong> USD</p>
        <p>Sales today so far</p>
      </div>
      <div className="sales-info-component">
        <p><strong>30</strong></p>
        <p>Units sold today so far</p>
      </div>
      <div className="sales-info-component">
        <p><strong>10</strong></p>
        <p>Units on sale</p>
      </div>
    </div>

    
    {/* <canvas id="myChart" width="400" height="400"></canvas> */}
  </div>;
  return html;    
};

export default Dashboard;
