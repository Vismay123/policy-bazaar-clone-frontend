import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance</h4>
            <ul>
              <li className="mb-2">General Insurance</li>
              <li className="mb-2">Life Insurance</li>
              <li className="mb-2">Term Insurance</li>
              <li className="mb-2">Investment</li>
              <li className="mb-2">Health Insurance</li>
              <li className="mb-2">Other Insurance</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Calculators</h4>
            <ul>
              <li className="mb-2">SIP Calculator</li>
              <li className="mb-2">Income Tax Calculator</li>
              <li className="mb-2">NPS Calculator</li>
              <li className="mb-2">Term Insurance Calculator</li>
              <li className="mb-2">HLV Calculator</li>
              <li className="mb-2">Life Insurance Calculator</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li className="mb-2">Articles</li>
              <li className="mb-2">Customer reviews</li>
              <li className="mb-2">Insurance companies</li>
              <li className="mb-2">Newsroom</li>
              <li className="mb-2">Awards</li>
              <li className="mb-2">PB Life</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Sitemap</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Legal & Admin policies</li>
              <li className="mb-2">ISNP</li>
              <li className="mb-2">Contact us</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; Copyright 2008-2024 policybazaar.com. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
