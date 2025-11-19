
---

# 📱 Rick and Morty App — React Native (Expo)

Aplicativo simples desenvolvido em **React Native com Expo**, consumindo a **API pública Rick and Morty** para listar personagens e exibir seus detalhes.

---

## 🚀 Funcionalidades

### ✔ 1. Listagem de Personagens (CharactersListScreen)

* Consumo da API: `https://rickandmortyapi.com/api/character`
* Exibição de loading enquanto os dados carregam
* Renderização com **FlatList**
* Cards com:

  * Imagem
  * Nome
  * Status + Espécie
* Navegação para a tela de detalhes ao clicar em um personagem

### ✔ 2. Tela de Detalhes (CharacterDetailScreen)

* Recebe o personagem via navegação
* Exibe:

  * Imagem ampliada
  * Nome
  * Status, Espécie e Gênero
  * Origem
  * Localização Atual

### ✔ 3. Navegação

* Implementada com **React Navigation (Stack Navigator)**

---

## 🎯 Requisitos Extras (Bônus)

* **Paginação Infinita** com `onEndReached`
* **Busca por nome** usando `TextInput` (`?name=rick`)
* **Estilização temática** inspirada em Rick and Morty

---

## 🛠 Tecnologias Utilizadas

* React Native (Expo)
* React Navigation
* Fetch API ou Axios
* Rick and Morty REST API

---

## 🔗 Documentação Útil

* API Rick and Morty: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
* FlatList: [https://reactnative.dev/docs/flatlist](https://reactnative.dev/docs/flatlist)
* React Navigation: [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

---

## 🔭 Vídeo

* Vídeo Demonstrativo: https://youtu.be/nnUpJa1fAOw?si=BelohurkNOJ33xLh


