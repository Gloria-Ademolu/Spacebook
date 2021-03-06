import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';
import Camera from '../screens/Camera';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

class MainTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName='Login'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Camera') {
              iconName = focused
                ? 'camera'
                : 'camera-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'people'
                : 'people-outline';
            } else if (route.name === 'Logout') {
              iconName = focused
                ? 'exit'
                : 'exit-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'blue',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{
          title: 'Home', headerTitleAlign: 'center',
          headerTitle: 'HOMEPAGE',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
        }} />

        <Tab.Screen name="Profile" component={DrawerNavigator} options={{
          title: 'Profile', headerTitleAlign: 'center', headerTitle: 'GLORIA ADEMOLU',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18, },
        }} />

        <Tab.Screen name="Camera" component={Camera} options={{
          title: 'Camera', headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18, },
        }} />

        <Tab.Screen name="Logout" component={Logout} options={{
          tabBarStyle: { display: "none" }, title: 'Logout',
          headerTitleAlign: 'center', headerTitle: 'SPACEBOOK LOGOUT',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18, }
        }} />

        <Tab.Screen name="Login" component={Login} options={{
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: "none" },
          title: 'Login', headerTitleAlign: 'center', headerTitle: 'SPACEBOOK LOGIN',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          }
        }} />

        <Tab.Screen name="Signup" component={Signup} options={{
          tabBarStyle: { display: "none" }, tabBarItemStyle: { display: 'none' },
          title: 'Sign up', headerTitleAlign: 'center', headerTitle: 'SPACEBOOK SIGN UP',
          headerStyle: { backgroundColor: 'lightpink', },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          }
        }} />
      </Tab.Navigator>
    );
  }
}

export default MainTabNavigator;