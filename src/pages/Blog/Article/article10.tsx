import React from 'react';
import { Helmet } from 'react-helmet';
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
        
        {/* Open Graph */}
        <meta property="og:title" content="Preparando a Primeira Consulta: O que Levar e Como se Preparar" />
        <meta property="og:description" content="Guia completo para preparar a primeira consulta com neuropediatra. Dra. Laura Thiersch orienta sobre documentos e preparação." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/blog/preparando-primeira-consulta-neuropediatra" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/blog/primeira-consulta-preparacao.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preparando a Primeira Consulta: O que Levar e Como se Preparar" />
        <meta name="twitter:description" content="Guia completo para preparar a primeira consulta com neuropediatra." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/blog/primeira-consulta-preparacao.jpg" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Preparando a Primeira Consulta: O que Levar e Como se Preparar",
            "description": "Guia completo para preparar a primeira consulta com neuropediatra. Dra. Laura Thiersch orienta sobre documentos, informações e preparação emocional.",
            "image": "https://www.laurathiersch.com.br/images/blog/primeira-consulta-preparacao.jpg",
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
            "datePublished": "2023-12-20",
            "dateModified": "2024-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.laurathiersch.com.br/blog/preparando-primeira-consulta-neuropediatra"
            },
            "articleSection": "Dicas",
            "keywords": ["primeira consulta neuropediatra", "preparação consulta", "documentos neuropediatra"],
            "wordCount": "3000",
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
        
        <h2>Documentos Essenciais</h2>
        <h3>Documentos Pessoais</h3>
        <div className="essential-documents">
          <h4>📄 Documentação Obrigatória:</h4>
          <ul>
            <li><strong>RG e CPF:</strong> Do responsável e da criança</li>
            <li><strong>Cartão do plano de saúde:</strong> Se aplicável</li>
            <li><strong>Cartão de vacinação:</strong> Histórico vacinal completo</li>
            <li><strong>Certidão de nascimento:</strong> Dados do parto</li>
            <li><strong>Cartão do SUS:</strong> Para atendimentos públicos</li>
          </ul>
        </div>

        <h3>Documentos Médicos</h3>
        <div className="medical-documents">
          <h4>🏥 Histórico Médico:</h4>
          <ul>
            <li><strong>Cartão de pré-natal:</strong> Histórico da gestação</li>
            <li><strong>Relatórios de parto:</strong> Condições do nascimento</li>
            <li><strong>Exames anteriores:</strong> Laboratoriais, imagem, EEG</li>
            <li><strong>Relatórios médicos:</strong> Consultas anteriores</li>
            <li><strong>Receitas atuais:</strong> Medicações em uso</li>
          </ul>
        </div>

        <h2>Informações sobre o Desenvolvimento</h2>
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

        <h3>Comportamentos Específicos</h3>
        <ul>
          <li><strong>Padrões de sono:</strong> Horários, dificuldades</li>
          <li><strong>Alimentação:</strong> Preferências, restrições</li>
          <li><strong>Comportamentos repetitivos:</strong> Estereotipias</li>
          <li><strong>Reações sensoriais:</strong> Sensibilidades</li>
          <li><strong>Interação social:</strong> Brincadeiras, relacionamentos</li>
        </ul>

        <h2>Preparação Escolar</h2>
        <h3>Relatórios Educacionais</h3>
        <div className="school-reports">
          <h4>📚 Documentos Escolares:</h4>
          <ul>
            <li><strong>Relatórios de professores:</strong> Observações comportamentais</li>
            <li><strong>Boletins escolares:</strong> Desempenho acadêmico</li>
            <li><strong>Avaliações pedagógicas:</strong> Dificuldades específicas</li>
            <li><strong>Registros disciplinares:</strong> Problemas comportamentais</li>
            <li><strong>Adaptações já tentadas:</strong> Estratégias utilizadas</li>
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
        <h3>Informações Genéticas</h3>
        <div className="family-history">
          <h4>🧬 Histórico Relevante:</h4>
          <ul>
            <li><strong>Pais:</strong> Dificuldades de aprendizagem, TDAH, TEA</li>
            <li><strong>Irmãos:</strong> Problemas similares</li>
            <li><strong>Avós:</strong> Histórico neurológico</li>
            <li><strong>Tios:</strong> Transtornos do neurodesenvolvimento</li>
            <li><strong>Consanguinidade:</strong> Parentesco entre os pais</li>
          </ul>
        </div>

        <h2>Preparação Emocional</h2>
        <h3>Preparando a Criança</h3>
        <div className="child-preparation">
          <h4>👦 Por Idade:</h4>
          
          <h5>Pré-escolares (2-5 anos):</h5>
          <ul>
            <li><strong>Linguagem simples:</strong> "Vamos visitar um médico especial"</li>
            <li><strong>Brincadeiras:</strong> "Médico" em casa</li>
            <li><strong>Brinquedo favorito:</strong> Levar para consulta</li>
            <li><strong>Rotina normal:</strong> Não alterar muito o dia</li>
          </ul>

          <h5>Escolares (6-11 anos):</h5>
          <ul>
            <li><strong>Explicação honesta:</strong> "Vamos descobrir como te ajudar"</li>
            <li><strong>Envolvimento:</strong> Permitir perguntas</li>
            <li><strong>Tranquilização:</strong> Não é culpa dela</li>
            <li><strong>Expectativas:</strong> O que vai acontecer</li>
          </ul>

          <h5>Adolescentes (12+ anos):</h5>
          <ul>
            <li><strong>Participação ativa:</strong> Envolver nas decisões</li>
            <li><strong>Privacidade:</strong> Respeitar autonomia</li>
            <li><strong>Informação completa:</strong> Explicar procedimentos</li>
            <li><strong>Apoio emocional:</strong> Validar sentimentos</li>
          </ul>
        </div>

        <h3>Preparando os Pais</h3>
        <div className="parent-preparation">
          <h4>👨‍👩‍👧‍👦 Dicas para Pais:</h4>
          <ul>
            <li><strong>Controle da ansiedade:</strong> Criança percebe nervosismo</li>
            <li><strong>Expectativas realistas:</strong> Diagnóstico pode levar tempo</li>
            <li><strong>Mente aberta:</strong> Estar preparado para qualquer resultado</li>
            <li><strong>Suporte mútuo:</strong> Ambos os pais, se possível</li>
          </ul>
        </div>

        <h2>Lista de Perguntas</h2>
        <h3>Perguntas Essenciais para Fazer</h3>
        <div className="essential-questions">
          <h4>❓ Questões Importantes:</h4>
          <ul>
            <li><strong>"O que pode estar causando esses sintomas?"</strong></li>
            <li><strong>"Que exames são necessários?"</strong></li>
            <li><strong>"Qual é o próximo passo?"</strong></li>
            <li><strong>"Como posso ajudar em casa?"</strong></li>
            <li><strong>"Precisa de terapias específicas?"</strong></li>
            <li><strong>"Quando devo retornar?"</strong></li>
            <li><strong>"Há restrições ou cuidados especiais?"</strong></li>
          </ul>
        </div>

        <h2>Recursos Audiovisuais</h2>
        <h3>Documentação Complementar</h3>
        <div className="audiovisual-resources">
          <h4>📹 Registros Úteis:</h4>
          <ul>
            <li><strong>Vídeos de comportamentos:</strong> Crises, estereotipias</li>
            <li><strong>Gravações de fala:</strong> Dificuldades de linguagem</li>
            <li><strong>Fotos de episódios:</strong> Lesões, rash cutâneo</li>
            <li><strong>Diário de sintomas:</strong> Frequência e intensidade</li>
          </ul>
        </div>

        <h2>Organização Prática</h2>
        <h3>Pasta Organizadora</h3>
        <div className="organization-tips">
          <h4>📁 Sugestão de Organização:</h4>
          <ul>
            <li><strong>Seção 1:</strong> Documentos pessoais</li>
            <li><strong>Seção 2:</strong> Exames médicos</li>
            <li><strong>Seção 3:</strong> Relatórios escolares</li>
            <li><strong>Seção 4:</strong> Histórico do desenvolvimento</li>
            <li><strong>Seção 5:</strong> Lista de perguntas</li>
          </ul>
        </div>

        <h2>Dia da Consulta</h2>
        <h3>Checklist Final</h3>
        <div className="final-checklist">
          <h4>✅ Antes de Sair de Casa:</h4>
          <ul>
            <li><strong>Documentos organizados:</strong> Tudo em ordem</li>
            <li><strong>Criança alimentada:</strong> Não ir com fome</li>
            <li><strong>Horário confirmado:</strong> Evitar atrasos</li>
            <li><strong>Transporte planejado:</strong> Rota e estacionamento</li>
            <li><strong>Tempo extra:</strong> Não ter pressa</li>
          </ul>
        </div>

        <h3>Durante a Consulta</h3>
        <ul>
          <li><strong>Seja honesto:</strong> Relate todos os sintomas</li>
          <li><strong>Faça anotações:</strong> Registre orientações</li>
          <li><strong>Peça esclarecimentos:</strong> Não saia com dúvidas</li>
          <li><strong>Observe a criança:</strong> Comportamento durante exame</li>
        </ul>

        <h2>Após a Consulta</h2>
        <h3>Próximos Passos</h3>
        <div className="post-consultation">
          <h4>📋 Organize o Que Foi Orientado:</h4>
          <ul>
            <li><strong>Exames solicitados:</strong> Agendar rapidamente</li>
            <li><strong>Medicações prescritas:</strong> Comprar e iniciar</li>
            <li><strong>Terapias indicadas:</strong> Buscar profissionais</li>
            <li><strong>Retorno agendado:</strong> Marcar próxima consulta</li>
            <li><strong>Orientações escolares:</strong> Comunicar à escola</li>
          </ul>
        </div>

        <h2>Dicas Especiais por Condição</h2>
        <h3>Suspeita de TEA</h3>
        <ul>
          <li><strong>Vídeos de interação social:</strong> Brincadeiras, comunicação</li>
          <li><strong>Brinquedos favoritos:</strong> Observar interesse restrito</li>
          <li><strong>Rotinas:</strong> Documentar rigidez comportamental</li>
        </ul>

        <h3>Suspeita de TDAH</h3>
        <ul>
          <li><strong>Questionários escolares:</strong> SNAP-IV preenchido</li>
          <li><strong>Relatórios de múltiplos ambientes:</strong> Casa, escola, atividades</li>
          <li><strong>Histórico medicamentoso:</strong> Uso anterior de estimulantes</li>
        </ul>

        <h3>Suspeita de Epilepsia</h3>
        <ul>
          <li><strong>Descrição detalhada das crises:</strong> Duração, características</li>
          <li><strong>Fatores desencadeantes:</strong> Sono, febre, estresse</li>
          <li><strong>Medicações atuais:</strong> Anticonvulsivantes em uso</li>
        </ul>

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