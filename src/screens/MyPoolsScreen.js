import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import examplePoolsArray from '../components/examplePoolsArray';
import MyPools from '../components/mypools/MyPools';
import Styles from '../styles/Styles';

const MyPoolsScreen = ({ navigation }) => {
    return (
        <ScrollScreen>
            <MyPools pools={ examplePoolsArray() } navigation={ navigation } />
        </ScrollScreen>
    );
}

export default MyPoolsScreen;
