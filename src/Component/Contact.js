import React from 'react'
import {Element} from 'react-scroll'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <Element className="contact" id='Contact' >
       <h1>Contact</h1>
       <div className='contact--container'>
        <p>
            Email : <a href='https://mail.google.com'><span>mk4576835@gmail.com</span></a>
        </p>
        <p>
            Github Username : <a href='https://github.com/Manikandanvino'><span>Manikandanvino</span></a>
        </p>
        <p>
            Mobile : 9003950241
        </p>
        <div className='contact--icon'>
            <a href='https://www.linkedin.com/in/manikandan-s04'>
              <FaLinkedin className='linkedin-icon'/>
            </a>
            
            <a href='https://www.instagram.com/m_a_n_i_04_'>
              <FaInstagram className='insta-icon'/>
            </a>
            <a href='https://www.facebook.com/manikandanmani.mani.560'>
              <FaSquareFacebook className='facebook-icon' />
            </a>
        </div>

       </div>
    </Element>
  )
}

export default Contact