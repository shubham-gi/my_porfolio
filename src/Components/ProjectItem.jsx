import React from 'react'
import './ProjectItem.css'
import githubLogo from '../assets/github.png'
const ProjectItem = ({project,hashtags}) => {
    const {title,description,photo,github}=project
  return (
    <div className='project-item2'>
     <a href={github} className="github">
        <img src={githubLogo} alt="" className='githubLogo'/>
     </a>
     <img src={photo} alt="" className="projectPhoto" />
     <div className="projectInfo">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="hashtag">{hashtags.map((item)=>(
            <span key={item} className='hash-item'>{item} &nbsp;</span>
        ))}
        </p>
     </div>
    </div>
  )
}

export default ProjectItem
