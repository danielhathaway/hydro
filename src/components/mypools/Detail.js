import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../../styles/Styles';

const Detail = (props) => {

	return(
		<View style={{ flexDirection: 'row' }}>
			<View style={{ flex: props.flexes[0] }}>
				<Text style={{ fontWeight: 'bold' }}>{ props.label }</Text>
			</View>
			<View style={{ flex: props.flexes[1] }}>
				<Text>
					{ props.value }
				</Text>
			</View>
		</View>
	);

}

export default Detail;
