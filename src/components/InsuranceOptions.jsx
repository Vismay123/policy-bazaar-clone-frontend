import React from 'react';
import ProductList from './ProductList';


const InsuranceOptions = () => {
  const [showProducts, setShowProducts] = React.useState(false);
  const options = [
    { name: 'Term Life Insurance', discount: 'Up to 10% Discount', icon: '☂️' },
    { name: 'Health Insurance', discount: 'Cashless Anywhere', icon: '❤️' },
    { name: 'Investment Plans', discount: 'In-Built Life Cover', icon: '📊' },
    { name: 'Car Insurance', discount: 'Up to 85% Discount', icon: '🚗' },
    { name: '2 Wheeler Insurance', discount: 'Up to 75% Discount', icon: '🏍️' },
    { name: 'Family Health Insurance', discount: 'Up to 25% Discount', icon: '👨‍👩‍👧‍👦' },
    { name: 'Travel Insurance', icon: '✈️' },
    { name: 'Term Insurance (Women)', discount: 'Up to 20% Cheaper', icon: '👩' },
    { name: 'Free of Cost Term Plan', icon: '💸' },
    { name: 'Guaranteed Return Plans', icon: '💰' },
    { name: 'Child Savings Plans', icon: '👶', badge: 'Premium Waiver' },
    { name: 'Retirement Plans', icon: '🏖️' },
    { name: 'Employee Group Health Insurance', discount: 'Up to 65% Discount', icon: '👥' },
    { name: 'Home Insurance', discount: 'Up to 25% Discount', icon: '🏠' },
  ];

  const alsoBuyOptions = [
    'LIC Plans', 'Return of Premium', 'Term Life Insurance for Housewives', 'Day 1 Coverage', '1 Cr Health Insurance',
    'Unlimited Restoration of Cover', 'Personal Accident', 'Marine Insurance', 'Professional Indemnity for Doctors',
    'Directors & Officers Liability', 'Workmen Compensation', 'Pet Insurance',
  ];

  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-7 gap-4">
        {options.map((option, index) => (
          <div key={index} className="text-center border rounded-lg p-4">
            <div className="text-3xl">{option.icon}</div>
            <div className="mt-4 text-lg font-semibold">{option.name}</div>
            {option.discount && <div className="text-sm text-green-600 mt-2">{option.discount}</div>}
            {option.badge && <div className="text-xs text-red-600 mt-2">{option.badge}</div>}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto">
      <div className="text-center mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={() => setShowProducts(true)}
        >
          View all products
        </button>
      </div>

      {showProducts && (
        <ProductList onClose={() => setShowProducts(false)} />
      )}
    </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-blue-500">Also Buy</h2>
        <div className="flex flex-wrap gap-2">
          {alsoBuyOptions.map((option, index) => (
            <div key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceOptions;
