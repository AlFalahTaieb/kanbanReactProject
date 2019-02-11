import React from 'react'


const ProjectSummary = ({ project }) => {
    return (
        <div
            className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{project.projectName}</span>
                <p>{project.ScrumMasterUsername}</p>
                <p>{project.label}</p>
                <p className='grey-text'>3rd septembr,1</p>
            </div>

        </div>


    )

}

export default ProjectSummary