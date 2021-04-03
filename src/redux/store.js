/* eslint-disable prettier/prettier */
import {createStore} from 'redux';
import tokenReducer from './reducer';

const store = createStore(tokenReducer);
export default store;
