// /src/api/authenticateAdmin.js

import axios from 'axios';

export const authenticateAdmin = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5173/backend/login.php', { username, password }, {
      headers: {
        'Content-Type': 'application/json', // Make sure we send JSON content
      },
    });
    return response.data;
  } catch (error) {
    console.error('Authentication error:', error);
    return { status: 'error', message: 'Failed to authenticate' };
  }
};
