import React, { Component } from 'react';
import { Keyboard, TouchableOpacity, Animated, View, Text } from 'react-native';
import Card from '../Card';
import PoolTextInput from './PoolTextInput';
import DynamicCardButtons from './DynamicCardButtons';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

class PumpInputFields extends Component {

	constructor(props) {
		super(props);
		let pumps = this.props.pumps === undefined ? [] : JSON.parse(JSON.stringify(this.props.pumps));
		let expanded = pumps.map((e, n) => {
			if (e.hp !== '' || e.voltage !== '' || e.serial !== '') { return true; }
			else { return false; }
		});
		let cardexpanded = pumps.length === 0 ? true : false;
		this.state = { inputs: pumps, cardexpanded: cardexpanded, expanded: expanded, disabled: false, index: pumps.length }
		this.animatedValue = new Animated.Value(0);
	}

	addAdditionalInputs = () => {
		Keyboard.dismiss();
		this.animatedValue.setValue(0);
		let addedInputs = {
			key: getUniqueKey(),
			index: this.state.index,
			name: '',
			pumpmfg: '',
			pumpmodel: '',
			motormfg: '',
			motormodel: '',
			hp: '',
			voltage: '',
			serial: '',
		}
		this.setState({
			disabled: true,
			inputs: [...this.state.inputs, addedInputs],
			expanded: [...this.state.expanded, false]
		}, () => {
			Animated.timing(
				this.animatedValue,
				{
					toValue: 1,
					duration: 400,
					useNativeDriver: true
				}
			).start(() => {
				this.setState(tmpState => ({
					disabled: false, index: tmpState.index + 1,
				}));
			});
		});
	}

	addDuplicatedInputs = (id) => {
		Keyboard.dismiss();
		this.animatedValue.setValue(0);
		let arr = this.state.inputs.slice();
		let addedInputs = { ...arr[id] };
		addedInputs.key = getUniqueKey();
		addedInputs.index = this.state.index;
		addedInputs.name = addedInputs.name + " - copy";
		arr.push(addedInputs);
		this.setState({
			disabled: true,
			inputs: arr,
			expanded: [...this.state.expanded, this.state.expanded[id]]
		}, () => {
			Animated.timing(
				this.animatedValue,
				{
					toValue: 1,
					duration: 400,
					useNativeDriver: true
				}
			).start(() => {
				this.setState(tmpState => ({
					disabled: false, index: tmpState.index + 1,
				}));
			});
		});
	}

	removeInputs = (index) => {
		Keyboard.dismiss();
		let expanded = this.state.expanded.filter((n) => n !== index);
		this.setState(tmpState => {
			const arr = tmpState.inputs.filter((e, n) => n !== index);
			const ind = arr.length;
			const output = arr.map((e, n) => {
				e.index = n;
				return e;
			});
			return {
				inputs: output,
				expanded: expanded,
				index: ind,
			};
		});
	}

	updateInput = (id, field, value) => {
		this.setState(tmpState => ({
			inputs: tmpState.inputs.map(e => (e.index === id ? {...e, [field]: value } : e))
		}));
	}

	toggleExpand = (id) => {
		let expanded = [...this.state.expanded];
		expanded[id] = !(expanded[id]);
		this.setState({ expanded: expanded });
	}

	toggleCardExpand = () => {
		let cardexpanded = this.state.cardexpanded;
		cardexpanded = !(cardexpanded);
		this.setState({ cardexpanded: cardexpanded });
	}

