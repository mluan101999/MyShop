import React, { Component, useState, useEffect,createContext } from 'react'
import { ActivityIndicator, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window')
import Home from './Home/Home'
import Contact from './Contact/Contact';
import CartView from './Cart/Cart';
import Search from './Search/Search';

import Header from './Header';
import Swiper from 'react-native-swiper';

const home = require('../../../media/appIcon/home.png');
const home0 = require('../../../media/appIcon/home0.png');
const cartImage = require('../../../media/appIcon/cart.png');
const cart0 = require('../../../media/appIcon/cart0.png');
const contact = require('../../../media/appIcon/contact.png');
const contact0 = require('../../../media/appIcon/contact0.png');
const search = require('../../../media/appIcon/search.png');
const search0 = require('../../../media/appIcon/search0.png');

export const cartContext = createContext(null)
export const addCartContext = createContext(null)

const Shop = ({ navigation }) => {
    const [cart,addCart] = useState([])
    return (     
        <cartContext.Provider value={{cart, addCart}}> 
        <View style={{ flex: 1, backgroundColor: '#85A6C9' }}>
            <Header navigation={navigation} />
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray' }}>
                <Tab.Screen  name="Home" component={Home} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={home} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Cart" component={CartView} screenOptions cart={cart}
                    options={{                       
                        tabBarIcon: () => {
                            return <Image source={cartImage} style={{ width: 30, height: 30 }} />
                        },
                        tabBarBadge: cart.length
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
        
        </cartContext.Provider>
    )
}
export default Shop