import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            id: '',
            responseToPost: '',
            loading: false,
            submitted:true
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
    
        // console.log(body === '')
        if (body === '') {
            console.log('errrrooooor')
        } else {
            const test = JSON.parse(body)
            console.log(this.state.username)
            console.log(test.token)
            this.setState({ responseToPost: body, token: test.token })
        }


    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        const { username, password, submitted } = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
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
                The user is <b>{this.state.responseToPost ? 'currently' : 'not'}</b> logged in.
                {/* <p>{this.state.token}</p> */}
                <br/>
                

                <div className="card-panel teal lighten-2">The user is <b>{this.state.responseToPost==='' ? 'zaaaaaaaaaaaab' : 'not'}</b> logged in.</div>
                
            </div>
        )
    }
}

export default SignIn
