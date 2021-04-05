import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateFitEvents extends Component{
	constructor(props){
		super(props);

	this.onChangeEventname = this.onChangeEventname.bind(this);
	this.onChangeDescription = this.onChangeDescription.bind(this);
	this.onChangeDefdescription = this.onChangeDefdescription.bind(this);
	this.onChangeDuration = this.onChangeDuration.bind(this);
	this.onChangeDate = this.onChangeDate.bind(this);
	this.onChangeNoOfPeople = this.onChangeNoOfPeople.bind(this);
	this.onChangeStatus = this.onChangeStatus.bind(this);
	this.onChangeDefstatus = this.onChangeDefstatus.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			eventname: '',
			oldescription: [],
			duration: 10,
			date: new Date(),
			noOfPeople: 23,
			nstatus : [],
			status : 10,
			description : "adfds",
			defdescription: 'default',
			defstatus: '0'
		}
	}

	componentDidMount(){
		this.setState({
			eventname: 'test user',
			oldescription: ['test user','tesrt'],
			defdescription: 'default',
			nstatus: [0,1,2],
			defstatus: '0',
			noOfPeople: 25,
			status:10,
			description : "adfds"
		})
	}

	// componentDidMount(){
	// 	axios.get('http://localhost:5000/users/')
	// 	.then(response => {
	// 	  if (response.data.length > 0) {
	// 		this.setState({
	// 		  users: response.data.map(oldescription => oldescription.username),
	// 		  username: response.data[0].username
	// 		})
	// 	  }
	// 	})
	// 	.catch((error) => {
	// 	  console.log(error);
	// 	})
	// }

	onChangeEventname(e){
		this.setState({
			eventname: e.target.value
		});
	}

	onChangeDescription(e){
		this.setState({
			oldescription: e.target.value
		});
	}

	onChangeDuration(e){
		this.setState({
			duration: e.target.value
		});
	}

	onChangeDate(date){
		this.setState({
			date: date
		});
	}

	onChangeNoOfPeople(e){
		this.setState({
			noOfPeople: e.target.value
		});
	}

	onChangeStatus(e){
		this.setState({
			nstatus: e.target.value
		});
	}

	onChangeDefdescription(e){
		this.setState({
			defdescription: e.target.value
		});
	}

	onChangeDefstatus(e){
		this.setState({
			defstatus: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();

		const fitevents = {
			eventname: this.state.eventname,
			defdescription: this.state.defdescription,
			duration: this.state.duration,
			date: this.state.date,
			noOfPeople: this.state.noOfPeople,
			defstatus: this.state.defstatus,
			status: this.state.status,
			description: this.state.description

		}

		axios.post('http://localhost:5000/fit_event/add', fitevents)
      .then(res => console.log(res.data));
		console.log(fitevents);
		
		// window.location = "/";
	}


	render(){
		return(
    <div>
      <h3>Create New Sports Event</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
			<label>Eventname: </label>
			<input type="text"
				required
				className="form-control"
				value={this.state.eventname}
				onChange={this.onChangeEventname}
				/>
			</div>

        <div className="form-group"> 
          <label>Description: </label>
          <select ref="userInput"
              required
              className="form-control"
              onChange={this.onChangeDefdescription}>
              {
                this.state.oldescription.map(function(descriptionVal) {
                  return <option 
                    key={descriptionVal}
                    value={descriptionVal}>{descriptionVal}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
		<div className="form-group">
          <label>No. of people: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.noOfPeople}
              onChange={this.onChangeNoOfPeople}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
		<div className="form-group"> 
          <label>Status: </label>
          <select ref="userInput"
              required
              className="form-control"
              onChange={this.onChangeDefstatus}>
              {
                this.state.nstatus.map(function(statusVal) {
                  return <option 
                    key={statusVal}
                    value={statusVal}>{statusVal}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Sports Event" className="btn btn-primary" />
        </div>
      </form>
    </div>
    );
		
	}
}