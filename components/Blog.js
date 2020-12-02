import React, {Component, useLayoutEffect, useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import {useNavigation, useRoute} from "@react-navigation/native";



// const counter = () => {
//   const [count, setCount] = useState(0)
//
//   useLayoutEffect(() => {
//     this.props.navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count"/>
//       ),
//     })
//   }, [this.props.navigation, setCount])
//   return counter
// }
const route = useRoute()
const navigation = useNavigation()
const params = route.params

export default class Blog extends Component {



  render() {
    return (
      <>
        <Text>Count: {count}</Text>;

        <View style={sBlog.buttonStyle}>
          <Button title="Retour en arrière" onPress={() => this.props.navigation.goBack()}/>
          <Button title="Revenir au premier écran" onPress={() => this.props.navigation.popToTop()}/>
        </View>
        <View style={sBlog.view}>
          <Text style={sBlog.title}>Articles</Text>
          <Text style={sBlog.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias architecto assumenda consectetur, consequatur cumque doloremque eligendi
            ex, facilis ipsam itaque labore laboriosam magnam minima minus nihil perferendis repudiandae saepe sequi sit veniam
            voluptatem! A adipisci aspernatur at dicta dolore ea et eum ipsa laborum nobis odit officiis, pariatur quae recusandae temporibus totam
            voluptatem voluptatibus. Voluptatem!
          </Text>
        </View>
      </>
    )
  }
}

const sBlog = StyleSheet.create({
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
