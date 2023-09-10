import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = async () => {
  const { data } = await axios(BASE_URL);
  return data;
}
