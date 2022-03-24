import React, { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    login = async () => {
        //Validation here...

        return fetch("http://localhost:3333/api/1.0.0/login", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else if (response.status === 400) {
                    throw 'Invalid email or password';
                } else {
                    throw 'Something went wrong';
                }
            })
            .then(async (responseJson) => {
                console.log(responseJson);
                await AsyncStorage.setItem('@session_token', responseJson.token);
                this.props.navigation.navigate("Home");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/space.png')}
                    style={{ width: 280, height: 70, }} />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email..."
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password..."
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                />
                <Button
                    icon="login"
                    mode="contained"
                    color="lightpink"
                    onPress={() => this.login()}>
                    Login
                </Button>

                <View style={{ flex: 0.05 }}></View>

                <Button
                    icon="account"
                    mode="contained"
                    color="lightpink"
                    onPress={() => this.props.navigation.navigate("Signup")}>
                    Create an account
                </Button>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '10%',
        marginBottom: '15%',
        marginRight: '15%',
        marginLeft: '15%',
    },
    input: {
        height: '5%',
        width: '70%',
        margin: 20,
        borderWidth: 3,
        padding: 20,
        color: 'black',
        fontSize: 18,
        backgroundColor: 'lightpink'
    },

});

export default LoginScreen;