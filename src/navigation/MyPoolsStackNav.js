import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderMenuButton from '../components/header/HeaderMenuButton';
import HeaderBackButton from '../components/header/HeaderBackButton';
import HeaderAddPoolButton from '../components/header/HeaderAddPoolButton';
import HeaderAddPoolSaveButton from '../components/header/HeaderAddPoolSaveButton';
import HeaderEditPoolButton from '../components/header/HeaderEditPoolButton';
import HeaderEditPoolSaveButton from '../components/header/HeaderEditPoolSaveButton';
import HeaderAddTestButton from '../components/header/HeaderAddTestButton';
import HeaderSaveTestButton from '../components/header/HeaderSaveTestButton';

import MyPoolsScreen from '../screens/MyPoolsScreen';
import MyPoolsAddScreen from '../screens/MyPoolsAddScreen';
import MyPoolsDetailScreen from '../screens/MyPoolsDetailScreen';
import MyPoolsEditScreen from '../screens/MyPoolsEditScreen';
import WaterTestScreen from '../screens/WaterTestScreen';
import WaterTestAddScreen from '../screens/WaterTestAddScreen';
import WaterTestDetailsScreen from '../screens/WaterTestDetailsScreen';

import Styles from '../styles/Styles';

class MyPoolsStackNav extends Component {

    constructor(props) {
        super(props);
		this.drawernav = this.props.navigation;
		this.save = this.props.save;
    }

    render() {
        const MyPoolsStack = createStackNavigator();
        return (
            <>
                <NavigationContainer independent={ true }>
                    <MyPoolsStack.Navigator
                        initialRouteName="My Pools"
                        screenOptions={{
                            headerStyle: [
                                Styles.navbg,
                            ],
                            headerTitleStyle: [
								Styles.headertext,
                                Styles.lighttext,
                                Styles.textshadow,
                            ],
                            headerTitleAlign: 'center',
                            headerLeftContainerStyle: [
                                Styles.headerleftcontainer,
                            ],
                            headerRightContainerStyle: [
                                Styles.headerrightcontainer,
                            ],
                        }}
                    >
                        <MyPoolsStack.Screen
                            name="My Pools"
                            component={ MyPoolsScreen }
							options={
                                ({ route }) => ({
                                    title: 'My Pools',
                                    headerLeft: (props) => (
                                        <HeaderMenuButton drawernav={ this.drawernav } />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderAddPoolButton />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Add Pool"
                            component={ MyPoolsAddScreen }
                            options={
                                ({ route }) => ({
                                    title: 'New Pool',
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderAddPoolSaveButton save={ this.save } />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Pool Details"
                            component={ MyPoolsDetailScreen }
                            options={
                                ({ route }) => ({
                                    title: route.params.pool.basics.name,
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderEditPoolButton pool={ route.params.pool } />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Edit Pool"
                            component={ MyPoolsEditScreen }
                            options={
                                ({ route }) => ({
                                    title: 'Edit '+route.params.pool.basics.name,
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderEditPoolSaveButton pool={ route.params.pool } />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Add Test"
                            component={ WaterTestAddScreen }
                            options={
                                ({ route }) => ({
                                    title: route.params.pool.basics.name + ': New Test',
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderSaveTestButton pool={ route.params.pool } />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Test Details"
                            component={ WaterTestDetailsScreen }
                            options={
                                ({ route }) => ({
                                    title: 'Test Details',
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                })
                            }
                        />
                        <MyPoolsStack.Screen
                            name="Test History"
                            component={ WaterTestScreen }
                            options={
                                ({ route }) => ({
                                    title: route.params.pool.basics.name + ': Water Tests',
                                    headerLeft: (props) => (
                                        <HeaderBackButton />
                                    ),
                                    headerRight: (props) => (
                                        <HeaderAddTestButton pool={ route.params.pool } />
                                    ),
                                })
                            }
                        />
                    </MyPoolsStack.Navigator>
                </NavigationContainer>
            </>
        );
    }
}

export default MyPoolsStackNav;
