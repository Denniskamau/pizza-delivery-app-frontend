import * as actionTypes from './types';
import axios from 'axios';
import { history } from '../App';
const apiURL ='https://my-pizza-app-api.herokuapp.com/api'

export const createUser = (user) => {
  console.log('user', JSON.stringify(user))
  return (dispatch) => {
      axios.post(`${apiURL}/register`, user)
      .then(res => {
          console.log('respose', JSON.stringify(res.data))
          dispatch({
            type: actionTypes.CREATE_NEW_USER,
            payload: res.data.data
          })
          history.push('/login')
      })
      .catch(error => {
          dispatch({
            type:actionTypes.REGISTER_FAIL
          })
      })
  }
}
export const LoginSuccess = () => {
    return (dispatch) => {dispatch({
      type:actionTypes.LOGIN_SUCCESS
    })
  }
}
export const LoginUnSuccess = () => {
  return (dispatch) => {dispatch({
    type:actionTypes.LOGIN_FAIL
  })
}
}
export const loginUser = (user) => {
  return (dispatch) => {
    console.log('user', JSON.stringify(user))
      axios.post(`${apiURL}/login`, user)
      .then(res => {
          console.log('respose', JSON.stringify(res.data))
          dispatch({
            type: actionTypes.GET_USER,
            payload: res.data.data
          })
          sessionStorage.setItem('jwt',res.data.data.api_token)
          if(res.data.data.email === 'admin@gmail.com'){
            history.push('/admin')
          }else{
            history.push('/order')
          }

      })
      .catch(error => {
        dispatch({
          type:actionTypes.LOGIN_FAIL
        })
        history.push('/login')
      })
  }
}

  export const deleteUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        id: id
    }
}