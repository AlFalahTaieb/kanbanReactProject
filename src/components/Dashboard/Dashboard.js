import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'

class Dashboard extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = { 
            loading: true, 
            projects: null }
    }




    async componentDidMount() {
        this._isMounted = true
        // let response = await fetch(`http://localhost:5001/userproject/${this.props.match.params.id}`)
        let response = await fetch(`http://localhost:5001/userproject/5c474878b042e466defc15a2`)
        let data = await response.json()
        console.log(data)
        const projects = data.map(pro => {
            return {
                id:pro._id,
                state: pro.state,
                projectName: pro.projectName,
                consultants: pro.consultants,
                ScrumMasterUsername: pro.scrumMaster.username,
                ScrumMasterId:pro.scrumMaster._id
            }
        })
        return this.setState({
            projects: { projects }
        })
        
    }


    render() {
        const { projects } = this.state

        const list = (
            (projects && projects.projects))
            || []
          if (!projects) { return null; }
        return (

            <div  className="dashboard container">
                <div className="row">
                    {/* <div className="col s14 m7 card-panel darken-2"> */}
                    <div className="col s16 m7  darken-2">
                        <ProjectList  projects={list} />
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <Notifications />
                    </div>

                </div>

            </div>
        )
    }

}
//  

export default Dashboard