import * as actionTypes from './types';

export const createUser = (user) => {
    console.log('action user', JSON.stringify(user))
    return {
      type: actionTypes.CREATE_NEW_USER,
      user: user
    }
  };

  export const deleteUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        id: id
    }
}