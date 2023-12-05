import React from 'react';
import "./Header.css";
import Resume from './Resume';
import ME from"../../assets/profile2.png";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Bishnu Narayan Pradhan</h1>
        <h5 className='text-light'>Full Stack MERN Developer</h5>
        <Resume/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='ME'/>
          </div>
          <a href='#contact' className='scroll_down'>scroll_down</a>
      </div>
      
    </header>
  )
}

export default Header;