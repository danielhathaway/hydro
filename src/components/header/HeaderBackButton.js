import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/Styles';

function HeaderBackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.pop()
            }}
            style={ Styles.headerbtn }
        >
			<Text style={ Styles.headerbtntxt }>
				Back
			</Text>
        </TouchableOpacity>
    );
}

export default HeaderBackButton;
/*
<Text style={[ Styles.headerbtnsymbol, Styles.headerbtnsymbolleft, { paddingBottom: 15 } ]}>
	⤺
</Text>
*/
