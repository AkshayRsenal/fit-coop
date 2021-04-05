import React from 'react';
import{ BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import FitEventsList from "./components/fitevents-list.component";
import EditFitEvents from "./components/edit-fitevents.component";
import CreateFitEvents from "./components/create-fitevents.component";
import CreateUsersColl from "./components/create-users.component";

import LoginForm from "./components/login-users.component";
import AdminLoginScreen from "./components/admin-login.component";

import RegUsers from "./components/reg-users.component";
import WelcomeScreenLand from "./components/welcome-landing.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
        <br/>
        <Route path="/" exact component={FitEventsList} />
        <Route path="/edit/:id" exact component={EditFitEvents} />
        <Route path="/create" exact component={CreateFitEvents} />
        <Route path="/user" exact component={CreateUsersColl} />

        <Route path="/auth/login" exact component={LoginForm} />
        <Route path="/auth/admin_login" exact component={AdminLoginScreen} />


        <Route path="/register/users" exact component={RegUsers} />
        <Route path="/landing" exact component={WelcomeScreenLand} />


      </div>
    </Router>
    
  );
}

export default App; 
