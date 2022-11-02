import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../styles/Styles';

const ButtonListItem = (props) => {

    const navigation = useNavigation();

		const handleAction = () => {
			props.id !== undefined ? props.action(props.id) : props.action();
		}

    return (
        <TouchableOpacity
            onPress={() =>
                handleAction()
            }
        >
            <View style={{
                padding: 10,
            }}>
                <Text style={ Styles.interactivetextdarkbluecolor }>
                    { props.children }
                </Text>
            </View>
        </TouchableOpacity>
    );

}

export default ButtonListItem;
