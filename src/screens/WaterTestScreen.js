import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import Card from '../components/Card';
import ButtonListItem from '../components/ButtonListItem';
import getUniqueKey from '../components/getUniqueKey';
import getDateString from '../components/getDateString';
import Styles from '../styles/Styles';

const WaterTestScreen = ({ route, navigation }) => {

	const pool = route.params.pool;
	const id = pool.meta.id;
	const basics = pool.basics;
	const water = pool.water;
    const latesttest = water[0];

	const historyHandler = (id) => {
		navigation.navigate('Test Details', {test: water[id], basics: basics});
	}

	const buildHistory = () => {
		let lastdatestr = '';
		let dupenum = 0
		let modifieddatestr = '';
		let output = water.map((item, n) => {
			if (lastdatestr === item.datestr)  {
				dupenum++;
				modifieddatestr = item.datestr + ' ('+ String(dupenum) +')';
			}
			else {
				dupenum = 0;
				modifieddatestr = item.datestr;
				lastdatestr = item.datestr;
			}
			return (
				<View key={ getUniqueKey() }>
					<View style={ Styles.buttonlistitemspacer }></View>
					<ButtonListItem id={ item.index } screen='Test Details' action={ historyHandler } >
						{ modifieddatestr }
					</ButtonListItem>
				</View>
			);
		});
		return (
			<Card title="Test History" >
				{ output }
				<View style={ Styles.buttonlistitemspacer }></View>
			</Card>
		);
	}

	const buildSanitizer = () => {
		if (basics.sanitizer !== undefined) {
			if (basics.sanitizer === 'chlorine') {
				return (
					<View key={ getUniqueKey() }>
						<Text><Text style={{ fontWeight: 'bold' }}>Total Chlorine: </Text>{ latesttest.tc }</Text>
						<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ latesttest.fc }</Text>
					</View>
				);
			}
			else if (basics.sanitizer === 'swg') {
				return (
					<View key={ getUniqueKey() }>
						<Text><Text style={{ fontWeight: 'bold' }}>Total Chlorine: </Text>{ latesttest.tc }</Text>
						<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ latesttest.fc }</Text>
						<Text><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ latesttest.nacl }</Text>
					</View>
				);
			}
			else if (basics.sanitizer === 'bromine') {
				return (
					<View key={ getUniqueKey() }>
						<Text><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ latesttest.tb }</Text>
					</View>
				);
			}
			else if (basics.sanitizer === 'biguanide') {
				return (
					<View key={ getUniqueKey() }>
						<Text><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ latesttest.bg }</Text>
					</View>
				);
			}
		}
		else {
			<View key={ getUniqueKey() }>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Chlorine: </Text>{ latesttest.tc }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ latesttest.fc }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ latesttest.nacl }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ latesttest.tb }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ latesttest.bg }</Text>
			</View>
		}
	}

	const buildOutput = () => {
		return (
			<Card title="Latest Test Results"  key={ getUniqueKey() }>
				{ buildSanitizer() }
				<Text><Text style={{ fontWeight: 'bold' }}>PH: </Text>{ latesttest.ph }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Alkalinity: </Text>{ latesttest.ta }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Dissovled Solids: </Text>{ latesttest.tds }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Calcium Hardness: </Text>{ latesttest.ch }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Cyanuric Acid: </Text>{ latesttest.ca }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Iron: </Text>{ latesttest.fe }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Copper: </Text>{ latesttest.cu }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Phosphates: </Text>{ latesttest.phos }</Text>
			</Card>
		);
	}

    return (

        <ScrollScreen>

			{ buildOutput() }
			{ buildHistory() }

        </ScrollScreen>
    );
}

export default WaterTestScreen;
