import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthScreen from '../screens/auth-screen'

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator
})

export default createAppContainer(MainNavigator)
