import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import BasicInputFields from '../components/forms/BasicInputFields';
import AdvancedInputFields from '../components/forms/AdvancedInputFields';
import PumpInputFields from '../components/forms/PumpInputFields';
import FilterInputFields from '../components/forms/FilterInputFields';
import HeaterInputFields from '../components/forms/HeaterInputFields';

import Styles from '../styles/Styles';

const MyPoolsAddScreen = ({ route, navigation }) => {

    return (
        <ScrollScreen>
            <View style={[
                Styles.contentbgcolor,
                {
                    flexDirection: 'column',
                    marginBottom: 15,
                    padding: 10,
                }
            ]}>
                <Text>
                    <Text style={{ fontWeight: 'bold', }}>This screen should warn before navigating with unsaved changes!</Text>{"\n"}{"\n"}
                    Let's start adding some details to your new pool.
                    Everything here can be edited later, so if you're unsure of what to put in a field, just leave it blank for now.{"\n"}
                </Text>
            </View>
            <View style={{
                flex: 1,
            }}>
                <BasicInputFields />
            </View>
			<View style={{
                flex: 1,
            }}>
                <AdvancedInputFields />
            </View>
            <View style={{
                flex: 1,
            }}>
                <PumpInputFields />
            </View>
            <View style={{
                flex: 1,
            }}>
                <FilterInputFields />
            </View>
			<View style={{
                flex: 1,
            }}>
                <HeaterInputFields />
            </View>
        </ScrollScreen>
    );

}

export default MyPoolsAddScreen;
