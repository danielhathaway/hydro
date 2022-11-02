import React from 'react';
import { Text, View } from 'react-native';
import ScrollScreen from '../components/ScrollScreen';
import Card from '../components/Card';
import PopupMenu from '../components/PopupMenu';
import Styles from '../styles/Styles';

const ProfileScreen = ({ navigation }) => {
    return (
        <ScrollScreen>
            <Card title="Information">
                <Text>This is the user profile screen.</Text>

				<PopupMenu triggertext='DEV TEST MENU' options={[{key: true, text: 'Yes'},{key: false, text: 'No'}]}/>

            </Card>
        </ScrollScreen>
    );
}

export default ProfileScreen;
