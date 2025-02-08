import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './delivery-form.css';

const DeliveryForm = () => {
  const { state } = useLocation();
  const { name, price } = state;

  // Extract numerical value from the price string
  const priceValue = parseFloat(price.replace(' TND', ''));

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [total, setTotal] = useState(priceValue); // Calculate total based on quantity

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity + delta); // Ensure quantity is at least 1
      setTotal(newQuantity * priceValue); // Update total value
      return newQuantity;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${quantity} x ${name} to ${address}, ${governorate}. Total: ${total} TND`);
    // Logic to submit form data to the backend can be added here
  };

  return (
    <section id="delivery-form" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Order Details</h2>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{name}</h3>
          <p className="text-gray-600 mb-4">Unit Price: {price}</p>
          <div className="flex items-center mb-4">
            <label className="mr-4 font-semibold">Quantity:</label>
            <button
              type="button"
              className="bg-gray-200 px-3 py-1 rounded-l"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              type="button"
              className="bg-gray-200 px-3 py-1 rounded-r"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <p className="text-gray-600 mb-4 font-semibold">
            Total: {total.toFixed(2)} TND
          </p>
          <div className="mb-5">
            <label className="block font-semibold mb-2">Address:</label>
            <input
              type="text"
              className="w-full px-3 py-3 border rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Governorate:</label>
            <select
              className="w-full px-4 py-2 border rounded"
              value={governorate}
              onChange={(e) => setGovernorate(e.target.value)}
              required
            >
              <option value="" disabled>Select a governorate</option>
              <option value="Tunis">Tunis</option>
              <option value="Sfax">Sfax</option>
              <option value="Sousse">Sousse</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default DeliveryForm;
