import React from 'react'


const TaskSummary = ({ task }) => {
    const created = new Date(task.created).toLocaleString()
    return (
        <div
            className='card z-depth-0 task-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{task.taskName}</span>
                <p  className='grey-text'>{created}</p>
                <p>{task.content}</p>
                <p className='grey-text'>{task.date}</p>
            </div>

        </div>


    )

}

export default TaskSummary