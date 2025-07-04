import React from 'react';
import './article.css';

const Article8Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>Dificuldades Escolares: Causas Neurológicas e Abordagem</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Neuropediatra avaliando dificuldades escolares"
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
        <span>13 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>Nem todas as dificuldades escolares são resultado de preguiça ou falta de estudo - muitas têm causas neurológicas que requerem avaliação especializada.</strong> Como neuropediatra em Belo Horizonte, ajudo famílias a identificar e tratar condições que afetam o aprendizado, permitindo que crianças alcancem seu potencial acadêmico.</p>
        <h2>Diferenciando Dificuldades Normais de Problemas Neurológicos</h2>
        <h3>Dificuldades Normais</h3>
        <div className="normal-difficulties">
          <h4>📚 Características:</h4>
          <ul>
            <li><strong>Temporárias:</strong> Relacionadas a conteúdo específico</li>
            <li><strong>Situacionais:</strong> Mudança de escola, problemas familiares</li>
            <li><strong>Melhoram com esforço:</strong> Respondem ao estudo adicional</li>
            <li><strong>Área específica:</strong> Limitadas a uma matéria</li>
          </ul>
        </div>
        <h3>Problemas Neurológicos</h3>
        <div className="neurological-problems">
          <h4>🧠 Características:</h4>
          <ul>
            <li><strong>Persistentes:</strong> Duram meses ou anos</li>
            <li><strong>Múltiplas áreas:</strong> Afetam várias disciplinas</li>
            <li><strong>Não melhoram apenas com esforço:</strong> Precisam de intervenção específica</li>
            <li><strong>Discrepância:</strong> Entre inteligência e desempenho</li>
          </ul>
        </div>
        <h2>Principais Causas Neurológicas</h2>
        <h3>1. Transtorno do Déficit de Atenção (TDAH)</h3>
        <div className="adhd-school">
          <h4>🎯 Impacto Escolar:</h4>
          <ul>
            <li><strong>Desatenção:</strong> Não consegue focar nas aulas</li>
            <li><strong>Impulsividade:</strong> Responde sem pensar</li>
            <li><strong>Hiperatividade:</strong> Dificuldade para ficar sentado</li>
            <li><strong>Organização:</strong> Perde materiais, esquece tarefas</li>
          </ul>
          <h4>📊 Sinais na Escola:</h4>
          <ul>
            <li>Não termina atividades</li>
            <li>Comete erros por desatenção</li>
            <li>Evita tarefas que exigem concentração</li>
            <li>Interrompe colegas e professores</li>
          </ul>
        </div>
        <h3>2. Transtornos Específicos de Aprendizagem</h3>
        <h4>Dislexia</h4>
        <div className="learning-disorder">
          <h4>📖 Características:</h4>
          <ul>
            <li><strong>Dificuldade com leitura:</strong> Decodificação de palavras</li>
            <li><strong>Fluência:</strong> Leitura lenta e laboriosa</li>
            <li><strong>Compreensão:</strong> Pode estar preservada</li>
            <li><strong>Ortografia:</strong> Erros frequentes</li>
          </ul>
        </div>
        <h4>Disgrafia</h4>
        <div className="learning-disorder">
          <h4>✏️ Características:</h4>
          <ul>
            <li><strong>Caligrafia:</strong> Letra ilegível</li>
            <li><strong>Organização:</strong> Dificuldade no papel</li>
            <li><strong>Velocidade:</strong> Escrita muito lenta</li>
            <li><strong>Fadiga:</strong> Cansaço ao escrever</li>
          </ul>
        </div>
        <h4>Discalculia</h4>
        <div className="learning-disorder">
          <h4>🔢 Características:</h4>
          <ul>
            <li><strong>Conceitos numéricos:</strong> Dificuldade com números</li>
            <li><strong>Operações:</strong> Soma, subtração, multiplicação</li>
            <li><strong>Sequenciação:</strong> Ordem dos números</li>
            <li><strong>Resolução de problemas:</strong> Matemática aplicada</li>
          </ul>
        </div>
        <h3>3. Transtorno do Espectro Autista (TEA)</h3>
        <div className="autism-school">
          <h4>🧩 Desafios Escolares:</h4>
          <ul>
            <li><strong>Interação social:</strong> Dificuldade com colegas</li>
            <li><strong>Comunicação:</strong> Linguagem literal</li>
            <li><strong>Flexibilidade:</strong> Resistência a mudanças</li>
            <li><strong>Sensorialidade:</strong> Sensibilidade a ruídos, texturas</li>
          </ul>
        </div>
        <h3>4. Deficiência Intelectual</h3>
        <ul>
          <li><strong>Lentidão para aprender:</strong> Ritmo mais devagar</li>
          <li><strong>Dificuldade com abstração:</strong> Conceitos complexos</li>
          <li><strong>Memória:</strong> Dificuldade para reter informações</li>
          <li><strong>Generalização:</strong> Aplicar conhecimentos</li>
        </ul>
        <h2>Sinais de Alerta por Idade</h2>
        <h3>Educação Infantil (4-6 anos)</h3>
        <div className="age-alerts">
          <h4>🎨 Sinais Precoces:</h4>
          <ul>
            <li>Dificuldade para reconhecer letras</li>
            <li>Não consegue rimar palavras</li>
            <li>Problemas com coordenação motora</li>
            <li>Dificuldade para seguir instruções</li>
            <li>Não consegue contar até 10</li>
          </ul>
        </div>
        <h3>Ensino Fundamental I (6-10 anos)</h3>
        <div className="age-alerts">
          <h4>📚 Sinais Importantes:</h4>
          <ul>
            <li>Leitura muito lenta ou incorreta</li>
            <li>Não compreende o que lê</li>
            <li>Caligrafia ilegível</li>
            <li>Evita atividades escritas</li>
            <li>Dificuldade com operações matemáticas</li>
          </ul>
        </div>
        <h3>Ensino Fundamental II (11-14 anos)</h3>
        <div className="age-alerts">
          <h4>🎯 Sinais Avançados:</h4>
          <ul>
            <li>Dificuldade para organizar ideias</li>
            <li>Problemas com interpretação</li>
            <li>Não consegue fazer resumos</li>
            <li>Dificuldade com conceitos abstratos</li>
            <li>Baixa autoestima acadêmica</li>
          </ul>
        </div>
        <h2>Avaliação Neuropsicológica</h2>
        <h3>Objetivos da Avaliação</h3>
        <ul>
          <li><strong>Identificar forças e fraquezas:</strong> Perfil cognitivo</li>
          <li><strong>Diagnosticar transtornos:</strong> Confirmação clínica</li>
          <li><strong>Orientar intervenções:</strong> Plano terapêutico</li>
          <li><strong>Auxiliar escola:</strong> Adaptações necessárias</li>
        </ul>
        <h3>Áreas Avaliadas</h3>
        <table>
          <thead>
            <tr>
              <th>Área</th>
              <th>Habilidades Testadas</th>
              <th>Testes Utilizados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inteligência</td>
              <td>QI verbal e não-verbal</td>
              <td>WISC-V, WAIS-IV</td>
            </tr>
            <tr>
              <td>Atenção</td>
              <td>Concentração, foco</td>
              <td>CPT, TMT</td>
            </tr>
            <tr>
              <td>Memória</td>
              <td>Auditiva, visual, trabalho</td>
              <td>WMS, RAVLT</td>
            </tr>
            <tr>
              <td>Funções Executivas</td>
              <td>Planejamento, organização</td>
              <td>WCST, Stroop</td>
            </tr>
            <tr>
              <td>Linguagem</td>
              <td>Expressão, compreensão</td>
              <td>Token Test, Boston</td>
            </tr>
          </tbody>
        </table>
        <h2>Intervenções Educacionais</h2>
        <h3>Adaptações Curriculares</h3>
        <div className="curriculum-adaptations">
          <h4>📋 Tipos de Adaptação:</h4>
          <ul>
            <li><strong>Metodológicas:</strong> Forma de ensinar</li>
            <li><strong>Avaliativas:</strong> Forma de avaliar</li>
            <li><strong>Temporais:</strong> Tempo adicional</li>
            <li><strong>Espaciais:</strong> Ambiente físico</li>
          </ul>
        </div>
        <h3>Estratégias Específicas</h3>
        <h4>Para TDAH:</h4>
        <ul>
          <li>Sentar próximo ao professor</li>
          <li>Pausas frequentes</li>
          <li>Instruções claras e objetivas</li>
          <li>Uso de timers</li>
          <li>Movimento permitido</li>
        </ul>
        <h4>Para Dislexia:</h4>
        <ul>
          <li>Textos com fonte maior</li>
          <li>Áudio dos textos</li>
          <li>Tempo extra para leitura</li>
          <li>Prova oral quando possível</li>
          <li>Uso de tecnologia assistiva</li>
        </ul>
        <h4>Para TEA:</h4>
        <ul>
          <li>Rotinas estruturadas</li>
          <li>Comunicação visual</li>
          <li>Ambiente sensorial adequado</li>
          <li>Suporte social</li>
          <li>Preparação para mudanças</li>
        </ul>
        <h2>Papel dos Professores</h2>
        <h3>Identificação Precoce</h3>
        <div className="teacher-role">
          <h4>👨‍🏫 Observações Importantes:</h4>
          <ul>
            <li><strong>Padrões de dificuldade:</strong> Persistentes vs temporários</li>
            <li><strong>Comparação com pares:</strong> Discrepâncias significativas</li>
            <li><strong>Estratégias que funcionam:</strong> Adaptações eficazes</li>
            <li><strong>Comportamento social:</strong> Interação com colegas</li>
          </ul>
        </div>
        <h3>Comunicação com Pais</h3>
        <ul>
          <li><strong>Observações específicas:</strong> Comportamentos concretos</li>
          <li><strong>Frequência:</strong> Quantas vezes ocorre</li>
          <li><strong>Contexto:</strong> Situações específicas</li>
          <li><strong>Sugestões:</strong> Estratégias tentadas</li>
        </ul>
        <h2>Suporte Multidisciplinar</h2>
        <h3>Equipe Ideal</h3>
        <table>
          <thead>
            <tr>
              <th>Profissional</th>
              <th>Função</th>
              <th>Quando Indicado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neuropediatra</td>
              <td>Diagnóstico e medicação</td>
              <td>Suspeita de TDAH, TEA</td>
            </tr>
            <tr>
              <td>Psicólogo</td>
              <td>Avaliação cognitiva</td>
              <td>Dificuldades de aprendizagem</td>
            </tr>
            <tr>
              <td>Fonoaudiólogo</td>
              <td>Linguagem e processamento</td>
              <td>Problemas de leitura/escrita</td>
            </tr>
            <tr>
              <td>Terapeuta Ocupacional</td>
              <td>Integração sensorial</td>
              <td>Problemas motores/sensoriais</td>
            </tr>
            <tr>
              <td>Psicopedagogo</td>
              <td>Estratégias de aprendizagem</td>
              <td>Dificuldades específicas</td>
            </tr>
          </tbody>
        </table>
        <h2>Orientações para Pais</h2>
        <h3>Como Ajudar em Casa</h3>
        <div className="home-support">
          <h4>🏠 Estratégias Práticas:</h4>
          <ul>
            <li><strong>Rotina estruturada:</strong> Horários consistentes</li>
            <li><strong>Espaço adequado:</strong> Local calmo para estudar</li>
            <li><strong>Pausas regulares:</strong> Intervalos para descanso</li>
            <li><strong>Reforço positivo:</strong> Elogiar esforços</li>
            <li><strong>Comunicação com escola:</strong> Parceria ativa</li>
          </ul>
        </div>
        <h3>Sinais de Melhora</h3>
        <ul>
          <li><strong>Maior interesse:</strong> Motivação para estudar</li>
          <li><strong>Melhores notas:</strong> Progresso acadêmico</li>
          <li><strong>Mais confiança:</strong> Autoestima elevada</li>
          <li><strong>Melhor comportamento:</strong> Menos problemas disciplinares</li>
        </ul>
        <h2>Tecnologia Assistiva</h2>
        <h3>Ferramentas Úteis</h3>
        <div className="assistive-tech">
          <h4>💻 Recursos Tecnológicos:</h4>
          <ul>
            <li><strong>Leitores de tela:</strong> Para dislexia</li>
            <li><strong>Gravadores de voz:</strong> Para anotações</li>
            <li><strong>Aplicativos organizadores:</strong> Para TDAH</li>
            <li><strong>Softwares de matemática:</strong> Para discalculia</li>
            <li><strong>Comunicação alternativa:</strong> Para TEA</li>
          </ul>
        </div>
        <h2>Prognóstico e Expectativas</h2>
        <div className="prognosis-realistic">
          <h3>🎯 Expectativas Realistas:</h3>
          <ul>
            <li><strong>Progresso gradual:</strong> Melhorias levam tempo</li>
            <li><strong>Potencial individual:</strong> Cada criança é única</li>
            <li><strong>Compensação:</strong> Desenvolvimento de estratégias</li>
            <li><strong>Sucesso possível:</strong> Com apoio adequado</li>
          </ul>
        </div>
        <h2>Direitos Educacionais</h2>
        <h3>Legislação Brasileira</h3>
        <ul>
          <li><strong>Lei de Diretrizes e Bases:</strong> Educação especial</li>
          <li><strong>Plano Educacional Individualizado (PEI)</strong></li>
          <li><strong>Atendimento Educacional Especializado (AEE)</strong></li>
          <li><strong>Acompanhante terapêutico quando necessário</strong></li>
        </ul>
        <div className="motivation-message">
          <h3>🌟 Mensagem Motivacional:</h3>
          <p>Dificuldades escolares não definem a inteligência ou o futuro da criança. Com identificação precoce, intervenção adequada e apoio da família e escola, todas as crianças podem superar seus desafios e alcançar sucesso acadêmico.</p>
        </div>
        <div className="cta-article">
          <h3>Dificuldades Escolares Persistentes?</h3>
          <p>Se seu filho apresenta dificuldades escolares que não melhoram com o tempo, pode haver uma causa neurológica. Como neuropediatra em Belo Horizonte, posso ajudar a identificar e tratar essas condições.</p>
          <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Avaliação</a>
        </div>
      </div>
    </article>
  );
};

export default Article8Page; 