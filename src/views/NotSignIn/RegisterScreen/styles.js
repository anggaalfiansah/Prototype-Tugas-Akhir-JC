/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
    color: '#ffffff',
    marginVertical: 20,
  },
  form: {
    marginBottom: 150,
  },
  inputContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  inputContainerDanger: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: 'red',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  dateInput: {
    width: '100%',
    borderRadius: 20,
    fontSize: 17,
  },
  textAreaContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#828282',
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
});

export default styles;
