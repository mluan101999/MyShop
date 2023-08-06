import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchView from './SearchView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator();

const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="SearchView" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="SearchView" component={SearchView} navigator = {navigator} />                   
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Search