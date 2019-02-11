import React, { Component } from 'react'

class CreateProject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            state: '',
            consultants: [],
            projectName: '',
            scrumMaster: '',
            label: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit = async e => {
        e.preventDefault()
      /*  const response = await fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectName: this.state.projectName, label: this.state.label }),
        })
        const body = await response.text()
        this.setState({ responseToPost: body })
        */
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { projectName, label, submitted} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Project Name: {this.state.projectName} </h5>
                    <div className={'input-field' + (submitted && !projectName ? ' has-error' : '')}>
                        <label htmlFor="projectName">TITLE</label>
                        <input type="text" id="projectName" className="blue-text text-darken-2" onChange={this.handleChange} />
                        {submitted && !projectName &&
                            <div className="help-block">Project Name is required</div>
                        }
                    </div>
                    <div className="input-field">
                        <label htmlFor="label">Project Label</label>
                        <textarea id="label" cols="30" rows="10" className="materialize-textarea blue-text text-darken-2" onChange={this.handleChange} />
                        {submitted && !label &&
                            <div className="help-block">Label is required</div>
                        }
                    </div>
                    <div className="input-field">
                        <button className='btn green lighten-1 z-depth-0'>Submit</button>
                    </div>
                </form>
                {/* The user is <b>{this.state.responseToPost ? 'currently' : 'not'}</b> logged in. */}

      </div>
        )
    }
}

export default CreateProject
