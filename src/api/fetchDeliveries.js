
import axios from "axios";
export const fetchDeliveries = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:1425/backend/fetch_deliveries.php');
    return response.data;  
  } catch (error) {
    console.error('Error fetching deliveries:', error);
    return [];  
  }
};
