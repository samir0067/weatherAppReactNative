import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import About from './components/About'
import Search from './components/Search'
import Icon from '@expo/vector-icons/Ionicons'
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation'

const TabsBottomNavigator = createBottomTabNavigator({
        About,
        Search
    },
    {
        navigationOptions: ({navigation}) => {
            const {routeName} = navigation.state.routes
                [navigation.state.index]
            return {
                headerTitle: routeName
            }
        }
    })

const TabsStackNavigator = createStackNavigator({
        TabsBottomNavigator: TabsBottomNavigator
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerRight: <Icon
                    onPress={() => navigation.openDrawer()}
                    style={styles.iconMenu}
                    name="md-menu"
                    size={30}
                />
            }
        }
    })

const TabsDrawerNavigator = createDrawerNavigator({
    Search: {screen: TabsStackNavigator}
})
const TabsNavigator = createSwitchNavigator({
    Search: {screen: TabsDrawerNavigator},
    About: {screen: About},
})
const TabsContainer = createAppContainer(TabsNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3ffc3',
    },
    iconMenu: {
        paddingRight: 15
    }
})

export default class App extends Component {
    render() {
        return (
            <TabsContainer/>
        )
    }
}
