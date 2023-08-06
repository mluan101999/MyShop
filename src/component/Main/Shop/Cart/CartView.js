import React, { Component } from 'react'
import { View,Text,TouchableOpacity } from 'react-native'

const CartView = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:'#D6D6D6'}}>
            <Text>CartView Component</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('ProductDetail');
            }}>
                <Text>Go to ProductDetail</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartView