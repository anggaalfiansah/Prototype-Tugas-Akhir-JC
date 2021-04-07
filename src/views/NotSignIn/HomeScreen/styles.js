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
  buttonContainer: {
    width: '80%',
    height: 50,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
});

export default styles;
