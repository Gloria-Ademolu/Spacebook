import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photo: null,
            isLoading: true
        }
    }

    get_profile_image = () => {
        fetch("http://localhost:3333/api/1.0.0/user/",{
            method: 'GET',
            headers: {
                'X-Authorization': ""
            }
        })
            .then((res) => {
                return res.blob();
            })
            .then((resBlob) => {
                let data = URL.createObjectURL(resBlob);
                this.setState({
                    photo: data,
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log("error", err)
            });
    }
    componentDidMount() {
        this.get_profile_image();
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: this.state.photo,
                        }}
                        style={{
                            width: 400,
                            height: 400,
                            borderWidth: 5
                        }}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProfilePage;