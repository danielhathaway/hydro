import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PoolTextInput from './PoolTextInput';
import ToggleButtons from './ToggleButtons';
import DynamicCardButtons from './DynamicCardButtons';
import Card from '../Card';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

class AdvancedInputFields extends Component {

    constructor(props) {
        super(props);
		if (this.props.advanced === undefined) {
			let initialInputs = {
				plumbingdiameter: '',
				skimmerscount: '',
				skimmersmfg: '',
				skimmersmodel: '',
				skimmersbaskettype: '',
				floorreturns: null,
				floorreturnscount: '',
				automation: null,
				automationmfg: '',
				automationmodel: '',
				uv: null,
				uvmfg: '',
				uvmodel: '',
			}
			this.state = { inputs: initialInputs, cardexpanded: false }
		}
		else {
			let cardexpanded = (
				this.props.advanced.automation ||
				this.props.advanced.uv
			);
			this.state = { inputs: this.props.advanced, cardexpanded: false }
		}
	}

    updateInputs = (field, value) => {
		this.setState(tmpState => ({
			inputs: {
				...tmpState.inputs,
				[field]: value
			}
		}));
    }

	toggleCardExpand = () => {
		let cardexpanded = this.state.cardexpanded;
		cardexpanded = !(cardexpanded);
		this.setState({ cardexpanded: cardexpanded });
	}

    render() {

		return (
			<Card title='Advanced Details' type='title-and-expand' expandaction={ this.toggleCardExpand } expanded={ this.state.cardexpanded }>
				{ this.state.cardexpanded &&
				<>
					<PoolTextInput
						field='plumbingdiameter'
						doneEditingAction={ this.updateInputs }
						placeholder='Plumbing Diameter'
						value={ this.state.inputs.plumbingdiameter }
						inputType='float'
					/>
					<PoolTextInput
						field='skimmerscount'
						doneEditingAction={ this.updateInputs }
						placeholder='Number of Skimmers'
						value={ this.state.inputs.skimmerscount }
						inputType='numbers'
					/>
					<PoolTextInput
						field='skimmersmfg'
						doneEditingAction={ this.updateInputs }
						placeholder='Skimmer Manufacturer'
						value={ this.state.inputs.skimmersmfg }
					/>
					<PoolTextInput
						field='skimmersmodel'
						doneEditingAction={ this.updateInputs }
						placeholder='Skimmer Model'
						value={ this.state.inputs.skimmersmodel }
					/>
					<PoolTextInput
						field='skimmersbaskettype'
						doneEditingAction={ this.updateInputs }
						placeholder='Skimmer Basket Type'
						value={ this.state.inputs.skimmersbaskettype }
					/>
					<ToggleButtons
						label='Floor Returns:'
						choices={ YesNoChoices }
						field='floorreturns'
						initialValue={ this.state.inputs.floorreturns }
						selectionAction={ this.updateInputs }
					/>
					{ this.state.inputs.floorreturns &&
						<PoolTextInput
							context='afterradio'
							field='floorreturnscount'
							doneEditingAction={ this.updateInputs }
							placeholder='Number of Floor Returns'
							value={ this.state.inputs.floorreturnscount }
							inputType='numbers'
						/>
					}
					<ToggleButtons
						label='Automation:'
						choices={ YesNoChoices }
						field='automation'
						initialValue={ this.state.inputs.automation }
						selectionAction={ this.updateInputs }
					/>
					{ this.state.inputs.automation &&
					<>
						<PoolTextInput
							context='afterradio'
							field='automationmfg'
							doneEditingAction={ this.updateInputs }
							placeholder='Automation Manufacturer'
							value={ this.state.inputs.automationmfg }
						/>
						<PoolTextInput
							field='automationmodel'
							doneEditingAction={ this.updateInputs }
							placeholder='Automation Model'
							value={ this.state.inputs.automationmodel }
						/>
					</>
					}
					<ToggleButtons
						label='UV Sanitizer:'
						choices={ YesNoChoices }
						field='uv'
						initialValue={ this.state.inputs.uv }
						selectionAction={ this.updateInputs }
					/>
					{ this.state.inputs.uv &&
					<>
						<PoolTextInput
							context='afterradio'
							field='uvmfg'
							doneEditingAction={ this.updateInputs }
							placeholder='UV Sanitizer Manufacturer'
							value={ this.state.inputs.uvmfg }
						/>
						<PoolTextInput
							context='endofcard'
							field='uvmodel'
							doneEditingAction={ this.updateInputs }
							placeholder='UV Sanitizer Model'
							value={ this.state.inputs.uvmodel }
						/>
					</>
					}
				</>
				}
			</Card>
		);
    }
}

export default AdvancedInputFields;
