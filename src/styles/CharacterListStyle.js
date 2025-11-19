import { StyleSheet } from 'react-native';

const StylesList = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  search: {
    backgroundColor: '#1c3f47',
    borderWidth: 2,
    borderColor: '#97ce4c',
    color: '#97ce4c',
    margin: 10,
    padding: 12,
    marginTop: 40,
    borderRadius: 12,
    fontSize: 18,
  },

  list: {
    padding: 10,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#1c3f47',
    borderRadius: 12,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#97ce4c',
    elevation: 4,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  info: {
    marginLeft: 10,
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#97ce4c',
  },

  status: {
    color: '#fff',
  },
});

export default StylesList;
