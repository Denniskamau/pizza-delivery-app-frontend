import { combineReducers } from 'redux';
import user from './userReducer';
import order from './orderReducer'

export default combineReducers({
    user: user,
    order:order
});