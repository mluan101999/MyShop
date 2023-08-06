import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image,TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window')

const bannerImg = require('/Users/mluan/react_native/MyShop/src/media/temp/banner.jpg')

const Collection = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.textStyle} >SPRING COLLECTION</Text>
            </View>
            <TouchableOpacity style={{ flex: 4 }}>
                <Image source={bannerImg} style={styles.imageStyle} />
            </TouchableOpacity>
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
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop:0
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
export default Collection