import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Pool from './Pool';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

class MyPools extends Component {

    constructor(props) {
        super(props);
		this.state = { pools: this.props.pools }
    }

    buildOutput = (pools) => {
		if (pools.length == 0) {
			return (
				<View style={[
	                Styles.contentbgcolor,
	                {
						flex: 1,
						flexDirection: 'column',
	                    marginBottom: 15,
	                    padding: 10,
	                }
	            ]}>
	                <Text>
						<Text style={{ fontWeight: 'bold', }}>You haven't added any pools yet!</Text>{"\n"}{"\n"}
	                    Tap the new pool button at the top right of your screen to get started.
	                </Text>
	            </View>
			);
		}
		else {
			let output = [];
			for (let i = 0; i < pools.length; i++) {
				output.push(
	                <Pool key={ getUniqueKey() } pool={ pools[i] } navigation={ this.props.navigation } />
	            );
	        }
			return output;
		}
    }

    render() {
        return (
            <>
                { this.buildOutput(this.state.pools) }
            </>
        );
    }
}

export default MyPools;
