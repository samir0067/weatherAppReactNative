import React, {Component} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

export default class Blog2 extends Component {
  render() {
    return (
      <>
        <View style={sBlog2.buttonStyle}>
          <Button
            title="À propos"
            onPress={() => this.props.navigation.navigate('About', { name: 'En-tête de à propos personnalisé' })}
          />
          <Button
            title="Recherchez"
            onPress={() => this.props.navigation.navigate('Search')}
          />
          <Button
            title="Mettre à jour le titre"
            onPress={() => this.props.navigation.setOptions({ title: 'Mise à jour!' })}
          />
        </View>
        <View style={sBlog2.view}>
          <Text style={sBlog2.title}>Articles 2</Text>
          <Text style={sBlog2.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem quasi.
          </Text>
          <Text style={sBlog2.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias architecto assumenda consectetur, consequatur cumque doloremque eligendi
            ex, facilis ipsam itaque labore laboriosam magnam minima minus nihil perferendis perspiciatis praesentium repudiandae saepe sequi sit
            veniam
            voluptatem! A adipisci aspernatur at dicta dolore ea et eum ipsa laborum nobis odit officiis, pariatur quae recusandae temporibus totam
            voluptatem voluptatibus. Voluptatem!
          </Text>
          <Text style={sBlog2.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias architecto assumenda consectetur, consequatur cumque doloremque eligendi
            ex, facilis ipsam itaque labore laboriosam magnam minima minus nihil perferendis perspiciatis praesentium repudiandae saepe sequi sit
            veniam
            voluptatem! A adipisci aspernatur at dicta dolore ea et eum ipsa laborum nobis odit officiis, pariatur quae recusandae temporibus totam
            voluptatem voluptatibus. Voluptatem!
          </Text>
          <Text style={sBlog2.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem quasi.
          </Text>
        </View>
      </>
    )
  }
}

const sBlog2 = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 15,
    backgroundColor: '#ecd1a2',
    borderWidth: 0.5,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    textAlign: 'center',
    borderWidth: 0.5,
    fontSize: 14,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
