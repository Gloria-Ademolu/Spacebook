import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfileScreen extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <Text>
                    Well once agaon
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
    },
    textInput: {
        padding: '7%',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#ffe4e1',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default ProfileScreen;