import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Authentication from '../component/Authentication/Authentication';
import OtherHistory from '../component/OrderHistory/OtherHistory';
import Main from '../component/Main/Main';
import ChangeInfo from '../component/ChangeInfo/ChangeInfo'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="OtherHistory" component={OtherHistory} />
                    <Stack.Screen name="Authentication" component={Authentication} />
                    <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App