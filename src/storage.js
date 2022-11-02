import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage extends Component {

	constructor(props) {
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

}

export default Storage;
