import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import BasicInputFields from '../components/forms/BasicInputFields';
import AdvancedInputFields from '../components/forms/AdvancedInputFields';
import PumpInputFields from '../components/forms/PumpInputFields';
import FilterInputFields from '../components/forms/FilterInputFields';
import HeaterInputFields from '../components/forms/HeaterInputFields';
import getUniqueKey from '../components/getUniqueKey';
import Styles from '../styles/Styles';

const MyPoolsEditScreen = ({ route, navigation }) => {

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
                    Edit details of the pool here.{"\n"}
                </Text>
            </View>
            <View style={{
                flex: 1,
            }}>
                <BasicInputFields basics={route.params.pool.basics} />
            </View>
			<View style={{
                flex: 1,
            }}>
                <AdvancedInputFields advanced={route.params.pool.advanced} />
            </View>
            <View style={{
                flex: 1,
            }}>
                <PumpInputFields pumps={route.params.pool.pumps} />
            </View>
            <View style={{
                flex: 1,
            }}>
                <FilterInputFields filters={route.params.pool.filters} />
            </View>
			<View style={{
                flex: 1,
            }}>
                <HeaterInputFields heaters={route.params.pool.heaters} />
            </View>
        </ScrollScreen>
    );

}

export default MyPoolsEditScreen;
