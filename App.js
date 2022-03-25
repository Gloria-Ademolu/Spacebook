import 'react-native-gesture-handler'

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from './navigator/MainTabNavigator'

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <MainTabNavigator />
            </NavigationContainer>
        );

    }
}

export default App;