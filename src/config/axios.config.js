import axios from 'axios';

const baseURL = process.env.MYORIGIN_APP_DEV_SERVER_API;

export default axios.create({
  baseURL,
});
