import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-3865b.firebaseio.com/'
});

export default instance;
