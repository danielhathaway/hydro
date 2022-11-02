import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

const ToggleButtons = (props) => {

	const [value, onChangeValue] = useState(props.initialValue);
	let oddoptions = false;

	const updateField = (key) => {
    	Keyboard.dismiss();
		onChangeValue(key);
    	props.form !== undefined ? props.selectionAction(props.form, props.field, key) : props.selectionAction(props.field, key);
	}

	const buildToggles = () => {
		let toggles = props.choices.map(e => {
			return (
				<View key={ getUniqueKey() }>
					<TouchableOpacity
						style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						onPress={ () => { updateField(e.key) } }
					>
						{ value === e.key &&
							<View key={ getUniqueKey() } style={[ Styles.interactivegreenbgcolor, { alignSelf: 'stretch' } ]}>
								<Text style={[ styles.toggletext, styles.activetext ]}>
									{ e.text }
								</Text>
							</View>
						}
						{ value !== e.key &&
							<View key={ getUniqueKey() } style={[ styles.inactivebg, { alignSelf: 'stretch' } ]}>
								<Text style={[ styles.toggletext, styles.inactivetext ]}>
									{ e.text }
								</Text>
							</View>
						}
					</TouchableOpacity>
				</View>
			);
		});
		if ((toggles.length % 2) !== 0) {
			oddoptions = true;
			toggles.push(<></>);
		}
		return toggles;
	}

	let toggles = buildToggles();
	let output = [];
	for(let i = 0; i < toggles.length; i += 2) {

		let leftstyle = [styles.toggle, styles.lefttoggle];
		let rightstyle = (i === toggles.length - 2 && oddoptions) ? [styles.toggle, styles.emptytoggle] : [styles.toggle];
		for (let n = 0; n < 1; n++) { // for optimization only
			leftstyle = i === 0 ? [...leftstyle, styles.firstrowlefttoggle] : leftstyle;
			leftstyle = (toggles.count === 2 && oddoptions) ? [...leftstyle, styles.firstrowrighttoggle] : leftstyle;
			leftstyle = i === (toggles.length - 2) ? [...leftstyle, styles.lastrowlefttoggle] : leftstyle;
			leftstyle = (i === (toggles.length - 2) && oddoptions) ? [...leftstyle, styles.lastrowrighttoggle] : leftstyle;

			rightstyle = (i === (toggles.length - 2) && oddoptions) ? [...rightstyle, styles.emptytoggle] : rightstyle;
			if (i === (toggles.length - 2) && oddoptions) break; // for optimization only
			rightstyle = (i === 0 && toggles.length > 1) ? [...rightstyle, styles.firstrowrighttoggle] : rightstyle;
			rightstyle = (i === (toggles.length - 2) && !(oddoptions)) ? [...rightstyle, styles.lastrowrighttoggle] : rightstyle;
			rightstyle = (i === (toggles.length - 4) && oddoptions) ? [...rightstyle, styles.lastrowrighttoggle] : rightstyle;
		}

		output.push(
			<View key={ getUniqueKey() } style={{
				flexDirection: 'row',
				justifyContent: 'center',
			}}>
				<View style={ leftstyle }>
					{ toggles[i] }
				</View>
				{ (!(oddoptions) || i < toggles.length - 1) &&
					<View style={ rightstyle }>
						{ toggles[i + 1] }
					</View>
				}
			</View>
		);
	}

	return (
		<View style={ styles.groupcontainer }>
			{ props.label !== undefined &&
				<Text style={ styles.inputlabel }>{ props.label }</Text>
			}
			<View style={ styles.togglescontainer }>
				{ output }
			</View>
		</View>
	);

}

const styles = StyleSheet.create({
	groupcontainer: {
		marginTop: 10,
	},
	inputlabel: {
		marginBottom: 10,
		fontSize: 16,
	},
	togglescontainer: {
		borderRadius: 5,
	},
	toggle: {
		flex: 1,
		overflow: 'hidden',
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderColor: '#cccccc',
	},
	emptytoggle: {
		borderColor: 'transparent',
	},
	lefttoggle: {
		borderLeftWidth: 1,
	},
	firstrowlefttoggle: {
		borderTopLeftRadius: 5,
	},
	firstrowrighttoggle: {
		borderTopRightRadius: 5,
	},
	lastrowlefttoggle: {
		borderBottomLeftRadius: 5,
		borderBottomWidth: 1,
	},
	lastrowrighttoggle: {
		borderBottomRightRadius: 5,
		borderBottomWidth: 1,
	},
	toggletext: {
		padding: 7,
		textAlign: 'center',
	},
	activetext: {
		color: '#ffffff',
	},
	inactivetext: {
		color: '#555555',
	},
	inactivebg: {
		//backgroundColor: '#edf4ff',
		backgroundColor: 'transparent',
	},
});

export default ToggleButtons;
