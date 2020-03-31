import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import Header from './component/layout/Header.js';
import About from './component/pages/About.js';
import NotFound from './component/pages/NotFound.js';
import Contacts from './component/contacts/Contacts.js';
import AddContact from './component/contacts/AddContact.js';
import EdiContact from './component/contacts/EditContact.js';
import Test from './component/Test.js';
import { Provider} from './context'; 

function App() {

  return (
  	<Provider>
  		<Router>
		    <div className="App">
		      	<Header branding='Contact Manager'/>
		      	<div className="Container">
		      		<Switch>
		      			<Route exact path="/" component={ Contacts }/>
		      			<Route exact path="/contact/add" component={ AddContact }/>
		      			<Route exact path="/contact/edit/:id" component={ AddContact }/>
		      			<Route exact path="/about" component={ About }/>
		      			<Route exact path="/test" component={ Test }/>
		      			<Route component={ NotFound }/>
		      		</Switch>			    
		      	</div>	      
		    </div>
	    </Router>
    </Provider>
  );
}

export default App;
