import React from 'react';
import './article.css';

const Article2Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>TDAH em Crianças: Sintomas e Diagnóstico por Idade</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Bebê sendo examinado por neuropediatra, representando TDAH em crianças"
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
        <span>10 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) afeta entre 5% a 7% das crianças em idade escolar.</strong> Como neuropediatra em Belo Horizonte, vejo muitos pais confusos sobre quando a agitação normal da criança pode ser um sinal de TDAH. Este artigo esclarece os sintomas por faixa etária e como identificar quando buscar ajuda.</p>
        <h2>O que é TDAH?</h2>
        <p>O TDAH é um transtorno neurobiológico que afeta a capacidade de atenção, controle de impulsos e níveis de atividade. Não é "falta de educação" ou "preguiça" - é uma condição médica real que requer tratamento adequado.</p>
        <h2>Tipos de TDAH</h2>
        <ul>
          <li><strong>Predominantemente Desatento:</strong> Dificuldade para focar e prestar atenção</li>
          <li><strong>Predominantemente Hiperativo-Impulsivo:</strong> Inquietude e impulsividade</li>
          <li><strong>Combinado:</strong> Sintomas de desatenção e hiperatividade-impulsividade</li>
        </ul>
        <h2>Sintomas de TDAH por Faixa Etária</h2>
        <h3>Pré-escolar (3-5 anos)</h3>
        <div className="symptoms-box">
          <h4>⚠️ Sinais de Alerta:</h4>
          <ul>
            <li>Extrema inquietude, não consegue ficar sentado</li>
            <li>Corre e escala excessivamente</li>
            <li>Dificuldade para esperar a vez</li>
            <li>Interrompe conversas constantemente</li>
            <li>Dificuldade para brincar silenciosamente</li>
            <li>Não consegue concluir atividades simples</li>
          </ul>
        </div>
        <h3>Idade Escolar (6-11 anos)</h3>
        <div className="symptoms-box">
          <h4>📚 Sintomas Acadêmicos:</h4>
          <ul>
            <li>Dificuldade para prestar atenção nas aulas</li>
            <li>Não consegue terminar tarefas</li>
            <li>Esquece materiais escolares</li>
            <li>Evita atividades que exigem concentração</li>
            <li>Comete erros por desatenção</li>
          </ul>
          <h4>🏃 Sintomas Comportamentais:</h4>
          <ul>
            <li>Não consegue ficar sentado na sala de aula</li>
            <li>Fala excessivamente</li>
            <li>Responde antes da pergunta ser completada</li>
            <li>Dificuldade para brincar em grupo</li>
            <li>Perde objetos frequentemente</li>
          </ul>
        </div>
        <h3>Pré-adolescência (12-14 anos)</h3>
        <div className="symptoms-box">
          <h4>🎯 Sintomas Mais Complexos:</h4>
          <ul>
            <li>Dificuldade para organizar tarefas</li>
            <li>Procrastinação excessiva</li>
            <li>Problemas com gestão do tempo</li>
            <li>Dificuldade para seguir instruções</li>
            <li>Impulsividade em relacionamentos</li>
          </ul>
        </div>
        <h2>Diferenças entre TDAH e Comportamento Normal</h2>
        <p>É normal que crianças sejam ativas e às vezes desatentas. O TDAH é diagnosticado quando os sintomas:</p>
        <ol>
          <li><strong>Persistem por mais de 6 meses</strong></li>
          <li><strong>Aparecem em pelo menos 2 ambientes</strong> (casa e escola)</li>
          <li><strong>Interferem significativamente</strong> no funcionamento diário</li>
          <li><strong>São inapropriados para a idade</strong> da criança</li>
        </ol>
        <h2>Impacto do TDAH na Vida Escolar</h2>
        <p>Em meu consultório em Belo Horizonte, frequentemente atendo crianças com TDAH que apresentam:</p>
        <ul>
          <li><strong>Baixo rendimento acadêmico:</strong> Notas abaixo do potencial</li>
          <li><strong>Problemas disciplinares:</strong> Advertências e suspensões</li>
          <li><strong>Dificuldades sociais:</strong> Problemas para fazer amigos</li>
          <li><strong>Baixa autoestima:</strong> Sentimento de inadequação</li>
        </ul>
        <h2>Quando Procurar um Neuropediatra</h2>
        <div className="alert-box">
          <h3>🚨 Busque ajuda se a criança:</h3>
          <ul>
            <li>Apresenta sintomas há mais de 6 meses</li>
            <li>Tem dificuldades na escola e em casa</li>
            <li>Não consegue concluir tarefas básicas</li>
            <li>Apresenta comportamentos impulsivos perigosos</li>
            <li>Tem problemas significativos de relacionamento</li>
          </ul>
        </div>
        <h2>Processo de Diagnóstico</h2>
        <p>O diagnóstico de TDAH é clínico e requer avaliação cuidadosa:</p>
        <h3>1. Avaliação Médica</h3>
        <ul>
          <li>Histórico médico completo</li>
          <li>Exame neurológico</li>
          <li>Exclusão de outras condições</li>
        </ul>
        <h3>2. Avaliação Psicológica</h3>
        <ul>
          <li>Testes de atenção e concentração</li>
          <li>Avaliação do QI</li>
          <li>Escalas de comportamento</li>
        </ul>
        <h3>3. Avaliação Escolar</h3>
        <ul>
          <li>Relatórios de professores</li>
          <li>Observação em sala de aula</li>
          <li>Avaliação pedagógica</li>
        </ul>
        <h2>Tratamento Multimodal</h2>
        <p>O tratamento mais eficaz combina diferentes abordagens:</p>
        <table>
          <thead>
            <tr>
              <th>Tratamento</th>
              <th>Descrição</th>
              <th>Benefícios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Medicação</td>
              <td>Estimulantes e não-estimulantes</td>
              <td>Melhora atenção e controle de impulsos</td>
            </tr>
            <tr>
              <td>Terapia Comportamental</td>
              <td>Modificação de comportamentos</td>
              <td>Desenvolve habilidades de autocontrole</td>
            </tr>
            <tr>
              <td>Apoio Escolar</td>
              <td>Adaptações pedagógicas</td>
              <td>Melhora desempenho acadêmico</td>
            </tr>
            <tr>
              <td>Orientação Familiar</td>
              <td>Treino de pais</td>
              <td>Melhora dinâmica familiar</td>
            </tr>
          </tbody>
        </table>
        <h2>Dicas para Pais em Casa</h2>
        <ul>
          <li><strong>Mantenha rotinas consistentes:</strong> Horários regulares para atividades</li>
          <li><strong>Use reforço positivo:</strong> Elogie comportamentos adequados</li>
          <li><strong>Divida tarefas complexas:</strong> Quebre em etapas menores</li>
          <li><strong>Limite distrações:</strong> Ambiente calmo para estudar</li>
          <li><strong>Exercite paciência:</strong> Mudanças levam tempo</li>
        </ul>
        <h2>Prognóstico e Perspectivas</h2>
        <p>Com tratamento adequado, crianças com TDAH podem:</p>
        <ul>
          <li>Ter sucesso acadêmico</li>
          <li>Desenvolver relacionamentos saudáveis</li>
          <li>Aprender a gerenciar seus sintomas</li>
          <li>Ter uma vida produtiva e feliz</li>
        </ul>
        <div className="cta-article">
          <h3>Suspeita de TDAH?</h3>
          <p>Se você identificou sintomas de TDAH em seu filho, procure avaliação especializada. Como neuropediatra em Belo Horizonte, posso ajudar no diagnóstico e tratamento adequado.</p>
          <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default Article2Page; 