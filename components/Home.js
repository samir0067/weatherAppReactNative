import React, {Component} from 'react'
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={sHome.view}>
        <Text style={sHome.title}>Home App</Text>
        <Text style={sHome.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem quasi.
        </Text>
      </View>
    )
  }
}

const sHome = StyleSheet.create({
  view: {
    margin: 5,
    paddingBottom: 100,
    backgroundColor: '#ecd1a2',
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    textAlign: 'center',
  }
})
