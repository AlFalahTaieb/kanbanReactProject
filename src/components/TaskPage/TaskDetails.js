import React from 'react'

const TaskDetails = (props) =>{
    // const date = new Date(Task.date).toDateString()
let task={
    id :props.match.params.id,
    title: props.location.state.task['taskName'],
    // state:props.location.state.task['state'],
    consultants:props.location.state.task['consultants'],
    // label:props.location.state.task['label'],
    content:props.location.state.task['content'],
    created:new Date(props.location.state.task['createdAt']).toLocaleString(),
    updated:new Date(props.location.state.task['updatedAt']).toLocaleString()
}
console.log(updated)
console.log(props)
// console.log(props)
if (user){
    return (
        <div className='container section task-details'>
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className='card-title'>{task.title} - {user.id} </span>
                    <p>{task.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>POSTED BY {task.created}</div>
                    <div>{task.updated}</div>
                </div>
            </div>
        </div>
    )
} else {
    return (
        <div className='container center'>
            <p>Loading task...</p>
        </div>
    )
}
}
export default TaskDetails