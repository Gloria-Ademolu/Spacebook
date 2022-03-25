import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LogoutScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: ''
        }
    }
    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.checkLoggedIn();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }
    // Function to check if a user is still logged in

    checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if (value !== null) {
            this.setState({ token: value });
        } else {
            this.props.navigation.navigate("Login");
        }
    }

    logout = async () => {
        let token = await AsyncStorage.getItem('@session_token');
        await AsyncStorage.removeItem('@session_token');
        return fetch("http://localhost:3333/api/1.0.0/logout", {
            method: 'POST',
            headers: {
                "X-Authorization": token
            }
        })
            /* if logging out fails, return to login screen.
             If that fails as well, throw an error */
            .then((response) => {
                if (response.status === 200) {
                    this.props.navigation.navigate("Login");
                } else if (response.status === 401) {
                    this.props.navigation.navigate("Login");
                } else {
                    throw 'Something went wrong';
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 5, margin: 5 }}>Goodbye my lover, goodbye my friend</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 5, margin: 5 }}>Don't go, don't leave, please stay with me</Text>
                <Button
                    title="I want to break free"
                    color="lightpink"
                    onPress={() => this.logout()}
                />
                <View style={{ flex: 0.05 }}></View>

                <Button
                    title="I'm coming home"
                    color="darksalmon"
                    onPress={() => this.props.navigation.navigate("Home")}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '5%',
        marginBottom: '10%',
        marginRight: '5%',
        marginLeft: '5%',
    },
});

export default LogoutScreen;