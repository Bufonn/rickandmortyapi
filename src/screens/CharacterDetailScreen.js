import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/CharacterDetailStyles';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Espécie: {character.species}</Text>
      <Text>Gênero: {character.gender}</Text>
      <Text>Origem: {character.origin.name}</Text>
      <Text>Local Atual: {character.location.name}</Text>
    </View>
  );
}