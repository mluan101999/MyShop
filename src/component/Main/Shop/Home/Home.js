import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../Home/HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from './ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="HomeVIew" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="HomeView" component={HomeView} navigator = {navigator} />
                    <Stack.Screen name="ListProduct" component={ListProduct} />
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Home