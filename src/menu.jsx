import React from 'react';
import './menu.css';

const Menu = () => {
  const menuItems = [
    {
      name: 'California Roll',
      price: '30 TND',
      description: 'A delightful roll with crab, avocado, and cucumber.',
      image: '/public/California Roll.jpg',
    },
    {
      name: 'Tuna Sashimi',
      price: '70 TND',
      description: 'Fresh slices of tuna served with wasabi and soy sauce.',
      image: '/public/tuna.jpg',
    },
    {
      name: 'Maki Rolls',
      price: '30 TND',
      description: 'Delicious maki rolls with various fillings like cucumber, avocado, and fish.',
      image: '/public/Futomaki 太巻き (Maki Sushi).jpg',
    },
    {
      name: 'Salmon Nigiri',
      price: '60 TND',
      description: 'Fresh salmon served over a small bed of vinegared rice.',
      image: '/public/salmon.jpg',
    },
    {
      name: 'Tteokbokki',
      price: '50 TND',
      description: 'Rice cakes filled with a spicy chili sauce.',
      image: '/public/Tteokbokki Recipe.jpg',
    },
    {
      name: 'Ramen',
      price: '30 TND',
      description: 'Ramen noodles filled with soup, eggs, and thin chopped onion.',
      image: '/public/Homemade Ramen Recipe.jpg',
    },
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
        <div className="grid">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
