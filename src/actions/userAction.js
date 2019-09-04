import * as actionTypes from './types';
import axios from 'axios';

const apiURL ='http://127.0.0.1:8001/api'

export const createUser = (user) => {
  console.log('user', JSON.stringify(user))
  return (dispatch) => {
      axios.post(`${apiURL}/register`, user)
      .then(res => {
          console.log('respose', JSON.stringify(res.data))
          dispatch({
            type: actionTypes.CREATE_NEW_USER,
            payload: res.data
          })
      })
      .catch(error => {
          //TODO: handle the error when implemented
      })
  }
}
// export const createUser = (user) => {
//     console.log('action user', JSON.stringify(user))
//     return (dispatch) => {

//       axios.post(`${apiURL}/register`, user).then((res) =>{
//           console.log('respose', JSON.stringify(res.data))
//           dispatch({
//             type: actionTypes.CREATE_NEW_USER,
//             payload: res.data
//           })
//         })
//         .catch((err) => {
//           dispatch()
//         })
//     }
//   };

  export const deleteUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        id: id
    }
}