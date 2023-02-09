import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = (props) => {

    const {text , bd  , index } = props ; 

    // const text = props.text ; 
    // const bd = props.bd ; 

    return (
        <View style={styies.cardContainer}>
            <View style={styies.innerTopContaner}>
                <Image style={styies.img} source={require('../assets/images/smer.webp')} />
                <View style={styies.textContainer}>
                    <Text style={styies.alhob}>{text}</Text>
                    <Text style={styies.alhob}>{`B.D: ${bd}`}</Text>
                </View>
            </View>
            <View style={styies.myUIContainer}>
                <Text style={styies.smer}> {`MY UI ${index}`}</Text>
            </View>
        </View>
    )
}

const styies = StyleSheet.create({
    cardContainer: {
        margin: 50,
        // height: 280,
        width: '100%',
        backgroundColor: 'black',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center'
    },
    innerTopContaner: {
        margin: 10,
        // height: 150,
        // width: 200,
        backgroundColor: 'black',
        borderWidth: 10,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    img: {
        width: 100,
        height: '97%',
        // margin: 10,
    },
    textContainer: {
        // width: 230,
        // height: 150,
        // margin: 30,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'black',
    },
    alhob: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        fontSize: 20,
        marginLeft: 10,
        backgroundColor: 'white'
    },
    myUIContainer: {
        width: 230,
        height: 90,
        margin: 40,
        marginLeft: 130,
        marginTop: 0,
        marginEnd: 60,
        backgroundColor: 'black',



    },
    smer: {
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 50,
        margin: 20,
        marginRight: 50,
        marginLeft: -10,
        color: 'white'

    }
})

export default Card; 