import * as actionTypes from '../actions/types';

const initialState = {
    orders: [],
    place:'peppinos'
}
export default (state = initialState, action) => {
    switch (action.type){

      case actionTypes.CREATE_ORDER:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
      case actionTypes.FETCH_ORDERS:
        return {
          ...state,
            orders: action.payload
        }
        case actionTypes.DELETE_ORDER:
          return {
            ...state,
              orders: action.payload
          }
          case actionTypes.UPDATE_ORDER:
            return {
              ...state,
                orders: action.payload
            }
      default:
            return state;
    }
  };