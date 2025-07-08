import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DoctoraliaReviews from '../../components/DoctoraliaReviews/DoctoraliaReviews';
import ReviewSystem from '../../components/ReviewSystem/ReviewSystem';
import AdvancedSchema from '../../components/SchemaOrg/advancedSchema';
import './avaliacoes.css';

const AvaliacoesPage: React.FC = () => {
  const handleReviewSubmit = (data: any) => {
    console.log('Nova avaliação enviada:', data);
    // Aqui você pode implementar o envio para sua API
  };

  return (
    <>
      <Helmet>
        <title>Avaliações - Dra. Laura Thiersch | Neuropediatra em Belo Horizonte</title>
        <meta 
          name="description" 
          content="Avaliações e depoimentos de pais sobre a Dra. Laura Thiersch, neuropediatra especialista em TEA, TDAH e Epilepsia em Belo Horizonte. Confira as experiências reais dos pacientes."
        />
        <meta 
          name="keywords" 
          content="avaliações Dra. Laura Thiersch, depoimentos neuropediatra BH, avaliações TEA Belo Horizonte, avaliações TDAH BH, neuropediatra avaliações, Dra. Laura Thiersch depoimentos"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Avaliações - Dra. Laura Thiersch | Neuropediatra em Belo Horizonte" />
        <meta property="og:description" content="Avaliações e depoimentos de pais sobre a Dra. Laura Thiersch, neuropediatra especialista em TEA, TDAH e Epilepsia em Belo Horizonte." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lauraneuroped.com.br/avaliacoes" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avaliações - Dra. Laura Thiersch" />
        <meta name="twitter:description" content="Avaliações e depoimentos de pais sobre a Dra. Laura Thiersch, neuropediatra em Belo Horizonte." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Avaliações - Dra. Laura Thiersch",
              "description": "Avaliações e depoimentos de pais sobre a Dra. Laura Thiersch, neuropediatra especialista em TEA, TDAH e Epilepsia em Belo Horizonte.",
              "url": "https://lauraneuroped.com.br/avaliacoes",
              "mainEntity": {
                "@type": "MedicalBusiness",
                "name": "Dra. Laura Thiersch - Neuropediatra",
                "description": "Neuropediatra especialista em TEA, TDAH e Epilepsia em Belo Horizonte",
                "url": "https://lauraneuroped.com.br",
                "telephone": "+5531995626630",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Turquesa, 347",
                  "addressLocality": "Belo Horizonte",
                  "addressRegion": "MG",
                  "postalCode": "30411-177",
                  "addressCountry": "BR"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      {/* Schema.org Avançado */}
      <AdvancedSchema pageType="avaliacoes" />
      
      <main className="avaliacoes-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1 style={{ color: '#222', textAlign: 'center', marginBottom: '0.5rem' }}>Avaliações e Depoimentos</h1>
            <p style={{ color: '#222', textAlign: 'center', marginBottom: '2rem', fontSize: '1.15rem' }}>
              Confira as experiências reais de pais e pacientes da Dra. Laura Thiersch, neuropediatra especialista em TEA, TDAH e Epilepsia em Belo Horizonte.
            </p>
          </div>
        </section>

        {/* Avaliações do Doctoralia */}
        <section className="content-section">
          <div className="container">
            <div className="section-header">
              <h2>Avaliações do Doctoralia</h2>
              <p>
                Avaliações verificadas de pacientes reais que consultaram com a Dra. Laura Thiersch. 
                Todas as avaliações são autenticadas pelo Doctoralia.
              </p>
            </div>
            
            <DoctoraliaReviews 
              maxReviews={8}
              showRating={true}
              showDate={true}
              className="doctoralia-section"
            />
          </div>
        </section>

        {/* Sistema de Avaliação Próprio */}
        <section className="content-section alt-bg">
          <div className="container">
            <div className="section-header">
              <h2>Deixe sua Avaliação</h2>
              <p>
                Compartilhe sua experiência com a Dra. Laura Thiersch. Sua avaliação será revisada 
                e pode ser publicada no site para ajudar outras famílias.
              </p>
            </div>
            
            <ReviewSystem 
              onSubmit={handleReviewSubmit}
              className="review-system-section"
            />
          </div>
        </section>

        {/* Estatísticas */}
        <section className="content-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">5.0</div>
                <div className="stat-label">Avaliação Média</div>
                <div className="stat-stars">★★★★★</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24</div>
                <div className="stat-label">Avaliações Verificadas</div>
                <div className="stat-subtitle">No Doctoralia</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfação</div>
                <div className="stat-subtitle">Todas as opiniões positivas</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Anos de Experiência</div>
                <div className="stat-subtitle">Em Neuropediatria</div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que Avaliar */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Por que Avaliar a Dra. Laura Thiersch?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Ajuda Outras Famílias</h3>
                <p>
                  Sua experiência pode orientar outras famílias que estão buscando 
                  um neuropediatra especializado em Belo Horizonte.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💡</div>
                <h3>Feedback Construtivo</h3>
                <p>
                  Avaliações honestas ajudam a melhorar continuamente o atendimento 
                  e a experiência dos pacientes.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <h3>Reconhecimento Profissional</h3>
                <p>
                  Avaliações positivas reconhecem o trabalho dedicado da Dra. Laura 
                  e sua equipe.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <h3>Transparência</h3>
                <p>
                  Avaliações públicas demonstram transparência e confiança 
                  no trabalho realizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="content-section">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de Acompanhamento Neuropediátrico?</h2>
              <p>
                Se você ainda não consultou com a Dra. Laura Thiersch, agende uma consulta 
                e descubra por que tantos pais confiam nela para cuidar de seus filhos.
              </p>
              <div className="cta-buttons">
                <Link to="/agendar-consulta" className="btn-primary">
                  Agendar Consulta
                </Link>
                <Link to="/atendimentos" className="btn-secondary">
                  Ver Especialidades
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Links Internos */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Conheça Mais Sobre a Dra. Laura</h2>
            <div className="links-grid">
              <Link to="/sobre" className="link-card">
                <h3>Sobre a Dra. Laura</h3>
                <p>Conheça a formação, experiência e especialidades da Dra. Laura Thiersch</p>
              </Link>
              <Link to="/tea-tratamento-bh" className="link-card">
                <h3>Tratamento TEA</h3>
                <p>Especialidade em Transtorno do Espectro Autista</p>
              </Link>
              <Link to="/tdah-tratamento-bh" className="link-card">
                <h3>Tratamento TDAH</h3>
                <p>Diagnóstico e tratamento do TDAH em crianças</p>
              </Link>
              <Link to="/epilepsia-infantil-bh" className="link-card">
                <h3>Epilepsia Infantil</h3>
                <p>Tratamento especializado para epilepsia</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AvaliacoesPage; 