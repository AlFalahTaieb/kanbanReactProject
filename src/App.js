import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CreateProject from './components/Projects/CreateProject'
import ProjectDetails from './components/Projects/ProjectDetails'
import SignIn from './components/auth/SignIn';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            {/* <Route path="/project/:id" render={(props) => <ProjectDetails projects={this.location} {...props} />} /> */}
            <Route exact path="/" component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={CreateProject} />
            {/* <Route path="/" component={Project}/> */}
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
