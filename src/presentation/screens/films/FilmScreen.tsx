import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation,useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../routes/HomeStackNavigator'

const FilmScreen = () => {

  const params = useRoute<RouteProp<RootStackParams,'Film'>>().params

  const navigation = useNavigation()

  useEffect(()=>{
    navigation.setOptions({
      title:params.id,
    })
  },[])

  return (
    <View>
      <Text style={{textAlign:'center',fontSize:40,fontWeight:'900',marginVertical:10,}}>FilmScreen</Text>
      <Text style={{textAlign:'center',fontSize:20}}>{params.id}</Text>
    </View>
  )
}

export default FilmScreen