import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from './screens/Profile'
import MyContact from './screens/MyContact'
import Create_Contacts from './screens/Create_Contacts'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyContact'>
        <Stack.Screen name='MyContact' component={MyContact} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Create_Contacts' component={Create_Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
