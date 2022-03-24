import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class HomeScreen extends Component {

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    multiline // Paragraph can be inputted
                    numberOfLines={5} // text moves on to next line 5 times
                    maxLength={250}// lenght of words that can be written in the text input box
                    placeholder="I gotta say what's on my mind"
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

export default HomeScreen;