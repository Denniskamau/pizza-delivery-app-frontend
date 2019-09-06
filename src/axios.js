import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-pizza-ordering-app.herokuapp.com/api'
});

export default instance;