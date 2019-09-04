import * as actionTypes from './types';

var url = '';
export const createOrder = (order) => {
    console.log('action order', JSON.stringify(order))
    return {
      type: actionTypes.ORDER_PIZZA,
      order: order
    }
  };