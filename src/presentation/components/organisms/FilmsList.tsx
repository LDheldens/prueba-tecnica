// components/organisms/PlanetList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import PlanetCard from '../molecules/PlanetCard';
import { Pelicula, Planet } from '../../../types/types';
import FilmCard from '../molecules/FilmCard';

interface Props {
  peliculas?: Pelicula[];
  onPress: (url: string) => void;
}

const FilmList = ({ peliculas = [], onPress }: Props) => {
  return (
    <FlatList
      data={peliculas}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <FilmCard
            film={item}
            onPress={()=>onPress(item.url)}
        />
      )}
    />
  );
};

export default FilmList;