import React, {useState} from 'react';
import './App.scss';
import SideNavbar from './SideNavbar/SideNavbar';
import Inbox from './Inbox/Inbox';
import Dashboard from './Dashboard/Dashboard';
import AllPhones from './AllPhones/AllPhones';

let phone1 = {
  status: 'Selling',
  id: 1, 
  model: 'V20',
  brand: 'LG',
  company: 'T-Mobile',
  color: 'black',
  condition: '',
  comments: 'Some comments for phone.',
  dateAdded: '2019-02-14',
  datePurchased: '2019-02-14',
  dateSold: '2019-02-14',
  dateReturned: '2019-02-14',
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
  dateAdded: '2019-02-14',
  datePurchased: '2019-02-14',
  dateSold: '2019-02-14',
  dateReturned: '2019-02-14',
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
  dateAdded: '2019-02-14',
  datePurchased: '2019-02-14',
  dateSold: '2019-02-14',
  dateReturned: '2019-02-14',
  customerName: 'Luis',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};
let phone4 = {
  status: 'Sold',
  id: 4, 
  model: 'S9 Active',
  brand: 'Apple',
  company: 'T-Mobile',
  color: 'pink',
  condition: 'B',
  comments: 'Some comments for phone.',
  dateAdded: '2019-02-14',
  datePurchased: '2019-01-14',
  dateSold: '2019-01-14',
  dateReturned: '2019-02-14',
  customerName: 'Sarah',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};
let phone5 = {
  status: 'Sold',
  id: 5, 
  model: 'S10',
  brand: 'Blackberry',
  company: 'Cricket',
  color: 'pink',
  condition: 'B',
  comments: 'Some comments for phone.',
  dateAdded: '2019-02-14',
  datePurchased: '2019-02-14',
  dateSold: '2019-04-14',
  dateReturned: '2019-02-14',
  customerName: 'Luis',
  imei: 123456789,
  originalPrice: 100,
  goalPrice: 150, 
  priceSold: 200
};

 

let App = () => {
  let [phones, setPhones] = useState({1: phone1, 2: phone2, 3: phone3, 4: phone4, 5: phone5});
  let phoneManager = {phones: phones, setPhones: setPhones};
  let [currentActiveSection, setCurrentActiveSection] = useState('inbox');
  let [activeFilters, setActiveFilters] = useState({});
  let filterManager = {activeFilters: activeFilters, setActiveFilters: setActiveFilters};
  let sectionManager = {currentActiveSection: currentActiveSection, setCurrentActiveSection:setCurrentActiveSection};
  // console.log(activeFilters);
  let bodyContent = (() => {
    let content;
    switch(currentActiveSection){
      case 'inbox':
        content = <Inbox phoneManager={phoneManager}/>;
        break;
      case 'dashboard':
        content = <Dashboard phoneManager={phoneManager}/>;
        break;
      case 'all phones':
        content = <AllPhones activeFilters={activeFilters} phoneManager={phoneManager} filterManager={filterManager}/>;
        break;
      default:
        content = <AllPhones/>;
        break;
    }
    return content;
  })();

  let html = <div className='app-container'>
      <SideNavbar 
        phoneManager={phoneManager} 
        filterManager={filterManager}
        sectionManager={sectionManager}/>
      <div className="main-content-container">
        {/* <TopNavbar /> */}
        {bodyContent}
      </div>
  </div>;
  return html;
};

export default App;
