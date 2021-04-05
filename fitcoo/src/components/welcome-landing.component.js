import React, { Component } from 'react';
import axios from 'axios';
export default class LoginForm extends Component{
	constructor(props){   
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);

		this.onChangeEmailid = this.onChangeEmailid.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeExtra = this.onChangeExtra.bind(this);
		this.onChangeStatus = this.onChangeStatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
			username: '',
			emailid: '',
			password: '',
			extra:'',
			status:''
		}
	}

	onChangeUsername(e){
		this.setState({
			username: e.target.value
		})
	}

	onChangeEmailid(e){
		this.setState({
			emailid: e.target.value
		})
	}

	onChangePassword(e){
		this.setState({
			password: e.target.value
		})
	}

	onChangeExtra(e){
		this.setState({
			extra: e.target.value
		})
	}

	onChangeStatus(e){
		this.setState({
			status: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();

		const users = {
			username: this.state.username,
			emailid: this.state.emailid,
			password: this.state.password,
			extra: this.state.extra,
			status: this.state.status

		}
		console.log(users);
		
		// axios.post('http://localhost:5000/users_coll/add', users)
		// 	.then(res => console.log(res.data));

		this.setState({
			username: '',
			emailid: '',
			password: '',
			extra: '',
			status: '',
			
		})

		//window.location = "/";
	}


	render(){
		return(
			<div>
				<h3>Welcome to Fitcoo, an app for tracking Sports Events</h3>
				{/* <form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Username:</label>
					<input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input type="text" required className="form-control" value={this.state.emailid} onChange={this.onChangeEmailid} />
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input type="text" required className="form-control" value={this.state.password} onChange={this.onChangePassword} />
				</div>
				<div className="form-group">
					<label>Extra:</label>
					<input type="text" required className="form-control" value={this.state.extra} onChange={this.onChangeExtra} />
				</div>
				<div className="form-group">
					<label>Status:</label>
					<input type="text" required className="form-control" value={this.state.status} onChange={this.onChangeStatus} />
				</div>
				<div className="form-group">
					<input type="submit" value="Create User" className="btn btn-primary" />
				</div>
				</form> */}
			</div>
		);
		
	}
}