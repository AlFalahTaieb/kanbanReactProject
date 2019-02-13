import React, {Component} from 'react'
import TaskList from '../TaskPage/TaskList'
// const ProjectDetails = (props) =>{
//     // const date = new Date(project.date).toDateString()
// let user={
//     id :props.match.params.id,
//     title: props.location.state.project['projectName'],
//     state:props.location.state.project['state'],
//     consultants:props.location.state.project['consultants'],
//     label:props.location.state.project['label'],
//     user:props.location.state.project['ScrumMasterUsername'],
//     date:new Date(props.location.state.project['date']).toLocaleString()
// }
// console.log(user)
// console.log(props)
// // console.log(props)
// if (user){
//     return (
//         <div className='container section project-details'>
//             <div className='card z-depth-0'>
//                 <div className="card-content">
//                     <span className='card-title'>{user.title} - {user.id} </span>
//                     <p>{user.label}</p>
//                 </div>
//                 <div className="card-action grey lighten-4 grey-text">
//                     <div>POSTED BY {user.user}</div>
//                     <div>{user.date}</div>
//                 </div>
//             </div>
//         </div>
//     )
// } else {
//     return (
//         <div className='container center'>
//             <p>Loading Project...</p>
//         </div>
//     )
// }
// }
class ProjectDetails extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = { 
            loading: true, 
            tasks: null }
    }
    async componentDidMount() {
        this._isMounted = true
        // let response = await fetch(`http://localhost:5001/userproject/${this.props.match.params.id}`)
        let response = await fetch(`localhost:5001/showtasks/5c607cfec27d6254c6fe0ca1`)
        let data = await response.json()
        console.log(data)
        const tasks = data.map(pro => {
            return {
                id:pro._id,
                // state: pro.state,
                taskName: pro.taskName,
                content:pro.content,
                consultants: pro.consultants,
                created: pro.createdAt,
                updated:pro.updatedAt,
                date:pro.date
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
          if (!tasks) { return null; }
        return (

            <div  className="dashboard container">
                <div className="row">
                    {/* <div className="col s14 m7 card-panel darken-2"> */}
                    <div className="col s16 m7  darken-2">
                        <TaskList  tasks={list} />
                    </div>
                    <div className="col s12 m3 offset-m1">
                    </div>

                </div>

            </div>
        )
    }


}


export default ProjectDetails

