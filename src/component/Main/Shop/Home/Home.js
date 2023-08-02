import React, { Component } from 'react'
import {ScrollView, View,Text } from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'

const Home = () => {
    return (
        <ScrollView style={{flex:1,backgroundColor:'#DBDBD8'}}>
           <Collection/>
           <Category/>
           <TopProduct/>
        </ScrollView>
    )
}
export default Home