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

export async function getStacks() {
  try {
    const { data } = await axios.get(`${API_URL}/stacks`);

    // console.log(data);

    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateUserDetails({ details, id }) {
  // console.log(details);
  try {
    const { data } = await axios.patch(`${API_URL}/users/edit/${id}`, details);

    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateUserLinks({ links, id }) {
  try {
    const { data } = await axios.post(
      `${API_URL}/users/updatelinks/${id}`,
      {
        links,
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
