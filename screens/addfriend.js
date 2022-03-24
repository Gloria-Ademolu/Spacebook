import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
        }
    }

    addfriends = () => {
        //Validation here...

        return fetch("http://localhost:3333/api/1.0.0/user", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                if (response.status === 201) {
                    return response.json()
                } else if (response.status === 400) {
                    throw 'Failed to add Friend';
                } else {
                    throw 'Something went wrong';
                }
            })
            .then((responseJson) => {
                console.log("User created with ID: ", responseJson);
                this.props.navigation.navigate("Friends");
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/profile2.png')}
                    style={{ width: 430, height: 100 }} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your friend's first name..."
                    onChangeText={(first_name) => this.setState({ first_name })}
                    value={this.state.first_name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your friend's last name..."
                    onChangeText={(last_name) => this.setState({ last_name })}
                    value={this.state.last_name}
                />
                <Button
                    icon="account"
                    mode="contained"
                    color="lightpink"
                    onPress={() => this.addfriend()}>
                    Add Friend
                </Button>
                <View style={{ flex: 0.07 }}></View>
                <Button
                    icon="home"
                    mode="contained"
                    color="lightpink"
                    onPress={() => this.props.navigation.navigate("Friends")}>
                    Friends
                </Button>
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
    input: {
        height: 50,
        width: 325,
        margin: 20,
        borderWidth: 3,
        padding: 20,
        color: 'black',
        fontSize: 20,
        backgroundColor: 'lightpink'
    },

});
export default AddFriend;