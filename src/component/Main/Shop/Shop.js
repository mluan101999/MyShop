import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window')
import Home from './Home/Home'
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

import Header from './Header';
import Swiper from 'react-native-swiper';

const home = require('../../../media/appIcon/home.png');
const home0 = require('../../../media/appIcon/home0.png');
const cart = require('../../../media/appIcon/cart.png');
const cart0 = require('../../../media/appIcon/cart0.png');
const contact = require('../../../media/appIcon/contact.png');
const contact0 = require('../../../media/appIcon/contact0.png');
const search = require('../../../media/appIcon/search.png');
const search0 = require('../../../media/appIcon/search0.png');

const Shop = ({ navigation }) => {
   
    return (     
        <View style={{ flex: 1, backgroundColor: '#85A6C9' }}>
            <Header navigation={navigation} />
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray' }}>
                <Tab.Screen  name="Home" component={Home} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={home} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Cart" component={Cart} screenOptions tabBarBadge={1}
                    options={{                       
                        tabBarIcon: () => {
                            return <Image source={cart} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Search" component={Search} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={search} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Contact" component={Contact} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={contact} style={{ width: 30, height: 30 }} />
                        }
                    }} />
            </Tab.Navigator>
        </View>
    )
}
export default Shop