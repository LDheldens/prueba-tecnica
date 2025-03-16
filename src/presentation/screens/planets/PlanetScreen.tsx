import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../routes/HomeStackNavigator'

const PlanetScreen = () => {

  const params = useRoute<RouteProp<RootStackParams,'Planet'>>().params
  
    const navigation = useNavigation()
  
    useEffect(()=>{
      navigation.setOptions({
        title:params.id,
      })
    },[])
  
    
  return (
    <View>
      <Text>PlanetScreen</Text>
      <Text>PLaneta: {params.id}</Text>
    </View>
  )
}

export default PlanetScreen