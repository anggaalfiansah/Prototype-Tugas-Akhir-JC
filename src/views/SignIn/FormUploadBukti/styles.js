/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 24,
    color: '#ffffff',
    marginVertical: 20,
  },
  form: {
    marginVertical: 10,
  },
  textAreaContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  textArea: {
    width: '100%',
    borderRadius: 20,
    fontSize: 17,
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e597ff',
  },
  button2: {
    backgroundColor: '#d0d1ff',
  },
  inputContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#828282',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  dateInput: {
    width: '100%',
    borderRadius: 20,
    fontSize: 17,
  },
  profilContainer: {
    width: '90%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilContainer2: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilText: {
    fontFamily: 'DM Sans',
    fontSize: 17,
  },
  profil: {
    resizeMode: 'cover',
    width: '100%',
    height: 512,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  profil2: {
    resizeMode: 'center',
    width: '100%',
    height: 225,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  profilButton: {
    width: '45%',
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default styles;
