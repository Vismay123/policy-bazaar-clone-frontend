import React from 'react';

const FooterPromotions = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8 bg-gray-100">
      <div className="p-20 bg-green-200 text-green-700 rounded-lg">
        <h3 className="font-bold text-xl">Investment Plans</h3>
        <p className="mt-2">Invest ₹10K and Get ₹1 Crore return*</p>
      </div>
      <div className="p-20 bg-blue-200 text-blue-700 rounded-lg">
        <h3 className="font-bold text-xl">Health Insurance</h3>
        <p className="mt-2">1 Crore Health coverage now cheaper than 5 lacs</p>
      </div>
      <div className="p-20 bg-purple-200 text-purple-700 rounded-lg">
        <h3 className="font-bold text-xl">Reach your financial goals</h3>
        <p className="mt-2">Make investment simple with our SIP calculator</p>
      </div>
    </div>
  );
};

export default FooterPromotions;
