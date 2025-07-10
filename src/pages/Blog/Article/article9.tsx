import React from 'react';
import { Helmet } from 'react-helmet';
import './article.css';

const Article9Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Como Escolher um Neuropediatra: Dicas para Pais | Dra. Laura Thiersch</title>
        <meta name="description" content="Guia completo para escolher o neuropediatra ideal para seu filho. Dra. Laura Thiersch, neuropediatra em BH, orienta sobre qualificações, experiência e abordagem." />
        <meta name="keywords" content="escolher neuropediatra, neuropediatra BH, especialista infantil, consulta neuropediatra, Dra. Laura Thiersch" />
        <meta name="author" content="Dra. Laura Thiersch" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/blog/como-escolher-neuropediatra-dicas-pais" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Como Escolher um Neuropediatra: Dicas para Pais" />
        <meta property="og:description" content="Guia completo para escolher o neuropediatra ideal para seu filho. Dra. Laura Thiersch, neuropediatra em BH." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/blog/como-escolher-neuropediatra-dicas-pais" />
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        <meta property="og:site_name" content="Dra. Laura Thiersch - Neuropediatra BH" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Escolher um Neuropediatra: Dicas para Pais" />
        <meta name="twitter:description" content="Guia completo para escolher o neuropediatra ideal para seu filho." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/blog/default-article.jpg" />
        
        {/* Article Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Escolher um Neuropediatra: Dicas para Pais",
            "description": "Guia completo para escolher o neuropediatra ideal para seu filho. Dra. Laura Thiersch, neuropediatra em BH, orienta sobre qualificações, experiência e abordagem.",
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
              "@id": "https://www.laurathiersch.com.br/blog/como-escolher-neuropediatra-dicas-pais"
            },
            "articleSection": "Dicas",
            "keywords": ["escolher neuropediatra", "neuropediatra BH", "especialista infantil", "consulta neuropediatra"],
            "wordCount": "2500",
            "timeRequired": "PT8M",
            "inLanguage": "pt-BR",
            "about": [
              {
                "@type": "MedicalSpecialty",
                "name": "Neuropediatria"
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Neurologia Pediátrica"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <article className="article-page">
        <h1>Como Escolher um Neuropediatra: Dicas para Pais</h1>
        <img
          src="/images/blog/default-article.jpg"
          alt="Neuropediatra em consulta com família"
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
          <p><strong>Escolher o neuropediatra certo para seu filho é uma decisão importante que pode impactar significativamente seu desenvolvimento e qualidade de vida.</strong> Como neuropediatra em Belo Horizonte, compreendo as preocupações dos pais neste processo e ofereço orientações práticas para fazer a melhor escolha.</p>
          
          <h2>Quando Procurar um Neuropediatra</h2>
          <h3>Sinais que Indicam Necessidade de Avaliação</h3>
          <div className="indication-signs">
            <h4>🚨 Indicações Comuns:</h4>
            <ul>
              <li><strong>Atraso no desenvolvimento:</strong> Criança não alcançou marcos esperados para a idade</li>
              <li><strong>Dificuldades de aprendizagem:</strong> Problemas escolares persistentes</li>
              <li><strong>Alterações comportamentais:</strong> Hiperatividade, desatenção, impulsividade</li>
              <li><strong>Suspeita de Transtorno do Espectro Autista:</strong> Dificuldade de socialização, comportamentos estereotipados e repetitivos</li>
              <li><strong>Crises convulsivas</strong></li>
              <li><strong>Dores de cabeça frequentes</strong></li>
              <li><strong>Alterações motoras:</strong> Fraqueza, tremores, incoordenação</li>
            </ul>
          </div>

          <h2>Onde Encontrar Neuropediatras em BH</h2>
          <h3>Fontes Confiáveis</h3>
          <div className="finding-sources">
            <h4>🔍 Locais de Busca:</h4>
            <ul>
              <li><strong>CRM-MG:</strong> Conselho Regional de Medicina - lista oficial</li>
              <li><strong>Hospitais renomados</strong></li>
              <li><strong>Universidades</strong></li>
              <li><strong>Indicação médica:</strong> Pediatra de confiança</li>
              <li><strong>Planos de saúde:</strong> Rede credenciada</li>
            </ul>
          </div>

          <h3>Plataformas Online</h3>
          <table>
            <thead>
              <tr>
                <th>Plataforma</th>
                <th>Vantagens</th>
                <th>Cuidados Necessários</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doctoralia</td>
                <td>Avaliações de pacientes, agendamento online</td>
                <td>Verificar CRM e RQE do médico</td>
              </tr>
              <tr>
                <td>Google Meu Negócio</td>
                <td>Localização, horários, avaliações</td>
                <td>Confirmar informações atualizadas</td>
              </tr>
              <tr>
                <td>Sites hospitalares</td>
                <td>Currículo completo dos médicos</td>
                <td>Verificar data de atualização</td>
              </tr>
              <tr>
                <td>Redes sociais</td>
                <td>Conteúdo educativo, abordagem</td>
                <td>Avaliar qualidade das informações</td>
              </tr>
            </tbody>
          </table>

          <h2>Qualificações Essenciais</h2>
          <p>Nunca se esqueça de olhar a qualificação do especialista! Uma busca no google e no site do CRM pode te fornecer todas as informações abaixo.</p>
          <h3>Formação Básica Obrigatória</h3>
          <div className="qualifications">
            <h4>📚 Requisitos Mínimos:</h4>
            <ul>
              <li><strong>Graduação em Medicina:</strong> Curso reconhecido pelo MEC</li>
              <li><strong>Residência em Pediatria:</strong> 2-3 anos de residência</li>
              <li><strong>Residência em Neurologia Pediátrica:</strong> 2 anos adicionais</li>
              <li><strong>Registro no CRM:</strong> Conselho Regional de Medicina (CRM) ativo</li>
              <li><strong>Título de Especialista:</strong> Registro de Qualificação de Especialista (RQE), que pode ser consultado no site do CRM</li>
            </ul>
          </div>

          <h2>Critérios de Seleção</h2>
          <p>Uma vez que o especialista tenha todos os critérios acima, outros aspectos podem ser levados em conta na escolha do melhor médico para seu filho.</p>
          <h3>1. Experiência e Especialização</h3>
          <div className="selection-criteria">
            <h4>🎯 Perguntas Importantes:</h4>
            <ul>
              <li><strong>Tempo de atuação</strong></li>
              <li><strong>Área de especialização:</strong> TEA, TDAH, epilepsia, dentre outros</li>
              <li><strong>Volume de casos:</strong> Quantos pacientes similares já atendeu</li>
              <li><strong>Atualização profissional:</strong> Participação em congressos</li>
              <li><strong>Produção científica:</strong> Publicações em revistas médicas</li>
              <li><strong>Atividade acadêmica:</strong> Ensino ou pesquisa</li>
            </ul>
          </div>

          <h3>2. Abordagem Multidisciplinar</h3>
          <div className="multidisciplinary-approach">
            <h4>🤝 Trabalho em Equipe:</h4>
            <ul>
              <li><strong>Rede de profissionais:</strong> Psicólogos, fonoaudiólogos, terapeutas</li>
              <li><strong>Orientacao terapêutica:</strong> Conhece profissionais qualificados</li>
              <li><strong>Integração de tratamentos:</strong> Visão holística do paciente</li>
              <li><strong>Comunicação escolar:</strong> Parceria com educadores</li>
              <li><strong>Suporte familiar:</strong> Orientação aos pais</li>
            </ul>
          </div>

          <h3>3. Habilidades de Comunicação</h3>
          <div className="communication-skills">
            <h4>💬 Competências Essenciais:</h4>
            <ul>
              <li><strong>Linguagem clara:</strong> Explica termos médicos de forma simples</li>
              <li><strong>Paciência:</strong> Responde todas as dúvidas dos pais</li>
              <li><strong>Empatia:</strong> Compreende as angústias familiares</li>
              <li><strong>Disponibilidade:</strong> Acessível para emergências</li>
              <li><strong>Respeito:</strong> Valoriza a opinião e preocupações dos pais</li>
              <li><strong>Transparência:</strong> Honesto sobre diagnósticos e prognósticos</li>
            </ul>
          </div>

          <h2>Avaliando a Estrutura do Consultório</h2>
          <h3>Aspectos Físicos</h3>
          <div className="office-structure">
            <h4>🏢 Infraestrutura Ideal:</h4>
            <ul>
              <li><strong>Sala de espera:</strong> Ambiente adequado e acolhedor para crianças</li>
              <li><strong>Consultório:</strong> Espaço adequado para avaliação neurológica</li>
              <li><strong>Área lúdica:</strong> Brinquedoteca para crianças menores</li>
              <li><strong>Privacidade:</strong> Ambiente reservado para consultas</li>
            </ul>
          </div>

          <h3>Organização Administrativa</h3>
          <div className="administrative-organization">
            <h4>⏰ Sinais de Boa Organização:</h4>
            <ul>
              <li><strong>Pontualidade:</strong> Consultas respeitam horários marcados</li>
              <li><strong>Sistema de agendamento:</strong> Eficiente e organizado</li>
              <li><strong>Atendimento na recepção:</strong> Cordial e profissional</li>
              <li><strong>Gestão de prontuários:</strong> Registros bem organizados</li>
              <li><strong>Planejamento de seguimento:</strong> Retornos programados</li>
            </ul>
          </div>

          <h2>A Primeira Consulta: O que Observar</h2>
          <h3>Anamnese Detalhada</h3>
          <div className="first-consultation">
            <h4>📋 Características da Consulta Ideal:</h4>
            <ul>
              <li><strong>Duração adequada:</strong> Mínimo 40 minutos</li>
              <li><strong>Histórico completo:</strong> Gestação, parto, desenvolvimento</li>
              <li><strong>Escuta ativa:</strong> Atenção genuína às preocupações</li>
              <li><strong>Perguntas específicas:</strong> Detalhamento dos sintomas</li>
              <li><strong>Histórico familiar:</strong> Investigação de antecedentes</li>
              <li><strong>Ambiente acolhedor:</strong> Criança se sente à vontade</li>
            </ul>
          </div>

          <h3>Exame Físico e Neurológico</h3>
          <ul>
            <li><strong>Exame neurológico completo:</strong> Reflexos, coordenação, força</li>
            <li><strong>Avaliação do desenvolvimento:</strong> Marcos apropriados à idade</li>
            <li><strong>Interação adequada:</strong> Abordagem respeitosa com a criança</li>
            <li><strong>Observação comportamental:</strong> Atenção a sinais importantes</li>
            <li><strong>Explicações durante exame:</strong> Tranquiliza pais e criança</li>
          </ul>

          <h2>Sinais de Alerta</h2>
          <div className="warning-signs">
            <h3>🚩 Evite Profissionais que:</h3>
            <ul>
              <li><strong>Fazem diagnósticos imediatos:</strong> Sem avaliação adequada</li>
              <li><strong>Prometem cura milagrosa:</strong> Sem embasamento científico</li>
              <li><strong>Não explicam procedimentos:</strong> E condutas</li>
              <li><strong>Prescrevem medicação excessiva:</strong> Sem justificativa clara</li>
              <li><strong>Ignoram abordagem multidisciplinar</strong></li>
              <li><strong>Demonstram pressa excessiva</strong></li>
            </ul>
          </div>

          <h2>Perguntas Essenciais para Fazer</h2>
          <h3>Durante a Consulta</h3>
          <div className="essential-questions">
            <h4>❓ Questões Fundamentais:</h4>
            <ul>
              <li><strong>"Qual é sua experiência com casos similares?"</strong></li>
              <li><strong>"Que exames são realmente necessários?"</strong></li>
              <li><strong>"Qual é o plano de tratamento proposto?"</strong></li>
              <li><strong>"Quais terapias você recomenda?"</strong></li>
              <li><strong>"Como posso ajudar meu filho em casa?"</strong></li>
              <li><strong>"Quando devo esperar ver resultados?"</strong></li>
              <li><strong>"Como será o acompanhamento?"</strong></li>
              <li><strong>"Posso entrar em contato em caso de dúvidas?"</strong></li>
            </ul>
          </div>

          <h2>Construindo uma Parceria</h2>
          <h3>Relacionamento de Longo Prazo</h3>
          <div className="long-term-relationship">
            <h4>🤝 Elementos de uma Boa Parceria:</h4>
            <ul>
              <li><strong>Confiança mútua</strong></li>
              <li><strong>Comunicação aberta</strong></li>
              <li><strong>Acompanhamento consistente</strong></li>
              <li><strong>Respeito mútuo</strong></li>
            </ul>
          </div>

          <h2>Dicas Práticas para a Escolha</h2>
          <h3>Checklist de Avaliação</h3>
          <div className="evaluation-checklist">
            <h4>✅ Lista de Verificação:</h4>
            <ul>
              <li><strong>Formação confirmada:</strong> Verificar no site do CRM</li>
              <li><strong>Experiência relevante:</strong> Checar experiência em casos similares ao seu filho</li>
              <li><strong>Avaliações positivas:</strong> Procurar feedback de outros pais</li>
              <li><strong>Localização conveniente</strong></li>
              <li><strong>Horários compatíveis</strong></li>
              <li><strong>Comunicação eficaz</strong></li>
              <li><strong>Equipe de apoio:</strong> Profissionais parceiros</li>
            </ul>
          </div>

          <h3>Preparação para a Primeira Consulta</h3>
          <ul>
            <li><strong>Organize documentos:</strong> Exames, relatórios médicos</li>
            <li><strong>Liste preocupações:</strong> Anote todas as dúvidas</li>
            <li><strong>Prepare a criança:</strong> Explique o que vai acontecer</li>
            <li><strong>Reserve tempo:</strong> Não tenha pressa</li>
          </ul>

          <div className="final-advice">
            <h3>💡 Conselho Final:</h3>
            <p>A escolha do neuropediatra é uma decisão que não deve ser apressada. Confie em sua intuição, mas também considere objetivamente as qualificações técnicas. O profissional ideal será aquele que combina competência médica com empatia, dedicação e uma abordagem centrada no bem-estar integral do seu filho.</p>
          </div>

          <div className="cta-article">
            <h3>Procurando Neuropediatra em BH?</h3>
            <p>Como neuropediatra em Belo Horizonte, ofereço atendimento especializado com abordagem humanizada e multidisciplinar. Estou comprometida em ajudar seu filho a alcançar seu máximo potencial de desenvolvimento.</p>
            <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Consulta</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article9Page; 