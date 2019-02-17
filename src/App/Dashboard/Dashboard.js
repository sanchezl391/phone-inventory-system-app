import React, {useState} from 'react';
import './Dashboard.scss';
import '../../App/text.css';
import Settings from './Settings/Settings';
import {Bar} from 'react-chartjs-2';
import SalesInfo from './SalesInfo/SalesInfo';

let Dashboard = (props) => {
  let [timeMode, setTimeMode] = useState("day");
  let modeManager = {timeMode: timeMode, setTimeMode:setTimeMode};
  let phonesSoldCounter = {2018: [0,0,0,0,0,0,0,0,0,0,0,0]};
  let phones = props.phoneManager.phones;
  
  let getDateArr = (date) => {return date.split("-");};
  for(let id in phones) {
    let phone = phones[id];
    let hasSoldDate = phone.dateSold.length > 0;
    let dateSold;
    if(hasSoldDate){
      dateSold = phone.dateSold;
      let dateArr = getDateArr(dateSold);
      let month = parseInt(dateArr[1]) - 1;
      phonesSoldCounter['2018'][month]++;
    }
  }
  console.log(phonesSoldCounter);



  let html = <div className="dashboard-container"> 
    <Settings modeManager={modeManager}/>
    <h2>{timeMode}</h2>
    <SalesInfo mode={timeMode} phoneManager={props.phoneManager}/>
    <Bar 
      data={
          {
          labels: ['January', 'February', 'March','April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'], 
          datasets: [
            {
              label: 'Phones Sold',
              data: phonesSoldCounter['2018'],
              backgroundColor: 'rgba(255,107,107, .5)'              
            }
          ],
          borderWidth: 1
          }
      }
      />
  </div>;
  return html;    
};

export default Dashboard;
