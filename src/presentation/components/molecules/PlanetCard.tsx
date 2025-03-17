
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import { Planet, Planeta } from '../../../types/types';
import { colors, golbalStyles } from '../../../theme/theme';

interface PlanetCardProps {
  planet:Planeta
  onPress: () => void;
}

const PlanetCard = ({ planet, onPress }: PlanetCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={golbalStyles.title2}>{planet.nombre}</Text>
      <Text><Text style={golbalStyles.fontBold}>Clima:</Text> {planet.clima}</Text>
      <Text><Text style={golbalStyles.fontBold}>Gravedad:</Text> {planet.gravedad}</Text>
      <Text><Text style={golbalStyles.fontBold}>Terreno:</Text> {planet.terreno}</Text>
      <PrimaryButton label="Ver Detalles" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  climate: {
    fontSize: 14,
    color: '#666666',
  },
});

export default PlanetCard;