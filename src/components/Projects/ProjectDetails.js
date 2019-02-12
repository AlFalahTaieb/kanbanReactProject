import React from 'react'


const ProjectDetails = (props) =>{
    // const date = new Date(project.date).toDateString()
let user={
    id :props.match.params.id,
    title: props.location.state.project['projectName'],
    state:props.location.state.project['state'],
    consultants:props.location.state.project['consultants'],
    label:props.location.state.project['label'],
    user:props.location.state.project['ScrumMasterUsername'],
    date:new Date(props.location.state.project['date']).toLocaleString()
}
console.log(user)
console.log(props)
// console.log(props)
if (user){
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className='card-title'>{user.title} - {user.id} </span>
                    <p>bakbakjabjkabjkabjkabkajbkajbajbakjbakjbkajbakjbajbaja</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>POSTED BY {user.user}</div>
                    <div>{user.date}</div>
                </div>
            </div>
        </div>
    )
} else {
    return (
        <div className='container center'>
            <p>Loading Project...</p>
        </div>
    )
}
}
export default ProjectDetails