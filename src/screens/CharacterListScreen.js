import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CharactersListStyles';

export default function CharactersListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
        .then((data) => setCharacters(data.results))
            .catch((error) => console.error('Erro ao buscar personagens:', error))
                .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00b5cc" />
        <Text>Carregando personagens...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CharacterDetail', { character: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.status}>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}