import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { golbalStyles } from '../../../../theme/theme'
import PeopleList from '../../organisms/PeopleList'
import { useQuery } from '@tanstack/react-query'
import { PeopleResponse, PersonajeResponse } from '../../../../types/types'
import { getPeople } from '../../../../services/swapiService'
import { FlatList } from 'react-native-gesture-handler'
import { translateCharacterAttributes } from '../../../../utils/translatePeopleData'

const PeopleScreen = () => {

  const [page,setPage] =useState(1)
  const [searchTerm,setSearchTerm] = useState('')

  const { data: people, isLoading, error } = useQuery<PersonajeResponse>({
    queryKey: ['people', page,searchTerm],
    queryFn: async () => {
      const response:PeopleResponse = await getPeople(page,searchTerm);
      const translatedResults = response.results.map((film) => translateCharacterAttributes(film));
      return {
        ...response, 
        results: translatedResults, 
      };
    },
  });

  console.log(people?.results)

  return (
    <View style={golbalStyles.container}>
      <PeopleList
        personajes={people?.results}
        onPress={(url)=>console.log(url)}
      />
    </View>
  )
}

export default PeopleScreen