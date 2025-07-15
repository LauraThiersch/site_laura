import React, { useState } from 'react';
import './newsletter.css';

const topics = [
  'TEA',
  'TDAH',
  'Epilepsia',
  'Desenvolvimento',
  'Dicas',
  'Geral'
];

// Configuração Zoho Mail API (não utilizada no frontend - movida para backend)
// const ZOHO_API_CONFIG = {
//   clientId: 'YOUR_ZOHO_CLIENT_ID',
//   clientSecret: 'YOUR_ZOHO_CLIENT_SECRET',
//   refreshToken: 'YOUR_ZOHO_REFRESH_TOKEN',
//   fromEmail: 'newsletter@laurathiersch.com.br',
//   toEmail: 'contato@laurathiersch.com.br'
// };

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Todos os temas');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validação do e-mail
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError('Digite um e-mail válido.');
      setLoading(false);
      return;
    }

    try {
      // Enviar para API Vercel
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: email.split('@')[0], // Use email prefix as name for now
          interests: [topic]
        })
      });

      if (!response.ok) {
        throw new Error('Erro no servidor');
      }

      const result = await response.json();
      
      if (result.success) {
        setSuccess(true);
        setEmail('');
        setTopic('Todos os temas');
        
        // Resetar mensagem de sucesso após 5 segundos
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.message || 'Erro ao processar inscrição.');
      }

    } catch (err) {
      console.error('Erro ao enviar newsletter:', err);
      setError('Erro ao processar inscrição. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-icon">📬</div>
      <h3 className="newsletter-title">Assine a Newsletter</h3>
      <p className="newsletter-subtitle">Receba artigos, dicas e novidades diretamente no seu e-mail.</p>
      <ul className="newsletter-benefits">
        <li>Artigos semanais</li>
        <li>100% gratuito</li>
        <li>Cancelar quando quiser</li>
      </ul>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">Seu e-mail</label>
        <input
          id="newsletter-email"
          className="newsletter-input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
          disabled={loading}
        />
        <label htmlFor="newsletter-topic">Temas de interesse</label>
        <select
          id="newsletter-topic"
          className="newsletter-select"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          disabled={loading}
        >
          <option>Todos os temas</option>
          {topics.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <button 
          className="newsletter-button" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Assinar'}
        </button>
        {error && <div className="newsletter-error">{error}</div>}
        {success && <div className="newsletter-success">Inscrição realizada com sucesso! Você receberá nossas novidades em breve.</div>}
      </form>
      <div className="newsletter-disclaimer">
        Ao se inscrever, você concorda com nossa política de privacidade. Não enviamos spam.
      </div>
    </div>
  );
};

export default Newsletter;
export {}; 