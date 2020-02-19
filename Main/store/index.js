import reducers from '../redux/reducers';
import { createStore, combineReducers } from 'redux';
const store = createStore(reducers);
export default store;