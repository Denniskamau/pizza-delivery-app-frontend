import * as actionTypes from './types';
import axios from 'axios';
import { history } from '../App';
import { toast } from 'react-toastify';

const apiURL ='https://my-pizza-app-api.herokuapp.com/api'


export const createOrder = (order) => {
  return (dispatch) => {
    axios.post(`${apiURL}/orders`, order)
      .then(res => {
          dispatch({
            type: actionTypes.CREATE_ORDER,
            payload: res.data.data
          })
          toast('Order Created')
      })
      .catch(error => {
          //TODO: handle the error when implemented
      });
  }
}

export const fetchOrder = () => {
    return (dispatch) => {
      axios.get(`${apiURL}/orders`)
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

  export const deleteOrder = (id) => {
    console.log('id', id)
    return (dispatch) => {
      axios.delete(`${apiURL}/orders/${id}`)
      .then(res => {
        dispatch({
          type: actionTypes.DELETE_ORDER,
          payload: res.data.data
        })
      })
    }
  }

  export const updateOrder = (id) => {
    return (dispatch) => {
      axios.put(`${apiURL}/orders/${id}`)
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_ORDER,
          payload: res.data
        })
      })
    }
  }
