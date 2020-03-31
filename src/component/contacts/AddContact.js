import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component{

	state = {
		name: ' ',
		email:' ',
		phone: ' '

	}

	onsubmit = (dispatch , e) => {
		e.preventDefault();
		
		 const { name , email , phone } = this.state;
		
		 const newContact = {
			//id: 4, // here trying to use uuid package as id:uuid() , but error so static id is used
			name, email, phone
		};

		axios.post('https:jsonplaceholder.typicode.com/users',newContact)
				.then(res=>dispatch ({type:'ADD_CONTACT', payload:res.data}));

		//console.log(newContact);
		// dispatch ({type:'ADD_CONTACT', payload:newContact});

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
							<div className='card-header'>Add Contact </div>
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
										value="ADD CONTACT"
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

export default AddContact;

