import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

const PoolTextInput = (props) => {
    const [value, changeText] = typeof props.value === 'string' ? useState(props.value) : useState(String(props.value));
    const [pointerEvents, handleScroll] = useState('none');
    let inputRef = React.createRef();
    const placeholder = props.placeholder;
	const inputType = props.inputType;
    const keyboardType = inputType === 'numbers' || props.inputType === 'float' ? 'number-pad' : 'visible-password';

    const updateField = () => {
        props.form !== undefined ?
			props.doneEditingAction(props.form, props.field, value.replace(/([' '])+$/g, "").replace(/([' '])+$/g, "")) :
			props.doneEditingAction(props.field, value.replace(/([' '])+$/g, "").replace(/([' '])+$/g, ""));
    }

    const sanitize = (text) => {
        if (inputType === 'numbers') {
            changeText(text.replace(/([^0-9]+)/g, ""));
        }
        else if (inputType === 'float') {
            changeText(text.replace(/(\d*\.)?\d+|^(\d+\.)?/g, ""));
        }
        else {
			let clean = text.replace(/([^A-Za-z0-9' ']+)+|^([ ])+/g, "");
			clean = clean.replace(/([' '][' '])/g, " ");
            changeText(clean);
        }
    }

	let inputstyle = [styles.textinput];
	props.context !== undefined && props.context === 'afterradio' ? inputstyle = [...inputstyle, styles.textinputafterradio] : null;
	props.context !== undefined && props.context === 'endofcard' ? inputstyle = [...inputstyle, styles.textinputendofcard] : null;
	inputstyle = [...inputstyle, props.style];

    return (
        <View style={ styles.textinputcontainer }>
            <TouchableOpacity
                onPress={() => { handleScroll('auto'); inputRef.focus() } }
                activeOpacity={1}
            >
                <View pointerEvents={ pointerEvents }>
                    <TextInput
                        ref={ ref => inputRef = ref }
                        key={ props.field }
                        style={ inputstyle }
                        value={ value }
                        onChangeText={ text => sanitize(text) }
                        onEndEditing={ () => updateField() }
                        onBlur={ () => handleScroll('none') }
                        clearButtonMode="while-editing"
                        placeholder={ placeholder }
                        placeholderTextColor="#777777"
                        underlineColorAndroid="transparent"
                        autoCorrect={ false }
                        keyboardType={ keyboardType }
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const  styles = StyleSheet.create({
	textinput: {
		height: 40,
		paddingLeft: 10,
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderColor: darkgreybordercolor,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		fontSize: 16,
	},
	textinputafterradio: {
		marginTop: -5,
	},
	textinputendofcard: {
		marginBottom: 5,
	},
	textinputcontainer: {
		marginTop: 10,
	},
});

export default PoolTextInput;
