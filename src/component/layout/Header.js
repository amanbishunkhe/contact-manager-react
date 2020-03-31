import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = ( props ) => {
	const {branding} = props;
    return (
        <div  className="header">
        	<h1 style={headerstyle} >{branding}</h1>
        	<ul className="Navbar">
        		<li className="nav-item">
        			<Link to="/"> Home </Link>
        		</li>
        		<li className="nav-item">
        			<Link to="/contact/add"> Add </Link>
        		</li>
        		<li className="nav-item">
        			<Link to="/about"> About </Link>
        		</li>
        	</ul>
        	        	
        </div>
    );
};


Header.defaultProps = {
	branding : 'Default Contact Manager'
}

Header.propTypes = {
	branding : PropTypes.string.isRequired
}

const headerstyle = {
	color: 'green',
	fontSize: '50px'
}

export default Header;
