import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { golbalStyles } from '../../../../theme/theme'
import PeopleList from '../../organisms/PeopleList'
import { useQuery } from '@tanstack/react-query'
import { PeopleResponse, PersonajeResponse } from '../../../../types/types'
import { getPeople } from '../../../../services/swapiService'
import { translateCharacterAttributes } from '../../../../utils/translatePeopleData'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import SecondaryButton from '../../atoms/SecondaryButton'
import SearchInput from '../../atoms/SearchInput'

const PeopleScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
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
      <Text style={golbalStyles.title1}>Página: {page}</Text>
      <SearchInput query={searchTerm} onQueryChange={(query)=>setSearchTerm(query)}/>
      <PeopleList
        personajes={people?.results}
        onPress={(url)=>navigation.navigate('PersonDetail',{url})}
      />
      <View style={golbalStyles.containerButons}>
        <SecondaryButton
          disabled={page === 1 || !people?.previous}
          style={{
            width: 'auto',
            opacity: page === 1 || !people?.previous ? 0.6 : 1, 
          }}
          label="Prev"
          onPress={() => setPage((prev) => prev - 1)}
        />
        <SecondaryButton
          disabled={!people?.next}        
          style={{
            width: 'auto',
            opacity: !people?.next ? 0.6 : 1, 
          }}
          label="Next"
          onPress={() => setPage((prev) => prev + 1)}
        />
      </View>
    </View>
  )
}

export default PeopleScreen