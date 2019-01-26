import React from 'react';
import './SideNavbar.scss';
import userImage from './user.jpg'
import Filter from './Filter/Filter';
import Pages from './Pages/Pages';

let SideNavbar = () => {
  let html = <nav className='side-navbar-container'>
    <header>
      <div className="user-info-container">
        <img src={userImage} alt="current user"/>
        <p>Briana Sanchez</p>
      </div>
    </header>
    <div className="side-navbar-body">
      <div className="input-container">
        <input className='sm-txt' placeholder="Phone Search..." type="text"/>
      </div>
      <Pages/>
      <Filter/> 
    </div>
  </nav>;
  return html;    
};

let phone1 = {
  status: 'Sale',
  id: 1, 
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
  model: 'Galaxy',
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

export default SideNavbar;
