import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screens/profile';
import Friends from '../screens/friends';
import AddFriend from '../screens/addfriend';
import FriendChat from '../screens/friendchat';

const Stack = createNativeStackNavigator()

class StackNavigator extends Component {
    render() {
        //Building the Stack Navigator
        return (
            <Stack.Navigator initialRouteName='Profile'>
                <Stack.Screen name="Profile" component={Profile} options={{
                    title: 'Profile', headerTitle: 'GLORIA ADEMOLU',
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }, backgroundColor: "#1e90ff"
                }} />

                <Stack.Screen name="Friends" component={Friends} options={{
                    title: 'Friends', headerTitle: 'FRIEND LIST',
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

                <Stack.Screen name="AddFriend" component={AddFriend} options={{
                    title: 'AddFriend', headerTitle: "FRIEND'S REQUEST",
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

                <Stack.Screen name="FriendChat" component={FriendChat} options={{
                    title: 'FriendChat', headerTitle: 'CHATS',
                    headerTitleAlign: 'center', headerStyle: { backgroundColor: 'lightpink' },
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
                }} />

            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
    }
});

export default StackNavigator;
