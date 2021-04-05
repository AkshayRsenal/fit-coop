import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FitEvents = props =>(
	<tr>
		<td>{props.fitevents.eventname}</td>
		<td>{props.fitevents.description}</td>
		<td>{props.fitevents.numOfPeople}</td>
		<td>{props.fitevents.duration}</td>
		<td>{props.fitevents.date.substring(0,10)}</td>
		<td>{props.fitevents.status}</td>
		<td>
			<Link to={"/edit/"+props.fitevents._id}>edit</Link> | <a href="##" onClick={() => { props.deleteFitnessEvent(props.fitevents._id) }}>delete</a>
		</td>
	</tr>
)

export default class FiteventsList extends Component{
	constructor(props){
		super(props);

		this.deleteFitnessEvent = this.deleteFitnessEvent.bind(this);
		this.state = {fitevents:[]};
	}


	componentDidMount(){
		axios.get('http://localhost:5000/fit_event/')
		.then(response => {
			this.setState({ fitevents: response.data })
		})
		.catch((error) => {
			console.log(error);
		})
	}

	deleteFitnessEvent(id){
		axios.delete('http://localhost:5000/fit_event/'+id)
		.then(res => console.log(res.data));
		this.setState({
			fitevents: this.state.fitevents.filter(el => el._id !== id)
		})
	}

	FitEventsList(){
		return this.state.fitevents.map(currentfitevent => {
			return <FitEvents fitevents={currentfitevent} deleteFitnessEvent ={this.deleteFitnessEvent} key={currentfitevent._id} />
		})
	}


	render(){
		return(
			<div>
				<h3>Current Fitness Events</h3>
				<table className="table">
				<thead className="thead-light">
					<tr>
					<th>Eventname:</th>
					<th>Description:</th>
					<th>No Of People:</th>
					<th>Duration (in minutes):</th>
					<th>Date:</th>
					<th>Status:</th>
					<th>Actions:</th>
					</tr>
				</thead>
				<tbody>
					{ this.FitEventsList() }
				</tbody>
				</table>
			</div>
		);
		
	}
}