import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/Styles';

const HeaderEditPoolButton = (props) => {
	const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Edit Pool', { pool: props.pool });
            }}
            style={ Styles.headerbtn }
        >
			<Text style={ Styles.headerbtntxt }>
				Edit
			</Text>
        </TouchableOpacity>
    );
}

export default HeaderEditPoolButton;
/*
<Text style={[ Styles.headerbtnsymbol, Styles.headerbtnsymbolright, { fontSize: 28 } ]}>
	✎
</Text>
*/
