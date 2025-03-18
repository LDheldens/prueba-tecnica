import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import { Personaje } from '../../../types/types';
import { colors, golbalStyles } from '../../../theme/theme';

interface PeopleCardProps {
  people: Personaje;
  onPress: () => void;
}

const PeopleCard = ({ people, onPress }: PeopleCardProps) => {
  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <Text style={styles.name}>{people.nombre}</Text>
        <Text style={styles.gender}>{people.genero}</Text>
      </View>


      <View style={styles.divider} />


      <View style={styles.infoContainer}>
        <Text style={styles.infoText}><Text style={golbalStyles.fontBold}>Año de nacimiento:</Text> {people.anio_nacimiento}</Text>
        <Text style={styles.infoText}><Text style={golbalStyles.fontBold}>Altura:</Text> {people.altura} cm</Text>
        <Text style={styles.infoText}><Text style={golbalStyles.fontBold}>Peso:</Text> {people.masa} kg</Text>
      </View>


      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{people.peliculas.length}</Text>
          <Text style={styles.statLabel}>Películas</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{people.vehiculos.length}</Text>
          <Text style={styles.statLabel}>Vehículos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{people.naves_estelares.length}</Text>
          <Text style={styles.statLabel}>Naves</Text>
        </View>
      </View>


      <PrimaryButton label="Ver Detalles" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: colors.background,
    borderWidth:1,
    borderColor:colors.primary
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.dark,
  },
  gender: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 12,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
});

export default PeopleCard;