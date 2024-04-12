import React from 'react'
import {Element} from 'react-scroll'
import screenshot1 from 'C:/portpolio/portpolio/src/Component/Screenshot1.png'
import screenshot2 from 'C:/portpolio/portpolio/src/Component/Screenshot2.png'
import screenshot3 from 'C:/portpolio/portpolio/src/Component/Screenshot3.png'
import screenshot4 from 'C:/portpolio/portpolio/src/Component/Screenshot4.png'
import Myproject from './Myproject'
const Project = () => {
    const clint_project = [
        {
            img:`${screenshot1}`,
            title:"social-media",
            decs:"Hii, Welcome to Manish Social Media.the ultimate social media networking platform designed to connect people from all wolks of life.Whether you are looking to share your passions,connect friends and family, or discover new communities",
            link :"https://social-media-appp.netlify.app"
        }, {
            img:`${screenshot2}`,
            title:"to-do-list-app",
            decs:"Hii, Welcome to my todo list app.Effortlessly create, organize, and prioritize tasks. Stay on track with smart reminders and collaborative features. Download now and boost your productivity!",
            link :"https://react-todo-list-ap.netlify.app"
        }, {
            img:`${screenshot3}`,
            title:"landing-page",
            decs:"A hub for expert-led courses spanning diverse fields. Benefit from interactive learning experiences tailored to your pace and preferences. Advance your career with certifications and badges, and join a supportive global community of learners",
            link :"https://course-landing-pages.netlify.app"
        }, {
            img:`${screenshot4}`,
            title:"team-member-site",
            decs:"Welcome to our team! Meet the talented individuals who drive our success. Explore our diverse team members' profiles and expertise. From seasoned professionals to creative innovators, discover the faces behind our brand",
            link :"https://team-members-site.netlify.app"
        },
    ]
  return (
    <Element className='projects' id='Projects'>
        <h1>Projec<span>ts</span></h1>
        <p>
            Here are some project which i done for making lives of people easy
        </p>
        <div className='projectList'>
             {
                clint_project.map((project,index)=>{
                    return(
                        <Myproject 
                          key={index}
                          img={project.img}
                          title={project.title}
                          link={project.link}
                          decs={project.decs} />
                    )
                })
             }
        </div>

    </Element>
  )
}

export default Project