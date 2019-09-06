import * as actionTypes from './types';
import $http from 'axios';



export const createOrder = (order) => {
  return (dispatch) => {
      $http.post({ url: '/orders', data: order })
      .then(res => {
          dispatch({
            type: actionTypes.CREATE_ORDER,
            payload: res.data.data
          })
      })
      .catch(error => {
          //TODO: handle the error when implemented
      });
  }
}

export const fetchOrder = () => {
    return (dispatch) => {
        $http.get({ url: '/orders' })
        .then(res => {
            dispatch({
              type: actionTypes.FETCH_ORDERS,
              payload: res.data
            })
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
  }
