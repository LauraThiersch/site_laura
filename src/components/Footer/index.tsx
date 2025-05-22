import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-logo">
            <h3>Dra. Bruna Vilela</h3>
            <p>Neurologista Infantil</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Telefone: (XX) XXXXX-XXXX</p>
            <p>Email: contato@drabrunavilela.com.br</p>
            <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade/UF</p>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://instagram.com/XXXXXXX" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dra. Bruna Vilela - Todos os direitos reservados</p>
          <div className="footer-links">
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
