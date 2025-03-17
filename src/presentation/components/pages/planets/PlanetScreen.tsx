import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import { getPlanetById } from '../../../../services/swapiService'
import { useQuery } from '@tanstack/react-query'
import { translatePlanetAttributes } from '../../../../utils/translateData'
import { Planet, PlanetsResponse } from '../../../../types/types'
import { colors, golbalStyles } from '../../../../theme/theme'
import DetailRow from '../../atoms/DetailRow'

const PlanetScreen = () => {

  const navigation = useNavigation()
  const params = useRoute<RouteProp<RootStackParams,'Planet'>>().params
  
  const { data: planet, isLoading, error } = useQuery<Planet>({
    queryKey: ['planet'],
    queryFn: async () => {
      const response = await getPlanetById(params.url);
      return translatePlanetAttributes(response)
    },
  });

  useEffect(() => {
    if (planet) {
      console.log(planet.periodo_de_rotacion)
      console.log(params.url)
      navigation.setOptions({
        title: planet.nombre,
      });
    }
  }, [planet, navigation]);
  
    
  return (
    <View style={golbalStyles.container}>
      <View style={styles.card}>
        <Text style={[golbalStyles.title1,{color:colors.secondary}]}>{planet?.nombre}</Text>
        
        <DetailRow label="Periodo de Rotación" value={planet?.periodo_de_rotacion} />
        <DetailRow label="Periodo Orbital" value={planet?.periodo_orbital} />
        <DetailRow label="Clima" value={planet?.clima} />
        <DetailRow label="Gravedad" value={planet?.gravedad} />
        <DetailRow label="Terreno" value={planet?.terreno} />
        <DetailRow label="Agua Superficial" value={planet?.agua_superficial} />
        <DetailRow label="Población" value={planet?.poblacion} />
        <DetailRow label="Residentes" value={planet?.residentes.length.toString()} />
        <DetailRow label="Películas" value={planet?.peliculas.length.toString()} />
      </View>
    </View>
  )
}

export default PlanetScreen

const styles = StyleSheet.create({
  card:{
    backgroundColor:colors.primary,
    padding:10,
    borderRadius:10
  },
  texts:{
    ...golbalStyles.title2,
    textAlign:'left'
  }
})