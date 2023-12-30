import React from 'react'
import './Project.css'
import {projects} from '../constants/index'
import ProjectItem from './ProjectItem'
const Project = () => {
  return (
    <div className='container'>
      <span id='project'></span>
      <div className="prjectHeading">PROJECTS</div>
      <div className="projectHead">
        Projects
      </div>
      <div className='project'>
      
      <div className="project-item">
        <p className='subHeading'>MY WORK</p>
        <p className='mainHeading'>Projects</p>
        <p className='messageProject'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      </div>
      <div className="project-list">
        {projects.map((project)=>(
          
          <ProjectItem key={project.title} project={project} hashtags={project.hastags}/>
          ))}
      </div>
    </div>
    </div>
  )
}

export default Project
