import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../../routes/HomeStackNavigator';
import { getPersonById } from '../../../../services/swapiService';
import { useQuery } from '@tanstack/react-query';
import { translateCharacterAttributes } from '../../../../utils/translatePeopleData';
import { Personaje } from '../../../../types/types';
import { colors, golbalStyles } from '../../../../theme/theme';
import DetailRow from '../../atoms/DetailRow';

const PersonDetailScreen = () => {
  const navigation = useNavigation();
  const params = useRoute<RouteProp<RootStackParams, 'PersonDetail'>>().params;

  const { data: person, isLoading, error } = useQuery<Personaje>({
    queryKey: ['person'],
    queryFn: async () => {
      const response = await getPersonById(params.url);
      return translateCharacterAttributes(response);
    },
  });

  useEffect(() => {
    if (person) {
      navigation.setOptions({
        title: person.nombre,
      });
    }
  }, [person, navigation]);

  if (isLoading) {
    return <Text style={golbalStyles.title2}>Cargando...</Text>;
  }


  return (
    <ScrollView style={golbalStyles.container}>
      <View style={styles.card}>
        <Text style={[golbalStyles.title1, { color: colors.secondary }]}>{person?.nombre}</Text>

        <View style={styles.genderBadge}>
          <Text style={styles.genderText}>{person?.genero}</Text>
        </View>

        <DetailRow label="Año de Nacimiento" value={person?.anio_nacimiento} />
        <DetailRow label="Altura" value={`${person?.altura} cm`} />
        <DetailRow label="Peso" value={`${person?.masa} kg`} />
        <DetailRow label="Color de Cabello" value={person?.color_cabello} />
        <DetailRow label="Color de Piel" value={person?.color_piel} />
        <DetailRow label="Color de Ojos" value={person?.color_ojos} />

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{person?.peliculas.length}</Text>
            <Text style={styles.statLabel}>Películas</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{person?.vehiculos.length}</Text>
            <Text style={styles.statLabel}>Vehículos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{person?.naves_estelares.length}</Text>
            <Text style={styles.statLabel}>Naves</Text>
          </View>
        </View>

        <DetailRow label="Planeta Natal" value={person?.planeta_natal} />
      </View>
    </ScrollView>
  );
};

export default PersonDetailScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  genderBadge: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
  genderText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  statLabel: {
    fontSize: 14,
    color: colors.background,
  },
});