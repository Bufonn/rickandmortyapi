import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: '#555',
  },
});