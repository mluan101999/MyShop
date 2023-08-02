import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import profileImg from '/Users/mluan/react_native/MyShop/src/media/temp/profile.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

import OtherHistory from '../OrderHistory/OtherHistory'


const Menu = ({navigation}) => {
    const [log, setLog] = useState(false);
    const logOutJSX = (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnStyle} onPress={()=>{
                navigation.navigate('Authentication')            
            }}>
                <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    );
    const logInJSX = (
        <View style={styles.logInContainer}>
            <Text style={styles.userName}>Lang Minh Luan</Text>
            <View>
                <TouchableOpacity style={styles.btnSignInStyle} onPress={()=> {
                    navigation.navigate('OtherHistory');
                }}>
                    <Text style={styles.btnTextSignIn}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignInStyle} onPress={()=>{
                    navigation.navigate('ChangeInfo');
                }} >
                    <Text style={styles.btnTextSignIn}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignInStyle}>
                    <Text style={styles.btnTextSignIn}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <View />
        </View>
    );
    const mainJSX = log ? logInJSX : logOutJSX;
    return (
        <View style={styles.container}>
            <Image source={profileImg} style={styles.profile} />
            {mainJSX}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        alignItems: 'center',
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 30,
    },
    btnStyle: {
        height: 60,
        width: 200,
        marginTop: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    btnText: {
        color: '#34B089',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnSignInStyle: {
        height: 60,
        width: 200,
        marginTop: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 20,
    },
    logInContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userName: {
        color: 'white',
        fontSize: 20,
        paddingTop: 10
    },
})
export default Menu