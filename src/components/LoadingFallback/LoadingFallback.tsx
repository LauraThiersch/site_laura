import React from 'react';
import { siteConfig } from '../../siteConfig';
import './LoadingFallback.css';

const LoadingFallback: React.FC = () => {
  return (
    <div className="loading-fallback">
      <div className="loading-header">
        <div className="loading-logo">
          <div className="logo-placeholder"></div>
        </div>
        <h1>Dra. Laura Thiersch</h1>
        <p>Neuropediatra em Belo Horizonte</p>
      </div>
      
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p>Carregando informações...</p>
      </div>
      
      <div className="loading-contact">
        <h3>📞 Contato Rápido</h3>
        <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} className="whatsapp-link">
          WhatsApp: {siteConfig.contact.whatsapp}
        </a>
      </div>
    </div>
  );
};

export default LoadingFallback; 