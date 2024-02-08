import React, { useState, useEffect } from 'react';
import SideBar from './Sidebar';
import Footer from './Footer';
import SidebarRight from './SidebarRight';
import './mainpage.css';
import HeaderMobil from './HeaderMobil';

function MainPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 670);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []); 

  return (
    <div>
      <HeaderMobil />
      <div className="content">
        <div className='side'><SideBar /></div>
        <div className="right"><SidebarRight /></div>
      </div>
      {isMobile && <Footer />}
    </div>
  );
}

export default MainPage;
