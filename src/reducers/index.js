import { combineReducers } from 'redux';
import user from './userReducer';
import orders from './orderReducer'

export default combineReducers({
    user,
    orders
});