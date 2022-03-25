import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            listData: []
        }
    }
    render() {

        return (
            <View>
                <Text> Welllllll </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
    },

});

export default ProfilePage;