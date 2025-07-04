import React from 'react';
import './article.css';

const Article5Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>Tratamento do TDAH: Abordagens Eficazes e Individualizadas</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Neuropediatra realizando consulta para tratamento de TDAH"
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
        <span>15 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>O tratamento do TDAH deve ser personalizado e multimodal, combinando diferentes abordagens para máxima eficácia.</strong> Como neuropediatra em Belo Horizonte, desenvolvo planos de tratamento individualizados que consideram as necessidades específicas de cada criança e família.</p>
        <h2>Princípios do Tratamento Multimodal</h2>
        <p>O tratamento mais eficaz do TDAH combina:</p>
        <ul>
          <li><strong>Medicação:</strong> Quando apropriada</li>
          <li><strong>Terapia comportamental:</strong> Modificação de comportamentos</li>
          <li><strong>Intervenções educacionais:</strong> Adaptações escolares</li>
          <li><strong>Suporte familiar:</strong> Orientação e treinamento parental</li>
        </ul>
        <h2>Tratamento Medicamentoso</h2>
        <h3>Medicamentos Estimulantes</h3>
        <div className="medication-box">
          <h4>💊 Primeira Linha de Tratamento:</h4>
          <table>
            <thead>
              <tr>
                <th>Medicamento</th>
                <th>Duração</th>
                <th>Benefícios</th>
                <th>Efeitos Colaterais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metilfenidato</td>
                <td>4-6 horas</td>
                <td>Melhora atenção e concentração</td>
                <td>Diminuição do apetite, insônia</td>
              </tr>
              <tr>
                <td>Metilfenidato LA</td>
                <td>8-12 horas</td>
                <td>Cobertura durante todo o dia</td>
                <td>Similares ao metilfenidato</td>
              </tr>
              <tr>
                <td>Lisdexanfetamina</td>
                <td>10-12 horas</td>
                <td>Longa duração, menor rebote</td>
                <td>Perda de peso, irritabilidade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Medicamentos Não-Estimulantes</h3>
        <div className="medication-box">
          <h4>⚕️ Alternativas aos Estimulantes:</h4>
          <ul>
            <li><strong>Atomoxetina:</strong> Inibidor da recaptação de noradrenalina</li>
            <li><strong>Bupropiona:</strong> Antidepressivo com efeito no TDAH</li>
            <li><strong>Antidepressivos tricíclicos:</strong> Casos específicos</li>
            <li><strong>Clonidina:</strong> Para hiperatividade e impulsividade</li>
          </ul>
        </div>
        <h2>Terapia Comportamental</h2>
        <h3>Treino de Habilidades Sociais</h3>
        <ul>
          <li><strong>Comunicação eficaz:</strong> Aprender a expressar necessidades</li>
          <li><strong>Resolução de conflitos:</strong> Estratégias para lidar com problemas</li>
          <li><strong>Empatia:</strong> Desenvolvimento da capacidade de se colocar no lugar do outro</li>
          <li><strong>Fazer amizades:</strong> Habilidades para iniciar e manter relacionamentos</li>
        </ul>
        <h3>Técnicas de Autocontrole</h3>
        <ul>
          <li><strong>Técnica do semáforo:</strong> Parar, pensar, agir</li>
          <li><strong>Autoinstrução:</strong> Ensinar a criança a dar comandos para si mesma</li>
          <li><strong>Relaxamento:</strong> Técnicas de respiração e mindfulness</li>
          <li><strong>Automonitoramento:</strong> Consciência dos próprios comportamentos</li>
        </ul>
        <h2>Intervenções Educacionais</h2>
        <h3>Adaptações em Sala de Aula</h3>
        <div className="school-adaptations">
          <h4>🎓 Estratégias Pedagógicas:</h4>
          <ul>
            <li><strong>Lugar estratégico:</strong> Longe de distrações, perto do professor</li>
            <li><strong>Instruções claras:</strong> Dividir tarefas em passos menores</li>
            <li><strong>Tempo extra:</strong> Para realização de atividades</li>
            <li><strong>Pausas frequentes:</strong> Intervalos para movimento</li>
            <li><strong>Reforço positivo:</strong> Elogios e reconhecimento</li>
          </ul>
        </div>
        <h3>Tecnologia Assistiva</h3>
        <ul>
          <li><strong>Aplicativos de organização:</strong> Calendários e lembretes</li>
          <li><strong>Gravadores de áudio:</strong> Para registrar aulas</li>
          <li><strong>Softwares educativos:</strong> Jogos que desenvolvem atenção</li>
          <li><strong>Dispositivos de foco:</strong> Ferramentas para concentração</li>
        </ul>
        <h2>Treinamento Parental</h2>
        <h3>Técnicas de Modificação Comportamental</h3>
        <div className="parenting-techniques">
          <h4>👨‍👩‍👧‍👦 Estratégias para Pais:</h4>
          <ul>
            <li><strong>Reforço positivo:</strong> Elogiar comportamentos adequados</li>
            <li><strong>Consequências naturais:</strong> Deixar a criança aprender com erros</li>
            <li><strong>Time-out:</strong> Uso adequado de pausas disciplinares</li>
            <li><strong>Economia de fichas:</strong> Sistema de pontos e recompensas</li>
          </ul>
        </div>
        <h3>Estruturação do Ambiente</h3>
        <ul>
          <li><strong>Rotinas consistentes:</strong> Horários regulares para atividades</li>
          <li><strong>Organização visual:</strong> Quadros, listas, lembretes</li>
          <li><strong>Redução de estímulos:</strong> Ambiente calmo para estudo</li>
          <li><strong>Espaço para movimento:</strong> Áreas para gastar energia</li>
        </ul>
        <h2>Abordagens Complementares</h2>
        <h3>Terapia Ocupacional</h3>
        <ul>
          <li><strong>Integração sensorial:</strong> Processamento de estímulos</li>
          <li><strong>Habilidades motoras:</strong> Coordenação e equilíbrio</li>
          <li><strong>Organização:</strong> Planejamento e execução de tarefas</li>
          <li><strong>Autorregulação:</strong> Controle emocional</li>
        </ul>
        <h3>Psicoterapia</h3>
        <ul>
          <li><strong>Terapia cognitivo-comportamental:</strong> Mudança de pensamentos</li>
          <li><strong>Terapia familiar:</strong> Melhoria da dinâmica familiar</li>
          <li><strong>Terapia em grupo:</strong> Desenvolvimento de habilidades sociais</li>
        </ul>
        <h2>Tratamento por Faixa Etária</h2>
        <h3>Pré-escolares (3-5 anos)</h3>
        <div className="age-treatment">
          <h4>🧸 Foco Principal:</h4>
          <ul>
            <li><strong>Treinamento parental:</strong> Primeira linha de tratamento</li>
            <li><strong>Estruturação do ambiente:</strong> Rotinas claras</li>
            <li><strong>Medicação:</strong> Apenas casos graves</li>
            <li><strong>Preparação escolar:</strong> Habilidades básicas</li>
          </ul>
        </div>
        <h3>Escolares (6-11 anos)</h3>
        <div className="age-treatment">
          <h4>📚 Abordagem Combinada:</h4>
          <ul>
            <li><strong>Medicação:</strong> Primeira linha junto com terapia</li>
            <li><strong>Adaptações escolares:</strong> Fundamentais para sucesso</li>
            <li><strong>Terapia comportamental:</strong> Habilidades sociais</li>
            <li><strong>Suporte familiar:</strong> Orientação contínua</li>
          </ul>
        </div>
        <h3>Adolescentes (12+ anos)</h3>
        <div className="age-treatment">
          <h4>🎯 Foco na Autonomia:</h4>
          <ul>
            <li><strong>Autogestão:</strong> Responsabilidade pelo tratamento</li>
            <li><strong>Habilidades executivas:</strong> Organização e planejamento</li>
            <li><strong>Preparação para vida adulta:</strong> Independência</li>
            <li><strong>Apoio emocional:</strong> Autoestima e identidade</li>
          </ul>
        </div>
        <h2>Monitoramento do Tratamento</h2>
        <h3>Avaliação Regular</h3>
        <ul>
          <li><strong>Consultas mensais:</strong> Início do tratamento</li>
          <li><strong>Escalas de avaliação:</strong> SNAP-IV, Conners</li>
          <li><strong>Relatórios escolares:</strong> Desempenho acadêmico</li>
          <li><strong>Feedback familiar:</strong> Comportamento em casa</li>
        </ul>
        <h3>Ajustes no Tratamento</h3>
        <ul>
          <li><strong>Dose da medicação:</strong> Otimização baseada em resposta</li>
          <li><strong>Mudança de medicamento:</strong> Se necessário</li>
          <li><strong>Intensidade da terapia:</strong> Conforme progresso</li>
          <li><strong>Novas estratégias:</strong> Adaptação às necessidades</li>
        </ul>
        <h2>Efeitos Colaterais e Manejo</h2>
        <table>
          <thead>
            <tr>
              <th>Efeito Colateral</th>
              <th>Frequência</th>
              <th>Manejo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diminuição do apetite</td>
              <td>Muito comum</td>
              <td>Refeições antes da medicação, suplementos</td>
            </tr>
            <tr>
              <td>Insônia</td>
              <td>Comum</td>
              <td>Ajustar horário, higiene do sono</td>
            </tr>
            <tr>
              <td>Irritabilidade</td>
              <td>Comum</td>
              <td>Reduzir dose, mudança de medicação</td>
            </tr>
            <tr>
              <td>Dor de cabeça</td>
              <td>Ocasional</td>
              <td>Hidratação, analgésicos simples</td>
            </tr>
          </tbody>
        </table>
        <h2>Mitos sobre o Tratamento</h2>
        <div className="myths-box">
          <h3>❌ Mito vs ✅ Realidade:</h3>
          <ul>
            <li><strong>❌ Mito:</strong> Medicação causa dependência<br />
                <strong>✅ Realidade:</strong> Medicações para TDAH não causam dependência quando usadas adequadamente</li>
            <li><strong>❌ Mito:</strong> Tratamento deve ser interrompido na adolescência<br />
                <strong>✅ Realidade:</strong> Muitos adolescentes e adultos se beneficiam do tratamento contínuo</li>
            <li><strong>❌ Mito:</strong> Apenas medicação é suficiente<br />
                <strong>✅ Realidade:</strong> Tratamento multimodal é mais eficaz</li>
          </ul>
        </div>
        <h2>Prognóstico e Expectativas</h2>
        <p>Com tratamento adequado, crianças com TDAH podem:</p>
        <ul>
          <li><strong>Melhorar desempenho acadêmico</strong></li>
          <li><strong>Desenvolver relacionamentos saudáveis</strong></li>
          <li><strong>Aumentar autoestima</strong></li>
          <li><strong>Adquirir habilidades de vida</strong></li>
          <li><strong>Ter perspectivas profissionais positivas</strong></li>
        </ul>
        <div className="success-story">
          <h3>💪 Exemplo de Sucesso:</h3>
          <p>João, 8 anos, chegou ao meu consultório com notas baixas e problemas comportamentais. Após 6 meses de tratamento multimodal, suas notas melhoraram, fez novos amigos e a família relatou maior harmonia em casa.</p>
        </div>
        <div className="cta-article">
          <h3>Precisa de Tratamento para TDAH?</h3>
          <p>Se seu filho foi diagnosticado com TDAH ou você suspeita do transtorno, procure tratamento especializado. Como neuropediatra em Belo Horizonte, desenvolvo planos de tratamento individualizados e eficazes.</p>
          <a href="https://wa.me/5531995626630" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default Article5Page; 