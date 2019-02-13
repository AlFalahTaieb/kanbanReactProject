import React from 'react'


const TaskSummary = ({ task }) => {
    const date = new Date(task.date).toLocaleString()
    return (
        <div
            className='card z-depth-0 task-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{task.taskName}</span>
                <p>{task.created}</p>
                <p>{task.content}</p>
                <p className='grey-text'>{date}</p>
            </div>

        </div>


    )

}

export default TaskSummary