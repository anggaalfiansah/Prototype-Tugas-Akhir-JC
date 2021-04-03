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
    fontSize: 34,
    marginBottom: 10,
  },
  form: {
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputContainerDanger: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: 'red',
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 20,
    fontSize: 17,
  },
  textAreaContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
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
  button2: {
    marginVertical: 5,
  },
  profilContainer: {
    width: '90%',
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
    width: '55%',
    height: 225,
    borderWidth: 1,
    borderColor: 'gray',
  },
  profilButton: {
    width: '45%',
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default styles;
