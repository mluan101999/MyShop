import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductDetail = ({navigation}) => {
    return (
            <View style={{flex:1,backgroundColor:'gray'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
}

export default ProductDetail