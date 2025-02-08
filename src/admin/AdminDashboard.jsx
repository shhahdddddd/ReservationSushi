import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { fetchReservations } from "../api/fetchReservation"; 
import { fetchDeliveries } from "../api/fetchDeliveries";     

function AdminDashboard() {
  const [reservations, setReservations] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) {
      navigate("/admin/Adminlogin");
      return;
    }

    const fetchData = async () => {
      try {
        const reservationsData = await fetchReservations();
        const deliveriesData = await fetchDeliveries();
        setReservations(reservationsData);
        setDeliveries(deliveriesData);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div>
      <AdminNavbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Reservations</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{reservation.name}</td>
                  <td className="border border-gray-300 p-2">{reservation.email}</td>
                  <td className="border border-gray-300 p-2">{reservation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Deliveries</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{delivery.name}</td>
                  <td className="border border-gray-300 p-2">{delivery.email}</td>
                  <td className="border border-gray-300 p-2">{delivery.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
