import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Styles from '../styles/Styles';

const ScrollScreen = (props) => {

    return (
        <SafeAreaView style={{ ...Styles.safeview, ...props.style }}>
            <ScrollView 
                style={{ ...Styles.scrollview, ...props.scrollviewstyle }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={{ ...Styles.scrollviewcontainer, ...props.scrollviewcontainerstyle }}>
                    { props.children }
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default ScrollScreen;