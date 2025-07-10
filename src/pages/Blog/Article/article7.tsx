import React from 'react';
import { Helmet } from 'react-helmet';
import './article.css';

const Article7Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada | Dra. Laura Thiersch</title>
        <meta name="description" content="Identifique sinais de atraso no desenvolvimento infantil. Dra. Laura Thiersch, neuropediatra em BH, explica marcos do desenvolvimento e quando buscar ajuda." />
        <meta name="keywords" content="atraso desenvolvimento infantil, marcos desenvolvimento, neuropediatra BH, Dra. Laura Thiersch, desenvolvimento criança" />
        <meta name="author" content="Dra. Laura Thiersch" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/blog/atraso-desenvolvimento-infantil" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada" />
        <meta property="og:description" content="Identifique sinais de atraso no desenvolvimento infantil. Dra. Laura Thiersch, neuropediatra em BH." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/blog/atraso-desenvolvimento-infantil" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada" />
        <meta name="twitter:description" content="Identifique sinais de atraso no desenvolvimento infantil." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada",
            "description": "Identifique sinais de atraso no desenvolvimento infantil. Dra. Laura Thiersch, neuropediatra em BH, explica marcos do desenvolvimento e quando buscar ajuda.",
            "image": "https://www.laurathiersch.com.br/images/blog/default-article.jpg",
            "author": {
              "@type": "Person",
              "name": "Dra. Laura Thiersch",
              "jobTitle": "Neuropediatra",
              "url": "https://www.laurathiersch.com.br"
            },
            "publisher": {
              "@type": "Person",
              "name": "Dra. Laura Thiersch",
              "jobTitle": "Neuropediatra"
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.laurathiersch.com.br/blog/atraso-desenvolvimento-infantil"
            },
            "articleSection": "Dicas",
            "keywords": ["atraso desenvolvimento infantil", "marcos desenvolvimento", "neuropediatra BH", "desenvolvimento criança"],
            "wordCount": "2800",
            "timeRequired": "PT7M",
            "inLanguage": "pt-BR",
            "about": [
              {
                "@type": "MedicalCondition",
                "name": "Atraso no Desenvolvimento"
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Neuropediatria"
              }
            ]
          })}
        </script>
      </Helmet>

      <article className="article-page">
        <h1>Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada</h1>
        <img
          src="/images/blog/default-article.jpg"
          alt="Neuropediatra avaliando desenvolvimento infantil"
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
          <span>7 min de leitura</span>
        </div>
        <div className="article-content">
          <p><strong>Identificar sinais de atraso no desenvolvimento infantil é fundamental para garantir intervenção precoce e melhores resultados.</strong> Como neuropediatra em Belo Horizonte, oriento pais diariamente sobre marcos do desenvolvimento e quando buscar avaliação especializada. Cada criança tem seu ritmo, mas existem sinais que não devem ser ignorados.</p>
          <h2>Marcos do Desenvolvimento por Idade</h2>
          <p>A seguir, temos marcos esperados por idade e os sinais de alerta que devem motivar a busca por avaliação médica.</p>
          <h3>0-6 meses</h3>
          <div className="milestone-box">
            <h4>✅ Marcos Esperados:</h4>
            <ul>
              <li><strong>2 meses:</strong> Sorriso social, segue objetos com olhar</li>
              <li><strong>4 meses:</strong> Sustenta cabeça, emite sons</li>
              <li><strong>6 meses:</strong> Rola, senta com apoio, balbucia</li>
            </ul>
            <h4>🚨 Sinais de Alerta:</h4>
            <ul>
              <li>Não sorri socialmente aos 3 meses</li>
              <li>Não sustenta cabeça aos 4 meses</li>
              <li>Não emite sons aos 6 meses</li>
              <li>Muito mole ou muito rígido</li>
            </ul>
          </div>
          <h3>6-12 meses</h3>
          <div className="milestone-box">
            <h4>✅ Marcos Esperados:</h4>
            <ul>
              <li><strong>8 meses:</strong> Senta sem apoio, transfere objetos</li>
              <li><strong>10 meses:</strong> Engatinha, fala "mama/papa"</li>
              <li><strong>12 meses:</strong> Anda com apoio, aponta, imita gestos</li>
            </ul>
            <h4>🚨 Sinais de Alerta:</h4>
            <ul>
              <li>Não senta sem apoio aos 9 meses</li>
              <li>Não fala nenhuma palavra aos 12 meses</li>
              <li>Não aponta aos 12 meses</li>
              <li>Perda de habilidades adquiridas</li>
            </ul>
          </div>
          <h3>12-24 meses</h3>
          <div className="milestone-box">
            <h4>✅ Marcos Esperados:</h4>
            <ul>
              <li><strong>15 meses:</strong> Anda sozinho, 3-5 palavras</li>
              <li><strong>18 meses:</strong> Corre, 10-20 palavras, brinca de faz-de-conta</li>
              <li><strong>24 meses:</strong> Frases de 2 palavras, 50+ palavras</li>
            </ul>
            <h4>🚨 Sinais de Alerta:</h4>
            <ul>
              <li>Não anda aos 18 meses</li>
              <li>Não forma frases curtas aos 24 meses</li>
              <li>Não brinca de faz-de-conta aos 24 meses</li>
              <li>Não imita ações aos 24 meses</li>
            </ul>
          </div>
          <h2>Áreas do Desenvolvimento</h2>
          <p>Podemos dividir, também, os marcos do desenvolvimento esperados por idade em categorias: motor, linguagem e social!</p>
          <h3>1. Desenvolvimento Motor</h3>
          <table>
            <thead>
              <tr>
                <th>Idade</th>
                <th>Motor Grosso</th>
                <th>Motor Fino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6 meses</td>
                <td>Senta com apoio</td>
                <td>Transfere objetos</td>
              </tr>
              <tr>
                <td>12 meses</td>
                <td>Anda com apoio</td>
                <td>Pinça superior</td>
              </tr>
              <tr>
                <td>18 meses</td>
                <td>Sobe escadas</td>
                <td>Empilha 2 cubos</td>
              </tr>
              <tr>
                <td>24 meses</td>
                <td>Corre bem</td>
                <td>Empilha 4 cubos</td>
              </tr>
            </tbody>
          </table>
          <h3>2. Desenvolvimento da Linguagem</h3>
          <div className="language-development">
            <h4>🗣️ Marcos da Fala:</h4>
            <ul>
              <li><strong>6 meses:</strong> Balbucios (ba-ba, ma-ma)</li>
              <li><strong>12 meses:</strong> Primeiras palavras com significado</li>
              <li><strong>18 meses:</strong> 10-20 palavras, compreende ordens simples</li>
              <li><strong>24 meses:</strong> 50+ palavras, frases de 2 palavras</li>
              <li><strong>36 meses:</strong> Frases completas, 200+ palavras</li>
            </ul>
          </div>
          <h3>3. Desenvolvimento Social</h3>
          <ul>
            <li><strong>Sorriso social:</strong> 2-3 meses</li>
            <li><strong>Ansiedade frente ao estranho:</strong> 6-8 meses</li>
            <li><strong>Imitação (dar tchau, mandar beijo):</strong> 12-18 meses</li>
            <li><strong>Brincadeira paralela (ao lado de outras crianças):</strong> 12-18 meses</li>
            <li><strong>Brincadeira cooperativa (com outras crianças):</strong> 24-36 meses</li>
          </ul>
          <h2>Causas do Atraso no Desenvolvimento</h2>
          <p>Existem diversas causas possíveis para o atraso em qualquer uma das áreas do desenvolvimento. Todas estas causas são consideradas e investigadas pelo neuropediatra em consulta. As causas mais comuns podem ser divididas em: pré-natais (durante a gestação), perinatais (relacionadas ao parto) e pós-natais (após o parto).</p>
          <h3>Fatores Pré-natais</h3>
          <ul>
            <li><strong>Infecções congênitas:</strong> Toxoplasmose, rubéola, citomegalovírus</li>
            <li><strong>Uso de substâncias na gravidez:</strong> Álcool e outras drogas</li>
            <li><strong>Uso de medicações na gravidez</strong></li>
          </ul>
          <h3>Fatores Perinatais</h3>
          <ul>
            <li><strong>Prematuridade:</strong> Nascimento antes de 37 semanas</li>
            <li><strong>Asfixia perinatal:</strong> Falta de oxigênio no parto</li>
            <li><strong>Infecções neonatais:</strong> Meningite, sepse</li>
            <li><strong>Trauma de parto:</strong> Lesões cerebrais</li>
          </ul>
          <h3>Fatores Pós-natais</h3>
          <ul>
            <li><strong>Desnutrição:</strong> Déficits nutricionais graves</li>
            <li><strong>Infecções:</strong> Meningite, encefalite</li>
            <li><strong>Traumatismo craniano:</strong> Acidentes</li>
          </ul>
          <h2>Quando Procurar um Neuropediatra</h2>
          <div className="urgent-signs">
            <h3>🚨 Procure IMEDIATAMENTE se:</h3>
            <ul>
              <li><strong>Perda de habilidades:</strong> Regressão do desenvolvimento</li>
              <li><strong>Não responde ao nome:</strong> Aos 12 meses</li>
              <li><strong>Não anda:</strong> Aos 18 meses</li>
              <li><strong>Não fala:</strong> Nenhuma palavra aos 16 meses</li>
              <li><strong>Movimentos anormais:</strong> Espasmos, tremores</li>
            </ul>
          </div>
          <div className="concern-signs">
            <h3>⚠️ Agende consulta se:</h3>
            <ul>
              <li>Marcos atrasados em 2+ áreas</li>
              <li>Preocupação constante dos pais</li>
              <li>Professores relatam dificuldades</li>
              <li>Comportamentos repetitivos</li>
              <li>Dificuldades de interação social</li>
            </ul>
          </div>
          <h2>Avaliação do Desenvolvimento</h2>
          <h3>Consulta Especializada</h3>
          <p>Em meu consultório em Belo Horizonte, a avaliação inclui:</p>
          <ul>
            <li><strong>Anamnese detalhada:</strong> Histórico gestacional, parto, desenvolvimento</li>
            <li><strong>Exame neurológico:</strong> Reflexos, tônus, coordenação</li>
            <li><strong>Avaliação do desenvolvimento:</strong> Marcos por área</li>
            <li><strong>Observação comportamental:</strong> Interação, comunicação</li>
          </ul>
          <h2>Intervenção Precoce</h2>
          <p>A avaliação deve ser prontamente realizada em caso de suspeita de atraso do desenvolvimento, pois isso permite a realização da intervenção precoce!</p>
          <h3>Benefícios da Intervenção Precoce</h3>
          <ul>
            <li><strong>Neuroplasticidade:</strong> O cérebro da criança é mais adaptável em idades mais precoces</li>
            <li><strong>Melhor prognóstico:</strong> Estudos mostram resultados superiores em crianças que iniciam intervenção em idades mais precoces</li>
          </ul>
          <h3>Tipos de Intervenção</h3>
          <table>
            <thead>
              <tr>
                <th>Área</th>
                <th>Profissional</th>
                <th>Objetivos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Motora</td>
                <td>Fisioterapeuta</td>
                <td>Coordenação, força, equilíbrio</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Fonoaudiólogo</td>
                <td>Comunicação, fala, deglutição</td>
              </tr>
              <tr>
                <td>Cognitiva</td>
                <td>Psicólogo</td>
                <td>Aprendizagem, comportamento</td>
              </tr>
              <tr>
                <td>Adaptativa</td>
                <td>Terapeuta Ocupacional</td>
                <td>Autonomia, integração sensorial</td>
              </tr>
            </tbody>
          </table>
          <h2>Orientações para Pais</h2>
          <p>Além do acompanhamento com neuropediatra e com equipe multidisciplinar, é importante a orientação dos pais quanto ao estímulo em casa.</p>
          <h3>Estimulação em Casa</h3>
          <div className="home-stimulation">
            <h4>🏠 Atividades Diárias:</h4>
            <ul>
              <li><strong>Leitura:</strong> Ler livros adequados à idade da criança</li>
              <li><strong>Música:</strong> Ouvir canções, fornecer instrumentos simples</li>
              <li><strong>Brincadeiras:</strong> Disponibilizar jogos educativos</li>
              <li><strong>Conversação:</strong> Falar sempre com a criança</li>
              <li><strong>Exploração:</strong> Fornecer diferentes texturas, objetos</li>
            </ul>
          </div>
          <h3>Ambiente Estimulante</h3>
          <ul>
            <li><strong>Rotina estruturada:</strong> Estabelecer horários regulares</li>
            <li><strong>Ambiente seguro:</strong> Permitir exploração livre</li>
            <li><strong>Interação social:</strong> Incentivar contato com outras crianças, em escola ou em outros locais de convívio social</li>
            <li><strong>Limite de telas:</strong> Usar com moderação!</li>
          </ul>
          <h2>Prognóstico e Expectativas</h2>
          <p>O prognóstico do atraso de desenvolvimento depende de diversos fatores:</p>
          <ul>
            <li><strong>Idade do diagnóstico:</strong> Quanto mais precoce o diagnóstico e a intervenção, melhor</li>
            <li><strong>Gravidade do atraso</strong></li>
            <li><strong>Causa do atraso</strong></li>
            <li><strong>Apoio familiar</strong></li>
            <li><strong>Acesso à intervenção, quantidade e qualidade da intervenção</strong></li>
          </ul>
          <div className="encouragement-box">
            <h3>💪 Mensagem Encorajadora:</h3>
            <p>Cada criança é única e tem seu potencial. O atraso no desenvolvimento não determina o futuro - com apoio adequado, muitas crianças superam completamente suas dificuldades iniciais.</p>
          </div>
          <div className="cta-article">
            <h3>Preocupado com o Desenvolvimento?</h3>
            <p>Se você suspeita de atraso no desenvolvimento do seu filho, não espere. A avaliação precoce pode fazer toda a diferença. Como neuropediatra em Belo Horizonte, estou aqui para ajudar.</p>
            <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Avaliação</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article7Page; 