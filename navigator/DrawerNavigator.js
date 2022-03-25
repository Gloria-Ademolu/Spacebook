/*import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeDrawerNavigator } from '@react-navigation/drawer';

import Friends from '../screens/Friends';
import AddFriend from '../screens/AddFriend';
import FriendChat from '../screens/FriendChat';

const Drawer = createNativeDrawerNavigator()

class DrawerNavigator extends Component {
    render() {
        //Building the Drawer Navigator
        return (
            <Drawer.Navigator initialRouteName='Profile'>
                
                <Drawer.Screen name="Friends" component={Friends} options={{
                    title: 'Friends', headerTitle: 'FRIEND LIST',
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

                <Drawer.Screen name="AddFriend" component={AddFriend} options={{
                    title: 'AddFriend', headerTitle: "FRIEND'S REQUEST",
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

                <Drawer.Screen name="FriendChat" component={FriendChat} options={{
                    title: 'FriendChat', headerTitle: 'CHATS',
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
    }
});

export default DrawerNavigator; */
