import React from 'react'
import {Element} from 'react-scroll'
import { useState } from 'react'

const Experience = () => {
    const [show, setShow] = useState(false)
  return (
    <Element className='experience' id='Experience'>
        <h1>Experience</h1>
        <div className='experience--info' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ?  (<p>During my internship at Veritech Software IT Service, I gained valuable experience in frontend development. I collaborated with the team to implement new features and optimize existing codebases. One of my key achievements was Social Media App. This experience enhanced my skills in React.js, HTML, CSS, JavaScript, and improved my ability to work in a team-oriented environment. I believe that my internship at Veritech Software IT Service has prepared me well for future roles in frontend development by providing hands-on experience and exposure to industry best practices.</p>) : (
                    <h2>Veritech Software IT Service</h2>
                )
            }
            
        </div>
        

    </Element>
  )
}

export default Experience