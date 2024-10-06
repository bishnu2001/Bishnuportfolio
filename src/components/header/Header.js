import React from 'react';
import "./Header.css";
import Resume from './Resume';
import ME from"../../assets/myphoto.jpg";
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
        <div className='me' style={{
          padding:"3rem 4.5rem 1.5rem 1.5rem",
  width: "22rem",      // Adjust size according to your preference
  height: "39rem",     // Adjust size according to your preference
  borderRadius: "12rem 12rem 2rem 5rem", // Make the parent div rounded
  overflow: "hidden",  // Ensure the image doesn't overflow
  display: "flex",     // Flexbox for centering
  justifyContent: "center", // Center horizontally
  alignItems: "center",     // Center vertically
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for eye-catching effect
  marginLeft: "20px"   // Adjust margin if needed
}}>
  <img src={ME} alt='ME' style={{
    width: "155%",     // Make sure the image covers the entire div
    height: "100%",    // Ensure the image covers the div area
    objectFit: "cover",
    position:"relative",
    top:"-48px",
    bottom:"3px",
    left:"2px",
    right:"2px" // Make sure the image scales nicely
  }}/>
</div>


          <a href='#contact' className='scroll_down'>scroll_down</a>
      </div>
      
    </header>
  )
}

export default Header;