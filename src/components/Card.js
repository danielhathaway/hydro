import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardTitleGradient from './CardTitleGradient';
import getUniqueKey from './getUniqueKey';

const Card = (props) => {

	function wrapContent (content) {
		let output = [];
		for (let i = 0; i < content.length; i++) {
			output.push(
				<View
					style={
						i === 0 ?
							[ styles.cardcontents, props.cardcontentsstyle ] :
							[ styles.cardcontents, styles.dynamiccardcontents, props.cardcontentsstyle ]
					}
				>
					{ content[i] }
				</View>
			);
		}
		return output;
	}

	let dynamiccontent = props.content === undefined || !(Array.isArray(props.content)) ? [] : wrapContent(props.content);


	if (props.type !== undefined ) {

		if (props.type === 'title-and-details' && props.details !== undefined) {
			return (
				<View
					style={
						props.children !== undefined && props.children !== false ?
							[ styles.card, props.style ] :
							[ styles.card, styles.collapsedcard, props.style ]
					}
				>
					<CardTitleGradient
						style={
							props.children !== undefined && props.children !== false ?
								[ props.gradientstyle ] :
								[ styles.collapsedcardtitlegradient, props.gradientstyle ]
						}
					>
						<View
							style={
								props.children !== undefined && props.children !== false ?
									[ styles.cardtitle, styles.cardtitleanddetails, props.titlestyle ] :
									[ styles.cardtitle, styles.collapsedcardtitle, styles.cardtitleanddetails, props.titlestyle ]
							}
						>
							<View style={{ flex: 1 }}>
								<Text style={[ styles.cardtitletext, props.titletextstyle ]}>
									{ props.title }
								</Text>
							</View>
							<View style={{ flex: 1, justifyContent: 'flex-end' }}>
								<Text style={[ styles.carddetailstext, props.detailstextstyle ]}>
									{ props.details }
								</Text>
							</View>
				        </View>
					</CardTitleGradient>
					<View
						style={
							props.children !== undefined && props.children !== false ?
								[ styles.cardcontents, props.cardcontentsstyle ] :
								[ styles.cardcontents, styles.collapsedcardcontents, props.cardcontentsstyle ]
						}
					>
		                { props.children }
		            </View>
		        </View>
			);
		}

		else if (props.type === 'title-and-expand' && props.expandaction !== undefined && props.expanded !== undefined) {
			return (
				<View
					style={
						props.children !== undefined && props.children !== false ?
							[ styles.card, props.style ] :
							[ styles.card, styles.collapsedcard, props.style ]
					}
				>
					<CardTitleGradient
						style={
							props.children !== undefined && props.children !== false ?
								[ props.gradientstyle ] :
								[ styles.collapsedcardtitlegradient, props.gradientstyle ]
						}
					>
			            <View
							style={
								props.children !== undefined && props.children !== false ?
									[ styles.cardtitle, styles.cardtitleanddetails, props.titlestyle ] :
									[ styles.cardtitle, styles.collapsedcardtitle, styles.cardtitleanddetails, props.titlestyle ]
							}
						>
							<View style={{ flex: 1 }}>
								<Text style={[ styles.cardtitletext, props.titletextstyle ]}>
									{ props.title }
								</Text>
							</View>
							<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>
								<TouchableOpacity
									style={{
										alignItems: 'flex-end',
									}}
									onPress={ props.expandaction }
								>
									<Text style={{ color: '#ffffff', fontSize: 20 }}>
										{ props.expanded ? '▼' : '▲' }
									</Text>
								</TouchableOpacity>
							</View>
		            	</View>
					</CardTitleGradient>
		            <View
						style={
							props.children !== undefined && props.children !== false ?
								[ styles.cardcontents, props.cardcontentsstyle ] :
								[ styles.cardcontents, styles.collapsedcardcontents, props.cardcontentsstyle ]
						}
					>
		                { props.children }
		            </View>
		        </View>
			);
		}

		else if (
			props.type === 'dynamic-expand' &&
			props.expandaction !== undefined &&
			props.expanded !== undefined
		) {
			return (
				<View style={ styles.dynamiccardcontainer }>
					<View
						style={
							props.children !== undefined && props.children !== false && props.expanded && dynamiccontent.length > 0 ?
								[ styles.card, styles.dynamiccard, props.style ] :
								[ props.style ]
						}
					>
						<CardTitleGradient
							style={
								props.children !== undefined && props.children !== false && props.expanded && dynamiccontent.length > 0 ?
									[ props.gradientstyle ] :
									[ styles.collapsedcardtitlegradient, props.gradientstyle ]
							}
						>
				            <View
								style={
									props.children !== undefined && props.children !== false && props.expanded && dynamiccontent.length > 0 ?
										[ styles.cardtitle, styles.cardtitleanddetails, props.titlestyle ] :
										[ styles.cardtitle, styles.collapsedcardtitle, styles.cardtitleanddetails, props.titlestyle ]
								}
							>
								<View style={{ flex: 1 }}>
									<Text style={[ styles.cardtitletext, props.titletextstyle ]}>
										{ props.title }
									</Text>
								</View>
								<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>
									<TouchableOpacity
										style={{
											alignItems: 'flex-end',
										}}
										onPress={ props.expandaction }
									>
										<Text style={{ color: '#ffffff', fontSize: 20 }}>
											{ props.expanded ? '▼' : '▲' }
										</Text>
									</TouchableOpacity>
								</View>
			            	</View>
						</CardTitleGradient>
						{ props.expanded &&
						<>
							{ dynamiccontent }
						</>
						}
			        </View>
					{ props.expanded &&
					<>
						{ props.children }
					</>
					}
				</View>
			);
		}

	}

    return (
		<View
			style={
				props.children !== undefined && props.children !== false ?
					[ styles.card, props.style ] :
					[ styles.card, styles.collapsedcard, props.style ]
			}
		>
			<CardTitleGradient
				style={
					props.children !== undefined && props.children !== false ?
						[ props.gradientstyle ] :
						[ styles.collapsedcardtitlegradient, props.gradientstyle ]
				}
			>
				<View
					style={
						props.children !== undefined && props.children !== false ?
							[ styles.cardtitle, props.titlestyle ] :
							[ styles.cardtitle, styles.collapsedcardtitle, props.titlestyle ]
					}
				>
					<Text style={[ styles.cardtitletext, props.titletextstyle ]}>
						{ props.title }
					</Text>
				</View>
			</CardTitleGradient>
			<View
				style={
					props.children !== undefined && props.children !== false ?
						[ styles.cardcontents, props.cardcontentsstyle ] :
						[ styles.cardcontents, styles.collapsedcardcontents, props.cardcontentsstyle ]
				}
			>
				{ props.children }
			</View>
		</View>
    );

}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: 'column',
		marginBottom: 20,
		backgroundColor: 'transparent',
	},
	cardtitle: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderColor: interactivebluebordercolor,
	},
	cardtitletext: {
		fontSize: 20,
		fontFamily: 'sans-serif-light',
		color: lighttextcolor,
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	carddetailstext: {
		alignSelf: 'flex-end',
		fontSize: 14,
		fontFamily: 'sans-serif-condensed',
		color: lighttextcolor,
		textShadowRadius: 3,
		textShadowColor: textshadowcolor,
	},
	cardcontents: {
		padding: 10,
		backgroundColor: contentbgcolor,
		borderWidth: 1,
		borderColor: interactivebluebordercolor,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		elevation: 5,
	},
	dynamiccardcontainer: {
		marginBottom: 20,
	},
	dynamiccard: {
		marginBottom: 0,
	},
	collapsedcardcontents: {
		padding: 0,
	},
	dynamiccardcontents: {
		marginTop: 10,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	collapsedcardtitle: {
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	cardtitlegradient: {
		flex: 1,
		borderWidth: 0,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	collapsedcardtitlegradient: {
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	cardtitleanddetails: {
		flexDirection: 'row',
		paddingRight: 15,
	},
});

export default Card;
