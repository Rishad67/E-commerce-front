import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './App.scss';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CustomerCare from './Pages/CustomerCare';
import RecoverPassword from './Pages/RecoverPassword';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Products' component={Products}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Signup' component={Signup}/>
      <Route exact path='/CustomerCare' component={CustomerCare}/>
      <Route exact path='/RecoverPassword' component={RecoverPassword}/>
    </Router>
  );
}

export default App;
