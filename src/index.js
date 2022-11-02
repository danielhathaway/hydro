import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import MainDrawerNav from './navigation/MainDrawerNav';
import './globalVars.js';
import './components/examplePoolsArray.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {

    constructor(){
        super();
    }

	save(key, value) {
		let a = async (k, v) => {
			try {
				const jsonValue = JSON.stringify(v);
				await AsyncStorage.setItem(k, jsonValue);
				return true;
			}
			catch (e) {
				console.log("An error occured while saving the key "+ k +"(async save)");
				return false;
			}
		}
		return a;
	}

	load(key) {
	 	let a = async (k) => {
			try {
				const jsonValue = await AsyncStorage.getItem(k)
				return jsonValue != null ? JSON.parse(jsonValue) : null;
			}
			catch (e) {
				console.log("An error occured while loading the key "+ k +" (async load)")
			}
		}
	}

    render() {
        return (
			<MenuProvider style={{ flexDirection: 'column' }}>
            	<MainDrawerNav save={ this.save } />
			</MenuProvider>
        );
    }
}

export default App;
