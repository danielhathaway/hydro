import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import CenterScreen from '../components/CenterScreen';
import Card from '../components/Card';
import Styles from '../styles/Styles';

// The login btn clips the textinput above it on gs6; need to rework spacers
class LoginScreen extends Component {
    state = {
        email: '',
        password: ''
     }
    constructor(){
        super();
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    render(){
        return (
            <CenterScreen>
                <Card title="Authentication">
                    <View>
                        <TextInput
                            style = {Styles.textinput}
                            underlineColorAndroid = "transparent"
                            placeholder = "Email"
                            placeholderTextColor = "#00000099"
                            autoCapitalize = "none"
                            onChangeText = {this.handleEmail}
                        />
                    </View>
                    <View>
                        <TextInput
                            style = {Styles.textinput}
                            underlineColorAndroid = "transparent"
                            placeholder = "Password"
                            placeholderTextColor = "#00000099"
                            autoCapitalize = "none"
                            onChangeText = {this.handlePassword}
                        />
                    </View>
                </Card>
                <View style={Styles.buttoncontainer}>
                    <TouchableOpacity
                        style={Styles.button}
                        title="Login"
                    >
                        <Text style={Styles.buttontext}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </CenterScreen>
        );
    }
}

export default LoginScreen;
