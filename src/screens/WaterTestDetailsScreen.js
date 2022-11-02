import React from 'react';
import { Text, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import Card from '../components/Card';
import getUniqueKey from '../components/getUniqueKey';
import Styles from '../styles/Styles';

const WaterTestDetailsScreen = ({ route, navigation }) => {

	const { test, basics } = route.params;

	const buildSanitizer = () => {
		if (basics.sanitizer === 'chlorine') {
			return (
				<View key={ getUniqueKey() }>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Cholorine: </Text>{ test.tc }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ test.fc }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ test.nacl }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ test.tb }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ test.bg }</Text>
				</View>
			);
		}
		if (basics.sanitizer === 'swg') {
			return (
				<View key={ getUniqueKey() }>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Cholorine: </Text>{ test.tc }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ test.fc }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ test.nacl }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ test.tb }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ test.bg }</Text>
				</View>
			);
		}
		if (basics.sanitizer === 'bromine') {
			return (
				<View key={ getUniqueKey() }>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Cholorine: </Text>{ test.tc }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ test.fc }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ test.nacl }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ test.tb }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ test.bg }</Text>
				</View>
			);
		}
		if (basics.sanitizer === 'biguanide') {
			return (
				<View key={ getUniqueKey() }>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Cholorine: </Text>{ test.tc }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ test.fc }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ test.nacl }</Text>
					<Text style={{ color: '#777777' }}><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ test.tb }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ test.bg }</Text>
				</View>
			);
		}
		else {
			return (
				<View key={ getUniqueKey() }>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Cholorine: </Text>{ test.tc }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Free Chlorine: </Text>{ test.fc }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Salt: </Text>{ test.nacl }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Bromine: </Text>{ test.tb }</Text>
					<Text><Text style={{ fontWeight: 'bold' }}>Total Biguanide: </Text>{ test.bg }</Text>
				</View>
			);
		}
	}

    return (
        <ScrollScreen>
            <Card title={ test.datestr } key={ test.key }>
				{ buildSanitizer() }
				<Text><Text style={{ fontWeight: 'bold' }}>PH: </Text>{ test.ph }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Alkalinity: </Text>{ test.ta }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Total Dissolved Solids: </Text>{ test.tds }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Calcium Hardness: </Text>{ test.ch }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Cyanuric Acid: </Text>{ test.ca }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Iron: </Text>{ test.fe }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Copper: </Text>{ test.cu }</Text>
				<Text><Text style={{ fontWeight: 'bold' }}>Phosphates: </Text>{ test.phos }</Text>
			</Card>
        </ScrollScreen>
    );

}

export default WaterTestDetailsScreen;
