import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'

import backList from '../../../../media/appIcon/backList.png'
import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'


const ListProduct = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.wrapper}>
                {/* Button and Text */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack();
                    }}>

                    <Image source={backList} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.tittleStyle}>Party Dress</Text>
                    <View style={{ width: 30 }} />
                </View>
                {/* List */}
                <View style={styles.productContainer}>
                    <Image source={sp1} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.txtName}>Lace Sleeve Si</Text>
                        <Text style={styles.txtPrice}>117$</Text>
                        <Text style={styles.txtMatetial}>Material silk</Text>
                        <View style={styles.lastRowInfo}>
                            <Text style={styles.txtColor}>Color RoyalBlue</Text>
                            <View style={{backgroundColor:'cyan',height:16,width:16,borderRadius:8}}/>
                            <TouchableOpacity>
                                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Image source={sp2} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.txtName}>Lace Sleeve Si</Text>
                        <Text style={styles.txtPrice}>117$</Text>
                        <Text style={styles.txtMatetial}>Material silk</Text>
                        <View style={styles.lastRowInfo}>
                            <Text style={styles.txtColor}>Color RoyalBlue</Text>
                            <View style={{backgroundColor:'cyan',height:16,width:16,borderRadius:8}}/>
                            <TouchableOpacity>
                                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Image source={sp3} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.txtName}>Lace Sleeve Si</Text>
                        <Text style={styles.txtPrice}>117$</Text>
                        <Text style={styles.txtMatetial}>Material silk</Text>
                        <View style={styles.lastRowInfo}>
                            <Text style={styles.txtColor}>Color RoyalBlue</Text>
                            <View style={{backgroundColor:'cyan',height:16,width:16,borderRadius:8}}/>
                            <TouchableOpacity>
                                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Image source={sp4} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.txtName}>Lace Sleeve Si</Text>
                        <Text style={styles.txtPrice}>117$</Text>
                        <Text style={styles.txtMatetial}>Material silk</Text>
                        <View style={styles.lastRowInfo}>
                            <Text style={styles.txtColor}>Color RoyalBlue</Text>
                            <View style={{backgroundColor:'cyan',height:16,width:16,borderRadius:8}}/>
                            <TouchableOpacity>
                                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        padding: 10
    },
    wrapper: {
        backgroundColor: 'white',
        shadowColor: '2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal:10
    },
    header: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',

    },
    backIcon: {
        width: 40,
        height: 40
    },
    tittleStyle: {
        fontFamily: 'Average',
        color: "#B10D65",
        fontSize: 20
    },
    productContainer: {
        flexDirection:'row',
        paddingVertical:15,
        borderTopColor:'#D6D6D6',
        borderTopWidth:1,
       
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent:'space-between',
        marginLeft:20,
        flex:1
    },
    lastRowInfo: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    txtName:{
        color:'#BCBCBC',
        fontSize: 20,
        fontWeight:'400'
    },
    txtPrice:{
        color:'#B10D65'
    },
    txtMatetial:{
        color:'black'
    },
    txtColor:{
        color:'black'
    },
    txtShowDetail:{
        color:'#B10D65',
        fontSize:11
    },
})
export default ListProduct