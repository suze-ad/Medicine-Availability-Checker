import React from 'react';

const PharmacyCard = ({ pharmacy }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <h4 className="font-bold text-lg mb-2">{pharmacy.name}</h4>
      <div className="space-y-2 text-sm">
        <p className="text-gray-600">
          <span className="font-semibold">Price:</span> ${pharmacy.price}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Stock:</span> {pharmacy.stock} units
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Distance:</span> {pharmacy.distance}km
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {pharmacy.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Address:</span> {pharmacy.address}
        </p>
      </div>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => window.location.href = `tel:${pharmacy.phone}`}
      >
        Call Pharmacy
      </button>
    </div>
  );
};

export default PharmacyCard; 