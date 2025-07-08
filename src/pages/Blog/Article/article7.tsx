import React from 'react';
import './article.css';

const Article7Page: React.FC = () => {
  return (
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
            <li>Não fala 2 palavras aos 24 meses</li>
            <li>Não brinca de faz-de-conta aos 24 meses</li>
            <li>Não imita ações aos 24 meses</li>
          </ul>
        </div>
        <h2>Áreas do Desenvolvimento</h2>
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
        <h3>3. Desenvolvimento Cognitivo</h3>
        <ul>
          <li><strong>Permanência do objeto:</strong> 8-12 meses</li>
          <li><strong>Imitação:</strong> 12-18 meses</li>
          <li><strong>Jogo simbólico:</strong> 18-24 meses</li>
          <li><strong>Solução de problemas:</strong> 24-36 meses</li>
        </ul>
        <h3>4. Desenvolvimento Social</h3>
        <ul>
          <li><strong>Sorriso social:</strong> 2-3 meses</li>
          <li><strong>Ansiedade do estranho:</strong> 6-8 meses</li>
          <li><strong>Brincadeira paralela:</strong> 12-18 meses</li>
          <li><strong>Brincadeira cooperativa:</strong> 24-36 meses</li>
        </ul>
        <h2>Causas do Atraso no Desenvolvimento</h2>
        <h3>Fatores Pré-natais</h3>
        <ul>
          <li><strong>Infecções congênitas:</strong> Toxoplasmose, rubéola, citomegalovírus</li>
          <li><strong>Uso de substâncias:</strong> Álcool, drogas na gravidez</li>
          <li><strong>Medicamentos:</strong> Anticonvulsivantes, outros teratógenos</li>
          <li><strong>Alterações genéticas:</strong> Síndrome de Down, outras síndromes</li>
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
          <li><strong>Exposição a toxinas:</strong> Chumbo, mercúrio</li>
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
        <h3>Instrumentos de Avaliação</h3>
        <div className="assessment-tools">
          <h4>🔍 Ferramentas Utilizadas:</h4>
          <ul>
            <li><strong>Teste de Denver:</strong> Triagem do desenvolvimento</li>
            <li><strong>Bayley Scales:</strong> Avaliação abrangente</li>
            <li><strong>PEDI:</strong> Habilidades funcionais</li>
            <li><strong>CARS:</strong> Rastreamento de TEA</li>
          </ul>
        </div>
        <h2>Intervenção Precoce</h2>
        <h3>Benefícios da Intervenção Precoce</h3>
        <ul>
          <li><strong>Neuroplasticidade:</strong> Cérebro mais adaptável</li>
          <li><strong>Prevenção secundária:</strong> Evita complicações</li>
          <li><strong>Melhor prognóstico:</strong> Resultados superiores</li>
          <li><strong>Suporte familiar:</strong> Orientação adequada</li>
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
        <h3>Estimulação em Casa</h3>
        <div className="home-stimulation">
          <h4>🏠 Atividades Diárias:</h4>
          <ul>
            <li><strong>Leitura:</strong> Livros adequados à idade</li>
            <li><strong>Música:</strong> Canções, instrumentos simples</li>
            <li><strong>Brincadeiras:</strong> Jogos educativos</li>
            <li><strong>Conversação:</strong> Falar sempre com a criança</li>
            <li><strong>Exploração:</strong> Diferentes texturas, objetos</li>
          </ul>
        </div>
        <h3>Ambiente Estimulante</h3>
        <ul>
          <li><strong>Rotina estruturada:</strong> Horários regulares</li>
          <li><strong>Ambiente seguro:</strong> Exploração livre</li>
          <li><strong>Interação social:</strong> Contato com outras crianças</li>
          <li><strong>Limite de telas:</strong> Usar com moderação</li>
        </ul>
        <h2>Prognóstico e Expectativas</h2>
        <div className="prognosis-factors">
          <h3>📊 Fatores que Influenciam o Prognóstico:</h3>
          <ul>
            <li><strong>Idade do diagnóstico:</strong> Mais precoce = melhor</li>
            <li><strong>Gravidade do atraso:</strong> Leve vs severo</li>
            <li><strong>Causa subjacente:</strong> Reversível vs permanente</li>
            <li><strong>Apoio familiar:</strong> Envolvimento ativo</li>
            <li><strong>Acesso à intervenção:</strong> Quantidade e qualidade</li>
          </ul>
        </div>
        <h2>Recursos Disponíveis em BH</h2>
        <h3>Serviços Públicos</h3>
        <ul>
          <li><strong>APAE-BH:</strong> Atendimento especializado</li>
          <li><strong>Centros de Reabilitação:</strong> Terapias múltiplas</li>
          <li><strong>Núcleos de Apoio:</strong> Estimulação precoce</li>
          <li><strong>Escolas Especializadas:</strong> Educação inclusiva</li>
        </ul>
        <h3>Direitos da Criança</h3>
        <ul>
          <li><strong>Atendimento especializado gratuito</strong></li>
          <li><strong>Educação inclusiva</strong></li>
          <li><strong>Auxílio-inclusão</strong></li>
          <li><strong>Prioridade em filas</strong></li>
        </ul>
        <div className="encouragement-box">
          <h3>💪 Mensagem Encorajadora:</h3>
          <p>Cada criança é única e tem seu potencial. O atraso no desenvolvimento não determina o futuro - com apoio adequado, muitas crianças superam completamente suas dificuldades iniciais.</p>
        </div>
        <div className="cta-article">
          <h3>Preocupado com o Desenvolvimento?</h3>
          <p>Se você suspeita de atraso no desenvolvimento do seu filho, não espere. A avaliação precoce pode fazer toda a diferença. Como neuropediatra em Belo Horizonte, estou aqui para ajudar.</p>
          <a href="/agendar-consulta" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default Article7Page; 