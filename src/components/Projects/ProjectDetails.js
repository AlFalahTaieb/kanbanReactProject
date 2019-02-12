import React from 'react'


const ProjectDetails = (props) =>{

let user={
    id :props.match.params.id,
    title: props.location.state.project['projectName'],
    state:props.location.state.project['state'],
    consultants:props.location.state.project['consultants'],
    label:props.location.state.project['label'],
    user:props.location.state.project['ScrumMasterUsername'],
    date:props.location.state.project['date']
}
console.log(user)
console.log(props)
// console.log(props)
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className='card-title'>{user.title} - {user.id} </span>
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