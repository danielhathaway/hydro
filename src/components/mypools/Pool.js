import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card';
import parseValue from '../forms/parseValue';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

class Pool extends Component {

	constructor(props) {
		super(props);
		this.navigation = this.props.navigation;
		this.state = this.props.pool === undefined ? { pool: {} } : { pool: this.props.pool };
	}

	render() {

		let displayName = this.state.pool.basics.name === undefined ? 'Untitled Pool' : this.state.pool.basics.name;
		displayName = displayName.length > 26 ? displayName.substring(0, 23)+'...' : displayName;
		let recentStatus = this.state.pool.meta.status[0] === undefined ? 'n/a' : this.state.pool.meta.status[0].message;
		let lastTestDateStr = this.state.pool.water[0] === undefined ? 'n/a' : this.state.pool.water[0].datestr;

		return (
	        <TouchableOpacity
	            style={{
	                flex: 1,
	                backgroundColor: 'transparent',
	            }}
	            onPress={() =>
	                this.navigation.navigate('Pool Details', { pool: this.state.pool })
	            }
	        >
				<Card type='title-and-details' title={ displayName } details='tap for details'>
					<Text style={[ Styles.thicktext, { paddingBottom: 5, fontSize: 16, color: this.state.pool.meta.status[0].color }]}>{ recentStatus }</Text>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>
							Description:{' '}
						</Text>
						{ parseValue(LocationChoices, this.state.pool.basics.location) }{'  '}-{'  '}
						{ parseValue(StructureChoices, this.state.pool.basics.structure) }{'  '}-{'  '}
						{
							Number(this.state.pool.basics.volume) > 1000 ?
								Number(this.state.pool.basics.volume)/1000+'k' :
								Number(this.state.pool.basics.volume)
						}
						{' '}gal
	                </Text>
	                <Text>
						<Text style={{ fontWeight: 'bold' }}>
	                    	Last water test:{' '}
						</Text>
						{ lastTestDateStr }
	                </Text>
	            </Card>
	        </TouchableOpacity>
	    );
	}
}

export default Pool;
