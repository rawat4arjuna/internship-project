import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './screen/login'
import Signup from './screen/signup'
import Email_verification from './screen/email_verification'
import Select_Interest from './screen/select_interest'
function  RoutePage (){
  return <div className="App">
<Router>
<Switch>
<Route exact path="/"  component={Login} />
<Route path="/Signup"  component={Signup} />
<Route path="/Auth" component={Email_verification} />
<Route path = "/select-interest" component = {Select_Interest}/>
</Switch>
</Router>
</div>}

export default function App(){
  return <RoutePage/>
};
