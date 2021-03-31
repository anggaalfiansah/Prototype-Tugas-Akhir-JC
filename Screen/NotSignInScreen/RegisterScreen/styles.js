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
    marginBottom: 20,
  },
  form: {
    marginBottom: 10,
  },
  inputContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#828282',
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 20,
    fontSize: 17,
  },
  dateContainer: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#828282',
    paddingHorizontal: 10,
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
