import React, { Component } from 'react'
import { View,Text,StatusBar, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import App from './src/component/App';




StatusBar.setHidden(true);

const MyShop = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <App/>
    </SafeAreaView>
  )
};
export default MyShop;