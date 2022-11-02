import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import getUniqueKey from '../getUniqueKey';
import Styles from '../../styles/Styles';

const DynamicCardButtons = (props) => {

	let disabled = props.disabled !== undefined ? props.disabled : false;

    const requestDuplicate = () => {
		disabled = true;
		props.id !== undefined ? props.copyaction(props.id) : props.copyaction();
		disabled = false;
    }
    const requestRemove = () => {
		disabled = true;
		props.id !== undefined ? props.removeaction(props.id) : props.removeaction();
		disabled = false;
    }
	const requestExpand = () => {
		disabled = true;
		props.id !== undefined ? props.expandaction(props.id) : props.expandaction();
		disabled = false;
	}

    return (
        <View
			style={{
		        flexDirection: 'row',
		        justifyContent: 'center',
		        alignItems: 'center',
        	}}
		>
			{ props.expandaction !== undefined &&
				<View style={{
					flex: 1,
					alignItems: 'stretch',
				}}>
					<TouchableOpacity
						style={{
							paddingLeft: 3,
							paddingRight: 3,
							alignItems: 'center',
						}}
						disabled= { disabled || props.disabled }
						onPress={ requestExpand }
					>
						<Text style={[ Styles.interactivetextbluecolor, props.expandbuttonstyle, { marginTop: 5, marginBottom: 5, fontSize: 16 } ]}>
							{ props.expanded ? 'Show Less' : 'Show More' }
						</Text>
					</TouchableOpacity>
				</View>
			}
			{ props.copyaction !== undefined &&
				<View style={{
	                flex: 1,
	                alignItems: 'stretch',
	            }}>
	                <TouchableOpacity
	                    style={{
	                        paddingLeft: 3,
	                        paddingRight: 3,
	                        alignItems: 'center',
	                    }}
	                    disabled= { disabled || props.disabled }
	                    onPress={ requestDuplicate }
	                >
	                    <Text style={[ Styles.interactivegreencolor, props.copybuttonstyle, { marginTop: 5, marginBottom: 5, fontSize: 16 } ]}>
	                        Copy
	                    </Text>
	                </TouchableOpacity>
	            </View>
			}
			{ props.removeaction !== undefined &&
	            <View style={{
	                flex: 1,
	                alignItems: 'stretch',
	            }}>
	                <TouchableOpacity
	                    style={{
	                        paddingLeft: 3,
	                        paddingRight: 3,
	                        alignItems: 'center',
	                    }}
	                    disabled= { disabled || props.disabled }
	                    onPress={ requestRemove }
	                >
	                    <Text style={[ Styles.interactiveredcolor, props.removebuttonstyle, { marginTop: 5, marginBottom: 5, fontSize: 16 } ]}>
	                        Delete
	                    </Text>
	                </TouchableOpacity>
	            </View>
			}
        </View>
    );

}

export default DynamicCardButtons;
