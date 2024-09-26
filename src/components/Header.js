import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Doggy Daycare</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;