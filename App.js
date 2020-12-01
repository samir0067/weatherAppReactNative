import React, {Component} from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'
import About from './components/About'
import Search from './components/Search'
import Home from './components/Home'
import Icon from '@expo/vector-icons/Ionicons'
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

const BottomNavigator = createBottomTabNavigator({
    Home,
    About,
    Search,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes
        [navigation.state.index]
      return {
        headerTitle: routeName
      }
    },
    tabBarOptions: {
      activeTintColor: '#fffefe',
      activeBackgroundColor: '#303030',
      labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: '#676767',
      },
    }
  })

const StackNavigator = createStackNavigator({
    BottomNavigator: BottomNavigator
  },
  {
    cardStyle: {backgroundColor: '#f5edd2'},
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: <Icon
          onPress={() => navigation.toggleDrawer()}
          style={styles.iconMenu}
          name="md-menu"
          size={30}
        />
      }
    }
  })

const DrawerNavigator = createDrawerNavigator({
    Home: {screen: StackNavigator},
    About: {screen: StackNavigator},
    Search: {screen: StackNavigator},
  },
  {
    drawerBackgroundColor: 'rgb(137,146,137)',
    overlayColor: 'rgb(64,67,64)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#616185',
    }
  })

const AppContainer = createAppContainer(DrawerNavigator)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<StatusBar hidden={true}/>*/}
        <AppContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconMenu: {
    paddingRight: 15
  }
})
