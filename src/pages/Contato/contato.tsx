import React, { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet'; // Importamos o Helmet para meta tags de SEO
import './contato.css';
import Button from '../../components/Button/button'; // Certifique-se de que o caminho está correto

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
      // TODO: Implementar a lógica real para enviar o formulário para um backend.
      // Pode ser uma função serverless, um serviço como Formspree, ou um backend customizado.
      
      // Simulando um envio bem-sucedido após 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({ // Limpa o formulário após o sucesso
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* Helmet: CRUCIAL para o SEO! Define o título da página, meta descrição e palavras-chave.
        Isso é o que o Google e as redes sociais leem para entender do que se trata sua página.
        Preenchemos com as palavras-chave mais relevantes para a Dra. Laura Thiersch. */}
      <Helmet>
        {/* Título da Página: O mais importante para o SEO. Deve ser único e descritivo. */}
        <title>Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch</title>
        
        {/* Meta Descrição: Resumo do conteúdo da página. Aparece nos resultados de busca. */}
        <meta 
          name="description" 
          content="Entre em contato com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Agende sua consulta por WhatsApp, telefone, e-mail ou preencha nosso formulário. Atendimento especializado em TEA, TDAH, Epilepsia Infantil." 
        />
        
        {/* Meta Keywords: Embora menos impactantes hoje, ainda podem ajudar a reforçar o tema. */}
        <meta 
          name="keywords" 
          content="contato neuropediatra BH, agendar consulta neuropediatra, telefone neurologista infantil Belo Horizonte, email Dra. Laura Thiersch, WhatsApp neuropediatra, clínica neurologia infantil BH, dúvidas TEA, TDAH, Epilepsia Infantil" 
        />
        
        {/* Canonical URL: Indica ao Google a versão preferencial da página para evitar conteúdo duplicado. */}
        <link rel="canonical" href="https://www.laurathiersch.com.br/contato" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        
        {/* Open Graph Tags (para compartilhamento em redes sociais como Facebook, LinkedIn) */}
        <meta property="og:title" content="Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta property="og:description" content="Entre em contato com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Agende sua consulta por WhatsApp, telefone, e-mail ou preencha nosso formulário. Atendimento especializado em TEA, TDAH, Epilepsia Infantil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/contato" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-contato-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}
        
        {/* Twitter Card Tags (para compartilhamento no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta name="twitter:description" content="Entre em contato com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Agende sua consulta por WhatsApp, telefone, e-mail ou preencha nosso formulário. Atendimento especializado em TEA, TDAH, Epilepsia Infantil." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-contato-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}

        {/* Schema Markup para LocalBusiness (Organização Médica) - CRÍTICO PARA SEO LOCAL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dra. Laura Thiersch - Neuropediatra em Belo Horizonte",
              "url": "https://www.laurathiersch.com.br",
              "logo": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png",
              "image": "https://www.laurathiersch.com.br/images/consultorio-neuropediatra-belo-horizonte.jpg",
              "description": "Clínica de Neurologia Pediátrica da Dra. Laura Thiersch em Belo Horizonte, especializada em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Turquesa, 347",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "postalCode": "30411-177",
                "addressCountry": "BR"
              },
              "telephone": "+5531995626630",
              "email": "contato@lauraneuroped.com.br",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5531995626630",
                "contactType": "Agendamento de Consultas",
                "areaServed": "Belo Horizonte e Região Metropolitana",
                "availableLanguage": ["Portuguese"]
              },
              "sameAs": [
                "https://www.instagram.com/lauraneuroped/",
                "https://www.facebook.com/lauraneuroped/",
                "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte",
                "https://g.co/kgs/tWPeVGb" // Link do Google My Business
              ],
              "hasMap": ""https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.726964964019!2d-43.96385768462244!3d-19.93085798660937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698fdc1e2e3e7%3A0x7e2e2e2e2e2e2e2e!2sR.%20Turquesa%2C%20347%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-177!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            }
          `}
        </script>
      </Helmet>

      {/* main: Tag semântica que indica o conteúdo principal e único da página. */}
      <main className="contato-page">
        {/* Seção Hero: Introdução da página. */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title" // Acessibilidade
          itemScope itemType="https://schema.org/WebPage" // Tipo de página
        >
          <div className="container">
            <h1 id="hero-title" className="page-title">
              Entre em Contato com a Dra. Laura Thiersch
            </h1>
            <p className="hero-description">
              Estamos à disposição para esclarecer suas dúvidas sobre neurologia infantil, agendar consultas e oferecer o melhor cuidado para o desenvolvimento do seu filho em Belo Horizonte.
            </p>
          </div>
        </section>
        
        {/* Seção Formulário e Informações */}
        <section className="contact-section" aria-labelledby="contact-form-title">
          <div className="container contact-container">
            <div className="contact-info">
              <h2 className="section-title">Informações de Contato da Clínica</h2> {/* Título para acessibilidade */}
              
              <address className="info-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <h3 className="sub-title">Endereço</h3>
                <p>
                  <span itemProp="streetAddress">Rua Turquesa, 347 </span><br />
                  <span itemProp="addressLocality">Prado</span>, 
                  <span itemProp="addressRegion"> Belo Horizonte</span> - 
                  <span itemProp="addressRegion"> MG</span><br />
                  CEP: <span itemProp="postalCode">30411-177</span>
                </p>
                <p>
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.726964964019!2d-43.96385768462244!3d-19.93085798660937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698fdc1e2e3e7%3A0x7e2e2e2e2e2e2e2e!2sR.%20Turquesa%2C%20347%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-177!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Obter rota para o consultório da Dra. Laura Thiersch no Google Maps"
                    title="Obter rota para o consultório"
                  >
                    Ver no Mapa e Obter Rota
                  </a>
                </p>
              </address>

              <div className="info-item">
                <h3 className="sub-title">Telefone e WhatsApp</h3>
                <p>
                  <a
                    href="tel:+5531995626630"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'Clique_Telefone', {
                          event_category: 'Conversao_Contato',
                          event_label: 'Telefone_Contato',
                          conversion_type: 'phone',
                          contact_method: 'phone',
                          area_conversao: 'neuropediatra_bh',
                          localizacao_consultorio: 'prado_bh',
                          value: 1,
                          currency: 'BRL'
                        });
                        console.log('🎯 Clique no telefone rastreado');
                      }
                    }}

                    rel="noopener noreferrer"
                    itemProp="telephone"
                    aria-label="Ligar para Dra. Laura Thiersch"
                    title="Ligue para a Dra. Laura Thiersch"
                  >
                    (31) 99562-6630
                  </a>
                </p>
                <Button
                  variant="appointment"
                  href="https://wa.me/5531995626630"
                  ariaLabel="Enviar mensagem para Dra. Laura Thiersch via WhatsApp"
                  title="Converse com a Dra. Laura Thiersch no WhatsApp"
                  trackingCategory="Conversao_Contato"
                  trackingAction="Clique_WhatsApp_Contato"
                  trackingLabel="Botao_WhatsApp_Contato"
                  conversionType="whatsapp"
                >
                  Enviar Mensagem via WhatsApp
                </Button>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Email</h3>
                <p>
                  <a
                    href="mailto:contato@lauraneuroped.com.br"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'Clique_Email', {
                          event_category: 'Conversao_Contato',
                          event_label: 'Email_Contato',
                          conversion_type: 'email',
                          contact_method: 'email',
                          area_conversao: 'neuropediatra_bh',
                          localizacao_consultorio: 'prado_bh',
                          value: 1,
                          currency: 'BRL'
                        });
                        console.log('🎯 Clique no email rastreado');
                      }
                    }}

                    rel="noopener noreferrer"
                    itemProp="email"
                    aria-label="Enviar email para Dra. Laura Thiersch"
                    title="Envie um email para a Dra. Laura Thiersch"
                  >
                    contato@lauraneuroped.com.br
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 08:00h às 17:00h</p>
                <p>Sábado e Domingo: Fechado</p>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Conecte-se nas Redes Sociais</h3>
                <div className="social-links">
                  <a href="https://instagram.com/lauraneuroped/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Dra. Laura Thiersch" title="Perfil da Dra. Laura Thiersch no Instagram">Instagram</a>
                  <a href="https://facebook.com/lauraneuroped/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Dra. Laura Thiersch" title="Perfil da Dra. Laura Thiersch no Facebook">Facebook</a>
                  <a href="https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte" target="_blank" rel="noopener noreferrer" aria-label="Perfil da Dra. Laura Thiersch no Doctoralia" title="Perfil da Dra. Laura Thiersch no Doctoralia">Doctoralia</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 id="contact-form-title" className="section-title">Envie sua Mensagem</h2>
              {submitSuccess ? (
                <div className="success-message">
                  <p>Sua mensagem foi enviada com sucesso!</p>
                  <p>Agradecemos seu contato. Entraremos em contato o mais breve possível para auxiliar sua família.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitSuccess(false)}
                    ariaLabel="Enviar nova mensagem para a Dra. Laura Thiersch"
                    title="Clique para enviar outra mensagem"
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate> {/* noValidate para controle via JS */}
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo<span className="required-star">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Seu nome completo"
                      autoComplete="name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">E-mail<span className="required-star">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Seu endereço de e-mail"
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefone (com DDD)<span className="required-star">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      pattern="[0-9]{2}[0-9]{4,5}[0-9]{4}" // Padrão simples para telefone
                      aria-required="true"
                      aria-label="Seu telefone com DDD"
                      autoComplete="tel"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Sua Mensagem<span className="required-star">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} // Aumentar um pouco as linhas para melhor visualização
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Digite sua mensagem para a Dra. Laura Thiersch"
                    ></textarea>
                  </div>
                  
                  {submitError && <p className="error-message" role="alert">{submitError}</p>}
                  
                    <Button
                      type="submit"
                      variant="primary"
                      className={isSubmitting ? 'submitting' : ''}
                      ariaLabel={isSubmitting ? 'Enviando sua mensagem' : 'Enviar sua mensagem agora'}
                      title={isSubmitting ? 'Aguarde o envio da mensagem' : 'Clique para enviar sua mensagem'}
                      trackingCategory="Conversao_Contato"
                      trackingAction="Envio_Formulario_Contato"
                      trackingLabel="Botao_Enviar_Formulario"
                      conversionType="form"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                </form>
              )}
            </div>
          </div>
        </section>
        
        {/* Seção Mapa - Crucial para SEO Local */}
        <section className="map-section" aria-labelledby="map-title">
          <div className="container">
            <h2 id="map-title" className="section-title">Encontre a Clínica da Dra. Laura Thiersch em Belo Horizonte</h2>
            <div className="map-container">
              {/* IFRAME GOOGLE MAPS: Substitua este URL pelo mapa real do consultório da Rua Grão Mogol */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.726964964019!2d-43.96385768462244!3d-19.93085798660937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698fdc1e2e3e7%3A0x7e2e2e2e2e2e2e2e!2sR.%20Turquesa%2C%20347%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-177!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Dra. Laura Thiersch, Neuropediatra em Belo Horizonte"
                aria-label="Obter rota para o consultório da Dra. Laura Thiersch no Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Seção CTA */}
        <section 
          className="cta-section" 
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction"
        >
          <div className="container">
            <h2 id="cta-title">Agende a Consulta do Seu Filho com a Dra. Laura Thiersch Hoje Mesmo!</h2>
            <p className="cta-description">
              Agende uma consulta com a Dra. Laura Thiersch e proporcione ao seu filho um cuidado neurológico especializado, humanizado e focado no seu desenvolvimento.
            </p>
            <Button
              variant="appointment"
              href="https://wa.me/5531995626630"
              ariaLabel="Agendar sua consulta de neuropediatria via WhatsApp com a Dra. Laura Thiersch"
              title="Agende sua consulta de neuropediatria em Belo Horizonte com a Dra. Laura Thiersch"
              trackingCategory="Conversao_Contato_Final"
              trackingAction="Clique_WhatsApp_Contato_CTA"
              trackingLabel="Botao_WhatsApp_Contato"
              conversionType="whatsapp"
            >
              Agende Sua Consulta Via WhatsApp
            </Button>
            <p className="cta-contact-info">
              <span className="cta-label">Prefere ligar?</span> <a className="cta-link" href="tel:+5531995626630" target="_blank" rel="noopener noreferrer">(31) 99562-6630</a>
              <span className="cta-label"> | Ou envie um e-mail: </span>
              <a className="cta-link" href="mailto:contato@lauraneuroped.com.br" target="_blank" rel="noopener noreferrer">contato@lauraneuroped.com.br</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;
