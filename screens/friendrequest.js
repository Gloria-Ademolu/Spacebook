import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FriendRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            listData: []
        }

    }
    componentDidMount() {
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.checkLoggedIn();
        });
        this.getData();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    getFriendsRequest= async () => {
        const value = await AsyncStorage.getItem('@session_token');
        return fetch("http://localhost:3333/api/1.0.0/frienrequests", {
            method: 'GET',
            'headers': {
                'X-Authorization': value
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else if (response.status === 401) {
                    this.props.navigation.navigate("Login");
                } else {
                    throw 'Something went wrong';
                }
            })
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    listData: responseJson
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getFriendsRequest = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if (value == null) {
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <FlatList style={styles.sectionHeader}
                        data={this.state.listData}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={styles.item}>{item.user_givenname} {item.user_familyname}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.user_id.toString()}
                    />
                    <Button
                        icon="account-multiple-plus"
                        mode="contained"
                        color="purple"
                        onPress={() => this.AddFriend()}>
                        Would you like to add this person as a friend?
                    </Button>

                    <Button
                        icon="account-multiple-plus"
                        mode="contained"
                        color="red"
                        onPress={() => this.FriendRequest()}>
                        Reject Request
                    </Button>
                </View>
            );
        }

    }
}
export default FriendRequest;