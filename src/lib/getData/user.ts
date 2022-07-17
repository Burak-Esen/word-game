import axios from 'axios';

export const loginReq = async (
  data: ICredentials,
) => {
  return axios.post('/api/login', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
