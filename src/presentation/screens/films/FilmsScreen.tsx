import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { golbalStyles } from '../../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/HomeStackNavigator'

const products = [
  {
    id:1,
    name:'Film01'
  },
  {
    id:2,
    name:'Film02'
  },
  {
    id:3,
    name:'Film03'
  },
  {
    id:4,
    name:'Film04'
  },
]

const FilmsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={golbalStyles.container}>
      <Text style={{marginBottom:10,fontSize:30}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item})=>(
          <PrimaryButton style={{marginBottom:10}} label={item.name} onPress={()=>navigation.navigate('Film',{id:item.id})}/>
        )}
      />
      <Text style={{marginBottom:10,fontSize:30}}>Ajustes df</Text>
    </View>
  )
}

export default FilmsScreen