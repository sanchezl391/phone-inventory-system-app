import React, {useState} from 'react';
import './App.scss';
import SideNavbar from './SideNavbar/SideNavbar';
import TopNavbar from './TopNavbar/TopNavbar';
import Inbox from './Inbox/Inbox';
import Dashboard from './Dashboard/Dashboard';
import AllPhones from './AllPhones/AllPhones';

let phone1 = {
  status: 'Sale',
  id: 1, 
  model: 'V20',
  brand: 'LG',
  company: 'T-Mobile',
  color: 'black',
  condition: '',
  comments: 'Some comments for phone.',
  dateAdded: '01/20/2018',
  datePurchased: '01/20/2018',
  dateSold: '01/20/2018',
  dateReturned: '01/20/2018',
  customerName: 'Luis',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};
let phone2 = {
  status: 'Sold',
  id: 2, 
  model: '',
  brand: 'Samsung',
  company: 'Verizon',
  color: 'white',
  condition: 'C',
  comments: 'Some comments for phone.',
  dateAdded: '01/20/2018',
  datePurchased: '01/20/2018',
  dateSold: '01/20/2018',
  dateReturned: '01/20/2018',
  customerName: 'Luis',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};
let phone3 = {
  status: 'Repair',
  id: 3, 
  model: 'X10',
  brand: 'Apple',
  company: 'Cricket',
  color: 'pink',
  condition: 'B',
  comments: 'Some comments for phone.',
  dateAdded: '01/20/2018',
  datePurchased: '01/20/2018',
  dateSold: '01/20/2018',
  dateReturned: '01/20/2018',
  customerName: 'Luis',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};

 

let App = () => {
  let [phones, setPhones] = useState({1: phone1, 2: phone2, 3: phone3});
  let phoneManager = {phones: phones, setPhones: setPhones};
  let [currentActiveSection, setCurrentActiveSection] = useState('inbox');
  let sectionManager = {currentActiveSection: currentActiveSection, setCurrentActiveSection:setCurrentActiveSection};
  console.log(currentActiveSection);
  let bodyContent = (() => {
    let content;
    switch(currentActiveSection){
      case 'inbox':
        content = <Inbox phoneManager={phoneManager}/>;
        break;
      case 'dashboard':
        content = <Dashboard/>;
        break;
      case 'all phones':
        content = <AllPhones/>;
        break;
      default:
        content = <AllPhones/>;
        break;
    }
    return content;
  })();

  let html = <div className='app-container'>
      <SideNavbar phoneManager={phoneManager} sectionManager={sectionManager}/>
      <div className="main-content-container">
        {/* <TopNavbar /> */}
        {bodyContent}
      </div>
  </div>;
  return html;
};

export default App;
