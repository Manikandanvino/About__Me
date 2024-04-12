import React from 'react'
import {Element,Link} from 'react-scroll'
const About = () => {
  return (
    <Element className='about' id='About Me'>
          <div className='about--name'>
          <h1>Mr.Manikandan</h1>
          <p>A Web developer</p>
          <div className='about--button'>
          <button className='about--resumebutton'><h4>Resume</h4></button>
          <Link to='Projects' smooth={true} duration={500}><button><h4 className='about--myworkbutton'>My Work</h4></button></Link>
          </div>
        </div>
    </Element> 
     )
}

export default About