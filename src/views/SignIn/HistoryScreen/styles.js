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
    color: '#ffffff',
    marginVertical: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    width: '92%',
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
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardCheck: {
    fontWeight: '700',
    fontSize: 16,
  },
  cardKeterangan: {
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  cardTanggal: {
    paddingVertical: 10,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  carStatus: {
    width: '100%',
    fontSize: 16,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
  button: {
    width: 150,
    backgroundColor: '#e597ff',
    alignSelf: 'flex-end',
  },
  textButton: {
    width:'100%',
    textAlign: 'center',
    color: '#ffffff',
    padding: 5,
  },
});

export default styles;
