import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'

import TopTabNavigator from '../../../routes/TopTabNavigator'
import { RootStackParams } from '../../../routes/HomeStackNavigator'

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  const dimensions = useWindowDimensions()
  

  return (
    <View style={{flex:1}}>
      <TopTabNavigator/>
    </View>
  )
}

export default HomeScreen
