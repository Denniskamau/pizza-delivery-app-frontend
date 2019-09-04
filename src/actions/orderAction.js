import * as actionTypes from './types';
import axios from 'axios';

const apiURL ='http://127.0.0.1:8001/api'


export const createOrder = (order) => {
console.log('order', JSON.stringify(order))
  return (dispatch) => {
      axios.post(`${apiURL}/orders`, order)
      .then(res => {
          console.log('respose', JSON.stringify(res.data))
          dispatch({
            type: actionTypes.CREATE_ORDER,
            payload: res.data.data
          })
      })
      .catch(error => {
          //TODO: handle the error when implemented
      })
  }
}