import React, { Component } from 'react';
import axios from 'axios';
export default class AdminLoginForm extends Component{
	constructor(props){   
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);

		this.onChangeEmailid = this.onChangeEmailid.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		// this.onChangeExtra = this.onChangeExtra.bind(this);
		// this.onChangeStatus = this.onChangeStatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
			username: '',
			emailid: '',
			password: '',
			extra:'',
			status:'1'
		}
    }

    componentDidMount(){
		axios.get('http://localhost:5000/users_coll/')
		.then(response => {
            this.setState({ users: response.data })
            
		    console.log(this);
		})
		.catch((error) => {
			console.log(error);
		})
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

	// onChangeExtra(e){
	// 	this.setState({
	// 		extra: e.target.value
	// 	})
	// }

	// onChangeStatus(e){
	// 	this.setState({
	// 		status: e.target.value
	// 	})
	// }

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
			status: '1',
			
		})

		//window.location = "/";
	}


	render(){
		return(
			<div>
				
            <div class="row mt-5">
            <div class="col-md-6 m-auto">
              <div class="card card-body">
                <h1 class="text-center mb-3">
                  <i class="fas fa-user-plus"></i> Login Admin
                </h1>
                {/* <h3>Registration Form</h3> */}
				<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Username:</label>
					<input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
				</div>
				<div className="form-group">
					<label>E-mail Id:</label>
					<input type="text" required className="form-control" value={this.state.emailid} onChange={this.onChangeEmailid} />
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input type="password" required className="form-control" minlength="6" value={this.state.password} onChange={this.onChangePassword} />
				</div>
				{/* <div className="form-group">
					<label>Extra:</label>
					<input type="text" required className="form-control" value={this.state.extra} onChange={this.onChangeExtra} />
				</div> */}
				{/* <div className="form-group">
					<label>Status:</label>
					<input type="text" required className="form-control" value={this.state.status} onChange={this.onChangeStatus} />
				</div> */}
				<div className="form-group">
					<input type="submit" value="Create User" className="btn btn-primary" />
				</div>
				</form>
                {/* <p class="lead mt-4">Have An Account? <a href="/users/login">Login</a></p> */}
              </div>
            </div>
          </div>
			</div>

          
		);
		
	}
}