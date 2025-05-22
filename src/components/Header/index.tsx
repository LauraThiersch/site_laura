import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="main-nav left-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
        
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dra. Bruna Vilela - Neurologista Infantil" />
          </Link>
        </div>
        
        <nav className="main-nav right-nav">
          <ul>
            <li><Link to="/atendimentos">Atendimentos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
