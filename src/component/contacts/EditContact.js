import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';
import axios from 'axios';

class EditContact extends Component{

	state = {
		name: ' ',
		email:' ',
		phone: ' '

	}

	// componentDidMount(){
	// 	const {id} = this.props.match.params;
	// 	const res = axios.get(`https:jsonplaceholder.typicode.com/users/${id}`);

	// 	const contact = res.data;
	// 	this.setState({
	// 		name:contact.name,
	// 		email:contact.email,
	// 		phone:contact.phone
	// 	})
	// }

	componentDidMount(){
		console.log('test');
		axios.get('https:jsonplaceholder.typicode.com/users')
			.then(res => this.setState({ contacts : res.data }));
	}

	onsubmit = (dispatch , e) => {
		e.preventDefault();
		
		 const { name , email , phone } = this.state;
		
		 // to reset the form
		 this.setState({
		 	name:'',
		 	emil:'',
		 	phone:''
		 });

		 this.props.history.push('/'); // redirects to the homepage when added
	}


	onchange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name] : e.target.value });
	}

	render(){
		const { name, email, phone } = this.state;	

		return(
			<Consumer>
				{ value => {
					const{ dispatch } = value;
					return(
						<div className="card mb-3">
							<div className='card-header'>Edit Contact </div>
							<div className="card-body">
								<form onSubmit = { this.onsubmit.bind( this,dispatch)} >
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name"
										value={name}
										onchange={this.onchange}
									/>

									<TextInputGroup
										label="Email"
										type = "email"
										name="email"
										placeholder="Enter Email"
										value={email}
										onchange={this.onchange}
									/>

									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter PHone"
										value={phone}
										onchange={this.onchange}
									/>

									<input 
										type="submit" 
										value="Update CONTACT"
										className="btn btn-light btn-block"							
										/>
								</form>
							</div>	
						</div>
					)
				}}
			</Consumer>
			)
	}
}

export default EditContact;

