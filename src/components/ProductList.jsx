import React, { useState } from 'react';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

function ProductList({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      title: 'Term Insurance',
      items: [
        { name: 'Term Life', icon: '🌂' },
        { name: 'Return of Premium', icon: '🪙' },
        { name: 'Saral Jeevan Bima', icon: '🏠' },
        { name: 'Term Insurance For Housewives', icon: '👩‍⚕️' },
        { name: 'Term Insurance for Women', icon: '👩' },
        { name: 'Free of Cost Term Plan', icon: '💸' },
        { name: 'Term Insurance for Diabetic', icon: '💉' },
        { name: 'LIC Plan', icon: '🏢' },
      ],
    },
    {
      title: 'Health Insurance',
      items: [
        { name: 'Health', icon: '❤️' },
        { name: '1 Cr Health Cover', icon: '🏥' },
        { name: 'Arogya Sanjeeva', icon: '🛡️' },
        { name: 'Family Health Insurance', icon: '👨‍👩‍👧‍👦' },
        { name: 'Cancer Insurance', icon: '🎗️' },
      ],
    },
    {
      title: 'Investment Plans',
      items: [
        { name: 'LIC Plans', icon: '🏦' },
        { name: 'Investment', icon: '💰' },
        { name: 'Child Savings Plan', icon: '👶' },
        { name: 'Guaranteed Return Plan', icon: '🔒' },
        { name: 'Retirement Plan', icon: '🧓' },
        { name: 'Tax Saving Investment', icon: '🧾' },
        { name: 'Pension For Life', icon: '🏅' },
        { name: 'Smart Deposit', icon: '💳' },
      ],
    },
    {
      title: 'Other Plans',
      items: [
        { name: 'Car Insurance', icon: '🚗' },
        { name: 'Brand New Car', icon: '🚙' },
        { name: '2 Wheeler Insurance', icon: '🏍️' },
        { name: 'Travel Insurance', icon: '✈️' },
        { name: 'Home Insurance', icon: '🏡' },
        { name: 'Taxi Insurance', icon: '🚕' },
        { name: 'Commercial Vehicle Insurance', icon: '🚚' },
        { name: 'Employee Group Health Insurance', icon: '👨‍💼' },
      ],
    },
  ];

  // Filtered products based on the search term
  const filteredProducts = products.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full h-auto max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">More Products</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 rounded-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map(
            (category, idx) =>
              category.items.length > 0 && (
                <div key={idx}>
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="ml-2">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
