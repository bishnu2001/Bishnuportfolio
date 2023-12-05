import React from 'react';
import "./Navbar.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from'react-icons/bi';
import { useState } from 'react';


const Navbar = () => {
  const[activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav("#")} className={activeNav==='#'?'active':''}><AiOutlineHome size={30}/></a>
      <a href='#about' onClick={()=>setActiveNav("#about")}className={activeNav==='#about'?'active':''}><AiOutlineUser size={30}/></a>
      <a href='#experience'onClick={()=>setActiveNav("#experience")}className={activeNav==='#experience'?'active':''}><BiBook size={30}/></a>
      <a href='#services'onClick={()=>setActiveNav("#services")}className={activeNav==='#services'?'active':''}><RiServiceLine size={30}/></a>
      <a href='#contact'onClick={()=>setActiveNav("#contact")}className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail size={30}/></a>
    </nav>
  )
}

export default Navbar;