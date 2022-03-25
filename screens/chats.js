import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ChatScreen extends Component {
    constructor() {
        super();
        this.state = {
            chats: [
                {
                    id: 1,
                    name: 'John Smith',
                    snippet: 'An example of how some works can make a webpage or socail media page look interesting.'
                },
                {
                    id: 2,
                    name: 'Karin Johnson',
                    snippet: 'Or even quire ful and busy, by making the font bigger and bolder, one can present',

                },
                {
                    id: 3,
                    name: 'Matthew Henry',
                    snippet: 'An interesting work of art, I believe',

                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.chats}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                            <View style={styles.chatItem}>
                                <View>
                                    <Text style={styles.chatName}>{item.name}</Text>
                                    <Text style={styles.chatSnippet}>{item.snippet}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
    },
    chatItem: {
        height: 80,
        flexDirection: 'row',
        borderBottomColor: '#efefef',
        borderBottomWidth: 1
    },
    chatName: {
        padding: 3,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    chatSnippet: {
        padding: 3,
        color: 'lightpink'
    }
})


export default ChatScreen;
