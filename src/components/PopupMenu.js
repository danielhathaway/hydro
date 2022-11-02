import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import getUniqueKey from './getUniqueKey';
import Styles from '../styles/Styles';

class PopupMenu extends Component {

	constructor(props) {
		super(props);
		this.options = this.props.options === undefined ? [] : this.props.options;
		this.triggertext = this.props.triggertext === undefined ? 'Popup Menu' : this.props.triggertext;
	}

	render() {

		let output =  this.options.map((e, n) => {
			return (
				<MenuOption key={ e.key } value={ e.key }>
					<Text style={{ padding: 3 }}>{ e.text }</Text>
				</MenuOption>
			);
		});


		return (
			<Menu onSelect={value => alert(`Value : ${value}`)}>
				<MenuTrigger>
					<Text style={Styles.interactivebluecolor}>{ this.triggertext }</Text>
				</MenuTrigger>
				<MenuOptions>
					{ output }
				</MenuOptions>
			</Menu>
		);
	}
}

export default PopupMenu;
