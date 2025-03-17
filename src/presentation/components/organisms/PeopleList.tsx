
import React from 'react';
import { FlatList } from 'react-native';
import { Personaje} from '../../../types/types';
import PeopleCard from '../molecules/PeopleCard';

interface Props {
  personajes?: Personaje[];
  onPress: (url: string) => void;
}

const FilmList = ({ personajes = [], onPress }: Props) => {
  return (
    <FlatList
      data={personajes}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <PeopleCard
            people={item}
            onPress={()=>onPress(item.url)}
        />
      )}
    />
  );
};

export default FilmList;