import { View, Text } from 'react-native'
import React from 'react'
import { Personaje } from '../../../types/types'

interface People {
    people:Personaje,
    onPress:()=>void
}

const PeopleCard = ({people,onPress}:People) => {
  return (
    <View>
      <Text>PeopleCard</Text>
    </View>
  )
}

export default PeopleCard