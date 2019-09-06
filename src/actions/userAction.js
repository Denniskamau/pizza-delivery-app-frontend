import * as actionTypes from './types';
import $http from 'axios';
import { history } from '../App';

export const createUser = (user) => {
  return (dispatch) => {
      $http.post({ url: '/register', data: user })
      .then(res => {
          dispatch({
            type: actionTypes.CREATE_NEW_USER,
            payload: res.data.data,
          });
          history.push('/login');
      })
      .catch(error => {
          dispatch({
            type:actionTypes.REGISTER_FAIL
          });
          return error;
      });
  }
}

export const LoginSuccess = () => {
    return (dispatch) => { dispatch({
      type:actionTypes.LOGIN_SUCCESS
    });
  };
}

export const LoginUnSuccess = () => {
  return (dispatch) => { dispatch({
      type:actionTypes.LOGIN_FAIL
    });
  }
}

export const loginUser = (user) => {
  return (dispatch) => {
      $http.post({ url: '/login', data: user })
      .then(res => {
          dispatch({
            type: actionTypes.GET_USER,
            payload: res.data.data
          });
          sessionStorage.setItem('jwt',res.data.data.api_token);
          if(res.data.data.email === 'admin@gmail.com'){
            history.push('/login');
          }else{
            history.push('/dashboard');
          }
      })
      .catch(error => {
        dispatch({
          type:actionTypes.LOGIN_FAIL
        });
        history.push('/login');
      });
  }
}

export const deleteUser = (id) => {
  return {
      type: actionTypes.REMOVE_USER,
      id: id
  }
}
