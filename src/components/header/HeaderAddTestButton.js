import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/Styles';

const HeaderAddTestButton = (props) => {
	const navigation = useNavigation();
	const pool = props.pool;
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Add Test', { pool: pool });
            }}
            style={ Styles.headerbtn }
        >
			<Text style={ Styles.headerbtntxt }>
				+
			</Text>
        </TouchableOpacity>
    );
}

export default HeaderAddTestButton;
/*
<Text style={[ Styles.headerbtnsymbol, Styles.headerbtnsymbolright, { fontSize: 36 } ]}>
	+
</Text>
*/
