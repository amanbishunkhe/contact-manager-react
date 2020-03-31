import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Consumer } from '../../context'; // in order to acces the state from context
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends React.Component{
	state ={
		showContactInfo : false 
	}
	onShowCLick = e =>{
		this.setState({
			showContactInfo: !this.state.showContactInfo
		}) ;
	}

	onDeleteClick = (id,dispatch) =>{

		axios.delete(`https:jsonplaceholder.typicode.com/users/${id}`)
				.then(res=>dispatch({ type : 'DELETE_CONTACT', payload: id}));	
				// this delete is to json Placeholder api	

		//dispatch({ type : 'DELETE_CONTACT', payload: id})
	}

	render(){
		const { id,name, email, num } 	= this.props; // if destructuring from props
		const { showContactInfo } 	=	this.state;// if destructuring from state 

		return(
			<Consumer>
				{value=>{
					const { dispatch } = value;
						return(
							<div>
								<h4>Name : {name} 
									<i onClick={this.onShowCLick} className="fa fa-sort-down"></i>
									<Link to={`contact/edit/${id}`}>
										<i className="fas.fa-pencil-alt"
											style={{cursor:'pointer',float:'right',
													color:'black', marginRight:'1rem'}}
											>edit</i>
									</Link>
									<i onClick = { this.onDeleteClick.bind(this,id,dispatch)}
										className="fa fa-arrows" 
										style={{cursor : 'pointer' , color:'red'}}>											
									</i>

								</h4>
								{
									showContactInfo ? (	<ul>					
															<li>Email : {email}</li>
															<li>Number : {num}</li>
														</ul>):null
								}							
							</div>
						)
					}
				}

			</Consumer>
			
			)
	}
}
Contact.propTypes = {
	name : PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	num : PropTypes.string,	
}
// proptypes can also be kept inside class

export default Contact;