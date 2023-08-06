import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

const { height, width } = Dimensions.get('window')

import littleIcon from '/Users/mluan/react_native/MyShop/src/media/temp/little.jpg'
import maxiIcon from '/Users/mluan/react_native/MyShop/src/media/temp/maxi.jpg'
import partyIcon from '/Users/mluan/react_native/MyShop/src/media/temp/party.jpg'

const Category = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
            </View>
            <View style={{ flex: 4 }}>
                <Swiper  >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ListProduct');
                    }}>
                        <Image source={littleIcon} style={styles.imageStyle} />
                        <Text>Maxi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ListProduct');
                    }}>
                        <Image source={maxiIcon} style={styles.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ListProduct');
                    }}>
                        <Image source={partyIcon} style={styles.imageStyle} />
                    </TouchableOpacity>
                </Swiper>
            </View>
        </View>
    )
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF',
        height: height * 0.35,
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
    },
})

export default Category