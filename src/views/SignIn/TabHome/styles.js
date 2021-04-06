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
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 34,
    marginBottom: 200,
  },
  buttonContainer: {
    width: '90%',
    height: 75,
    marginVertical: 10,
    backgroundColor: '#4A8EDE',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    color: '#ffffff',
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
