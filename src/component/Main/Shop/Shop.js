import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window')
import Home from './Home/Home'
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

import Header from './Header'

// import home from '/Users/mluan/react_native/MyShop/src/media/appIcon/home.png'
// import home0 from '/Users/mluan/react_native/MyShop/src/media/appIcon/home0.png'
import cart from '/Users/mluan/react_native/MyShop/src/media/appIcon/cart.png'
import cart0 from '/Users/mluan/react_native/MyShop/src/media/appIcon/cart0.png'
import contact from '/Users/mluan/react_native/MyShop/src/media/appIcon/contact.png'
import contact0 from '/Users/mluan/react_native/MyShop/src/media/appIcon/contact0.png'
import search from '/Users/mluan/react_native/MyShop/src/media/appIcon/search.png'
import search0 from '/Users/mluan/react_native/MyShop/src/media/appIcon/search0.png'

const home0 = require('/Users/mluan/react_native/MyShop/src/media/appIcon/home0.png');

const Shop = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#85A6C9' }}>
            <Header navigation={navigation}/>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon : () => { 
                        <Image source={home0} style={{width:20,height:20}} />
                    }
                }}/>
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
        </View>
    )
}

export default Shop