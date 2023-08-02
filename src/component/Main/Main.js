import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Menu from './Menu';
import Shop from './Shop/Shop'

const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
    componentDidMount = () => {
        this.Drawer.open();
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
            <Drawer.Navigator drawerContent={props => <Menu navigation={navigation}/>} useLegacyImplementation={false} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Shop" component={Shop} />
            </Drawer.Navigator>

        </View>
    )
}
export default Main



