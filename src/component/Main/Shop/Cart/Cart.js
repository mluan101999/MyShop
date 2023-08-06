import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartView from '../Cart/CartView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator();

const Cart = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="CartView" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="CartView" component={CartView} navigator = {navigator} />                   
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Cart