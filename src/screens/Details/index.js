import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

//import styles from './style';
export default class Details extends Component {
    constructor(props) {
        super(props);
        let userdata = '';
        this.state = {
            userInfo: '',
            email: '',
            name: ''
        }
    }
    componentDidMount() {
        //this.getCurrentUser();
    }
    getCurrentUser = async () => {
        userdata = await GoogleSignin.getCurrentUser();
        console.log("currentUser ==> " + JSON.stringify(userdata.user.email))
        this.setState({
            email: userdata.user.email,
            name: userdata.user.name
        });
    };
    render() {
        this.getCurrentUser();
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{'Email: ' + this.state.email}</Text>
                <Text>{'Name: ' + this.state.name}</Text>
            </View>
        );
    }
}
