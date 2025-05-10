import React, { useState } from 'react';
import PharmacyCard from './PharmacyCard';

const MedicineList = ({ medicines }) => {
  const [sortBy, setSortBy] = useState('distance');

  const sortedMedicines = [...medicines].sort((a, b) => {
    if (sortBy === 'distance') {
      return a.distance - b.distance;
    }
    return a.price - b.price;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="distance">Sort by Distance</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid gap-4">
        {sortedMedicines.map((medicine) => (
          <div key={medicine.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{medicine.name}</h3>
            <p className="text-gray-600 mb-4">{medicine.genericName}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {medicine.pharmacies.map((pharmacy) => (
                <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineList; 