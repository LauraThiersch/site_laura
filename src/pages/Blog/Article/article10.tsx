import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../../../config/siteConfig';
import './article.css';

const Article10Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Preparando a Primeira Consulta: O que Levar e Como se Preparar | Dra. Laura Thiersch</title>
        <meta name="description" content="Guia completo para preparar a primeira consulta com neuropediatra. Dra. Laura Thiersch orienta sobre documentos, informações e preparação emocional." />
        <meta name="keywords" content="primeira consulta neuropediatra, preparação consulta, documentos neuropediatra, Dra. Laura Thiersch BH" />
        <meta name="author" content="Dra. Laura Thiersch" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/blog/preparando-primeira-consulta-neuropediatra" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2024-01-24T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-24T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="Primeira Consulta, Neuropediatra, Preparação, Documentos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Preparando a Primeira Consulta: O que Levar e Como se Preparar" />
        <meta property="og:description" content="Guia completo para preparar a primeira consulta com neuropediatra. Dra. Laura Thiersch orienta sobre documentos e preparação." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/blog/preparando-primeira-consulta-neuropediatra" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        <meta property="article:published_time" content="2024-01-24T10:00:00-03:00" />
        <meta property="article:modified_time" content="2024-01-24T10:00:00-03:00" />
        <meta property="article:author" content="Dra. Laura Thiersch" />
        <meta property="article:section" content="Neuropediatria" />
        <meta property="article:tag" content="Primeira Consulta, Neuropediatra, Preparação, Documentos" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preparando a Primeira Consulta: O que Levar e Como se Preparar" />
        <meta name="twitter:description" content="Guia completo para preparar a primeira consulta com neuropediatra." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta name="twitter:creator" content="@lauraneuroped" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Preparando a Primeira Consulta: O que Levar e Como se Preparar",
            "description": "Guia completo para preparar a primeira consulta com neuropediatra. Dra. Laura Thiersch orienta sobre documentos, informações e preparação emocional.",
            "image": "https://www.laurathiersch.com.br/images/blog/default-article.jpg",
            "author": {
              "@type": "Person",
              "name": "Dra. Laura Thiersch",
              "jobTitle": "Neuropediatra",
              "url": siteConfig.baseUrl
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
              "@id": "https://www.laurathiersch.com.br/blog/preparando-primeira-consulta-neuropediatra"
            },
            "articleSection": "Dicas",
            "keywords": ["primeira consulta neuropediatra", "preparação consulta", "documentos neuropediatra"],
            "wordCount": "2800",
            "timeRequired": "PT8M",
            "inLanguage": "pt-BR",
            "about": [
              {
                "@type": "MedicalSpecialty",
                "name": "Neuropediatria"
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Consulta Médica"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <article className="article-page">
        <h1>Preparando a Primeira Consulta: O que Levar e Como se Preparar</h1>
        <img
          src="/images/blog/default-article.jpg"
          alt="Família preparando documentos para consulta neuropediátrica"
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
          <p><strong>Uma primeira consulta bem preparada é fundamental para um diagnóstico preciso e um plano de tratamento eficaz.</strong> Como neuropediatra em Belo Horizonte, oriento as famílias sobre como se preparar adequadamente para essa consulta importante, otimizando o tempo e garantindo que todas as informações necessárias sejam coletadas.</p>
          
          <h2>Documentos Médicos</h2>
          <p>Levar todos os documentos médicos relevantes é indispensável para uma primeira consulta completa.</p>
          <h3>Histórico Médico</h3>
          <div className="medical-documents">
            <h4>🏥 Histórico Médico:</h4>
            <ul>
              <li><strong>Cartão de pré-natal:</strong> Histórico da gestação</li>
              <li><strong>Relatórios de parto:</strong> Condições do nascimento</li>
              <li><strong>Cartão de vacinação:</strong> Histórico vacinal completo</li>
              <li><strong>Exames anteriores:</strong> Laboratoriais, imagem, EEG</li>
              <li><strong>Relatórios médicos:</strong> Consultas anteriores</li>
              <li><strong>Receitas atuais:</strong> Medicações em uso</li>
            </ul>
          </div>
          <h3>Registros Úteis</h3>
          <div className="audiovisual-resources">
            <h4>📹 Registros Úteis:</h4>
            <ul>
              <li><strong>Vídeos de comportamentos:</strong> Crises, estereotipias</li>
              <li><strong>Gravações de fala:</strong> Dificuldades de linguagem</li>
              <li><strong>Fotos de episódios:</strong> Lesões, rash cutâneo</li>
              <li><strong>Diário de sintomas:</strong> Frequência e intensidade</li>
            </ul>
          </div>

          <h2>Informações sobre o Desenvolvimento</h2>
          <p>Perguntas sobre o desenvolvimento fazem parte da consulta do neuropediatra! Seja o mais preciso e detalhista possível quanto aos marcos do desenvolvimento do seu filho.</p>
          <h3>Marcos do Desenvolvimento</h3>
          <div className="developmental-info">
            <h4>👶 Prepare um Histórico Detalhado:</h4>
            <table>
              <thead>
                <tr>
                  <th>Área</th>
                  <th>Informações Importantes</th>
                  <th>Exemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Motor</td>
                  <td>Quando sentou, engatinhou, andou</td>
                  <td>"Andou aos 15 meses"</td>
                </tr>
                <tr>
                  <td>Linguagem</td>
                  <td>Primeiras palavras, frases</td>
                  <td>"Primeira palavra aos 12 meses"</td>
                </tr>
                <tr>
                  <td>Social</td>
                  <td>Sorriso, contato visual, interação</td>
                  <td>"Sorriso social aos 2 meses"</td>
                </tr>
                <tr>
                  <td>Cognitivo</td>
                  <td>Reconhecimento, memória</td>
                  <td>"Reconhece familiares"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Preparação Escolar</h2>
          <p>Se as queixas escolares forem o motivo da consulta médica, os seguintes documentos são de extrema importância para uma avaliação completa.</p>
          <h3>Relatórios Educacionais</h3>
          <div className="school-reports">
            <h4>📚 Documentos Escolares:</h4>
            <ul>
              <li><strong>Relatórios de professores:</strong> Observações comportamentais</li>
              <li><strong>Boletins escolares:</strong> Desempenho acadêmico</li>
              <li><strong>Avaliações pedagógicas:</strong> Dificuldades específicas</li>
              <li><strong>Registros disciplinares:</strong> Problemas comportamentais</li>
            </ul>
          </div>
          <h3>Questões Escolares Importantes</h3>
          <ul>
            <li><strong>Idade de início escolar:</strong> Quando começou a frequentar</li>
            <li><strong>Mudanças de escola:</strong> Motivos e adaptações</li>
            <li><strong>Relacionamento com colegas:</strong> Amizades, conflitos</li>
            <li><strong>Atividades extracurriculares:</strong> Esportes, arte, música</li>
          </ul>

          <h2>Histórico Familiar</h2>
          <p>O histórico familiar é indispensável para o neurologista, nos guiando para possíveis diagnósticos que tenham influência genética!</p>
          <h3>Informações Genéticas</h3>
          <div className="family-history">
            <h4>🧬 Histórico Relevante:</h4>
            <ul>
              <li><strong>Doenças neurológicas e/ou psiquiátricas na família</strong></li>
              <li><strong>Dificuldades de aprendizagem, TDAH, TEA em familiares</strong></li>
              <li><strong>Consanguinidade:</strong> Parentesco entre os pais</li>
            </ul>
          </div>

          <h2>Preparação Emocional</h2>
          <p>Preparar-se emocional para a consulta é muito importante! A consulta com um novo médico e em um local desconhecido pode ser extremamente estressante para a criança e o adolescente. Prepará-los é uma forma de envolvê-los no processo de forma segura e carinhosa.</p>
          <h3>Preparando a Criança</h3>
          <div className="child-preparation">
            <h4>👦 Por Idade:</h4>
            
            <h5>Pré-escolares (2-5 anos):</h5>
            <ul>
              <li><strong>Explique tudo em linguagem simples:</strong> "Vamos visitar um médico especial"</li>
              <li><strong>Leve o brinquedo favorito:</strong> Para a consulta</li>
              <li><strong>Tente manter a rotina:</strong> O mais próximo do habitual no dia da consulta</li>
            </ul>

            <h5>Escolares (6-11 anos):</h5>
            <ul>
              <li><strong>Explique de forma clara e honesta:</strong> "Vamos descobrir como te ajudar"</li>
              <li><strong>Envolva a criança:</strong> Permitindo perguntas</li>
              <li><strong>Tranquilize a criança:</strong> Defina expectativas e tire todas as dúvidas</li>
            </ul>

            <h5>Adolescentes (12+ anos):</h5>
            <ul>
              <li><strong>Garanta uma participação ativa:</strong> Envolvendo o adolescente nas decisões</li>
              <li><strong>Respeite a autonomia e privacidade:</strong> Do adolescente</li>
              <li><strong>Forneça apoio emocional:</strong> Validando os sentimentos do adolescente</li>
            </ul>
          </div>

          <h3>Preparando os Pais</h3>
          <div className="parent-preparation">
            <h4>👨‍👩‍👧‍👦 Dicas para Pais:</h4>
            <ul>
              <li><strong>O diagnóstico pode levar tempo:</strong> Tenha expectativas realistas</li>
              <li><strong>Mantenha a mente aberta:</strong> Esteja preparado para qualquer resultado</li>
              <li><strong>Se possível, ambos os pais:</strong> Podem estar presentes para suporte mútuo</li>
            </ul>
          </div>

          <h2>Dia da Consulta</h2>
          <p>Chegou o dia da consulta! Veja o checklist abaixo para ajudar a organização do dia.</p>
          <h3>Antes de Sair de Casa</h3>
          <div className="final-checklist">
            <h4>✅ Antes de Sair de Casa:</h4>
            <ul>
              <li><strong>Documentos organizados</strong></li>
              <li><strong>Criança alimentada</strong></li>
              <li><strong>Horário confirmado</strong></li>
              <li><strong>Transporte planejado</strong></li>
              <li><strong>Saia com tempo extra:</strong> Sem pressa</li>
            </ul>
          </div>

          <h3>Durante a Consulta</h3>
          <ul>
            <li><strong>Seja honesto:</strong> Relate todos os sintomas</li>
            <li><strong>Faça anotações:</strong> Registre orientações</li>
            <li><strong>Peça esclarecimentos:</strong> Não saia com dúvidas</li>
          </ul>

          <h3>Após a Consulta</h3>
          <div className="post-consultation">
            <h4>✅ Após a consulta:</h4>
            <ul>
              <li><strong>Exames solicitados:</strong> Agendar rapidamente</li>
              <li><strong>Medicações prescritas:</strong> Comprar e iniciar</li>
              <li><strong>Terapias indicadas:</strong> Buscar profissionais</li>
              <li><strong>Retorno agendado:</strong> Marcar próxima consulta</li>
              <li><strong>Orientações escolares:</strong> Comunicar à escola</li>
            </ul>
          </div>

          <div className="preparation-summary">
            <h3>📝 Resumo da Preparação:</h3>
            <p>Uma consulta bem preparada é o primeiro passo para um diagnóstico preciso e um tratamento eficaz. Organizar documentos, preparar informações e tranquilizar a criança são investimentos que resultarão em melhor aproveitamento da consulta e melhores resultados para seu filho.</p>
          </div>

          <div className="cta-article">
            <h3>Pronto para a Primeira Consulta?</h3>
            <p>Agora que você sabe como se preparar, está pronto para a primeira consulta. Como neuropediatra em Belo Horizonte, recebo famílias preparadas e isso faz toda diferença no processo diagnóstico e terapêutico.</p>
            <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Consulta</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article10Page; 