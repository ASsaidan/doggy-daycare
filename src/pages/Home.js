import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Doggy Daycare</h1>
      <p>We take care of your furry friends while you're away!</p>
      <Link to="/catalog" className="cta-button">View Our Dog Catalog</Link>
    </div>
  );
};

export default Home;