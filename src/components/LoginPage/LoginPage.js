import React, { Component } from 'react';
// import logo from './logo.svg';
import './login.css';

// const signup = "/signup"


class Login extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        username: '',
        password: '',
        responseToPost: '',
        loading:false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  
    }
    handleSubmit = async e => {
      e.preventDefault()
      const response = await fetch("/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.username }),
      })
      const body = await response.text()
      console.log(this.state.username)
      console.log(this.state.password)
      this.setState({ responseToPost: body })
    }
  
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value })
    }
  
    render() {
      const { username, password, submitted, loading, error } = this.state;
      return (
        
        <div className="col-md-5
         col-md-offset-3">
          <div className="alert alert-info">
            Username: YourUsername<br/>
            Password: YourPassword
                  </div>
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
              {submitted && !username &&
                <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={loading}>Login</button>
              {loading &&
                <img src="https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fthumbs.gfycat.com%2FQuerulousSecondaryEasternglasslizard-max-1mb.gif&sp=77f66ff46503cd5b4c2d1166c4c36ddb&t=default" />
              }
            </div>
            {error &&
              <div className={'alert alert-danger'}>{error}</div>
            }
          </form>
  
          {/* { <p>{this.state.responseToPost} </p> } */}
          The user is <b>{this.state.responseToPost ? 'currently' : 'not'}</b> logged in.
        </div>
  
        
      )
    }
  }
  
  export default Login
  