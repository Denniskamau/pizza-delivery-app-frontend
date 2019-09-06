import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-pizza-app-api.herokuapp.com/api'
});

export default instance;