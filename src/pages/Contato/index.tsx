import React, { useState, FormEvent } from 'react';
import './styles.css';
import Button from '../../components/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Aqui você implementaria a lógica para enviar o formulário
      // Por exemplo, usando fetch para enviar para uma API
      
      // Simulando um envio bem-sucedido após 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="contato-page">
      {/* Seção Hero */}
      <section className="contato-hero">
        <div className="container">
          <h1 className="page-title">Entre em Contato</h1>
          <p className="hero-description">
            Estamos à disposição para esclarecer suas dúvidas e agendar sua consulta.
          </p>
        </div>
      </section>
      
      {/* Seção Formulário e Informações */}
      <section className="contact-section">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Informações de Contato</h2>
            <div className="info-item">
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123 - Bairro</p>
              <p>Cidade/UF - CEP: 00000-000</p>
            </div>
            <div className="info-item">
              <h3>Telefone</h3>
              <p>(XX) XXXXX-XXXX</p>
            </div>
            <div className="info-item">
              <h3>WhatsApp</h3>
              <p>(XX) XXXXX-XXXX</p>
              <Button 
                variant="secondary" 
                href="https://wa.me/XXXXXXXXXXX"
              >
                Enviar mensagem
              </Button>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>contato@drabrunavilela.com.br</p>
            </div>
            <div className="info-item">
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Envie uma Mensagem</h2>
            {submitSuccess ? (
              <div className="success-message">
                <p>Sua mensagem foi enviada com sucesso!</p>
                <p>Entraremos em contato o mais breve possível.</p>
                <Button 
                  variant="primary" 
                  onClick={() => setSubmitSuccess(false)}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo*</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefone*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem*</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                
                {submitError && <p className="error-message">{submitError}</p>}
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className={isSubmitting ? 'submitting' : ''}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Seção Mapa */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Localização</h2>
          <div className="map-container">
            {/* Aqui você pode inserir um iframe do Google Maps */}
            <div className="map-placeholder">
              <p>Mapa será carregado aqui. Substitua este elemento por um iframe do Google Maps.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Agende uma consulta com a Dra. Bruna Vilela</h2>
          <p>Proporcione ao seu filho um cuidado neurológico especializado e humanizado.</p>
          <Button 
            variant="appointment" 
            href="https://wa.me/XXXXXXXXXXX"
          >
            Agende sua consulta
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contato;
