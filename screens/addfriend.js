import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
        }
    }

    // Accecpting the friend request
    friendrequests = () => {
        return fetch("http://localhost:3333/api/1.0.0/friendrequests", {
            method: 'GET',
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
                console.log("Friend added to User with ID: ", responseJson);
                this.props.navigation.navigate("Friends");
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                        onPress={() => this.FriendRequest()}>
                        Add Friend
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
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}> You have no friends... At all</Text>
                </View>
            );
        }
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

    text:
    {
        fontsize: '30%',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default AddFriend;