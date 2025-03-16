import { View, Text, useWindowDimensions, FlatList } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/HomeStackNavigator'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { golbalStyles } from '../../../theme/theme'

const planets = [
  {
    id:1,
    name:'Planet01'
  },
  {
    id:2,
    name:'Planet02'
  },
  {
    id:3,
    name:'Planet03'
  },
  {
    id:4,
    name:'Planet04'
  },
]

const PlanetsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={golbalStyles.container}>
      <FlatList
        data={planets}
        renderItem={({item})=>(
          <PrimaryButton style={{marginBottom:10}} label={item.name} onPress={()=>navigation.navigate('Planet',{id:item.id})}/>
        )}
      />
    </View>
  )
}

export default PlanetsScreen