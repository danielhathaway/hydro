import React, { Component } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Styles from '../../styles/Styles';

class HeaderMenuButton extends Component {

	constructor(props) {
		super(props);
		this.drawernav = this.props.drawernav;
	}

	render() {
		return (
	        <TouchableOpacity
	            onPress={() => {
					this.drawernav.openDrawer();
	            }}
	            style={ Styles.headerbtn }
	        >
	            <Text style={ Styles.headerbtntxt }>
	                Menu
	            </Text>
	        </TouchableOpacity>
	    );
	}
}

export default HeaderMenuButton;
