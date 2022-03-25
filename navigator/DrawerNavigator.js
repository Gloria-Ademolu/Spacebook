import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import Friends from '../screens/Friends';
import Chats from '../screens/Chats';
import Search from '../screens/Search';;

const Drawer = createDrawerNavigator()

// create another navigation - Drawer 
class DrawerNavigator extends Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName='Profile'>
                <Drawer.Screen name='Profile'
                    component={Profile}
                />

                <Drawer.Screen name='Friends'
                    component={Friends} />

                <Drawer.Screen name='Chats'
                    component={Chats} />

                <Drawer.Screen name='Search'
                    component={Search} />


            </Drawer.Navigator>
        );
    }

}

export default DrawerNavigator;