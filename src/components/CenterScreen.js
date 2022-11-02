import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/Styles';

const CenterScreen = (props) => {

    return (
        <View style={{ ...Styles.centerscreen, ...props.style }}>
            <View style={{ ...Styles.flexone, ...props.contentstyle }}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 1}}>
                    { props.children }
                </View>    
                <View style={{flex: 1}}></View>
            </View>
        </View>
    );

}

export default CenterScreen;