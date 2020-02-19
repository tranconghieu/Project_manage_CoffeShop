import {combineReducers } from 'redux';
import {AppReducers} from '../redux';
const _reducers = Object.keys(AppReducers).reduce((obj, key) => {
    if (!AppReducers[key]['reducer']) {
      throw new Error('Reducer not found for: ' + key);
    }
    obj[key] = AppReducers[key]['reducer'];
    return obj;
  }, {});
console.log(AppReducers);
export default combineReducers(_reducers);