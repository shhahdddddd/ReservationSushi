import React from 'react';
import { useNavigate } from 'react-router-dom';
import './delievery.css';

const Delivery = () => {
  const menuItems = [
    { name: 'California Roll', price: '30 TND', image: 'public/California Roll.jpg' },
    { name: 'Tuna Sashimi', price: '70 TND', image: 'public/tuna.jpg' },
    { name: 'Maki Rolls', price: '30 TND', image: 'public/Futomaki 太巻き (Maki Sushi).jpg' },
    { name: 'Salmon Nigiri', price: '60 TND', image: 'public/salmon.jpg' },
    { name: 'Tteokbokki', price: '50 TND', image: 'public/Tteokbokki Recipe.jpg' },
    { name: 'Ramen', price: '30 TND', image: 'public/Homemade Ramen Recipe.jpg' },
  ];

  const navigate = useNavigate();

  const handleDeliveryClick = (item) => {
    navigate('/delivery-form', { state: item });
  };

  return (
    <section id="delivery" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
              <button
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                onClick={() => handleDeliveryClick(item)}
              >
                Deliver
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
