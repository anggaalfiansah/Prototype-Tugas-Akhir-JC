/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    marginBottom: 50,
  },
  form: {
    marginBottom: 350,
  },
  inputContainer: {
    width: '80%',
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
  buttonContainer: {
    width: '80%',
    height: 50,
    marginVertical: 10,
  },
});

export default styles;
