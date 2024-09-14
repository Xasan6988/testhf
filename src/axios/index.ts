import axios from 'axios';

export default axios.create({
  baseURL: "http://159.69.178.87/api/v1/users",
  validateStatus: status => true
});
