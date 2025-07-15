import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../../../siteConfig';
import './article.css';

const ArticlePage: React.FC = () => {
  // No futuro, pode-se usar o slug para buscar o artigo correto
  // const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>Sinais Precoces de TEA: O que Observar nos Primeiros Anos | Dra. Laura Thiersch</title>
        <meta name="description" content="Descubra os sinais precoces de TEA (Transtorno do Espectro Autista) que os pais devem observar nos primeiros anos. Dra. Laura Thiersch, neuropediatra em BH, orienta sobre identificação precoce." />
        <meta name="keywords" content="sinais precoces TEA, autismo infantil, diagnóstico precoce TEA, neuropediatra BH, Dra. Laura Thiersch, TEA crianças, sinais autismo bebê" />
        <meta name="author" content="Dra. Laura Thiersch" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/blog/sinais-precoses-tea-primeiros-anos" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2024-01-15T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-15T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="TEA, Autismo, Neuropediatria, Desenvolvimento Infantil" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sinais Precoces de TEA: O que Observar nos Primeiros Anos" />
        <meta property="og:description" content="Descubra os sinais precoces de TEA (Transtorno do Espectro Autista) que os pais devem observar nos primeiros anos. Dra. Laura Thiersch, neuropediatra em BH." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/blog/sinais-precoses-tea-primeiros-anos" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        <meta property="article:published_time" content="2024-01-15T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-15T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="TEA, Autismo, Neuropediatria, Desenvolvimento Infantil" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sinais Precoces de TEA: O que Observar nos Primeiros Anos" />
        <meta name="twitter:description" content="Descubra os sinais precoces de TEA (Transtorno do Espectro Autista) que os pais devem observar nos primeiros anos." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta name="twitter:creator" content="@lauraneuroped" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sinais Precoces de TEA: O que Observar nos Primeiros Anos",
            "description": "Descubra os sinais precoces de TEA (Transtorno do Espectro Autista) que os pais devem observar nos primeiros anos.",
            "image": "https://www.laurathiersch.com.br/images/blog/default-article.jpg",
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
                "url": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png"
              }
            },
            "datePublished": "2024-01-15T10:00:00-03:00",
            "dateModified": "2024-01-15T10:00:00-03:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.laurathiersch.com.br/blog/sinais-precoses-tea-primeiros-anos"
            },
            "articleSection": "Neuropediatria",
            "keywords": "TEA, Autismo, Neuropediatria, Desenvolvimento Infantil"
          })}
        </script>
      </Helmet>

      <article className="article-page">
        <h1>Sinais Precoces de TEA: O que Observar nos Primeiros Anos</h1>
        <img
          src="/images/blog/default-article.jpg"
          alt="Bebê sendo examinado por neuropediatra, representando sinais precoces de TEA"
          width="400"
          height="250"
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
          <span>8 min de leitura</span>
        </div>
        <div className="article-content">
          <p><strong>Sinais do Transtorno do Espectro Autista (TEA) podem ser identificados nos primeiros meses de vida através de alguns sintomas específicos que os pais devem conhecer.</strong> Como neuropediatra em Belo Horizonte, atendo diariamente famílias preocupadas com o desenvolvimento de seus filhos, e a identificação precoce é fundamental para o sucesso do tratamento.</p>
          <h2>Por que a Identificação Precoce é Crucial?</h2>
          <p>A detecção precoce do TEA permite iniciar intervenções terapêuticas ainda nos primeiros anos de vida, quando o cérebro da criança apresenta maior plasticidade. Estudos mostram que crianças diagnosticadas e tratadas antes dos 3 anos têm melhores prognósticos de desenvolvimento.</p>
          <h2>Principais Sinais de TEA por Faixa Etária</h2>
          <h3>0 a 6 meses</h3>
          <ul>
            <li><strong>Contato visual limitado:</strong> Bebê evita ou tem dificuldade para manter o olhar</li>
            <li><strong>Sorriso social ausente:</strong> Não esboça sorriso em resposta aos pais</li>
            <li><strong>Resposta reduzida ao nome:</strong> Não reage quando chamado</li>
            <li><strong>Pouca expressão facial:</strong> Rosto inexpressivo ou pouco responsivo</li>
          </ul>
          <h3>6 a 12 meses</h3>
          <ul>
            <li><strong>Ausência de balbucios:</strong> Não faz sons ou balbucios típicos</li>
            <li><strong>Não imita gestos:</strong> Não copia movimentos simples como "tchau" ou "mandar beijo"</li>
            <li><strong>Pouco interesse em brincadeiras sociais:</strong> Não gosta de "esconde-esconde"</li>
            <li><strong>Movimentos repetitivos:</strong> Balançar as mãos ou corpo de forma repetitiva</li>
          </ul>
          <h3>12 a 24 meses</h3>
          <ul>
            <li><strong>Atraso na fala:</strong> Não fala palavras simples até os 16 meses</li>
            <li><strong>Não aponta para objetos:</strong> Ausência de gesto de apontar</li>
            <li><strong>Brincadeiras repetitivas:</strong> Alinha objetos ou gira brinquedos</li>
            <li><strong>Dificuldade com mudanças:</strong> Angústia com alterações na rotina</li>
          </ul>
          <h2>Sinais de Alerta que Requerem Avaliação Imediata</h2>
          <div className="alert-box">
            <h3>⚠️ Procure um neuropediatra se a criança:</h3>
            <ul>
              <li>Não sorri socialmente aos 6 meses</li>
              <li>Não fala palavras simples aos 16 meses</li>
              <li>Não faz frases de 2 palavras aos 24 meses</li>
              <li>Perdeu habilidades sociais e de fala que já havia adquirido</li>
              <li>Não responde ao nome aos 12 meses</li>
            </ul>
          </div>
          <h2>Diferenças entre TEA e Desenvolvimento Típico</h2>
          <p>É importante distinguir os sinais de TEA de variações normais do desenvolvimento. Cada criança tem seu próprio ritmo, mas certos marcos são universais:</p>
          <table>
            <thead>
              <tr>
                <th>Idade</th>
                <th>Desenvolvimento Típico</th>
                <th>Sinais de TEA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6 meses</td>
                <td>Sorriso social, contato visual</td>
                <td>Pouco contato visual, expressão limitada</td>
              </tr>
              <tr>
                <td>12 meses</td>
                <td>Aponta, imita, balbucia</td>
                <td>Não aponta, não imita, pouco balbucio</td>
              </tr>
              <tr>
                <td>18 meses</td>
                <td>Primeiras palavras, brincar simbólico</td>
                <td>Atraso na fala, brincadeiras repetitivas</td>
              </tr>
            </tbody>
          </table>
          <h2>Como Buscar Ajuda em Belo Horizonte</h2>
          <p>Se você identificou alguns desses sinais em seu filho, é fundamental buscar avaliação especializada. Como neuropediatra em BH, recomendo:</p>
          <ol>
            <li><strong>Não espere "para ver se melhora":</strong> A intervenção precoce é mais eficaz</li>
            <li><strong>Procure um neuropediatra especializado:</strong> Profissional com experiência em TEA</li>
            <li><strong>Documente comportamentos:</strong> Filme momentos do dia-a-dia da criança</li>
            <li><strong>Prepare informações:</strong> Histórico da gravidez, parto e desenvolvimento</li>
          </ol>
          <h2>O Processo de Avaliação</h2>
          <p>A avaliação para TEA em meu consultório em Belo Horizonte inclui:</p>
          <ul>
            <li><strong>Anamnese detalhada:</strong> Histórico completo da criança e família</li>
            <li><strong>Observação clínica:</strong> Avaliação do comportamento e interação</li>
            <li><strong>Avaliação multidisciplinar:</strong> Encaminhamento para outros profissionais se necessário</li>
          </ul>
          <h2>Esperança e Perspectivas</h2>
          <p>Um diagnóstico precoce de TEA não é motivo para desespero. Com o tratamento adequado, as crianças podem desenvolver habilidades importantes e ter uma qualidade de vida excelente. O acompanhamento especializado e o suporte familiar são fundamentais nesse processo.</p>
          <div className="cta-article">
            <h3>Precisa de uma Avaliação Especializada?</h3>
            <p>Se você reconheceu alguns desses sinais em seu filho, não hesite em buscar ajuda. Como neuropediatra em Belo Horizonte, estou aqui para orientar e apoiar sua família nesse processo.</p>
            <a href="https://wa.me/5531985486226" className="btn-whatsapp">Agendar Consulta</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePage; 