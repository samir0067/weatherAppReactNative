import React, {Component} from 'react'
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={sAbout.view}>
                <Text style={sAbout.title}>A propos de moi</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda officia reiciendis tenetur? Culpa dolore facilis magnam necessitatibus odit sed suscipit.
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