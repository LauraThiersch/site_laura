import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// Importa o logo da Dra. Laura otimizado em WebP para melhor performance
import logo from '../../assets/images/optimized/dra-laura-thiersch-neuropediatra-logo.webp'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="header"
      // Schema.org para indicar que é o cabeçalho de uma página web
      itemScope 
      itemType="https://schema.org/WPHeader" 
    >
      <div className="header-container">
        {/* Navegação Principal Esquerda - Desktop */}
        <nav 
          className="main-nav left-nav desktop-nav" 
          aria-label="Navegação Principal do Site da Dra. Laura Thiersch"
        >
          <ul>
            <li>
              <Link to="/" aria-label="Página Inicial da Dra. Laura Thiersch - Neuropediatra em Belo Horizonte" title="Página Inicial - Dra. Laura Thiersch | Neuropediatra BH">Home</Link>
            </li>
            <li>
              <Link to="/sobre" aria-label="Saiba mais sobre a Dra. Laura Thiersch, Neuropediatra Pediátrica em Belo Horizonte" title="Sobre a Dra. Laura Thiersch - Especialista em Neurologia Infantil">Sobre</Link>
            </li>
            <li>
              <Link to="/blog" aria-label="Blog educativo sobre neuropediatria, TEA, TDAH e epilepsia infantil" title="Blog Educativo - Artigos sobre Neuropediatria">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Logo Central */}
        <div className="logo" itemScope itemType="https://schema.org/Organization">
          <Link to="/" itemProp="url">
            <img 
              src={logo} 
              loading="lazy"
              alt="Dra. Laura Thiersch - Neuropediatra em Belo Horizonte - TEA, TDAH e Epilepsia Infantil"
              title="Logo da Dra. Laura Thiersch - Neurologia Infantil em Belo Horizonte"
              itemProp="logo"
              width="180"
              height="90"
            />
          </Link>
          <span className="sr-only" itemProp="name">Dra. Laura Thiersch | Neuropediatra BH | TEA TDAH Epilepsia</span>
        </div>

        {/* Navegação Principal Direita - Desktop */}
        <nav 
          className="main-nav right-nav desktop-nav" 
          aria-label="Navegação de Serviços e Contato da Dra. Laura Thiersch"
        >
          <ul>
            <li>
              <Link to="/atendimentos" aria-label="Conheça os atendimentos em Neuropediatria da Dra. Laura Thiersch em BH" title="Atendimentos da Dra. Laura Thiersch - Diagnóstico e Tratamento de TEA, TDAH, Epilepsia">Atendimentos</Link>
            </li>
            <li>
              <Link to="/avaliacoes" aria-label="Avaliações e depoimentos de pacientes da Dra. Laura Thiersch" title="Avaliações da Dra. Laura Thiersch - Depoimentos de Pacientes">Avaliações</Link>
            </li>
            <li>
              <Link to="/contato" aria-label="Agende uma consulta ou entre em contato com a Dra. Laura Thiersch Neuropediatra" title="Página de Contato da Dra. Laura Thiersch - Agende sua Consulta em Belo Horizonte">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* Botão do Menu Mobile */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav 
        id="mobile-menu"
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Menu de navegação mobile"
      >
        <ul>
          <li>
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              aria-label="Página Inicial da Dra. Laura Thiersch - Neuropediatra em Belo Horizonte" 
              title="Página Inicial - Dra. Laura Thiersch | Neuropediatra BH"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              onClick={closeMobileMenu}
              aria-label="Saiba mais sobre a Dra. Laura Thiersch, Neuropediatra Pediátrica em Belo Horizonte" 
              title="Sobre a Dra. Laura Thiersch - Especialista em Neurologia Infantil"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              onClick={closeMobileMenu}
              aria-label="Blog educativo sobre neuropediatria, TEA, TDAH e epilepsia infantil" 
              title="Blog Educativo - Artigos sobre Neuropediatria"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/atendimentos" 
              onClick={closeMobileMenu}
              aria-label="Conheça os atendimentos em Neuropediatria da Dra. Laura Thiersch em BH" 
              title="Atendimentos da Dra. Laura Thiersch - Diagnóstico e Tratamento de TEA, TDAH, Epilepsia"
            >
              Atendimentos
            </Link>
          </li>
          <li>
            <Link 
              to="/avaliacoes" 
              onClick={closeMobileMenu}
              aria-label="Avaliações e depoimentos de pacientes da Dra. Laura Thiersch" 
              title="Avaliações da Dra. Laura Thiersch - Depoimentos de Pacientes"
            >
              Avaliações
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              onClick={closeMobileMenu}
              aria-label="Agende uma consulta ou entre em contato com a Dra. Laura Thiersch Neuropediatra" 
              title="Página de Contato da Dra. Laura Thiersch - Agende sua Consulta em Belo Horizonte"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
