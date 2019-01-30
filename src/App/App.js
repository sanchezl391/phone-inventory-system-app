import React, {useState} from 'react';
import './App.scss';
import SideNavbar from './SideNavbar/SideNavbar';
import AppBody from './AppBody/AppBody';
import TopNavbar from './TopNavbar/TopNavbar';

let phone1 = {
  status: 'Sale',
  id: false, 
  model: 'V20',
  brand: 'LG',
  company: 'T-Mobile',
  color: 'black',
  condition: 'A',
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
  model: 'Galaxy S9',
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

  let html = <div className='app-container'>
      <SideNavbar />
      <div className="main-content-container">
        <TopNavbar />
        <AppBody phoneManager={phoneManager}/>
      </div>
  </div>;
  return html;
};

export default App;
