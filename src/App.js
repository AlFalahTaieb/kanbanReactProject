import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CreateProject from './components/Projects/CreateProject'
import ProjectDetails from './components/Projects/ProjectDetails'
import Login from './components/auth/Login'

class App extends Component {

  // render() {
  //   return (

  //     <BrowserRouter>
  //       <div className="App">
  //         <Navbar />

  //         <Switch>
  //           {/* <Route path="/project/:id" render={(props) => <ProjectDetails projects={this.location} {...props} />} ></Route> */}

  //           <Route exact path="/" render={() => <Redirect to="/signin" />} />
  //           <Route exact path="/dashboard" component={Dashboard} />
  //           <Route path='/project/:id' component={ProjectDetails} />
  //           <Route path='/signin' component={SignIn} />
  //           <Route path='/create' component={CreateProject} />
  //         </Switch>

  //       </div>
  //     </BrowserRouter>
  //   )
  // }
  render() {
    const LoginContainer = () => (

      <div >
        <Navbar />

        {/* <Route exact path="/" render={() => <Redirect to="/" />} /> */}
        <Route path='/' component={Login} />
      </div>
    )


    const DefaultContainer = () => (
      <div>
        {/* <Header toggleAlert={this.toggleAlert} /> */}
        <div>
        <Navbar />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route path='/project/:id' component={ProjectDetails} /> */}
          <Route path="/project/:id" render={(props) => <ProjectDetails projects={this.location} {...props} />} ></Route>
          {/* <Route path='/signin' component={SignIn} /> */}
          <Route path='/create' component={CreateProject} />

        </div>
      </div>
    )
    return (
      < BrowserRouter >
        {/* <div className="App"> */}

        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route component={DefaultContainer} />


        </Switch>
        {/* </div> */}
      </BrowserRouter >)

  }
}


export default App
