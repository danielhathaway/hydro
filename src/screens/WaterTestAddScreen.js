import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ScrollScreen from '../components/ScrollScreen';
import Card from '../components/Card';
import PoolTextInput from '../components/forms/PoolTextInput';
import getUniqueKey from '../components/getUniqueKey';
import getDateString from '../components/getDateString';
import Styles from '../styles/Styles';

const WaterTestAddScreen = ({ route, navigation }) => {
	const { pool } = route.params;
	return (
        <ScrollScreen>
            <Card title="Test Data">
                <WaterTestInputFields sanitizer={ pool.basics.sanitizer } />
            </Card>
        </ScrollScreen>
    );
}

export default WaterTestAddScreen;

class WaterTestInputFields extends Component {

    constructor() {
        super();
        this.state = {
            inputs: {
				index: 0,
				date: new Date().getTime(),
                datestr: getDateString(),
                tc: '',
                fc: '',
				nacl: '',
                tb: '',
				bg: '',
                ph: '',
                ta: '',
                tds: '',
                ch: '',
                ca: '',
                fe: '',
                cu: '',
                phos: '',
            },
			key: getUniqueKey()
        }
    }

    updateInput = (id, field, value) => {
        this.setState(tmpState => ({
            inputs: tmpState.inputs.map(e => (e.index === id ? {...e, [field]: value } : e))
        }));
    }

    render() {

        return (
            <View key={this.state.key}>
				{ (this.props.sanitizer === 'chlorine' || this.props.sanitizer === 'swg' || this.props.sanitizer === undefined) &&
				<>
					<PoolTextInput
						field='tc'
						doneEditingAction={ this.updateInput }
						placeholder='Total Chlorine'
						value={ this.state.inputs.tc }
						inputType='float'
					/>
					<PoolTextInput
						field='fc'
						doneEditingAction={ this.updateInput }
						placeholder='Free Chlorine'
						value={ this.state.inputs.fc }
						inputType='float'
					/>
				</>
				}
				{ (this.props.sanitizer === 'swg' || this.props.sanitizer === undefined) &&
					<PoolTextInput
						field='nacl'
						doneEditingAction={ this.updateInput }
						placeholder='Salt'
						value={ this.state.inputs.nacl }
						inputType='float'
					/>
				}
				{ (this.props.sanitizer === 'bromine' || this.props.sanitizer === undefined) &&
					<PoolTextInput
						field='tb'
						doneEditingAction={ this.updateInput }
						placeholder='Total Bromine'
						value={ this.state.inputs.tb }
						inputType='float'
					/>
				}
				{ (this.props.sanitizer === 'biguanide' || this.props.sanitizer === undefined) &&
					<PoolTextInput
						field='bg'
						doneEditingAction={ this.updateInput }
						placeholder='Total Biguanide'
						value={ this.state.inputs.bg }
						inputType='float'
					/>
				}
                <PoolTextInput
                    field='ph'
                    doneEditingAction={ this.updateInput }
                    placeholder='PH'
                    value={ this.state.inputs.ph }
                    inputType='float'
                />
                <PoolTextInput
                    field='ta'
                    doneEditingAction={ this.updateInput }
                    placeholder='Total Alkalinity'
                    value={ this.state.inputs.ta }
                    inputType='float'
                />
                <PoolTextInput
                    field='tds'
                    doneEditingAction={ this.updateInput }
                    placeholder='Total Dissolved Solids'
                    value={ this.state.inputs.tds }
                    inputType='float'
                />
				<PoolTextInput
                    field='ch'
                    doneEditingAction={ this.updateInput }
                    placeholder='Calcium Hardness'
                    value={ this.state.inputs.ch }
                    inputType='float'
                />
                <PoolTextInput
                    field='ca'
                    doneEditingAction={ this.updateInput }
                    placeholder='Cyanuric Acid'
                    value={ this.state.inputs.ca }
                    inputType='float'
                />
                <PoolTextInput
                    field='fe'
                    doneEditingAction={ this.updateInput }
                    placeholder='Iron'
                    value={ this.state.inputs.fe }
                    inputType='float'
                />
                <PoolTextInput
                    field='cu'
                    doneEditingAction={ this.updateInput }
                    placeholder='Copper'
                    value={ this.state.inputs.cu }
                    inputType='float'
                />
                <PoolTextInput
					context='endofcard'
                    field='phos'
                    doneEditingAction={ this.updateInput }
                    placeholder='Phosphates'
                    value={ this.state.inputs.phos }
                    inputType='float'
                />
            </View>
        );
    }

}
