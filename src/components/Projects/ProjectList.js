import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          /*
          <Link to={'/project/' + project.id} key={project.id} >*/
            <Link to={{
              pathname: '/project/' + project.id ,
              state: { project : project} 
            }}>
              <ProjectSummary project={project} />

            </Link>
            )
          })}  
      </div>
        )
      }
  
export default ProjectList