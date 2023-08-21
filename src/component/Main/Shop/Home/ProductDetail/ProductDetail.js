import React, { Component,useState,useContext } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';

import { cartContext } from '../../Shop';
import { addCartContext } from '../../Shop';

const back = require('../../../../../media/appIcon/back.png');
const cartIcon = require('../../../../../media/appIcon/cartfull.png');


const ProductDetail = ({ navigation, route }) => {

    const {cart, addCart} = useContext(cartContext)
    // console.log(route.params.id)
    console.log(cart)
    const {
        wrapper, cardStyle, header,
        footer, backStyle,
        imageContainer, cartStyle, textBlack,
        textSmoke, textHighlight, textMain, titleContainer,
        descContainer, productImageStyle, descStyle, txtMaterial, txtColor
    } = styles;
    const addToCart = (item) => {
        return () => {
            exitsItem = cart.find(itemInCart=> itemInCart.id == item.id)
            console.log("exit: ",exitsItem)
            if (exitsItem) {
                newCart = cart.map(itemInCart => {
                    if (itemInCart.id == exitsItem.id) {
                        itemInCart.count = itemInCart.count+1
                        return itemInCart
                    }else{
                        return itemInCart
                    }
                })
                console.log(newCart)
                addCart(newCart)
            }else{
                item.count = 1
                
                addCart([...cart, item])
            }
            
        }
    }
   
    return (
        <View style={wrapper}>
            <View style={cardStyle}>
                <View style={header}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image style={backStyle} source={back} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addToCart(route.params)}
                        
                    >
                        <Image style={cartStyle} source={cartIcon} />
                    </TouchableOpacity>
                </View>
                <View style={imageContainer}>
                    <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                        <Image source={{ uri: `http://10.79.13.87/api/app/images/product/${route.params.productImage[0]}` }} style={productImageStyle} />
                        <Image source={{ uri: `http://10.79.13.87/api/app/images/product/${route.params.productImage[1]}` }} style={productImageStyle} />

                    </ScrollView>
                </View>
                <View style={footer}>
                    <View style={titleContainer}>
                        <Text style={textMain}>
                            <Text style={textBlack}>{route.params.productName.toUpperCase()}</Text>
                            <Text style={textHighlight}> / </Text>
                            <Text style={textSmoke}>{route.params.price}$</Text>
                        </Text>
                    </View>
                    <View style={descContainer}>
                        <Text style={descStyle}>{route.params.des}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                            <Text style={txtMaterial}>Material {route.params.material}</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={txtColor}>Color {route.params.color}</Text>
                                <View style={{ height: 15, width: 15, backgroundColor: 'red', borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default ProductDetail;
const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});

// import React, { Component } from 'react'
// import { View,Text } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const ProductDetail = ({navigation}) => {
//     return (
//             <View style={{flex:1,backgroundColor:'gray'}}>
//                 <TouchableOpacity onPress={()=>{
//                     navigation.goBack();
//                 }}>
//                     <Text>Back</Text>
//                 </TouchableOpacity>
//             </View>
//         )
// }

// export default ProductDetail