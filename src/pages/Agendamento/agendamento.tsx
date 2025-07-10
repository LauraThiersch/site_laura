import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BookingWidgetSelector from '../../components/Booking/BookingWidgetSelector';
import { AnalyticsService } from '../../services/AnalyticsService';
import './agendamento.css';

const AgendamentoPage: React.FC = () => {
  useEffect(() => {
    // Rastrear visualização da página
    AnalyticsService.trackPageView(
      'Agendar Consulta | Dra. Laura Thiersch - Neuropediatra BH',
      window.location.href
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Agendar Consulta | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch</title>
        
        <meta
          name="description"
          content="Agende sua consulta com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Consultório no Prado, BH. Atendimento especializado em TEA, TDAH e Epilepsia Infantil. Agendamento online seguro e rápido."
        />
        
        <meta 
          name="keywords" 
          content="agendar consulta neuropediatra BH, agendamento online neurologista infantil, Dra. Laura Thiersch consulta, neuropediatra Belo Horizonte agendamento, TEA TDAH Epilepsia consulta BH" 
        />
        
        <link rel="canonical" href="https://www.laurathiersch.com.br/agendar-consulta" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Agendar Consulta | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta property="og:description" content="Agende sua consulta com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Consultório no Prado, BH. Atendimento especializado em TEA, TDAH e Epilepsia Infantil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/agendar-consulta" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/dra-laura-thiersch-neuropediatra-bh-consultorio-01.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agendar Consulta | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta name="twitter:description" content="Agende sua consulta com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Consultório no Prado, BH. Atendimento especializado em TEA, TDAH e Epilepsia Infantil." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/dra-laura-thiersch-neuropediatra-bh-consultorio-01.jpg" />

        {/* Schema Markup para MedicalService */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Consulta Neuropediátrica - Dra. Laura Thiersch",
              "description": "Agendamento de consulta neuropediátrica com a Dra. Laura Thiersch em Belo Horizonte. Atendimento especializado em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.",
              "url": "https://www.laurathiersch.com.br/agendar-consulta",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Dra. Laura Thiersch - Neuropediatra",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": {siteConfig.contact.address.street},
                  "addressLocality": {siteConfig.contact.address.city},
                  "addressRegion": {siteConfig.contact.address.state},
                  "postalCode": {siteConfig.contact.address.zipCode},
                  "addressCountry": {siteConfig.contact.address.country}
                },
                "telephone": "+5531995626630",
                "email": {siteConfig.contact.email}
              },
              "areaServed": {
                "@type": "City",
                "name": {siteConfig.contact.address.city}
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://www.laurathiersch.com.br/agendar-consulta",
                "serviceType": "Online Booking"
              },
              "serviceType": "Neurology Consultation",
              "category": "Medical Service",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      <main className="agendamento-page">
        {/* Seção Hero */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Agendar Consulta com Dra. Laura Thiersch</h1>
              <p className="hero-subtitle">
                Neuropediatra em Belo Horizonte - Consultório no Prado
              </p>
              <p className="hero-description">
                Agende sua consulta de forma rápida e segura. Atendimento especializado 
                em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Informações */}
        <section className="info-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Localização</h3>
                <p>Rua Turquesa, 347 - Prado<br />Belo Horizonte - MG</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">🕒</div>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta<br />08:00h às 17:00h</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Contato</h3>
                <p>WhatsApp: (31) 99562-6630<br />Email: contato@lauraneuroped.com.br</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">💳</div>
                <h3>Forma de Pagamento</h3>
                <p>Atendimento Particular<br />PIX, Cartão ou Dinheiro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Agendamento */}
        <section className="booking-section">
          <div className="container">
            <div className="booking-container">
              <div className="booking-intro">
                <h2>Agende sua Consulta</h2>
                <p>
                  Agenda sua consulta abaixo! Você receberá uma confirmação por email com todos os detalhes e instruções de preparação.
                </p>
              </div>
              
              <BookingWidgetSelector
                doctorId="laura-maria-silva-thiersch"
                specialtyId="neurologista-pediatrico"
                defaultWidget="official"
                className="main-booking-widget"
              />
            </div>
          </div>
        </section>

        {/* Seção de Preparação */}
        <section className="preparation-section">
          <div className="container">
            <h2>Como se Preparar para a Consulta</h2>
            <div className="preparation-grid">
              <div className="preparation-card">
                <h3>📋 Documentos Necessários</h3>
                <ul>
                  <li>Documento de identidade da criança</li>
                  <li>Cartão de vacinação e do nascimento</li>
                  <li>Exames anteriores (se houver)</li>
                  <li>Relatórios escolares ou de outros profissionais</li>
                  <li>Vídeos do comportamento e crises, se houver</li>
                </ul>
              </div>
              
              <div className="preparation-card">
                <h3>⏰ Chegue com Antecedência</h3>
                <ul>
                  <li>Chegue 15 minutos antes do horário</li>
                  <li>Prepare a criança sobre a consulta</li>
                  <li>Anote suas dúvidas e preocupações</li>
                </ul>
              </div>
              
              <div className="preparation-card">
                <h3>🏥 No Consultório</h3>
                <ul>
                  <li>Ambiente acolhedor e familiar</li>
                  <li>Primeira consulta tem direito a retorno em até 30 dias para resultados de exames ou avaliação pós início de medicações</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Especialidades */}
        <section className="specialties-section">
          <div className="container">
            <h2>Especialidades da Dra. Laura Thiersch</h2>
            <div className="specialties-grid">
              <div className="specialty-card">
                <h3>🧠 TEA (Transtorno do Espectro Autista)</h3>
                <p>Diagnóstico precoce e acompanhamento especializado para crianças com autismo.</p>
              </div>
              
              <div className="specialty-card">
                <h3>⚡ TDAH (Transtorno do Déficit de Atenção)</h3>
                <p>Avaliação e tratamento do TDAH em crianças e adolescentes.</p>
              </div>
              
              <div className="specialty-card">
                <h3>💫 Epilepsia Infantil</h3>
                <p>Diagnóstico e controle de crises epilépticas em crianças.</p>
              </div>
              
              <div className="specialty-card">
                <h3>📈 Atrasos no Desenvolvimento</h3>
                <p>Avaliação de marcos do desenvolvimento e intervenção precoce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section className="cta-section">
          <div className="container">
            <h2>Pronto para Agendar sua Consulta?</h2>
            <p>
              A Dra. Laura Thiersch está pronta para ajudar seu filho com o melhor 
              cuidado neurológico em Belo Horizonte.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/5531995626630"
                className="btn-whatsapp"
                onClick={() => {
                  AnalyticsService.trackContactClick('whatsapp', window.location.href);
                }}
              >
                📱 Agendar via WhatsApp
              </a>
              <a
                href="tel:+5531995626630"
                className="btn-phone"
                onClick={() => {
                  AnalyticsService.trackContactClick('phone', window.location.href);
                }}
              >
                📞 Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AgendamentoPage; 