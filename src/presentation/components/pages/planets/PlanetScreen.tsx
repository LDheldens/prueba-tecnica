import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../../routes/HomeStackNavigator'
import { getPlanetById } from '../../../../services/swapiService'
import { useQuery } from '@tanstack/react-query'
import { translatePlanetAttributes } from '../../../../utils/translatePlanetsData'
import { Planet, Planeta } from '../../../../types/types'
import { colors, golbalStyles } from '../../../../theme/theme'
import DetailRow from '../../atoms/DetailRow'

const PlanetScreen = () => {
  const navigation = useNavigation()
  const params = useRoute<RouteProp<RootStackParams, 'Planet'>>().params
  
  const { data: planet, isLoading, error } = useQuery<Planeta>({
    queryKey: ['planet', params.url],
    queryFn: async () => {
      const response = await getPlanetById(params.url);
      return translatePlanetAttributes(response)
    },
  });

  useEffect(() => {
    if (planet) {
      navigation.setOptions({
        title: planet.nombre,
      });
    }
  }, [planet, navigation]);
  
  if (isLoading) {
    return (
      <View style={[golbalStyles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Cargando planeta...</Text>
      </View>
    )
  }

  if (error || !planet) {
    return (
      <View style={[golbalStyles.container, styles.centerContent]}>
        <Text style={styles.errorText}>Error al cargar el planeta</Text>
      </View>
    )
  }
  
  return (
    <ScrollView style={golbalStyles.container}>
      <View style={styles.card}>
        <Text style={[golbalStyles.title1, {color: colors.secondary}]}>{planet.nombre}</Text>
        
        <View style={styles.planetImagePlaceholder}>
          <Text style={styles.planetType}>Terreno: {planet.terreno.split(',')[0]}</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{planet.diametro}</Text>
            <Text style={styles.statLabel}>Diámetro</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{planet.periodo_orbital}</Text>
            <Text style={styles.statLabel}>Días por año</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{planet.periodo_de_rotacion}</Text>
            <Text style={styles.statLabel}>Horas por día</Text>
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Información General</Text>
          <DetailRow label="Clima" value={planet.clima} />
          <DetailRow label="Gravedad" value={planet.gravedad} />
          <DetailRow label="Terreno" value={planet.terreno} />
          <DetailRow label="Agua Superficial" value={planet.agua_superficial} />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Población</Text>
          <DetailRow label="Habitantes" value={planet.poblacion} />
          <DetailRow label="Residentes conocidos" value={planet.residentes.length.toString()} />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Apariciones</Text>
          <DetailRow label="Películas" value={planet.peliculas.length.toString()} />
        </View>
      </View>
    </ScrollView>
  )
}

export default PlanetScreen

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    marginBottom: 50
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 16
  },
  errorText: {
    color: colors.danger,
    fontSize: 16,
    fontWeight: 'bold'
  },
  planetImagePlaceholder: {
    height: 120,
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary
  },
  planetType: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 12,
    marginVertical: 15
  },
  statItem: {
    alignItems: 'center'
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary
  },
  statLabel: {
    fontSize: 12,
    color: colors.background,
    marginTop: 2
  },
  sectionContainer: {
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },
  sectionTitle: {
    ...golbalStyles.title3,
    color: colors.secondary,
    marginBottom: 10,
    textAlign: 'left'
  }
})