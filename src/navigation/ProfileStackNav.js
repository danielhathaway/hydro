import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderMenuButton from '../components/header/HeaderMenuButton';
import HeaderBackButton from '../components/header/HeaderBackButton';

import ProfileScreen from '../screens/ProfileScreen';

import Styles from '../styles/Styles';

class ProfileStackNav extends Component {

    constructor(props){
        super(props);
		this.drawernav = this.props.navigation;
    }

    render(){
        const ProfileStack = createStackNavigator();
        return (
            <>
                <NavigationContainer independent={true}>
                    <ProfileStack.Navigator
                    initialRouteName="Profile"
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
                        <ProfileStack.Screen
                            name="Profile"
                            component={ProfileScreen}
							options={
                                ({ route }) => ({
                                    title: 'My Profile',
                                    headerLeft: (props) => (
                                        <HeaderMenuButton drawernav={ this.drawernav } />
                                    ),
                                })
                            }
                        />
                    </ProfileStack.Navigator>
                </NavigationContainer>
            </>
        );
    }
}

export default ProfileStackNav;
