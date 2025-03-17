import { View, Text, useWindowDimensions, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React,{useEffect, useState} from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import { colors, golbalStyles } from '../../../../theme/theme'
import { getPeople, getPlanets } from '../../../../services/swapiService'
import { useQuery } from '@tanstack/react-query'
import { PlanetsResponse } from '../../../../types/types'
import PlanetList from '../../organisms/PlanetList'
import SecondaryButton from '../../atoms/SecondaryButton'
import { translatePlanetAttributes } from '../../../../utils/translateData'

const PlanetsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  const [page,setPage] =useState(1)

  const { data: planets, isLoading, error } = useQuery<PlanetsResponse>({
    queryKey: ['planets', page],
    queryFn: async () => {
      const response = await getPlanets(page);
      const translatedResults = response.results.map((planet) => translatePlanetAttributes(planet));
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

  return (
    <View style={[golbalStyles.container,{paddingBottom:0}]}>
      <Text style={golbalStyles.title1}>Página: {page}</Text>
      <PlanetList onPress={(url)=>navigation.navigate('Planet',{url:url})} planets={planets?.results ?? []}/>
      <View style={styles.containerButons}>
        <SecondaryButton
          disabled={page === 1 || !planets?.previous}
          style={{
            width: 'auto',
            opacity: page === 1 || !planets?.previous ? 0.6 : 1, 
          }}
          label="Prev"
          onPress={() => setPage((prev) => prev - 1)}
        />
        <SecondaryButton
          disabled={!planets?.next}        
          style={{
            width: 'auto',
            opacity: !planets?.next ? 0.6 : 1, 
          }}
          label="Next"
          onPress={() => setPage((prev) => prev + 1)}
        />
      </View>
    </View>
  )
}

export default PlanetsScreen

const styles=StyleSheet.create({
  containerButons:{
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    padding:10,
    borderTopWidth:1,
    borderColor:colors.primary
  }
})