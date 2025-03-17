// components/organisms/PlanetList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import PlanetCard from '../molecules/PlanetCard';
import { Planet } from '../../../types/types';

interface PlanetListProps {
  planets?: Planet[];
  onPress: (url: string) => void;
}

const PlanetList = ({ planets = [], onPress }: PlanetListProps) => {
  return (
    <FlatList
      data={planets}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <PlanetCard
          planet={item}
          onPress={() => onPress(item.url)}
        />
      )}
    />
  );
};

export default PlanetList;