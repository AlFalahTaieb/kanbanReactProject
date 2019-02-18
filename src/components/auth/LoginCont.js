import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class LoginCont extends Component {
    constructor(props) {
      super(props)
  
      if (props.user) {
        alert("You can't login if you are logged in!")
        props.history.push('/dashboard')
      }
    }
  
    render() {
      return <Login />;
    }
  }
  
  export default withRouter(LoginCont)