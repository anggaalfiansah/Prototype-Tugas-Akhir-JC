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
    fontSize: 34,
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
    alignSelf: 'center',
    width: '50%',
    marginVertical: 10,
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
  profil: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoProfil: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  namaProfil: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;
