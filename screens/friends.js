import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FriendsScreen extends Component {
    constructor(props) {
        super(props)

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

    getData = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        return fetch("http://localhost:3333/api/1.0.0/search", {
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

    checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if (value == null) {
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>Loading..</Text>
                </View>
            );
        } else {
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

                </View>
            );
        }

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mistyrose',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: "#1e90ff",
    },
    item: {
        backgroundColor: 'lightpink',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

});


export default FriendsScreen;