import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import { getFilmById } from '../../../../services/swapiService'
import { useQuery } from '@tanstack/react-query'
import { translateFilmAttributes } from '../../../../utils/translateFilmsData'
import { Film, Pelicula } from '../../../../types/types'
import { colors, golbalStyles } from '../../../../theme/theme'
import DetailRow from '../../atoms/DetailRow'

const FilmScreen = () => {
  const navigation = useNavigation()
  const params = useRoute<RouteProp<RootStackParams,'Film'>>().params
  
  const { data: film, isLoading, error } = useQuery<Pelicula>({
    queryKey: ['film', params.url],
    queryFn: async () => {
      const response: Film = await getFilmById(params.url);
      return translateFilmAttributes(response)
    },
  });

  useEffect(() => {
    if (film) {
      navigation.setOptions({
        title: film.titulo,
      });
    }
  }, [film, navigation]);
  
  return (
    <ScrollView style={golbalStyles.container}>
      <View style={styles.card}>
        <Text style={[golbalStyles.title1, {color: colors.secondary}]}>{film?.titulo}</Text>
        
        <View style={styles.episodeBadge}>
          <Text style={styles.episodeText}>Episodio {film?.id_episodio}</Text>
        </View>
        
        <View style={styles.directorContainer}>
          <Text style={styles.directorLabel}>Director:</Text>
          <Text style={styles.directorValue}>{film?.director}</Text>
        </View>

        <DetailRow label="Productor" value={film?.productor} />
        <DetailRow label="Fecha de Estreno" value={film?.fecha_estreno} />
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film?.personajes.length}</Text>
            <Text style={styles.statLabel}>Personajes</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film?.planetas.length}</Text>
            <Text style={styles.statLabel}>Planetas</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film?.naves_estelares.length}</Text>
            <Text style={styles.statLabel}>Naves</Text>
          </View>
        </View>
        
        <View style={styles.crawlContainer}>
          <Text style={styles.crawlTitle}>Texto de Apertura</Text>
          <Text style={styles.crawlText}>{film?.texto_apertura}</Text>
        </View>
        
        <DetailRow label="Vehículos" value={film?.vehiculos.length.toString()} />
        <DetailRow label="Especies" value={film?.especies.length.toString()} />
      </View>
    </ScrollView>
  )
}

export default FilmScreen

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  episodeBadge: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10
  },
  episodeText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16
  },
  directorContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  directorLabel: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5
  },
  directorValue: {
    color: colors.background,
    fontSize: 16
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 15
  },
  statItem: {
    alignItems: 'center'
  },
  statCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary
  },
  statLabel: {
    fontSize: 14,
    color: colors.background
  },
  crawlContainer: {
    backgroundColor: colors.tertiary,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10
  },
  crawlTitle: {
    ...golbalStyles.title3,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 10
  },
  crawlText: {
    color: colors.background,
    fontStyle: 'italic',
    lineHeight: 22,
    textAlign: 'center'
  },
  texts: {
    ...golbalStyles.title2,
    textAlign: 'left'
  }
})