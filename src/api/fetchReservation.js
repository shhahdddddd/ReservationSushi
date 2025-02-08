
import axios from 'axios';
export const authenticateAdmin = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5173/backend/login.php', { username, password });
    return response.data;  
  } catch (error) {
    console.error('Authentication error:', error);
    return { status: 'error', message: 'Failed to authenticate' };
  }
};
export const fetchReservations = async () => {
  try {
    const response = await axios.get('http://localhost:5173/backend/fetch_reservations.php');
    return response.data;  
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return [];  
  }
};
