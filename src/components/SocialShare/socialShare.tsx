import React, { useState } from 'react';
import './socialShare.css';

interface SocialShareProps {
  url?: string;
  title?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="social-share-container">
      <div className="social-share-title">Compartilhe este artigo</div>
      <div className="social-buttons">
        <a
          className="social-button whatsapp"
          href={`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">🟢</span> WhatsApp
        </a>
        <a
          className="social-button facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">🔵</span> Facebook
        </a>
        <a
          className="social-button twitter"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">🐦</span> Twitter
        </a>
        <a
          className="social-button linkedin"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">💼</span> LinkedIn
        </a>
        <button
          className={`social-button copy${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          type="button"
        >
          <span className="social-icon">🔗</span> {copied ? 'Copiado!' : 'Copiar link'}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
export {}; 