import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ChatScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            listData: []
        }
    }
    render(){
        return(
            <View>
                <Text> Well now itplase works gollum works</Text>
            </View>
        );
    }
}

export default ChatScreen;
