import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/Styles';

function HeaderSaveTestButton(props) {
    const navigation = useNavigation();
		const pool = props.pool;
    return (
        <TouchableOpacity
            onPress={() => {

            }}
            style={ Styles.headerbtn }
        >
            <Text style={ Styles.headerbtntxt }>
                Save
            </Text>
        </TouchableOpacity>
    );
}

export default HeaderSaveTestButton;
