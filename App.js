import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen.js';
import CharactersListScreen from './src/screens/CharacterListScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CharactersList"
          component={CharactersListScreen}
          options={{ title: 'Rick and Morty Characters' , headerShown:false}}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{ title: 'Character Details' , headerStyle:{backgroundColor:'#97ce4c'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}