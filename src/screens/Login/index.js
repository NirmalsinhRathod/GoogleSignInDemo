import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure();
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: ''
        }
    }
   
    onPressSign() {
        const { navigate } = this.props.navigation;
        try {
            GoogleSignin.hasPlayServices();
            let userdata = GoogleSignin.signIn();
            //this.setState({ userInfo: userdata });
            let isLoggedIn = GoogleSignin.isSignedIn()
            if (isLoggedIn) {
                //this.getCurrentUser()
                // let currentUser = GoogleSignin.getCurrentUser();
                // console.log("currentUser ==> "+JSON.stringify(currentUser))
                navigate('Details')
            }

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert(statusCodes.SIGN_IN_CANCELLED)
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert(statusCodes.IN_PROGRESS)
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert(statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
                // play services not available or outdated
            } else {
                //alert('Else')
                // some other error happened
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <GoogleSigninButton style={
                    styles.googlebutton
                }
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => { this.onPressSign() }}
                />
            </View>
        );
    }
}
