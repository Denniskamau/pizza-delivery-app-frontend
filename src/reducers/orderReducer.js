import * as actionTypes from '../actions/types';

export default (state = [], action) => {
    switch (action.type){

      case actionTypes.CREATE_ORDER:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
      case actionTypes.FETCH_ORDERS:
        return [
          ...state,
          Object.assign({}, action.payload)
        ]
      default:
            return state;
    }
  };