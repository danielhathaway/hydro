import React, { Component } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import Styles from '../../styles/Styles';

class HeaderAddPoolSaveButton extends Component {

	constructor(props) {
		super(props);
		this.hydro = this.props.hydro;
	}

	render() {
		return (
	        <TouchableOpacity
	            onPress={() => {
					// Save data here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					// Navigate to previous page here !!!!!!!!!!!!!!!!!!!!!!!!!!!!
	            }}
	            style={ Styles.headerbtn }
	        >
	            <Text style={ Styles.headerbtntxt }>
	                Save
	            </Text>
	        </TouchableOpacity>
	    );
	}
}

export default HeaderAddPoolSaveButton;
