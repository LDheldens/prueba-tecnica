import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { golbalStyles } from '../../../../theme/theme'
import PrimaryButton from '../../atoms/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import { translateFilmAttributes } from '../../../../utils/translateFilmsData'
import { getFilms } from '../../../../services/swapiService'
import { useQuery } from '@tanstack/react-query'
import { FilmsResponse, PeliculasResponse, PlanetsResponse } from '../../../../types/types'
import FilmList from '../../organisms/FilmsList'


const FilmsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  
  const [page,setPage] =useState(1)

  const { data: films, isLoading, error } = useQuery<PeliculasResponse>({
    queryKey: ['films', page],
    queryFn: async () => {
      const response:FilmsResponse = await getFilms(page);
      const translatedResults = response.results.map((film) => translateFilmAttributes(film));
      return {
        ...response, 
        results: translatedResults, 
      };
    },
  });


  return (
    <View style={golbalStyles.container}>
      <FilmList
        peliculas={films?.results}
        onPress={(url)=>navigation.navigate('Film',{url})}
      />
    </View>
  )
}

export default FilmsScreen