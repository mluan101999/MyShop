import React, { Component, useState, useEffect } from 'react'
import {ScrollView, View,Text } from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'

const HomeView = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [type, setType] = useState([]);
    const [product,setProduct] = useState([]);
    const getAPI = async () => {
        try {
            const response = await fetch('http://10.79.13.167/api/app/');
            const json = await response.json();
            setType(json.type);
            setProduct(json.product);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getAPI();
    }, []);
    return (
        <ScrollView style={{flex:1,backgroundColor:'#DBDBD8'}}>
           <Collection/>
           <Category navigation={navigation} type={type} />
           <TopProduct navigation={navigation} product={product}/>
        </ScrollView>
    )
}
export default HomeView