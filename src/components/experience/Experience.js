import React from 'react';
import "./Experience.css";
import{BsPatchCheckFill} from'react-icons/bs';
const Experience = () => {
  return (
  <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>REACTJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>TAILWIND</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>MATERIAL UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
           
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>AXIOS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>ZUSTAND</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
        </div>
      </div>
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>NODEJS</h4>
                <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>EXPRESS JS</h4>
                <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>MONGODB</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>REST API</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>AWS EC2</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>AWS S3</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>DOCKER</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>JENKINS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>NGINX</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>UNIT TESTING</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          
        </div>
        

      </div>
    </div>
  </section>
  )
}

export default Experience;