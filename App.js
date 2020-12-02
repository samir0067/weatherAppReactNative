import 'react-native-gesture-handler'
import React, {Component, useLayoutEffect, useState} from 'react'
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, StatusBar, Image } from 'react-native'
import About from './components/About'
import Search from './components/Search'
import Home from './components/Home'
import Blog from "./components/Blog";
import Blog2 from "./components/Blog2";

const LogoTitle = () => {
  return (
    <Image source={require('./assets/house-48.png')}/>
  )
}

const Stack = createStackNavigator()
const [count, setCount] = useState(0)
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

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
          headerStyle: {
            backgroundColor: '#69c2e5',
          },
          headerTintColor: '#fff',
        }}
        >
          {/*<StatusBar hidden={true}/>*/}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert('Ceci est un bouton!')}
                  title="Info"
                  color="#OOO"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: 'Recherchez',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={({ route }) => ({ title: route.params.name })}
          />

          <Stack.Screen
            name="Blog"
            component={Blog}
            options={({ navigation }) => ({ title: 'Articles'},
                useLayoutEffect(() => {
                  navigation.setOptions({
                    headerRight: () => (
                      <Button onPress={() => setCount(c => c + 1)} title="Update count"/>
                    ),
                  })
                }, [navigation, setCount])
            )}
          />
          <Stack.Screen
            name="Blog2"
            component={Blog2}
            options={{ title: 'Articles 2',
              headerRight: () => (
                <Button
                  onPress={() => alert('Ceci est un bouton!')}
                  title="Info"
                  color="#OOO"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
