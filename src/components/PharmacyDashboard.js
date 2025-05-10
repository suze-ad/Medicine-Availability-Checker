import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import MedicineForm from './MedicineForm';
import { getPharmacyInventory, updateInventory } from '../services/api';

const PharmacyDashboard = () => {
  const { user } = useAuth();
  const [inventory, setInventory] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const data = await getPharmacyInventory(user.id);
      setInventory(data);
    } catch (error) {
      console.error('Failed to load inventory:', error);
    }
  };

  const handleUpdateStock = async (medicineId, newStock) => {
    try {
      await updateInventory(user.id, medicineId, newStock);
      loadInventory();
    } catch (error) {
      console.error('Failed to update stock:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Pharmacy Dashboard</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Medicine
        </button>
      </div>

      {showAddForm && (
        <MedicineForm
          onClose={() => setShowAddForm(false)}
          onSuccess={() => {
            setShowAddForm(false);
            loadInventory();
          }}
        />
      )}

      <div className="grid gap-4">
        {inventory.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{item.medicine.name}</h3>
            <div className="mt-2 space-y-2">
              <p>Price: ${item.price}</p>
              <p>Stock: {item.stock}</p>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={item.stock}
                  onChange={(e) => handleUpdateStock(item.medicine.id, e.target.value)}
                  className="w-20 p-1 border rounded"
                />
                <button
                  onClick={() => handleUpdateStock(item.medicine.id, item.stock)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyDashboard; 