import React from 'react';
import CV from "../../assets/Bishnu fullstack.pdf";



const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>DownloadCV</a>
        <a href='#contact' className='btn btn-primary'>LetsTalk</a>
    </div>
  )
}

export default Resume;