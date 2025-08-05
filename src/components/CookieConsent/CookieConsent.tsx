import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já fez uma escolha
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
    onReject();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-banner">
        <div className="cookie-consent-content">
          <div className="cookie-consent-header">
            <h3>🍪 Cookies e Privacidade</h3>
            <p>
              Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
              Suas informações são protegidas conforme a LGPD.
            </p>
          </div>

          <div className="cookie-consent-links">
            <a 
              href="/politica-de-privacidade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cookie-policy-link"
            >
              Política de Privacidade
            </a>
            <a 
              href="https://www.google.com/policies/privacy/partners/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="google-policy-link"
            >
              Como o Google usa informações
            </a>
          </div>

          <div className="cookie-consent-actions">
            <button 
              onClick={handleAccept}
              className="cookie-accept-btn"
              aria-label="Aceitar todos os cookies"
            >
              Aceitar Todos
            </button>
            <button 
              onClick={handleReject}
              className="cookie-reject-btn"
              aria-label="Rejeitar cookies não essenciais"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 