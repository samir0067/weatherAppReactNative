import React, {Component} from 'react'
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native'

export default class About extends Component {
  render() {
    return (
      <>
        <View style={sAbout.buttonStyle}>
          <Button title="Retour en arrière" onPress={() => this.props.navigation.goBack()} />
          <Button title="Revenir au premier écran de la pile" onPress={() => this.props.navigation.popToTop()} />
        </View>
        <View style={sAbout.view}>
          <Text style={sAbout.title}>À propos de l'application</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magnam voluptatibus.
            Id illum ipsam modi nesciunt officiis quas similique! Ad dolore impedit totam? Cupiditate eum
            fugit minus quo ratione recusandae totam vitae. Laborum, magnam quibusdam.
          </Text>
          <View style={sAbout.layoutView}>
            <ActivityIndicator
              color='green'
              size='large'
            />
          </View>
        </View>
      </>
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
    borderBottomColor: "#20232a",
    borderBottomWidth: 4,
    borderRadius: 6,
    fontWeight: 'bold'
  },
  back: {
    backgroundColor: '#c0bce9'
  },
  layoutView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  buttonStyle: {
    alignItems: 'center',
  }
})
