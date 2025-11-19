import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/CharacterDetailStyle.js';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style = {styles.info}>{character.name}</Text>
      <Text style = {styles.info}>Status: {character.status}</Text>
      <Text style = {styles.info}>Espécie: {character.species}</Text>
      <Text style = {styles.info}>Gênero: {character.gender}</Text>
      <Text style = {styles.info}>Origem: {character.origin.name}</Text>
      <Text style = {styles.info}>Local Atual: {character.location.name}</Text>
    </View>
  );
}