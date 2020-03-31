import React,{ Component} from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component{
	render(){
		return(
				<Consumer>
					{ value => { 
						const { contacts } = value;
						return(
							<React.Fragment>
								<h1>Contact List</h1>
								{ contacts.map(contact => (
									<Contact  id ={contact.id} 
									 name = {contact.name} 
									 email={contact.email} 
									 num={contact.phone}/>
									// here deleteClickHandler is called from the contacts
									// js just like contact.id but it is event
									))}								
							</React.Fragment>
						)
					}}
				</Consumer>
			)
	}
}

export default Contacts;