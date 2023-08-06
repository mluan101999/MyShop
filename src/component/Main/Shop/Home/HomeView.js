import React, { Component } from 'react'
import {ScrollView, View,Text } from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'

const HomeView = ({navigation}) => {
    return (
        <ScrollView style={{flex:1,backgroundColor:'#DBDBD8'}}>
           <Collection/>
           <Category navigation={navigation}/>
           <TopProduct navigation={navigation}/>
        </ScrollView>
    )
}
export default HomeView