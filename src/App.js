import React from 'react';  
import LoginForm from './components/loginPage';
import Dashbord from './components/dashbord';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
      <BrowserRouter>
      <Switch>
      <Route exact={true} path="/" component = {LoginForm} />
      <Route exact={true} path="/dashbord" component= {Dashbord} />
      </Switch>
      </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;