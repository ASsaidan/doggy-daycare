import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../services/dogService';
import '../styles/Catalog.css';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBreed, setFilterBreed] = useState('');

  useEffect(() => {
    const loadDogs = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
    };
    loadDogs();
  }, []);

  const filteredDogs = dogs.filter(dog => 
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterBreed === '' || dog.breed === filterBreed)
  );

  const breeds = [...new Set(dogs.map(dog => dog.breed))];

  return (
    <div className="catalog">
      <h1>Our Dog Catalog</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterBreed}
          onChange={(e) => setFilterBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <div className="dog-list">
        {filteredDogs.map(dog => (
          <div key={dog.chipNumber} className="dog-card">
            <img src={dog.img} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <Link to={`/dog/${dog.chipNumber}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;