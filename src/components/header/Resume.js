import React from 'react';
import CV from "../../assets/Bishnu fullstack update.pdf";



const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>DownloadRESUME</a>
        <a href='#contact' className='btn btn-primary'>LetsTalk</a>
    </div>
  )
}

export default Resume;