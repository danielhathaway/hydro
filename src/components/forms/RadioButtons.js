import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

const RadioButtons = (props) => {

	const [value, onChangeValue] = useState(props.initialValue);
	let oddoptions = 0;

	const updateField = (key) => {
    	Keyboard.dismiss();
		onChangeValue(key);
    	props.form !== undefined ? props.selectionAction(props.form, props.field, key) : props.selectionAction(props.field, key);
	}

	const buildRadios = () => {
		let radios = props.choices.map(e => {
			return (
				<View key={ getUniqueKey() } style={{
					flex: 1,
					flexDirection: 'row',
					marginBottom: 10,
				}}>
					<TouchableOpacity
						style={[
							Styles.inputbgcolor,
							Styles.interactiveblueborder,
							{
								height: 20,
								width: 20,
								alignItems: 'center',
								justifyContent: 'center',
							}
						]}
						onPress={ () => { updateField(e.key) } }
					>
						{
							value === e.key &&
							<View
								style={[
									Styles.interactivegreenbgcolor,
									{
										width: 15,
										height: 15,
										borderRadius: 9,
									}
								]}
							/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={ () => { updateField(e.key) } }
					>
						<View style={{
							paddingLeft: 10,
						}}>
							<Text>
								{ e.text }
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			);
		});
		if (props.columns !== undefined) {
			if ((radios.length % props.columns) !== 0) {
				oddoptions = radios.length % props.columns;
				for (let i = 0; i < oddoptions; i++) {
					radios.push(<></>);
				}
			}
		}
		return radios;
	}

	const buildRadioGroup = () => {
		let radios = buildRadios();
		let output = [];
		for(let i = 0; i < radios.length; i += props.columns ) {
			let limit = i === (radios.length - props.columns) && oddoptions > 0 ? (props.columns - oddoptions) : props.columns;
			let row = [];
			for (let n = 0; n < limit; n++) {
				row.push(
					<>
						{ radios[i + n] }
					</>
				);
			}
			output.push(
				<View key={ getUniqueKey() } style={{
					flexDirection: 'row',
					justifyContent: 'center',
					paddingLeft: 10,
				}}>
					{ row }
				</View>
			);
		}
		return output;
	}

	let radiogroup = buildRadioGroup();
	return (
		<View style={ styles.radiocontainer }>
			{ props.label !== undefined &&
				<Text style={ styles.inputlabel }>{ props.label }</Text>
			}
			{ radiogroup }
		</View>
	);

}

const styles = StyleSheet.create({
	radiocontainer: {
		marginTop: 10,
		marginLeft: 5,
	},
	inputlabel: {
		marginBottom: 10,
		fontSize: 16,
	},
});

export default RadioButtons;
