import * as actionTypes from '../actions/types';


const initialState = {
  loggedin: false,
  user: []
}
export default (state = initialState, action) => {
    switch (action.type){

      case actionTypes.CREATE_NEW_USER:
      return {
        ...state,
        loggedin:true,
        user: action.payload
      }
      case actionTypes.REGISTER_FAIL:
        return {
          ...state,
          loggedin:false
        }
        case actionTypes.LOGIN_FAIL:
          return {
            ...state,
            loggedin:false
          }
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          loggedin:true
        }
      case actionTypes.GET_USER:
        return {
          ...state,
          loggedin:true,
          user:action.payload
        }
      default:
            return state;
    }
  };