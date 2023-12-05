import React from 'react';
import "./Services.css";
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h2>Extracurricular activities</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>MY HOBBIES</h3>
          </div>
          <ul className='service_list'>
            <li>
            < BiCheck className='service_list-icon'/>
            <p>Play videogame</p>
            </li>
            <li>
            < BiCheck className='service_list-icon'/>
              <p>Play cricket</p>
            </li>
            <li>
            < BiCheck className='service_list-icon'/>
            <p>Explore New Technology</p>
            </li>
            <li>
            < BiCheck className='service_list-icon'/>
            <p>WEBDESIGN</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>INTERPERSONAL SKILL</h3>
          </div>
          <ul className='service_list'>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Problem Solving</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Hard Working</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Creativity</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Project Management</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>My Hobbies</h3>
          </div>
          <ul className='service_list'>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Play videogame</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Play cricket</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>Explore New Technology</p>
            </li>
            <li>
              < BiCheck className='service_list-icon' />
              <p>WEBDESIGN</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;