import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const iconBack = require('/Users/mluan/react_native/MyShop/src/media/appIcon/back_white.png');
const menuIcon1 = require('/Users/mluan/react_native/MyShop/src/media/appIcon/ic_logo.png');

const Authentication = ({navigation}) => {

    const[sign,setSign] = useState(true);
    const signIn = () => {
        setSign(true);
    }
    const signUp = () => {
        setSign(false);
    }
    const signInJSX = (
        <View>
            <TextInput style={styles.inputStyle} placeholder='Enter your Email' />
            <TextInput style={styles.inputStyle} placeholder='Enter your password' />
            <TouchableOpacity style={styles.signInButtonStyle}>
                <Text style={{ color: 'white' }}>SIGN IN NOW</Text>
            </TouchableOpacity>
        </View>
    );
    const signUpJSX = (
        <View>
            <TextInput style={styles.inputStyle} placeholder='Enter your name' />
            <TextInput style={styles.inputStyle} placeholder='Enter your email' />
            <TextInput style={styles.inputStyle} placeholder='Enter your password' />
            <TextInput style={styles.inputStyle} placeholder='Re-enter your password' />
            <TouchableOpacity style={styles.signInButtonStyle}>
                <Text style={{ color: 'white' }}>SIGN UP NOW</Text>
            </TouchableOpacity>
        </View>
    );
    const signOptions = sign ? signInJSX : signUpJSX;
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <TouchableOpacity onPress={({navigation}) => { navigation.navigate('Shop') }}>
                    <Image source={iconBack} style={styles.iconStyle} />
                </TouchableOpacity>
                <Text style={styles.tittleStyle}>Wearing a Dress</Text>
                <Image source={menuIcon1} style={{ width: 30, height: 30, marginRight: 15 }} />
            </View>
                {signOptions}
            <View style={styles.controlStyle}>
                <TouchableOpacity style={styles.signInStyle} onPress={() =>{
                    signIn();
                }}>
                    <Text style={sign ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpStyle} onPress={() =>{
                    signUp();
                }}>
                    <Text style={!sign ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 30, height: 30, marginLeft: 15
    },
    tittleStyle: {
        marginLeft: 10, fontSize: 25, color: 'white'
    },
    controlStyle: {
        flexDirection: 'row',
        width: 300,
        alignSelf:'center',
    },
    inactiveStyle: {
        color: "#D7D7D7",
    },
    activeStyle: {
        color: "#3EBA77",
    },
    signInStyle: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginRight: 2,
    },
    signUpStyle: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: 2,
    },
    inputStyle: {
        height: 50,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 30,
        paddingLeft: 10,
    },
    signInButtonStyle: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Authentication