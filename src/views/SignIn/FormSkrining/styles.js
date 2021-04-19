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
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 24,
    color: '#ffffff',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '95%',
    height: 50,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e597ff',
  },
  button2: {
    backgroundColor: '#d0d1ff',
  },
  form: {
    width: '95%',
  },
  listItemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  soal: {
    textAlign: 'left',
    textAlignVertical: 'auto',
    marginVertical: 10,
  },
});

export default styles;
