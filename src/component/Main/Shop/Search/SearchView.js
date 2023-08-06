import React, { Component } from 'react'
import { View,Text,TouchableOpacity } from 'react-native'

const SearchView = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:'#D6D6D6'}}>
            <Text>SearchView Component</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('ProductDetail');
            }}>
                <Text>Go to ProductDetail</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SearchView