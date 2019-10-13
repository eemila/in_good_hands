import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 
import LogOut from './components/LogOut'; 
import NotFound from "./components/LandingPage/NotFound"; 

class App extends Component{
  render(){
    return (
      
      <HashRouter>
        
        <Switch>

          <Route exact path="/" component={LandingPage} />
          <Route path="/logowanie" component={SignIn} />
          <Route path="/rejestracja" component={SignUp} />
          <Route path="/wylogowano" component={LogOut} />
          <Route component={NotFound} />

        </Switch>
        
      </HashRouter>    
    )
  }
}
  

export default App;
