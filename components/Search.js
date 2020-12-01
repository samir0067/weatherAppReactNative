import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: 'Strasbourg'
    }
  }

  setCity(city) {
    this.setState({city: city})
  }

  render() {
    return (
      <View style={sSearch.view}>
        <TextInput
          style={sSearch.input}
          value={this.state.city}
          onChangeText={(text) => this.setCity(text)}
        />
      </View>
    )
  }
}

const sSearch = StyleSheet.create({
  view: {
    borderColor: '#3e3e3e',
    backgroundColor: '#3e3e3e',
    borderWidth: 1,
  },
  input: {
    height: 40,
    borderColor: '#3e3e3e',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  }
})
