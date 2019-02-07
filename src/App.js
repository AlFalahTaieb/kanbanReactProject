import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router, Route, Switch } from 'react-router-dom'

import Login from './components/LoginPage/LoginPage'

class App extends Component{
  render(){
    return (

      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>

      </div>
      </BrowserRouter>
    )
  }
}

export default App
