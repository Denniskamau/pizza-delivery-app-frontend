import * as actionTypes from './types';
import axios from 'axios';
import { history } from '../App';
const apiURL ='http://127.0.0.1:8001/api'


export const createOrder = (order) => {
  return (dispatch) => {
    axios.post(`${apiURL}/orders`, order)
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
