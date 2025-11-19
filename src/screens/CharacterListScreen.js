import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import StylesList from '../styles/CharacterListStyle.js';

export default function CharactersListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(
    'https://rickandmortyapi.com/api/character'
  );
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim() === '') {
        setCharacters([]);
        setNextPage('https://rickandmortyapi.com/api/character');
        loadCharacters();
        setSearching(false);
      } else {
        searchCharacters(search);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  async function loadCharacters() {
    if (!nextPage) return;

    setLoading(true);
    try {
      const response = await fetch(nextPage);
      const data = await response.json();

      setCharacters((prev) => {
        const merged = [...prev, ...data.results];
      
        const unique = merged.filter(
          (item, index, self) =>
            index === self.findIndex((c) => c.id === item.id)
        );
      
        return unique;
      });
      
      setNextPage(data.info.next);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    }
    setLoading(false);
  }

  async function searchCharacters(name) {
    setSearching(true);
    setLoading(true);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const data = await response.json();

      setCharacters(data.results || []);
      setNextPage(null);
    } catch {
      setCharacters([]);
    }

    setLoading(false);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={StylesList.card}
      onPress={() => navigation.navigate('CharacterDetail', { character: item })}
    >
      <Image source={{ uri: item.image }} style={StylesList.image} />
      <View style={StylesList.info}>
        <Text style={StylesList.name}>{item.name}</Text>
        <Text style={StylesList.status}>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#0b2d33' }}>
      {/*Barra de busca */}
      <TextInput
        style={StylesList.search}
        placeholder="Buscar personagem..."
        placeholderTextColor="#97ce4c"
        value={search}
        onChangeText={setSearch}
      />

      {loading && characters.length === 0 ? (
        <View style={StylesList.loadingContainer}>
          <ActivityIndicator size="large" color="#97ce4c" />
          <Text style={{ color: '#fff' }}>Carregando personagens...</Text>
        </View>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={StylesList.list}
          onEndReached={() => {
            if (!searching) loadCharacters();
          }}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator size="large" color="#97ce4c" />
            ):null
          }
        />
      )}
    </View>
  );
}
