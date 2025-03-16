import '../gesture-handler';
import { View, Text } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/routes/HomeStackNavigator';
import SideMenuNavigator from './presentation/routes/SideMenuNavigator';
import { BottomTabNavigator } from './presentation/routes/BottomTabNavigator';

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <SideMenuNavigator/> */}
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default App