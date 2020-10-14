import React, {Component} from 'react'
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={sAbout.view}>
                <Text style={sAbout.title}>about the app </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magnam voluptatibus.
                    Id illum ipsam modi nesciunt officiis quas similique! Ad dolore impedit totam? Cupiditate eum
                    fugit minus quo ratione recusandae totam vitae. Laborum, magnam quibusdam.
                </Text>
                <View style={sAbout.layoutView}>
                    <ActivityIndicator
                        style={sAbout.back}
                        color='green'
                        size='large'
                    />
                </View>
            </View>
        )
    }
}

const sAbout = StyleSheet.create({
    view: {
        margin: 25,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    back: {
        backgroundColor: '#c0bce9'
    },
    layoutView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15

    }
})