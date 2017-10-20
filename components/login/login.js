import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, CheckBox, Button } from 'react-native';

// Creating Login Page View 

export default class Login extends React.Component{
    justNow = () => {
        alert('Test');
    }
    render() {
        return(
            <View style={styles.loginBlock}>
                <View style={styles.imgCenter}>
                    <Image style={styles.imageCenter} source={require('../../assets/img/logo.png')}/>
                </View>
                <View style={styles.loginView}>
                    <TextInput style={styles.inputUser} placeholder="Username" />
                    <TextInput style={styles.inputUser} secureTextEntry={true} placeholderColor="#fff" placeholder="Password" />
                    <Button onPress={this.justNow} title="Log In" color="#5A7FAB" accessibilityLabel="Learn more about this purple button"/>
                    <Text style={styles.atag}>Don't have an account?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 40
        
    },
    loginBlock: {
        height: '100%',
        position: 'relative',
        alignItems: 'center'
    },
    loginView: {
        width: '90%',
        position: 'absolute', 
        bottom: 50,
        alignSelf: 'center',
        alignContent: 'center'
    },
    atag:{
        color:'#fff',
        marginTop: 10
    },

    loginWrapper: {
    },
    inputUser: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
        width: '100%',
    }
   
});
