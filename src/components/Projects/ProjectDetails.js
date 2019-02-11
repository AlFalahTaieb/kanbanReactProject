import React from 'react'


const ProjectDetails = (props) =>{
const id = props.match.params.id


console.log(props)
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className='card-title'>Project Title - {id} </span>
                    <p>bakbakjabjkabjkabjkabkajbkajbajbakjbakjbkajbakjbajbaja</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>POSTED BY TAIEB</div>
                    <div>Today</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails