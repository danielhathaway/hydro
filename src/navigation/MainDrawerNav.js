import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyPoolsStackNav from './MyPoolsStackNav';
import ProfileStackNav from './ProfileStackNav';
import LoginScreen from '../screens/LoginScreen';

class MainDrawerNav extends Component {

    constructor(props){
        super(props);
		this.save = this.props.save;
    }

    render() {
        const Drawer = createDrawerNavigator();
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='My Pools'
                    overlayColor='#00000077'
                    drawerStyle={{
                        backgroundColor: '#003b99EE',
                        width: '60%',
                    }}
                    drawerContentOptions={{
                        activeTintColor: '#003b99',
                        activeBackgroundColor: '#b8d3ff',
                        inactiveTintColor: '#FFFFFF',
                        inactiveBackgroundColor: '#0063ff',
                        labelStyle: {
                            fontSize: 16,
                            paddingLeft: 10,
                        }
                    }}
                >
					<Drawer.Screen
						name='My Pools'
						component={MyPoolsStackNav}
						initialParams={{ navigation: this.navigation, save: this.save }}
					/>
                    <Drawer.Screen
						name='Profile'
						component={ProfileStackNav}
						initialParams={{ navigation: this.navigation }}
					/>
                    <Drawer.Screen
						name='Login'
						component={LoginScreen}
						initialParams={{ navigation: this.navigation }}
					/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainDrawerNav;
