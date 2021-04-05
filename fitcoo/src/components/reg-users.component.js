import React, { Component } from 'react';
import axios from 'axios';
export default class RegUsersForm extends Component{
	constructor(props){   
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);

		this.onChangeEmailid = this.onChangeEmailid.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeExtra = this.onChangeExtra.bind(this);
		// this.onChangeStatus = this.onChangeStatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
			username: '',
			emailid: '',
			password: '',
			extra:'admin',
			status:'1'
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

	// onChangeStatus(e){
	// 	this.setState({
	// 		status: e.target.value
	// 	})
	// }

    // componentDidMount(){
    //     axios.post('http://localhost:5000/auth_user/'+this.props.match.params.emailid)
    //     .then(response => {
    //         this.setState({
    //             returnmsg: response.returnmsg
    //         })
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })

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
		
		axios.post('http://localhost:5000/auth_register/checkemail',users)
			.then(res => {
				if(res.data==='already--exists'){
					document.getElementById("alerter").innerHTML = '<div class="alert alert-danger alert-dismissible fade show"  } id="email_taken" role="alert"><p>Email already exists</p></div>';

					
				}else if(res.data==='doesnot--exist'){
					axios.post('http://localhost:5000/users_coll/add', users)
					.then(console.log(res));
				}
			})
			// .catch(function(error){
			// 	console.log(error);
			// })
		
		

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
			{/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>	 */}
            <div class="row mt-5">
            <div class="col-md-6 m-auto">
              <div class="card card-body">
                <h1 class="text-center mb-3">
                  <i class="fas fa-user-plus"></i> Register
                </h1>
                {/* <h3>Registration Form</h3> */}
				<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Username:</label>
					<input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
				</div>
				<div className="form-group">
					<label>E-mail Id:</label>
					<input type="email" required className="form-control" value={this.state.emailid} onChange={this.onChangeEmailid} />
				</div>
				{/* <div><input type="text" value={this.state.msg}  /> </div>	 */}
				<div id="alerter"> </div>	
				<div className="form-group">
					<label>Password:</label>
					<input type="password" required className="form-control" minlength="6" value={this.state.password} onChange={this.onChangePassword} />
				</div>
				<div className="form-group">
					<label>Extra:</label>
					<input type="text" required className="form-control" value={this.state.extra} onChange={this.onChangeExtra} />
				</div>
				{/* <div className="form-group">
					<label>Status:</label>
					<input type="text" required className="form-control" value={this.state.status} onChange={this.onChangeStatus} />
				</div> */}
				<div className="form-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
				</div>
				</form>
                <p class="lead mt-4">Have An Account? <a href="/auth/login">Login</a></p>
              </div>
            </div>
          </div>
			</div>

          
		);
		
	}
}