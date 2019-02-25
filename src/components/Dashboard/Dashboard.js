import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'


class Dashboard extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        console.log('Yooo         ' + props.location.state.token)
        console.log(props.location.state.userId)
        this.state = {
            token: props.location.state.token,
            user_id: props.location.state.userId,
            loading: true,
            projects: null
        }
    }




    async componentDidMount() {
        this._isMounted = true
        if (this.loggedIn()) {

            let response = await fetch(`http://localhost:5001/userproject/${this.state.user_id}`)
            // let user = await fetch('http://localhost:5001/me', {
            //     method: "GET",
            //     // body: JSON.stringify(''),
            //     headers: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTAzMWNiNjk3NWVjMDQxMjJjNmVjOCIsImlhdCI6MTU1MDUxNDQ2OCwiZXhwIjoxNTUwNjAwODY4fQ.jKDAOBKYr2YVJ_IUQBq8ZrkGsYghvsr2v3PP9BSaXLo'
            //   }).then(()=> {
            // let response = await fetch(`http://localhost:5001/userproject/5c474878b042e466defc15a2`)
            let data = await response.json()
            // let meToken = await user.json()
            // console.log(meToken)
            console.log(data)
            const projects = data.map(pro => {
                return {
                    id: pro._id,
                    state: pro.state,
                    projectName: pro.projectName,
                    label: pro.label,
                    consultants: pro.consultants,
                    ScrumMasterUsername: pro.scrumMaster['username'],
                    ScrumMasterId: pro.scrumMaster._id,
                    date: pro.date
                }
            })
            return this.setState({
                projects: { projects }
            })
        }
    }


    /*
    
        async componentWillMount() {
            Promise.all([fetch('http://localhost:5001/me', { //url1
                method: "GET",
                // body: JSON.stringify(''),
                headers: this.state.token
            }), fetch('http://localhost:5001/userproject/5c5031cb6975ec04122c6ec8')])
    
                .then(([response, response2]) => Promise.all([response.json(), response2.json()])
                    .then(([response, response2]) => {
                        console.log('ZAAAAAAAAAAB')
                        console.log(response)
                        console.log(response2)
                        const data = response
                        const meToken = response2
                        const projects = data.map(pro => {
                            return {
                                id: pro._id,
                                state: pro.state,
                                projectName: pro.projectName,
                                label: pro.label,
                                consultants: pro.consultants,
                                ScrumMasterUsername: pro.scrumMaster['username'],
                                ScrumMasterId: pro.scrumMaster._id,
                                date: pro.date
                            }
                        })
                        console.log(data)
                        console.log(meToken)
                        return this.setState({
                            projects: { projects }
                        })
                    })
    
                )
        }*/

    getToken() {
        return localStorage.getItem('TOKEN_KEY')
    }
    loggedIn() {
        const token = this.getToken()
        return token || this.state.token
    }

    /*   async componentWillMount() {
           this._isMounted = true
           const myHeaders = new Headers()
   
            myHeaders.append('Content-Type', 'application/json');
           myHeaders.append('Authorization', `Bearer ${localStorage.getItem('TOKEN_KEY')}`)
          
           let user = await fetch('http://localhost:5001/me', {
               method: "GET",
               // withCredentials: true,
               // credentials: 'include',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + this.state.token,
                   Cache: 'no-cache'
               },
   
           })
   
           let meToken = await user.json()
           console.log('iThe Token ' + this.state.token)
           console.log(meToken)
   
       }
   */


    render() {
        const { projects } = this.state

        const list = (
            (projects && projects.projects))
            || []
        if (!projects) { return null; }
        return (

            <div className="dashboard container">
                <div className="row">
                    {/* <div className="col s14 m7 card-panel darken-2"> */}
                    <div className="col s16 m7  darken-2">
                        <ProjectList projects={list} />
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