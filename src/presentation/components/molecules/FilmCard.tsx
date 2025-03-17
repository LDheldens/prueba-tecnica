// components/molecules/FilmCard.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import { Pelicula } from '../../../types/types';
import { colors, golbalStyles } from '../../../theme/theme';

interface FilmCardProps {
  film: Pelicula;
  onPress: () => void;
}

const FilmCard = ({ film, onPress }: FilmCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={golbalStyles.title2}>{film.titulo}</Text>
        <View style={styles.episodeBadge}>
          <Text style={styles.episodeText}>EP {film.id_episodio}</Text>
        </View>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.releaseDate}>{new Date(film.fecha_estreno).getFullYear()}</Text>
        <Text><Text style={golbalStyles.fontBold}>Director:</Text> {film.director}</Text>
        <Text><Text style={golbalStyles.fontBold}>Productor:</Text> {film.productor}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film.personajes.length}</Text>
            <Text style={styles.statLabel}>Personajes</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film.planetas.length}</Text>
            <Text style={styles.statLabel}>Planetas</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statCount}>{film.naves_estelares.length}</Text>
            <Text style={styles.statLabel}>Naves</Text>
          </View>
        </View>
      </View>
      
      <PrimaryButton label="Ver Detalles" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  episodeBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  episodeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoContainer: {
    marginBottom: 12,
  },
  releaseDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
});

export default FilmCard;