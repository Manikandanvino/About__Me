import React from 'react'
import './Myproject.css'
import { useState } from 'react'

const Myproject = ({img,title,decs,link}) => {
    const [show, setShow] = useState(false)
  return (
    <a href={link}>
        <div className='myproject' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
           
           {
            show ? (
                <div className='myproject--content'>
                    <h3>{title}</h3>
                    <p>{decs}</p>
                </div>
            ) : (
                <img src={img} alt="" />
            )
           }
        </div>
    </a>
  )
}

export default Myproject