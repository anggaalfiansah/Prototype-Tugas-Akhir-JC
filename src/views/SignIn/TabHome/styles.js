/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 24,
    color: '#ffffff',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#e597ff',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  button2: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#d0d1ff',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '700',
  },
  gambar: {
    width: '100%',
    height: 200,
    resizeMode: 'center',
  },
});

export default styles;
