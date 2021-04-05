import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {stylePath: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'};
        this.state1 = {stylePath1: 'https://bootswatch.com/4/journal/bootstrap.min.css'};
        this.state2 = {scriptPath2: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'};
        this.state3 = {scriptPath3: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'};
        this.state4 = {scriptPath4: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'};
      }
    render(){
        return(
            // <style>
            //     .navbar-brand{{backgroundColor: '#b41c0d'}}
            // </style>
            <div id='navigation'>
                <link rel="stylesheet" href={this.state.stylePath} />
                <link rel="stylesheet" href={this.state1.stylePath1} />
                
                <script src={this.state2.scriptPath2} />
                <script src={this.state3.scriptPath3} />
                <script src={this.state4.scriptPath4} />
            <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#b41c0d'}} >
                <Link to="/" className="navbar-brand" >Sports Events tracker</Link>
                <div className="collpase navbar-collapse" id="barnav">
                <ul className="navbar-nav mr-auto" id="hrefs" >
                	<li className="navbar-item">
                		<Link to="/" className="nav-link">Sports Events</Link>
                	</li>
                	<li className="navbar-item">
                		<Link to="/create" className="nav-link">Create Sports Event</Link>
                	</li>
                	{/* <li className="navbar-item">
                		<Link to="/user" className="nav-link">Create User</Link>
                	</li> */}
                    <li className="navbar-item">
                		<Link to="/register/users" className="nav-link">Register User</Link>
                	</li>
                </ul>
                </div>                
            </nav>
            </div>
        );
    }
}
