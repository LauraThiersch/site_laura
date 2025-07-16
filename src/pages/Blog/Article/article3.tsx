import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../../../siteConfig';
import './article.css';

const Article3Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Epilepsia Infantil: Primeiros Socorros e Segurança | Dra. Laura Thiersch</title>
        <meta name="description" content="Guia completo sobre primeiros socorros para epilepsia infantil. Dra. Laura Thiersch, neuropediatra em BH, ensina como agir durante crises epilépticas." />
        <meta name="keywords" content="epilepsia infantil, primeiros socorros epilepsia, crise epiléptica, neuropediatra BH, Dra. Laura Thiersch, epilepsia crianças" />
        <meta name="author" content="Dra. Laura Thiersch" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lauraneuroped.com.br/blog/epilepsia-infantil-primeiros-socorros" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2024-01-17T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-17T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="Epilepsia, Primeiros Socorros, Neuropediatria, Saúde Infantil" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Epilepsia Infantil: Primeiros Socorros e Segurança" />
        <meta property="og:description" content="Guia completo sobre primeiros socorros para epilepsia infantil. Dra. Laura Thiersch, neuropediatra em BH." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lauraneuroped.com.br/blog/epilepsia-infantil-primeiros-socorros" />
        <meta property="og:image" content="https://lauraneuroped.com.br/images/blog/default-article.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        <meta property="article:published_time" content="2024-01-17T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-17T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="Epilepsia, Primeiros Socorros, Neuropediatria, Saúde Infantil" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epilepsia Infantil: Primeiros Socorros e Segurança" />
        <meta name="twitter:description" content="Guia completo sobre primeiros socorros para epilepsia infantil." />
        <meta name="twitter:image" content="https://lauraneuroped.com.br/images/blog/default-article.jpg" />
        <meta name="twitter:creator" content="@lauraneuroped" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Epilepsia Infantil: Primeiros Socorros e Segurança",
            "description": "Guia completo sobre primeiros socorros para epilepsia infantil.",
            "image": "https://lauraneuroped.com.br/images/blog/default-article.jpg",
            "author": {
              "@type": "Person",
              "name": "Dra. Laura Thiersch",
              "jobTitle": "Neuropediatra",
              "url": siteConfig.baseUrl
            },
            "publisher": {
              "@type": "MedicalOrganization",
              "name": "Consultório Dra. Laura Thiersch - Neuropediatra",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lauraneuroped.com.br/images/logo-dra-laura-thiersch-neuropediatra.png"
              }
            },
            "datePublished": "2024-01-17T10:00:00-03:00",
            "dateModified": "2024-01-17T10:00:00-03:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lauraneuroped.com.br/blog/epilepsia-infantil-primeiros-socorros"
            },
            "articleSection": "Neuropediatria",
            "keywords": "Epilepsia, Primeiros Socorros, Neuropediatria, Saúde Infantil"
          })}
        </script>
      </Helmet>

      <article className="article-page">
        <h1>Epilepsia Infantil: Primeiros Socorros e Segurança</h1>
        <img
          src="/images/blog/default-article.jpg"
          alt="Criança recebendo primeiros socorros para epilepsia"
          style={{
            display: 'block',
            maxWidth: 400,
            width: '100%',
            height: 'auto',
            margin: '2rem auto 1.5rem auto',
            borderRadius: 16,
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
          }}
        />
        <div className="article-meta">
          <span>Por Dra. Laura Thiersch</span>
          <span>Neuropediatra em Belo Horizonte</span>
          <span>9 min de leitura</span>
        </div>
        <div className="article-content">
          <p><strong>A epilepsia afeta aproximadamente 1% das crianças, e saber como agir durante uma crise pode salvar vidas.</strong> Como neuropediatra em Belo Horizonte, ensino regularmente pais e cuidadores sobre os primeiros socorros corretos. Este guia completo vai preparar você para situações de emergência.</p>
          <h2>O que é uma Crise Epiléptica?</h2>
          <p>Uma crise epiléptica é uma descarga elétrica anormal no cérebro que pode causar diferentes tipos de sintomas.</p>
          <p>Nem todas as crises são iguais - algumas são mais óbvias, outras podem passar despercebidas. É importante ressaltar que:</p>
          <ul>
            <li>A criança pode ou não perder a consciência!</li>
            <li>Existem crises mais evidentes, com rigidez corporal seguida de abalos, como na tônica-clônica generalizada;</li>
            <li>Podem ocorrer apenas "choques", como na mioclônica;</li>
            <li>A criança pode ficar apenas "aérea" por alguns segundos, como nas crises de ausência.</li>
          </ul>
          <h2>Primeiros Socorros Durante uma Crise</h2>
          <div className="emergency-box">
            <h3>🚨 O QUE FAZER:</h3>
            <ol>
              <li><strong>Mantenha a calma:</strong> Sua tranquilidade é essencial para fornecer a ajuda necessária</li>
              <li><strong>Proteja a criança:</strong> Remova objetos perigosos ao redor</li>
              <li><strong>Posicione-a de lado:</strong> De forma a evitar engasgos</li>
              <li><strong>Proteja a cabeça:</strong> Coloque algo macio embaixo, como um travesseiro</li>
              <li><strong>Cronometre a crise:</strong> Anote duração e características, podendo, inclusive, gravar o evento para mostrar ao neurologista posteriormente</li>
              <li><strong>Permaneça próximo até a criança se recuperar</strong></li>
            </ol>
          </div>
          <div className="warning-box">
            <h3>❌ O QUE NÃO FAZER:</h3>
            <ul>
              <li>Não tente conter os movimentos, pois isso pode levar a machucados</li>
              <li>Não coloque objetos na boca da criança</li>
              <li>Não dê água ou remédios</li>
              <li>Não sacuda a criança</li>
              <li>Não deixe a criança sozinha</li>
            </ul>
          </div>
          <h2>Quando Chamar o SAMU (192)</h2>
          <div className="alert-box">
            <h3>🚨 CHAME AJUDA IMEDIATAMENTE SE:</h3>
            <ul>
              <li>A crise dura mais de 5 minutos</li>
              <li>Há dificuldade para respirar após a crise</li>
              <li>A criança se machuca durante a crise</li>
              <li>Há múltiplas crises seguidas</li>
              <li>A criança não recupera a consciência</li>
              <li>É a primeira crise da criança</li>
            </ul>
          </div>
          <h2>Após a Crise: Cuidados Importantes</h2>
          <ul>
            <li><strong>Mantenha a criança deitada:</strong> Até se recuperar completamente</li>
            <li><strong>Verifique se há ferimentos:</strong> Observe cortes ou hematomas</li>
            <li><strong>Ofereça conforto:</strong> A criança pode estar confusa</li>
            <li><strong>Monitore sinais vitais:</strong> Respiração e consciência</li>
            <li><strong>Documente detalhes:</strong> Para relatar ao médico</li>
          </ul>
          <h2>Segurança no Dia a Dia</h2>
          <h3>Em Casa</h3>
          <ul>
            <li><strong>Banheiro:</strong> Supervisione banhos se crises não controladas, evite trancar a porta</li>
            <li><strong>Cozinha:</strong> Cuidado com fogão e objetos cortantes</li>
            <li><strong>Quarto:</strong> Prefira camas baixa, evite beliches</li>
            <li><strong>Escadas:</strong> Instale portões de segurança, se necessário</li>
          </ul>
          <h3>Na Escola</h3>
          <p>Informe a escola sobre a condição da criança! Isso permite um cuidado adequado na ocorrência de crises e o acionamento dos pais ou serviços de urgência se necessário.</p>
          <h2>Atividades Físicas e Esportes</h2>
          <p>Crianças com epilepsia podem e devem praticar esportes, mas com precauções!</p>
          <p>No caso de crises bem controladas, deve-se garantir supervisão adequada da criança durante a prática de esportes.</p>
          <p>Já para crianças sem controle total de crises, é prudente evitar atividades que acarretem mais risco, como natação, escalada e ciclismo.</p>
          <h2>Impacto Psicológico</h2>
          <p>A epilepsia pode afetar a autoestima da criança. É importante:</p>
          <ul>
            <li><strong>Promover independência:</strong> Dentro dos limites de segurança</li>
            <li><strong>Educar sobre a condição:</strong> Conhecimento reduz ansiedade</li>
            <li><strong>Buscar apoio psicológico quando necessário</strong></li>
          </ul>
          <h2>Quando Procurar um Neuropediatra</h2>
          <div className="medical-box">
            <h3>🏥 Consulte um especialista no caso de:</h3>
            <ul>
              <li>Primeira crise da criança</li>
              <li>Ausência de controle da frequência e intensidade das crises</li>
              <li>Efeitos colaterais das medicações</li>
              <li>Dúvidas sobre atividades permitidas</li>
            </ul>
          </div>
          <h2>Esperança e Qualidade de Vida</h2>
          <p>Com tratamento adequado, a maioria das crianças com epilepsia pode ter uma vida normal. O tratamento da epilepsia é uma das formas de garantir que a criança participe das atividades típicas da infância.</p>
          <div className="cta-article">
            <h3>Precisa de Orientação Especializada?</h3>
            <p>Se seu filho tem epilepsia ou você suspeita de crises, procure avaliação médica. Como neuropediatra em Belo Horizonte, posso ajudar no diagnóstico e tratamento adequado.</p>
            <a href="https://wa.me/5531985486226" className="btn-whatsapp">Agendar Consulta</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article3Page; 