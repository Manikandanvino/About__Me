import React from 'react'
import {Element} from 'react-scroll'
import Programing from 'C:/portpolio/portpolio/src/Component/coding.gif'
import LinearProgress from '@mui/material/LinearProgress'
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

const Skills = () => {
  return (
    <Element className='skills' id='Skills'>
         <div className='skills--image'>
            <img src={Programing} alt=''></img>
        </div>
        <div className='skills--text'>
          <h2>SKILLSET</h2>
          <div className="bars ">
             <h4><RiJavascriptFill className='icons javaScriptIcon'/>Javascript</h4>
             <div className='bar1'>
               <LinearProgress variant="determinate" value={90}/>
            </div>
          </div>
          <div className='bars'>
             <h4><FaReact className='icons reactIcon'/>React.js</h4>
             <div className='bar2'>
               <LinearProgress variant="determinate" value={80}/>
             </div> 
          </div>
          <div className='bars'>
             <h4><FaNodeJs className='icons nodeIcon'/>Node.js</h4>
             <div className='bar3'>
               <LinearProgress variant="determinate" value={70}/>
             </div>  
          </div>
          <div className='bars'>
             <h4><FaCss3Alt className='icons cssIcon'/>Css3</h4>
             <div className='bar4'>
               <LinearProgress variant="determinate" value={95}/>
            </div>
          </div>
          <div className='bars'>
             <h4><FaHtml5 className='icons htmlIcon'/>Html5</h4>
             <div className='bar5'>
               <LinearProgress variant="determinate" value={95}/>
             </div>
          </div>
          <div className='bars'>
             <h4><FaGitAlt className='icons gitIcon'/>Git</h4>
             <div className='bar6'>
               <LinearProgress variant="determinate" value={90}/>
             </div>
          </div>
        </div>
    </Element>
        )
}
export default Skills