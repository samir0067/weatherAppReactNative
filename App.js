import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import About from './components/About'
import Home from './components/Search'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen />
            </AuthStack.Navigator>
        </NavigationContainer>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3ffc3',
  },
})
