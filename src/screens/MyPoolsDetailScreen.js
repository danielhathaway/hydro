import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import Card from '../components/Card';
import Detail from '../components/mypools/Detail';
import ButtonListItem from '../components/ButtonListItem';
import getUniqueKey from '../components/getUniqueKey';
import parseValue from '../components/forms/parseValue';
import Bold from '../components/Bold';
import Styles from '../styles/Styles';

const MyPoolsDetailScreen = ({ route, navigation }) => {

	const pool = route.params.pool;
	const id = pool.meta.id;
	const basics = pool.basics;
	const advanced = pool.advanced;
	const pumps = pool.pumps;
	const filters = pool.filters;
	const water = pool.water;
	const latesttest = water[0] === undefined ? undefined : water[0];

	const listHandler = () => {
		navigation.navigate('Edit Pool', { pool: pool });
	}

	const buildWater = () => {
		if (latesttest !== undefined) {
			return (
				<View key={ latesttest.key }>
					<TouchableOpacity
		                style={{
		                    flex: 1,
		                    backgroundColor: 'transparent',
		                }}
		                title="Test History"
		                onPress={() =>
		                    navigation.navigate('Test History', { pool: pool })
		                }
		            >
		                <Card type='title-and-details' title='Chemistry' details='tap to expand'>
		                    <View style={{flexDirection: 'column'}}>
								<Text style={{ paddingBottom: 10, fontSize: 16, color: '#00943e' }}>Last test was on { latesttest.datestr }</Text>
								<View style={{
									flexDirection: 'row',
								}}>
									<View style={{
										flex: 1.2,
									}}>
										{ ((basics.sanitizer === 'chlorine' || basics.sanitizer === 'swg') || basics.sanitizer === '') &&
										<>
											<Text><Bold>Total Chlorine: </Bold>{ latesttest.tc }</Text>
											<Text><Bold>Free Chlorine: </Bold>{ latesttest.fc }</Text>
										</>
										}
										{ (basics.sanitizer === 'swg' || basics.sanitizer === '') &&
											<Text><Bold>Salt: </Bold>{ latesttest.nacl }</Text>
										}
										{ (basics.sanitizer === 'bromine' || basics.sanitizer === '') &&
										<>

											<Text><Bold>Total Bromine: </Bold>{ latesttest.tb }</Text>
										</>
										}
										{ (basics.sanitizer === 'biguanide' || basics.sanitizer === '') &&
											<Text><Bold>Total Biguanide: </Bold>{ latesttest.bg }</Text>
										}
										<Text><Bold>PH:</Bold> { latesttest.ph }</Text>
										<Text><Bold>Total Alkalinity:</Bold> { latesttest.ta }</Text>
										<Text><Bold>Total Dissolved Solids:</Bold> { latesttest.tds }</Text>
										<Text><Bold>Calcium Hardness:</Bold> { latesttest.ch }</Text>
									</View>
									<View style={{
										flex: 1,
									}}>
										<Text><Bold>Cyanuric Acid:</Bold> { latesttest.ca }</Text>
										<Text><Bold>Iron:</Bold> { latesttest.fe }</Text>
										<Text><Bold>Copper:</Bold> { latesttest.cu }</Text>
										<Text><Bold>Phosphates:</Bold> { latesttest.phos }</Text>
									</View>
								</View>
		                    </View>
		                </Card>
		            </TouchableOpacity>
				</View>
			);
		}
		else {
			return null;
		}
	}

	const buildBasics = () => {
		let flex = [18, 22];
		return (
			<Card title="Basic Info" key={ basics.key }>
				<Detail flexes={flex} label='Name:' value={ basics.name } />
				<Detail flexes={flex} label='Volume:' value={ basics.volume } />
				<Detail flexes={flex} label='Structure:' value={ parseValue(StructureChoices, basics.structure) } />
				<Detail flexes={flex} label='Location:' value={ parseValue(LocationChoices, basics.location) } />
				<Detail flexes={flex} label='Material:' value={ parseValue(MaterialChoices, basics.material) } />
				<Detail flexes={flex} label='Sanitizer:' value={ parseValue(SanitizerChoices, basics.sanitizer) } />
				<Detail flexes={flex} label='Spa:' value={ parseValue(YesNoChoices, basics.spa) } />
				<Detail flexes={flex} label='Cover:' value={ parseValue(CoverChoices, basics.cover) } />
				{ basics.sanitizer === 'swg' &&
				<>
					<Detail flexes={flex} label='Chlorine Generator Mfg:' value={ basics.swgmfg } />
					<Detail flexes={flex} label='Chlorine Generator Model:' value={ basics.swgmodel } />
				</>
				}
				{ (basics.spa === true && basics.blower === true) &&
				<>
					<Detail flexes={flex} label='Spa Blower Mfg:' value={ basics.blowermfg } />
					<Detail flexes={flex} label='Spa Blower Model:' value={ basics.blowermodel } />
				</>
				}
				{ basics.cleaner === true &&
				<>
					<Detail flexes={flex} label='Cleaner Mfg:' value={ basics.cleanermfg } />
					<Detail flexes={flex} label='Cleaner Model:' value={ basics.cleanermodel } />
					{ basics.boosterpump === true &&
					<>
						<Detail flexes={flex} label='Booster Pump Mfg:' value={ basics.boosterpumpmfg} />
						<Detail flexes={flex} label='Booster Pump Model:' value={ basics.boosterpumpmodel} />
					</>
					}
				</>
				}
				{ (basics.waterfeatures === true && basics.waterfeaturesdescription !== '') &&
					<Detail flexes={flex} label='Water Features Description:' value={ basics.waterfeaturesdescription } />
				}
				{ basics.infinityedge !== ''  &&
					<Detail flexes={flex} label='Infinity Edge:' value={ parseValue(YesNoChoices, basics.infinityedge) } />
				}
				{ (basics.lights === true && basics.lightscount !== '') &&
					<Detail flexes={flex} label='Lights:' value={ basics.lightscount } />
				}
				{ basics.divingboard !== '' &&
					<Detail flexes={flex} label='Diving Board:' value={ parseValue(YesNoChoices, basics.divingboard) } />
				}
				{ basics.infinityedge !== '' &&
					<Detail flexes={flex} label='Removable Ladders:' value={ parseValue(YesNoChoices, basics.ladders) } />
				}
			</Card>
		);
	}

	const buildAdvanced = () => {
		let flex = [18, 22];
		return (
			<Card title="Advanced Info" key={ advanced.key }>
				{ advanced.plumbingdiameter !== '' &&
					<Detail flexes={flex} label='Plumbing Diameter:' value={ advanced.plumbingdiameter+'\"' } />
				}
				{ advanced.skimmerscount !== '' &&
					<Detail flexes={flex} label='Skimmer Count:' value={ advanced.skimmerscount } />
				}
				{ advanced.skimmersmfg !== '' &&
					<Detail flexes={flex} label='Skimmer Mfg:' value={ advanced.skimmersmfg } />
				}
				{ advanced.skimmersmodel !== '' &&
					<Detail flexes={flex} label='Skimmer Model:' value={ advanced.skimmersmodel } />
				}
				{ advanced.skimmerbaskettype !== '' &&
					<Detail flexes={flex} label='Skimmer Basket Type:' value={ advanced.skimmersbaskettype } />
				}
				<Detail flexes={flex} label='Floor Returns:' value={ parseValue(YesNoChoices, advanced.floorreturns) } />
				{ advanced.floorreturns === true &&
					<Detail flexes={flex} label='Floor Returns Count:' value={ advanced.floorreturnscount } />
				}
				<Detail flexes={flex} label='Automation:' value={ parseValue(YesNoChoices, advanced.automation) } />
				{ advanced.automation === true &&
				<>
					<Detail flexes={flex} label='Automation Mfg:' value={ advanced.automationmfg } />
					<Detail flexes={flex} label='Automation Model:' value={ advanced.automationmodel } />
				</>
				}
				<Detail flexes={flex} label='UV Sanitizer:' value={ parseValue(YesNoChoices, advanced.uv) } />
				{ advanced.uv === true &&
				<>
					<Detail flexes={flex} label='UV Sanitizer Mfg:' value={ advanced.uvmfg } />
					<Detail flexes={flex} label='UV Sanitizer Model:' value={ advanced.uvmodel } />
				</>
				}
			</Card>
		);
	}

	const buildPumps = () => {
		let flex = [3, 5];
		let output = pumps.map((item, n) => {
			let spacing = (pumps.length - 1) == n ? 0 : 10;
			return (
				<View key={ item.key } style={{ marginBottom: spacing }}>
					<Text style={{ fontSize: 16, paddingBottom: 5, }}>{ item.name }</Text>
					<Detail flexes={flex} label='Pump Mfg:' value={ item.pumpmfg } />
					<Detail flexes={flex} label='Pump Model:' value={ item.pumpmodel } />
					<Detail flexes={flex} label='Motor Mfg:' value={ item.motormfg } />
					<Detail flexes={flex} label='Motor Model:' value={ item.motormodel } />
					{ item.hp !== '' &&
						<Detail flexes={flex} label='Horsepower:' value={ item.hp } />
					}
					{ item.voltage !== '' &&
						<Detail flexes={flex} label='Voltage:' value={ item.voltage } />
					}
					{ item.serial !== '' &&
						<Detail flexes={flex} label='Serial Number:' value={ item.serial } />
					}
				</View>
			);
		});
		return (
			<Card title="System Info: Pumps">
				{ output }
			</Card>
		);
	}

	const buildFilters = () => {
		let flex = [3,5];
		let output = filters.map((item, n) => {
			let spacing = (filters.length - 1) == n ? 0 : 10;
			return (
				<View key={ item.key } style={{ marginBottom: spacing }}>
					<Text style={{ fontSize: 16, paddingBottom: 5, }}>{ item.name }</Text>
					<Detail flexes={flex} label='Filter Mfg:' value={ item.filtermfg } />
					<Detail flexes={flex} label='Filter Model:' value={ item.filtermodel } />
					<Detail flexes={flex} label='Filter Type:' value={ item.filtertype } />
					<Detail flexes={flex} label='Filter Size:' value={ item.filtersize+' ft²' } />
					{ item.valve !== '' &&
						<Detail flexes={flex} label='Valve Type:' value={ parseValue(FilterValveChoices, item.valve) } />
					}
					{ item.serial !== '' &&
						<Detail flexes={flex} label='Serial Number:' value={ item.serial } />
					}
				</View>
			);
		});
		return (
			<Card title="System Info: Filters">
				{ output }
			</Card>
		);
	}

	const buildHeaters = () => {
		let flex = [3,5];
		let output = heaters.map((item, n) => {
			let spacing = (heaters.length - 1) == n ? 0 : 10;
			return (
				<View key={ item.key } style={{ marginBottom: spacing }}>
					<Text style={{ fontSize: 16, paddingBottom: 5, }}>{ item.name }</Text>
					<Detail flexes={flex} label='Fuel Type:' value={ parseValue(HeaterFuelChoices, item.fuel) } />
					{ ((item.fuel === 'gas' || item.fuel === 'propane') || item.fuel === 'electric') &&
					<>
						<Detail flexes={flex} label='Heater Mfg:' value={ item.heatermfg } />
						<Detail flexes={flexes} label='Heater Model:' value={ item.heatermodel } />
						{ item.serial !== '' &&
							<Detail flexes={flex} label='Serial Number:' value={ item.serial } />
						}
					</>
					}
				</View>
			);
		});
		return (
			<Card title="System Info: Heaters">
				{ output }
			</Card>
		);
	}

	// DEV ONLY: this just uses static data for now until approved manager functionality has been implemented
	const buildManagers = () => {
		return (
			<Card title="Approved Managers" >
                <View style={ Styles.buttonlistitemspacer }></View>
                <ButtonListItem screen='Edit Pool' action={ listHandler } >
                    Pool Company Inc.
                </ButtonListItem>
                <View style={ Styles.buttonlistitemspacer }></View>
                <ButtonListItem screen='Edit Pool' action={ listHandler } >
                    Pool Company Co.
                </ButtonListItem>
                <View style={ Styles.buttonlistitemspacer }></View>
                <ButtonListItem screen='Edit Pool' action={ listHandler } >
                    Pool Company Llc.
                </ButtonListItem>
                <View style={ Styles.buttonlistitemspacer }></View>
            </Card>
		);
	}

    return (
        <ScrollScreen>
			{ buildWater() }
            { buildBasics() }
			{ buildAdvanced() }
            { buildPumps() }
			{ buildFilters() }
            { buildManagers() }
        </ScrollScreen>
    );
}

export default MyPoolsDetailScreen;
