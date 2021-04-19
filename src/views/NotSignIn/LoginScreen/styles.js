/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 34,
    color: '#ffffff',
    marginVertical: 20,
  },
  inputContainer: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  input: {
    borderRadius: 20,
    fontSize: 17,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e597ff',
    marginVertical: 10,
  },
  button2: {
    backgroundColor: '#d0d1ff',
    marginVertical: 10,
  },
});

export default styles;
