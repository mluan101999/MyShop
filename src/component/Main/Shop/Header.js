import { View,Text, Dimensions,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';

const {height} = Dimensions.get('window')

const menuIcon = require('/Users/mluan/react_native/MyShop/src/media/appIcon/ic_menu.png');
const menuIcon1  = require('/Users/mluan/react_native/MyShop/src/media/appIcon/ic_logo.png');
const Header = ({navigation}) =>{
    return(
        <View style={{ height: height / 8 }}>
            <View style={{ height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>  
                <TouchableOpacity onPress={() => {navigation.openDrawer()} }>
                <Image source={menuIcon} style={{width: 30, height: 30,marginLeft:15}}/>
                </TouchableOpacity>        
                <Text style={{marginLeft:10,fontSize:20,color:'white'}}>Wearing a Dress</Text>
                <Image source={menuIcon1} style={{width: 30, height: 30,marginRight:15}}/>  
            </View>
            <View style={{height:'50%',justifyContent:'center',alignItems:'center'}}>
               <TextInput style={{height:'80%',width:'93%',backgroundColor:'white',borderRadius:10,alignItems:'center',justifyContent:'center'}} placeholder='What do you want to buy?'/>
            </View>
        </View> 
    )
}

export default Header