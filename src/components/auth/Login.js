import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            id: '',
            responseToPost: '',
            loggedIn: '',
            token: '',
            loading: false,
            fireRedirect: false,
            submitted: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch("/login", {
            method: 'POST',
            async: false,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password, user_id: this.state.id }),
        })
        const body = await response.text()

        if (body === '') {
            return console.error('eror')
        } else {
            const test = JSON.parse(body)
            console.log('hey this is the token:' + test.token)
            localStorage.setItem('TOKEN_KEY', test.token) //Persist
            document.cookie = test.token
            console.log(localStorage)
            return this.setState({ responseToPost: body, token: test.token, loggedIn: true, fireRedirect: true, userId: test.user['_id'] })

        }


    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        const { from } = this.props.location.state || '/'
        const { username, password, submitted, fireRedirect} = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3 center">Log In</h5>
                    <div className={'input-field' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="blue-text text-darken-2" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" className=" blue-text text-darken-2" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                        {submitted && !password &&
                            <div className="help-block text-lighten">Password is required</div>
                        }
                    </div>
                    <div className="input-field">
                        <button className='btn green lighten-1 z-depth-0'>Submit</button>
                    </div>
                </form>
                {/* <div className="help-block">
                    {this.state.responseToPost? <p>{this.state.responseToPost}</p>:null}
                </div> */}
                {/* The user is <b>{this.state.responseToPost ? 'Currently' : 'not'}</b> logged in. */}

                <div className="card-panel green lighten-2 center">The user is <b>{this.state.token === '' ? '👎' : '👍'}</b> logged in.</div>
                <br />

                <div className="card-panel green lighten-2 center">Is this User Logged : {this.state.loggedIn ? '👍' : '👎'}</div>
                {fireRedirect && (
                    <Redirect to={{ pathname: from || '/dashboard', state: { token: this.state.token, userId:this.state.userId } }} />
                )}
            </div>

        )
    }
}

export default Login
