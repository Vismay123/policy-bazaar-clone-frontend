import React from 'react';

const InfoSection = () => {
  return (
    <div className="flex justify-between items-center py-12 px-8 bg-white">
      {/* Left Side: Text */}
      <div className="max-w-md">
        <h2 className="text-4xl font-semibold leading-tight">
          What makes <br />
          <span className="text-blue-600">Policybazaar</span> one of <br />
          <span className="text-blue-600">India's favourite places</span> <br />
          to buy insurance?
        </h2>
      </div>

      {/* Right Side: Info Cards */}
      <div className="grid grid-cols-2 gap-6 max-w-lg">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="text-lg font-bold text-blue-600">🎉 Over 9 million</div>
          <p className="mt-2 text-gray-600">
            customers trust us & have bought their insurance on Policybazaar
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="text-lg font-bold text-blue-600">🔍 50+ insurers</div>
          <p className="mt-2 text-gray-600">
            partnered with us so that you can compare easily & transparently
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="text-lg font-bold text-blue-600">💸 Great Price</div>
          <p className="mt-2 text-gray-600">
            for all kinds of insurance plans available online
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="text-lg font-bold text-blue-600">🛡 Claims</div>
          <p className="mt-2 text-gray-600">
            support built in with every policy for help, when you need it the most
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
