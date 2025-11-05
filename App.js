import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersListScreen from '../screens/CharactersListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CharactersList"
          component={CharactersListScreen}
          options={{ title: 'Rick and Morty Characters' }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{ title: 'Character Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}