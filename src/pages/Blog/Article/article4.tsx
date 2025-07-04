import React from 'react';
import './article.css';

const Article4Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>Diagnóstico de TEA: Processo Completo e Abordagem Multidisciplinar</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Neuropediatra realizando avaliação para diagnóstico de TEA"
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
        <span>12 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>O diagnóstico do Transtorno do Espectro Autista (TEA) é um processo complexo que requer avaliação multidisciplinar cuidadosa.</strong> Como neuropediatra em Belo Horizonte, conduzo regularmente essas avaliações e compreendo a ansiedade das famílias durante este processo. Este artigo explica cada etapa do diagnóstico de TEA.</p>
        <h2>Por que o Diagnóstico Precoce é Fundamental?</h2>
        <p>O diagnóstico precoce de TEA permite:</p>
        <ul>
          <li><strong>Intervenção terapêutica imediata:</strong> Máximo aproveitamento da neuroplasticidade</li>
          <li><strong>Melhor prognóstico:</strong> Desenvolvimento de habilidades sociais e comunicativas</li>
          <li><strong>Suporte familiar:</strong> Orientação adequada para os pais</li>
          <li><strong>Adaptações escolares:</strong> Ambiente educacional apropriado</li>
        </ul>
        <h2>Critérios Diagnósticos do TEA (DSM-5)</h2>
        <p>O diagnóstico baseia-se em dois domínios principais:</p>
        <h3>1. Déficits na Comunicação e Interação Social</h3>
        <div className="criteria-box">
          <ul>
            <li><strong>Reciprocidade socioemocional:</strong> Dificuldade em conversas, compartilhamento de interesses</li>
            <li><strong>Comunicação não-verbal:</strong> Contato visual, expressões faciais, gestos</li>
            <li><strong>Relacionamentos:</strong> Dificuldade para fazer amizades apropriadas à idade</li>
          </ul>
        </div>
        <h3>2. Padrões Restritos e Repetitivos</h3>
        <div className="criteria-box">
          <ul>
            <li><strong>Movimentos repetitivos:</strong> Estereotipias motoras ou verbais</li>
            <li><strong>Rigidez e rotinas:</strong> Insistência em mesmice, rituais</li>
            <li><strong>Interesses fixos:</strong> Foco intenso em objetos específicos</li>
            <li><strong>Sensorialidade:</strong> Hiper ou hipossensibilidade sensorial</li>
          </ul>
        </div>
        <h2>Equipe Multidisciplinar para Diagnóstico</h2>
        <p>O diagnóstico de TEA em meu consultório em Belo Horizonte envolve:</p>
        <table>
          <thead>
            <tr>
              <th>Profissional</th>
              <th>Função no Diagnóstico</th>
              <th>Avaliação Específica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neuropediatra</td>
              <td>Coordenação do processo</td>
              <td>Avaliação neurológica, prescrição</td>
            </tr>
            <tr>
              <td>Psicólogo</td>
              <td>Avaliação comportamental</td>
              <td>Testes específicos, CARS, ADI-R</td>
            </tr>
            <tr>
              <td>Fonoaudiólogo</td>
              <td>Comunicação e linguagem</td>
              <td>Avaliação da fala e pragmática</td>
            </tr>
            <tr>
              <td>Terapeuta Ocupacional</td>
              <td>Habilidades adaptativas</td>
              <td>Integração sensorial, autonomia</td>
            </tr>
            <tr>
              <td>Psicopedagogo</td>
              <td>Aprendizagem</td>
              <td>Habilidades acadêmicas</td>
            </tr>
          </tbody>
        </table>
        <h2>Processo de Avaliação Passo a Passo</h2>
        <h3>Etapa 1: Consulta Inicial</h3>
        <ul>
          <li><strong>Anamnese detalhada:</strong> Histórico gestacional, parto, desenvolvimento</li>
          <li><strong>Preocupações familiares:</strong> Queixas específicas dos pais</li>
          <li><strong>Histórico médico:</strong> Doenças, medicações, hospitalizações</li>
          <li><strong>Histórico familiar:</strong> Casos de TEA ou outros transtornos</li>
        </ul>
        <h3>Etapa 2: Exame Neurológico</h3>
        <ul>
          <li><strong>Exame físico completo:</strong> Crescimento, desenvolvimento</li>
          <li><strong>Avaliação neurológica:</strong> Reflexos, tônus, coordenação</li>
          <li><strong>Observação comportamental:</strong> Interação, comunicação</li>
          <li><strong>Sinais dismórficos:</strong> Características físicas associadas</li>
        </ul>
        <h3>Etapa 3: Instrumentos de Avaliação</h3>
        <div className="instruments-box">
          <h4>📋 Principais Instrumentos:</h4>
          <ul>
            <li><strong>M-CHAT-R:</strong> Triagem para 16-30 meses</li>
            <li><strong>CARS:</strong> Escala de Classificação do Autismo</li>
            <li><strong>ADI-R:</strong> Entrevista Diagnóstica do Autismo</li>
            <li><strong>ADOS-2:</strong> Observação Diagnóstica do Autismo</li>
            <li><strong>PEP-3:</strong> Perfil Psicoeducacional</li>
          </ul>
        </div>
        <h3>Etapa 4: Exames Complementares</h3>
        <p>Quando necessários:</p>
        <ul>
          <li><strong>Audiometria:</strong> Descartar problemas auditivos</li>
          <li><strong>EEG:</strong> Se houver suspeita de epilepsia</li>
          <li><strong>Ressonância magnética:</strong> Casos específicos</li>
          <li><strong>Testes genéticos:</strong> Síndrome do X-frágil, outras condições</li>
        </ul>
        <h2>Níveis de Gravidade do TEA</h2>
        <p>O DSM-5 estabelece três níveis de suporte:</p>
        <div className="levels-box">
          <h3>Nível 1 - Requer Suporte</h3>
          <ul>
            <li>Dificuldades sociais perceptíveis</li>
            <li>Inflexibilidade comportamental</li>
            <li>Problemas de organização e planejamento</li>
          </ul>
          <h3>Nível 2 - Requer Suporte Substancial</h3>
          <ul>
            <li>Déficits sociais mais marcantes</li>
            <li>Comportamentos repetitivos frequentes</li>
            <li>Dificuldade para mudanças</li>
          </ul>
          <h3>Nível 3 - Requer Suporte Muito Substancial</h3>
          <ul>
            <li>Déficits graves na comunicação</li>
            <li>Comportamentos repetitivos interferem no funcionamento</li>
            <li>Extrema dificuldade para mudanças</li>
          </ul>
        </div>
        <h2>Diagnóstico Diferencial</h2>
        <p>É importante diferenciar TEA de outras condições:</p>
        <table>
          <thead>
            <tr>
              <th>Condição</th>
              <th>Características</th>
              <th>Diferenças do TEA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atraso Global do Desenvolvimento</td>
              <td>Atraso em múltiplas áreas</td>
              <td>Sem padrões repetitivos específicos</td>
            </tr>
            <tr>
              <td>Transtorno da Linguagem</td>
              <td>Dificuldades específicas da fala</td>
              <td>Interação social preservada</td>
            </tr>
            <tr>
              <td>Deficiência Intelectual</td>
              <td>Limitações cognitivas</td>
              <td>Habilidades sociais compatíveis com QI</td>
            </tr>
            <tr>
              <td>TDAH</td>
              <td>Desatenção, hiperatividade</td>
              <td>Sem déficits sociais persistentes</td>
            </tr>
          </tbody>
        </table>
        <h2>Comorbidades Frequentes</h2>
        <p>Crianças com TEA podem apresentar:</p>
        <ul>
          <li><strong>Deficiência Intelectual:</strong> 30-70% dos casos</li>
          <li><strong>Epilepsia:</strong> 20-30% dos casos</li>
          <li><strong>TDAH:</strong> 50-70% dos casos</li>
          <li><strong>Transtornos do Sono:</strong> 50-80% dos casos</li>
          <li><strong>Problemas Gastrointestinais:</strong> 20-40% dos casos</li>
        </ul>
        <h2>Recebendo o Diagnóstico</h2>
        <p>O momento do diagnóstico é delicado. Em meu consultório:</p>
        <h3>Como Comunico o Diagnóstico:</h3>
        <ul>
          <li><strong>Ambiente acolhedor:</strong> Espaço privado e confortável</li>
          <li><strong>Linguagem clara:</strong> Explicações acessíveis</li>
          <li><strong>Foco nas potencialidades:</strong> Enfatizar pontos fortes</li>
          <li><strong>Plano de intervenção:</strong> Próximos passos concretos</li>
        </ul>
        <h3>Reações Comuns dos Pais:</h3>
        <ul>
          <li><strong>Negação:</strong> "Deve ser um erro"</li>
          <li><strong>Raiva:</strong> "Por que meu filho?"</li>
          <li><strong>Culpa:</strong> "O que fiz de errado?"</li>
          <li><strong>Tristeza:</strong> Processo de luto</li>
          <li><strong>Aceitação:</strong> "Vamos lutar juntos"</li>
        </ul>
        <h2>Após o Diagnóstico: Primeiros Passos</h2>
        <div className="action-steps">
          <h3>🎯 Passos Imediatos:</h3>
          <ol>
            <li><strong>Educação sobre TEA:</strong> Compreender a condição</li>
            <li><strong>Rede de apoio:</strong> Família, amigos, profissionais</li>
            <li><strong>Intervenções terapêuticas:</strong> Iniciar tratamentos</li>
            <li><strong>Adaptações escolares:</strong> Conversar com escola</li>
            <li><strong>Cuidado parental:</strong> Não esquecer de si mesmo</li>
          </ol>
        </div>
        <h2>Direitos da Criança com TEA</h2>
        <p>No Brasil, crianças com TEA têm direito a:</p>
        <ul>
          <li><strong>Atendimento educacional especializado</strong></li>
          <li><strong>Acompanhante terapêutico na escola</strong></li>
          <li><strong>Tratamento no SUS</strong></li>
          <li><strong>Prioridade em filas</strong></li>
          <li><strong>Isenção de impostos</strong> (casos específicos)</li>
        </ul>
        <h2>Prognóstico e Perspectivas</h2>
        <p>O prognóstico varia muito, mas com intervenção precoce:</p>
        <ul>
          <li><strong>Muitas crianças</strong> desenvolvem habilidades de comunicação</li>
          <li><strong>Algumas</strong> alcançam independência total</li>
          <li><strong>Todas</strong> podem ter qualidade de vida melhorada</li>
        </ul>
        <div className="hope-box">
          <h3>💙 Mensagem de Esperança:</h3>
          <p>O diagnóstico de TEA não define limitações - define oportunidades. Cada criança é única e pode surpreender positivamente com o suporte adequado.</p>
        </div>
        <div className="cta-article">
          <h3>Precisa de Avaliação para TEA?</h3>
          <p>Se você suspeita que seu filho pode ter TEA, procure avaliação especializada. Como neuropediatra em Belo Horizonte, conduzo diagnósticos completos e multidisciplinares.</p>
          <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Avaliação</a>
        </div>
      </div>
    </article>
  );
};

export default Article4Page; 