import React, { Component } from 'react'
import TaskList from '../TaskPage/TaskList'


class ProjectDetails extends Component {
    _isMounted = false

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            loading: true,
            tasks: null,
            title: props.location.state.project['projectName'],
            state: props.location.state.project['state'],
            consultants: props.location.state.project['consultants'],
            label: props.location.state.project['label'],
            user: props.location.state.project['ScrumMasterUsername'],
            date: new Date(props.location.state.project['date']).toLocaleString()

        }
        console.log(props.match.params.id)
    }

    async componentDidMount() {

        this._isMounted = true
        let resp = await fetch(`http://localhost:5001/showtasks/5c607cfec27d6254c6fe0ca1`)
        let data = await resp.json()
        console.log('yooo' + this.state.id)

        const tasks = data.map(pro => {
            return {
                id: pro._id,
                taskName: pro.taskName,
                content: pro.content,
                consultants: pro.consultants,
                created: pro.createdAt,
                updated: pro.updatedAt,
                date: pro.date

            }
        })
        return this.setState({
            tasks: { tasks }
        })

    }
    render() {
        const { tasks } = this.state

        const list = (
            (tasks && tasks.tasks))
            || []
        if (!tasks) { return null }
        return (

            <div className="dashboard container">
                <div className="row">
                    <div className="col s9 m6 9 darken-2">
                        <div className='container section project-details'>
                            <div className='card z-depth-0'>
                                <div className="card-content">
                                    <span className='card-title'>{this.state.title} - {this.state.id} </span>
                                    <p>{this.state.label}</p>
                                </div>
                                <div className="card-action grey lighten-4 grey-text">
                                    <div>POSTED BY {this.state.user}</div>
                                    <div>{this.state.date}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col s3 m6 9">
                        <TaskList tasks={list} />
                    </div>
                    <div>


                    </div>

                </div>

            </div>
        )
    }


}


export default ProjectDetails

