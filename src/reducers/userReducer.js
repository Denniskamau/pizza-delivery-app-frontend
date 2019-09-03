import * as actionTypes from '../actions/types';

export default (state = [], action) => {
    switch (action.type){

      case actionTypes.CREATE_NEW_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];
      default:
            return state;
    }
  };