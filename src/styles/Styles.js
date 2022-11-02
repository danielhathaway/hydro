import { StyleSheet } from 'react-native';
import '../globalVars.js';

const Styles = StyleSheet.create({

	bold: {
		fontWeight: 'bold',
	},
	center: {
		alignSelf: 'center',
	},
	flexone: {
		flex: 1,
	},


	contentbgcolor: {
		backgroundColor: contentbgcolor,
	},
	navbg: {
		backgroundColor: navbgcolor,
	},
	inputbgcolor: {
		backgroundColor: inputbgcolor,
	},
	lighttext: {
		color: lighttextcolor,
	},
	darktext: {
		color: darktextcolor,
	},
	thintext: {
		fontFamily: 'sans-serif-light',
	},
	condensedtext: {
		fontFamily: 'sans-serif-condensed',
	},
	thicktext: {
		fontFamily: 'sans-serif-medium',
	},
	textshadow: {
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	interactivegreencolor: {
		color: interactivegreencolor,
	},
	interactivegreenbgcolor: {
		backgroundColor: interactivegreencolor,
	},
	interactivegreenborder: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: interactivegreenbordercolor,
	},
	interactivebluecolor: {
		color: interactivebluecolor,
	},
	interactiveblueborder: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: interactivebluebordercolor,
	},
	interactivetextbluecolor: {
		color: interactivetextbluecolor,
	},
	interactivetextdarkbluecolor: {
		color: interactivetextdarkbluecolor,
	},
	interactiveredcolor: {
		color: interactiveredcolor,
	},


	safeview: {
		flex: 1,
		backgroundColor: screenbgcolor,
	},
	scrollview: {
		flex: 1,
		backgroundColor: screenbgcolor,
	},
	scrollviewcontainer: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 15,
		marginBottom: 15,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: screenbgcolor,
	},
	screen: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		padding: 10,
		backgroundColor: screenbgcolor,
	},
	centerscreen: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: screenbgcolor,
	},
	headertext: {
		fontSize: 24,
		fontFamily: 'sans-serif-light',
	},
	headerbtn: {
		padding: 10,
		backgroundColor: 'transparent',
	},
	headerbtntxt: {
		fontSize: 16,
		fontFamily: 'sans-serif-light',
		color: lighttextcolor,
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	headerbtnsymbol: {
		paddingBottom: 3,
		fontSize: 40,
		fontFamily: 'sans-serif-light',
		color: lighttextcolor,
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	headerbtnsymbolleft: {
		paddingRight: 5,
	},
	headerbtnsymbolright: {
		paddingLeft: 5,
	},
	headerleftcontainer: {
		padding: 10,
	},
	headerrightcontainer: {
		padding: 10,
	},
	buttoncontainer: {
		justifyContent: 'center',
		alignSelf: 'stretch',
		marginTop: 10,
		backgroundColor: screenbgcolor,
		color: 'transparent',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		elevation: 5,
	},
	button: {
		alignSelf: 'stretch',
		padding: 10,
		backgroundColor: interactivegreencolor,
		borderWidth: 1,
		borderColor: interactivegreenbordercolor,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	buttontext: {
		alignSelf: 'center',
		color: lighttextcolor,
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	buttonlistitemspacer: {
		borderBottomWidth: 1,
		borderColor: '#BBBBBB',
	},

});

export default Styles;
