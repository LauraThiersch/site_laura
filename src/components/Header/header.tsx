import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// Importa o logo da Dra. Laura. LEMBRE-SE de renomear este arquivo se ainda não fez!
// Sugestão de nome para SEO: logo-dra-laura-thiersch-neuropediatra.png
import logo from '../../assets/images/dra-laura-thiersch-neuropediatra-logo.png'; 

const Header: React.FC = () => {
  return (
    <header 
      className="header"
      // Schema.org para indicar que é o cabeçalho de uma página web
      itemScope 
      itemType="https://schema.org/WPHeader" 
    >
      <div className="header-container">
        {/* Navegação Principal Esquerda - Semântica para os bots e acessibilidade */}
        <nav 
          className="main-nav left-nav" 
          aria-label="Navegação Principal do Site da Dra. Laura Thiersch"
        >
          <ul>
            <li>
              <Link 
                to="/"
                aria-label="Página Inicial da Dra. Laura Thiersch - Neuropediatra em Belo Horizonte"
                title="Página Inicial - Dra. Laura Thiersch | Neuropediatra BH" // Texto de dica ao passar o mouse
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/sobre"
                aria-label="Saiba mais sobre a Dra. Laura Thiersch, Neuropediatra Pediátrica em Belo Horizonte"
                title="Sobre a Dra. Laura Thiersch - Especialista em Neurologia Infantil"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Seção do Logo - Crucial para SEO da Marca e Localização */}
        <div 
          className="logo"
          // Schema.org para identificar a organização/negócio local
          itemScope 
          itemType="https://schema.org/Organization" 
        >
          <Link to="/" itemProp="url"> {/* itemProp="url" indica a URL principal da organização */}
            <img 
              src={logo} 
              loading="lazy"
              // ALT TEXT: OTIMIZAÇÃO CRÍTICA! Descritivo, com palavras-chave relevantes
              alt="Dra. Laura Thiersch - Neuropediatra em Belo Horizonte - TEA, TDAH e Epilepsia Infantil"
              // TITLE TEXT: Mais contexto para SEO e UX
              title="Logo da Dra. Laura Thiersch - Neurologia Infantil em Belo Horizonte"
              itemProp="logo" // Indica que esta é a imagem do logo da organização
            />
          </Link>
          {/* Texto visível apenas para leitores de tela, reforçando o nome da organização para Schema.org */}
          <span className="sr-only" itemProp="name">Dra. Laura Thiersch | Neuropediatra BH | TEA TDAH Epilepsia</span>
        </div>
        
        {/* Navegação Principal Direita - Semântica e Palavras-chave */}
        <nav 
          className="main-nav right-nav" 
          aria-label="Navegação de Serviços e Contato da Dra. Laura Thiersch"
        >
          <ul>
            <li>
              <Link 
                to="/atendimentos"
                aria-label="Conheça os atendimentos em Neuropediatria da Dra. Laura Thiersch em BH"
                title="Atendimentos da Dra. Laura Thiersch - Diagnóstico e Tratamento de TEA, TDAH, Epilepsia"
              >
                Atendimentos
              </Link>
            </li>
            <li>
              <Link 
                to="/contato"
                aria-label="Agende uma consulta ou entre em contato com a Dra. Laura Thiersch Neuropediatra"
                title="Página de Contato da Dra. Laura Thiersch - Agende sua Consulta em Belo Horizonte"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
