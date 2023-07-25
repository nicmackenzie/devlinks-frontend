import axios from 'axios';
import { API_URL } from '../utils/constants';

export async function login(email) {
  try {
    const { data } = await axios.post(
      `${API_URL}/login`,
      {
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
