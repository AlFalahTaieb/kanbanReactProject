import React from 'react'
import TaskSummary from './TaskSummary'
import { Link } from 'react-router-dom'

const TaskList = ({ tasks }) => {
  return (
    <div className="project-list section">
      {tasks && tasks.map(task => {
        return (
          /*
          <Link to={'/project/' + project.id} key={project.id} >*/
            <Link to={{
              pathname: '/task/' + task.id ,
              state: { task : task} 
            }}>
              <TaskSummary task={task} />

            </Link>
            )
          })}  
      </div>
        )
      }
  
export default TaskList