import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/Styles';

const HeaderAddPoolButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Add Pool');
            }}
            style={ Styles.headerbtn }
        >
			<Text style={ Styles.headerbtntxt }>
				New
			</Text>
        </TouchableOpacity>
    );
}

export default HeaderAddPoolButton;
/*
<Text style={[ Styles.headerbtnsymbol, Styles.headerbtnsymbolright, { fontSize: 36 } ]}>
	+
</Text>
*/
