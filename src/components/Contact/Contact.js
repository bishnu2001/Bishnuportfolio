import React from 'react';
import "./Contact.css";
import {AiOutlineMail,AiOutlineInstagram} from "react-icons/ai";
import {BsWhatsapp} from"react-icons/bs";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_options-icon'/>
            <h4>Gmail</h4>
            <h5>bishnunarayanpradhan2001@gmail.com</h5>
            <a href='mailto:bishnunarayanpradhan@gmail.com'>send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineInstagram className='contact_options-icon'/>
            <h4>Instagram</h4>
            <h5>bishnu_pradhan10</h5>
            <a href='https://www.instagram.com/direct/inbox' target='_main'>send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_options-icon'/>
            <h4>Whatsapp</h4>
            <h5>+919348452267</h5>
            <a href='https://wa.me/+919348452267' target='_main'>send a message</a>
          </article>
        </div>
        <form>
          <input type='text' placeholder='enter your full name' required/>
          <input type='email' placeholder='enter your email' required/>
          <textarea name='message' rows='7' placeholder='your message' required/>
          <button type='submit' className='btn btn-primary'>send a message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact;