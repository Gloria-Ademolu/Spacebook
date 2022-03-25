import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

class CameraScreen extends Component {
    constructor(props) {
        super(props);

        // Camera status to be used 
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.front
        }
    }
    async componentDidMount() {
        const { status } = await Camera.requestCameraPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    sendToServer = async (data) => {
        // Get these from AsyncStorage
        let id = 8;
        let token = "2c4552c30845d5ce1c959f6b15c29868"
        
        let res = await fetch(data.base64);
        let blob = await res.blob();

        return fetch("http://localhost:3333/api/1.0.0/user/" + id + "/photo", {
            method: "POST",
            headers: {
                "Content-Type": "image/png",
                "X-Authorization": token
            },
            body: blob
        })
            .then((response) => {
                console.log("Picture added", response);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    takePicture = async () => {
        if (this.camera) {
            const options = {
                quality: 0.5,
                base64: true,
                onPictureSaved: (data) => this.sendToServer(data)
            };
            await this.camera.takePictureAsync(options);
        }
    }

    render() {
        // To check if the app has permission to use the camera
        if (this.state.hasPermission) {
            return (
                <View style={styles.container}>
                    <Camera
                        style={styles.camera}
                        type={this.state.type}
                        ref={ref => this.camera = ref}
                    >
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.takePicture();
                                }}>
                                <Text style={styles.text}> Take Photo </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        } else {
            return (
                <Text>Camera not accessable</Text>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraScreen;