import React, { Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) =>{
	switch( action.type ){
		case 'DELETE_CONTACT' : 
			return{
				...state, // ... is a spread operator
				contacts : state.contacts.filter( contact => contact.id !== action.payload)
			}

		case 'ADD_CONTACT' : 
			return{
				...state,
				contacts : [action.payload , ...state.contacts]
			}
				
		default : 
			return state;	
	}
}

export class Provider extends Component{
	state = {
		contacts:[],

		dispatch : action => { this.setState( state => reducer( state,action)) }
	}

	componentDidMount(){
		axios.get('https:jsonplaceholder.typicode.com/users')
			.then(res => this.setState({ contacts : res.data }));
	}
	// above function extracts all the user from the urls and set values the contacts array varaible

	render(){
		return(
				<Context.Provider value = {this.state}>
					{this.props.children}
				</Context.Provider>
			)
	}
}

export const Consumer = Context.Consumer;