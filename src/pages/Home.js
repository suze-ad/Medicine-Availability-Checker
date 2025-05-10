import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MedicineList from '../components/MedicineList';
import { searchMedicines } from '../services/api';

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMedicines(searchTerm);
      setMedicines(results);
    } catch (error) {
      setError('Failed to search medicines. Please try again.');
      console.error('Search error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Medicine Availability Checker
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching medicines...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && medicines.length > 0 && (
          <MedicineList medicines={medicines} />
        )}

        {!loading && !error && medicines.length === 0 && (
          <div className="text-center py-8 text-gray-600">
            No medicines found. Try a different search term.
          </div>
        )}
      </main>
    </div>
  );
};

export default Home; 