	render() {

		const animationValue = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-59, 0]
		});

		let inputsOutput = this.state.inputs === undefined || this.state.inputs.length === 0 ?
			undefined : this.state.inputs.map(e => {

			if (e.index == this.state.index) {
				return (
					<Animated.View
						key={ e.key }
						style={{
							opacity: this.animatedValue,
							transform: [{ translateY: animationValue }]
						}}
					>
						{ e.name !== '' &&
							<PoolTextInput form={e.index} field='name' doneEditingAction={this.updateInput} placeholder='Name' value={e.name} />
						}
						{ e.name === '' &&
							<PoolTextInput form={e.index} field='name' doneEditingAction={this.updateInput} placeholder='Name' value={'Pump ' + String(e.index + 1)} />
						}
						<PoolTextInput form={e.index} field='pumpmfg' doneEditingAction={this.updateInput} placeholder='Pump Manufacturer' value={e.pumpmfg} />
						<PoolTextInput form={e.index} field='pumpmodel' doneEditingAction={this.updateInput} placeholder='Pump Model' value={e.pumpmodel} />
						<PoolTextInput form={e.index} field='motormfg' doneEditingAction={this.updateInput} placeholder='Motor Manufacturer' value={e.motormfg} />
						<PoolTextInput form={e.index} field='motormodel' doneEditingAction={this.updateInput} placeholder='Motor Model' value={e.motormodel} />
						{ this.state.expanded[e.index] &&
							<>
							<PoolTextInput form={e.index} field='hp' doneEditingAction={this.updateInput} placeholder='Horsepower' value={e.hp} />
							<PoolTextInput form={e.index} field='voltage' doneEditingAction={this.updateInput} placeholder='Voltage' value={e.voltage} />
							<PoolTextInput form={e.index} field='serial' doneEditingAction={this.updateInput} placeholder='Serial Number' value={e.serial} />
							</>
						}
						<DynamicCardButtons
							id={ e.index }
							disabled={ this.state.disabled }
							expanded={ this.state.expanded[e.index] }
							expandaction={ this.toggleExpand }
							copyaction={ this.addDuplicatedInputs }
							removeaction={ this.removeInputs }
						/>
					</Animated.View>
				);
			}
			else {
				return (
					<View
						key={ e.key }
					>
						{ e.name !== '' &&
							<PoolTextInput form={e.index} field='name' doneEditingAction={this.updateInput} placeholder='Name' value={e.name} />
						}
						{ e.name === '' &&
							<PoolTextInput form={e.index} field='name' doneEditingAction={this.updateInput} placeholder='Name' value={'Pump ' + String(e.index + 1)} />
						}
						<PoolTextInput form={e.index} field='pumpmfg' doneEditingAction={this.updateInput} placeholder='Pump Manufacturer' value={e.pumpmfg} />
						<PoolTextInput form={e.index} field='pumpmodel' doneEditingAction={this.updateInput} placeholder='Pump Model' value={e.pumpmodel} />
						<PoolTextInput form={e.index} field='motormfg' doneEditingAction={this.updateInput} placeholder='Motor Manufacturer' value={e.motormfg} />
						<PoolTextInput form={e.index} field='motormodel' doneEditingAction={this.updateInput} placeholder='Motor Model' value={e.motormodel} />
						{ this.state.expanded[e.index] &&
							<>
							<PoolTextInput form={e.index} field='hp' doneEditingAction={this.updateInput} placeholder='Horsepower' value={e.hp} />
							<PoolTextInput form={e.index} field='voltage' doneEditingAction={this.updateInput} placeholder='Voltage' value={e.voltage} />
							<PoolTextInput form={e.index} field='serial' doneEditingAction={this.updateInput} placeholder='Serial Number' value={e.serial} />
							</>
						}
						<DynamicCardButtons
							disabled={ this.state.disabled }
							expanded={ this.state.expanded[e.index] }
							id={ e.index }
							expandaction={ this.toggleExpand }
							copyaction={ this.addDuplicatedInputs }
							removeaction={ this.removeInputs }
						/>
					</View>
				);
			}
		});

		return (
			<>
			<Card title='Pumps' type='dynamic-expand' expandaction={ this.toggleCardExpand } expanded={ this.state.cardexpanded } content={ inputsOutput }>
				<View style={ Styles.buttoncontainer }>
					<TouchableOpacity
						style={ Styles.button }
						disabled={ this.state.disabled }
						onPress={ this.addAdditionalInputs }
					>
						<Text style={ Styles.buttontext }>
							+ New Pump/Motor
						</Text>
					</TouchableOpacity>
				</View>
			</Card>
			</>
		);
	}
}

export default PumpInputFields;
