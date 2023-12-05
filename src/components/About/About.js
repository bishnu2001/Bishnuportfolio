import React from 'react';
import "./About.css";
import Bishnu from '../../assets/bishnuabout.jpg';
import {BiAward} from'react-icons/bi';
import {VscFolderLibrary} from'react-icons/vsc';
const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-img'>
          <img src={Bishnu} alt='bishnu'/>

        </div>

      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <BiAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1.8+ years of Experience</small>
            </article>
            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>20+ Projects completed</small>
            </article>
          </div>
          <p>
            Software Engineer with 1.8+ year of experience in improving
            software performance and developing new software
            functionalities. Able to effectively self-manage during
            independent projects, as well as collaborate as part of a
            productive team.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>
   </section>
  )
}

export default About