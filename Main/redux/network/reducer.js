import {actions} from './actions';
const _defaultState = {
    isConnected : true,
};
 export default (state = _defaultState , action) =>{
    switch (action.type) {
        case actions.SET_IS_CONNECTED:
            return { ...state ,isConnected : action.data }
        default:
            return state;
    }
 }