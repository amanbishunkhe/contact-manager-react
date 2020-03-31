import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({ label,type,name,value,placeholder,onchange }) => {

    return (
        <div className="form-group">
			<label htmlfor={name}>{label}</label>
			<input 
				type={type}
				name={name}
				className="form-control form-control-lg"
				placeholder = {placeholder}
				value = { value }
				onChange = {onchange}
				/>
		</div>
    );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
