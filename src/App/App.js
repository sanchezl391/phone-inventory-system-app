import React from 'react';
import './App.scss';
import SideNavbar from './SideNavbar/SideNavbar';
import AppBody from './AppBody/AppBody';
import TopNavbar from './TopNavbar/TopNavbar';

let App = () => {
  let html = <div className='app-container'>
      <SideNavbar />
      <TopNavbar />
      <AppBody />
  </div>;
  return html;
};

export default App;
