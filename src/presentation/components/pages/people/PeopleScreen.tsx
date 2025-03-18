import { View, Text, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { colors, golbalStyles } from '../../../../theme/theme'
import PeopleList from '../../organisms/PeopleList'
import { useQuery } from '@tanstack/react-query'
import { PeopleResponse, PersonajeResponse } from '../../../../types/types'
import { getPeople } from '../../../../services/swapiService'
import { translateCharacterAttributes } from '../../../../utils/translatePeopleData'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import SecondaryButton from '../../atoms/SecondaryButton'
import SearchInput from '../../atoms/SearchInput'
import { debounce } from 'lodash';

const PeopleScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  const [page,setPage] =useState(1)
  const [searchTerm,setSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState('');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchTerm(query);
      setPage(1); 
    }, 500), 
    []
  );

  const handleInputChange = (query: string) => {
    setInputValue(query); 
    debouncedSearch(query);
  };

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

    if (isLoading) {
      return (
        <View style={[golbalStyles.container,{justifyContent:'center',alignItems:'center'}]}>
          <ActivityIndicator size='large' color={colors.primary}/>
        </View>
      )
    }
  console.log(people?.results)

  return (
    <View style={golbalStyles.container}>
      <Text style={golbalStyles.title1}>Página: {page}</Text>
      <SearchInput
        query={inputValue} 
        onQueryChange={handleInputChange}
      />
      { searchTerm && people?.results.length == 0 ? (
        <Text style={golbalStyles.title1}>No se encontraron resultados para: {searchTerm}</Text>
      ):null }
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