import React, { Component } from 'react';
import { Keyboard, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PoolTextInput from './PoolTextInput';
import ToggleButtons from './ToggleButtons';
import DynamicCardButtons from './DynamicCardButtons';
import Card from '../Card';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

class BasicInputFields extends Component {

    constructor(props) {
        super(props);
		if (this.props.basics === undefined) {
			let initialInputs = {
				name: '',
				volume: '',
				structure: '',
				location: '',
				material: '',
				sanitizer: '',
				spa: null,
				cover: '',
				swgmfg: '',
				swgmodel: '',
				blower: null,
				blowermfg: '',
				blowermodel: '',
				cleaner: null,
				cleanermfg: '',
				cleanermodel: '',
				boosterpump: null,
				boosterpumpmfg: '',
				boosterpumpmodel: '',
				waterfeatures: null,
				waterfeaturesdescription: '',
				infinityedge: null,
				lights: null,
				lightscount: '',
				divingboard: null,
				ladders: null,
			}
			this.state = { inputs: initialInputs, cardexpanded: true, expanded: false }
		}
		else {
			let expanded = (
				this.props.basics.blower ||
				this.props.basics.cleaner ||
				this.props.basics.waterfeatures
			);
			this.state = { inputs: this.props.basics, cardexpanded: false, expanded: expanded }
		}
    }

    updateInput = (field, value) => {
		this.setState(tmpState => ({
			inputs: {
				...tmpState.inputs,
				[field]: value
			}
		}));
    }

	toggleExpand = () => {
		let expanded = this.state.expanded;
		expanded = !(expanded);
		this.setState({ expanded: expanded });
	}

	toggleCardExpand = () => {
		let cardexpanded = this.state.cardexpanded;
		cardexpanded = !(cardexpanded);
		this.setState({ cardexpanded: cardexpanded });
	}

    render() {

		return (
			<Card title='Basic Details' type='title-and-expand' expandaction={ this.toggleCardExpand } expanded={ this.state.cardexpanded }>
				{ this.state.cardexpanded &&
				<>
					<PoolTextInput
						field='name'
						doneEditingAction={ this.updateInput }
						placeholder='Pool Name (*required)'
						value={ this.state.inputs.name }
					/>
					<PoolTextInput
						field='volume'
						doneEditingAction={ this.updateInput }
						placeholder='Pool Volume (gal)'
						value={ this.state.inputs.volume }
						inputType='numbers'
					/>
					<ToggleButtons label='Structure:' choices={ StructureChoices } field='structure' initialValue={ this.state.inputs.structure } selectionAction={ this.updateInput } />
					<ToggleButtons label='Location:' choices={ LocationChoices } field='location' initialValue={ this.state.inputs.location } selectionAction={ this.updateInput } />
					<ToggleButtons label='Material:' choices={ MaterialChoices } field='material' initialValue={ this.state.inputs.material } selectionAction={ this.updateInput } />
					<ToggleButtons label='Sanitizer:' choices={ SanitizerChoices } field='sanitizer' initialValue={ this.state.inputs.sanitizer } selectionAction={ this.updateInput } />
					<ToggleButtons label='Attached Spa:' choices={ YesNoChoices } field='spa' initialValue={ this.state.inputs.spa } selectionAction={ this.updateInput } />
					<ToggleButtons label='Cover Type:' choices={ CoverChoices } field='cover' initialValue={ this.state.inputs.cover } selectionAction={ this.updateInput } />

					{ this.state.expanded &&
					<>
						{ this.state.inputs.sanitizer === 'swg' &&
						<>
							<PoolTextInput
								context='afterradio'
								field='swgmfg'
								doneEditingAction={ this.updateInput }
								placeholder='Chlorine Generator Manufacturer'
								value={ this.state.inputs.swgmfg }
							/>
							<PoolTextInput
								field='swgmodel'
								doneEditingAction={ this.updateInput }
								placeholder='Chlorine Generator Model'
								value={ this.state.inputs.swgmodel }
							/>
						</>
						}
						{ this.state.inputs.spa &&
						<>
							<ToggleButtons label='Spa has Blower:' choices={ YesNoChoices } field='blower' initialValue={ this.state.inputs.blower } selectionAction={ this.updateInput } />
							{ this.state.inputs.blower &&
							<>
								<PoolTextInput
									context='afterradio'
									field='blowermfg'
									doneEditingAction={ this.updateInput }
									placeholder='Spa Blower Manufacturer'
									value={ this.state.inputs.blowermfg }
								/>
								<PoolTextInput
									field='blowermodel'
									doneEditingAction={ this.updateInput }
									placeholder='Spa Blower Model'
									value={ this.state.inputs.blowermodel }
								/>
							</>
							}
						</>
						}
						<ToggleButtons label='Automatic Cleaner:' choices={ YesNoChoices } field='cleaner' initialValue={ this.state.inputs.cleaner } selectionAction={ this.updateInput } />
						{ this.state.inputs.cleaner &&
						<>
							<PoolTextInput
								context='afterradio'
								field='cleanermfg'
								doneEditingAction={ this.updateInput }
								placeholder='Cleaner Manufacturer'
								value={ this.state.inputs.cleanermfg }
							/>
							<PoolTextInput
								field='cleanermodel'
								doneEditingAction={ this.updateInput }
								placeholder='Cleaner Model'
								value={ this.state.inputs.cleanermodel }
							/>
							<ToggleButtons label='Cleaner Uses Booster Pump:' choices={ YesNoChoices } field='boosterpump' initialValue={ this.state.inputs.boosterpump } selectionAction={ this.updateInput } />
							{ this.state.inputs.boosterpump &&
							<>
								<PoolTextInput
									field='boosterpumpmfg'
									doneEditingAction={ this.updateInput }
									placeholder='Booster Pump Manufacturer'
									value={ this.state.inputs.boosterpumpmfg }
								/>
								<PoolTextInput
									field='boosterpumpmodel'
									doneEditingAction={ this.updateInput }
									placeholder='Booster Pump Model'
									value={ this.state.inputs.boosterpumpmodel }
								/>
							</>
							}
						</>
						}
						<ToggleButtons label='Water Features:' choices={ YesNoChoices } field='waterfeatures' initialValue={ this.state.inputs.waterfeatures } selectionAction={ this.updateInput } />
						{ this.state.inputs.waterfeatures &&
						<>
							<PoolTextInput
								context='afterradio'
								field='waterfeaturesdescription'
								doneEditingAction={ this.updateInput }
								placeholder='Water Features Description'
								value={ this.state.inputs.waterfeaturesdescription }
							/>
						</>
						}
						<ToggleButtons label='Infinity Edge:' choices={ YesNoChoices } field='infinityedge' initialValue={ this.state.inputs.infinityedge } selectionAction={ this.updateInput } />
						<ToggleButtons label='Lights:' choices={ YesNoChoices } field='lights' initialValue={ this.state.inputs.lights } selectionAction={ this.updateInput } />
						{ this.state.inputs.lights &&
						<>
							<PoolTextInput
								context='afterradio'
								field='lightscount'
								doneEditingAction={ this.updateInput }
								placeholder='Number of Lights'
								value={ this.state.inputs.lightscount }
								inputType='numbers'
							/>
						</>
						}
						<ToggleButtons label='Diving Board:' choices={ YesNoChoices } field='divingboard' initialValue={ this.state.inputs.divingboard } selectionAction={ this.updateInput } />
						<ToggleButtons label='Removable Ladders:' choices={ YesNoChoices } field='ladders' initialValue={ this.state.inputs.ladders } selectionAction={ this.updateInput } />
					</>
					}
					<DynamicCardButtons
						type='text'
						expanded={ this.state.expanded }
						expandaction={ this.toggleExpand }
					/>
				</>
				}
			</Card>
		);
    }
}

export default BasicInputFields;
