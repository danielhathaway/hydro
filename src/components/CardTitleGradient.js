import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/Styles';

const CardTitleGradient = (props) => {
	return (
		<LinearGradient colors={['#0063ff', '#0053d6']} style={[ Styles.cardtitlegradient, props.style ]}>
			{ props.children }
		</LinearGradient>
	);
}

export default CardTitleGradient;
