import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-burger-7949a.firebaseio.com/",
});

export default instance;
