import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogs } from '../services/dogService';
import '../styles/DogDetails.css';

const DogDetails = () => {
  const [dog, setDog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadDog = async () => {
      const dogs = await fetchDogs();
      const selectedDog = dogs.find(d => d.chipNumber === id);
      setDog(selectedDog);
    };
    loadDog();
  }, [id]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Owner: {dog.owner.name}</p>
      <p>Phone: {dog.owner.phoneNumber}</p>
    </div>
  );
};

export default DogDetails;