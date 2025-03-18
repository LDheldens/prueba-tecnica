import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../theme/theme';


interface Props {
  query: string; 
  onQueryChange: (query: string) => void; 
}

const SearchInput = ({ query, onQueryChange }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar personajes..."
        placeholderTextColor={colors.primary}
        value={query}
        onChangeText={onQueryChange} 
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10,
    borderWidth:1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
});