import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = async (params) => {
  const { data } = await axios(BASE_URL, { params });
  return data;
}
