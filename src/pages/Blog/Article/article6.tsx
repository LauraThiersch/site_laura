import React from 'react';
import './article.css';

const Article6Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>Tratamento da Epilepsia Infantil: Controle e Qualidade de Vida</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Neuropediatra realizando consulta para tratamento de epilepsia infantil"
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
        <span>11 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>O tratamento da epilepsia infantil evoluiu significativamente, permitindo que a maioria das crianças tenha controle completo das crises.</strong> Como neuropediatra em Belo Horizonte, acompanho crianças com epilepsia e suas famílias, oferecendo tratamentos personalizados que priorizam qualidade de vida e desenvolvimento normal.</p>
        <h2>Objetivos do Tratamento</h2>
        <ul>
          <li><strong>Controle completo das crises</strong></li>
          <li><strong>Minimizar efeitos colaterais</strong></li>
          <li><strong>Preservar função cognitiva</strong></li>
          <li><strong>Permitir desenvolvimento normal</strong></li>
          <li><strong>Melhorar qualidade de vida familiar</strong></li>
        </ul>
        <h2>Medicamentos Antiepilépticos (FAE)</h2>
        <h3>Primeira Linha de Tratamento</h3>
        <div className="medication-table">
          <table>
            <thead>
              <tr>
                <th>Medicamento</th>
                <th>Indicação Principal</th>
                <th>Vantagens</th>
                <th>Efeitos Colaterais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Levetiracetam</td>
                <td>Crises focais e generalizadas</td>
                <td>Bem tolerado, poucas interações</td>
                <td>Irritabilidade, sonolência</td>
              </tr>
              <tr>
                <td>Lamotrigina</td>
                <td>Crises focais, síndrome de Lennox-Gastaut</td>
                <td>Bem tolerado, melhora humor</td>
                <td>Rash cutâneo, tontura</td>
              </tr>
              <tr>
                <td>Valproato</td>
                <td>Crises generalizadas</td>
                <td>Amplo espectro, eficaz</td>
                <td>Ganho de peso, tremor</td>
              </tr>
              <tr>
                <td>Carbamazepina</td>
                <td>Crises focais</td>
                <td>Eficaz, bem estabelecida</td>
                <td>Sonolência, tontura</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Medicamentos de Segunda Linha</h3>
        <ul>
          <li><strong>Oxcarbazepina:</strong> Alternativa à carbamazepina</li>
          <li><strong>Topiramato:</strong> Crises focais e generalizadas</li>
          <li><strong>Lacosamida:</strong> Crises focais resistentes</li>
          <li><strong>Vigabatrina:</strong> Síndrome de West</li>
        </ul>
        <h2>Princípios da Terapia Medicamentosa</h2>
        <h3>Monoterapia vs Politerapia</h3>
        <div className="therapy-comparison">
          <h4>🎯 Monoterapia (Primeiro Objetivo):</h4>
          <ul>
            <li><strong>Menor risco de efeitos colaterais</strong></li>
            <li><strong>Melhor adesão ao tratamento</strong></li>
            <li><strong>Mais fácil monitoramento</strong></li>
            <li><strong>Menor custo</strong></li>
          </ul>
          <h4>⚖️ Politerapia (Quando Necessária):</h4>
          <ul>
            <li><strong>Crises resistentes à monoterapia</strong></li>
            <li><strong>Múltiplos tipos de crise</strong></li>
            <li><strong>Síndromes epilépticas específicas</strong></li>
          </ul>
        </div>
        <h2>Tratamento por Tipo de Epilepsia</h2>
        <h3>Epilepsia Focal</h3>
        <div className="treatment-box">
          <h4>💊 Opções de Primeira Linha:</h4>
          <ul>
            <li>Levetiracetam</li>
            <li>Lamotrigina</li>
            <li>Carbamazepina</li>
            <li>Oxcarbazepina</li>
          </ul>
        </div>
        <h3>Epilepsia Generalizada</h3>
        <div className="treatment-box">
          <h4>💊 Opções de Primeira Linha:</h4>
          <ul>
            <li>Valproato</li>
            <li>Levetiracetam</li>
            <li>Lamotrigina</li>
            <li>Topiramato</li>
          </ul>
        </div>
        <h3>Síndromes Epilépticas Específicas</h3>
        <table>
          <thead>
            <tr>
              <th>Síndrome</th>
              <th>Idade</th>
              <th>Tratamento Específico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Síndrome de West</td>
              <td>3-12 meses</td>
              <td>Vigabatrina, ACTH, Prednisolona</td>
            </tr>
            <tr>
              <td>Síndrome de Lennox-Gastaut</td>
              <td>1-8 anos</td>
              <td>Valproato, Lamotrigina, Rufinamida</td>
            </tr>
            <tr>
              <td>Epilepsia Mioclônica Juvenil</td>
              <td>12-18 anos</td>
              <td>Valproato, Levetiracetam</td>
            </tr>
          </tbody>
        </table>
        <h2>Monitoramento do Tratamento</h2>
        <h3>Avaliação Clínica Regular</h3>
        <ul>
          <li><strong>Controle das crises:</strong> Frequência, intensidade, duração</li>
          <li><strong>Efeitos colaterais:</strong> Identificação precoce</li>
          <li><strong>Desenvolvimento cognitivo:</strong> Função escolar</li>
          <li><strong>Qualidade de vida:</strong> Bem-estar geral</li>
        </ul>
        <h3>Exames Laboratoriais</h3>
        <div className="lab-monitoring">
          <h4>🔬 Monitoramento Necessário:</h4>
          <ul>
            <li><strong>Hemograma completo:</strong> Valproato, Lamotrigina</li>
            <li><strong>Função hepática:</strong> Valproato, Fenitoína</li>
            <li><strong>Função renal:</strong> Topiramato</li>
            <li><strong>Eletrólitos:</strong> Carbamazepina</li>
            <li><strong>Níveis séricos:</strong> Quando indicado</li>
          </ul>
        </div>
        <h2>Epilepsia Refratária</h2>
        <p>Quando as crises não respondem a 2 medicamentos adequados:</p>
        <h3>Avaliação Pré-Cirúrgica</h3>
        <ul>
          <li><strong>Vídeo-EEG:</strong> Localização do foco</li>
          <li><strong>Ressonância magnética:</strong> Lesões estruturais</li>
          <li><strong>PET/SPECT:</strong> Metabolismo cerebral</li>
          <li><strong>Avaliação neuropsicológica:</strong> Função cognitiva</li>
        </ul>
        <h3>Opções Cirúrgicas</h3>
        <div className="surgical-options">
          <h4>🔧 Tipos de Cirurgia:</h4>
          <ul>
            <li><strong>Ressecção focal:</strong> Remoção da área epileptogênica</li>
            <li><strong>Lobectomia temporal:</strong> Epilepsia do lobo temporal</li>
            <li><strong>Hemisferectomia:</strong> Casos graves unilaterais</li>
            <li><strong>Calosotomia:</strong> Crises de queda</li>
          </ul>
        </div>
        <h2>Tratamentos Alternativos</h2>
        <h3>Dieta Cetogênica</h3>
        <div className="diet-info">
          <h4>🥑 Características:</h4>
          <ul>
            <li><strong>Rica em gorduras (80-90%)</strong></li>
            <li><strong>Baixa em carboidratos (&lt;5%)</strong></li>
            <li><strong>Proteína moderada (10-15%)</strong></li>
            <li><strong>Supervisão médica obrigatória</strong></li>
          </ul>
          <h4>✅ Indicações:</h4>
          <ul>
            <li>Epilepsia refratária</li>
            <li>Síndrome de Lennox-Gastaut</li>
            <li>Deficiência de GLUT-1</li>
            <li>Síndrome de Dravet</li>
          </ul>
        </div>
        <h3>Estimulação do Nervo Vago (VNS)</h3>
        <ul>
          <li><strong>Dispositivo implantável</strong></li>
          <li><strong>Estimula nervo vago</strong></li>
          <li><strong>Reduz frequência das crises</strong></li>
          <li><strong>Melhora qualidade de vida</strong></li>
        </ul>
        <h2>Efeitos Colaterais e Manejo</h2>
        <table>
          <thead>
            <tr>
              <th>Efeito Colateral</th>
              <th>Medicamentos</th>
              <th>Manejo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sedação</td>
              <td>Maioria dos FAE</td>
              <td>Ajustar dose, mudar horário</td>
            </tr>
            <tr>
              <td>Ganho de peso</td>
              <td>Valproato, Gabapentina</td>
              <td>Dieta, exercício, trocar medicação</td>
            </tr>
            <tr>
              <td>Rash cutâneo</td>
              <td>Lamotrigina, Carbamazepina</td>
              <td>Descontinuar, antihistamínicos</td>
            </tr>
            <tr>
              <td>Problemas cognitivos</td>
              <td>Topiramato, Fenitoína</td>
              <td>Reduzir dose, trocar medicação</td>
            </tr>
          </tbody>
        </table>
        <h2>Aspectos Psicossociais</h2>
        <h3>Impacto na Família</h3>
        <ul>
          <li><strong>Ansiedade parental:</strong> Medo de crises</li>
          <li><strong>Superproteção:</strong> Limitação de atividades</li>
          <li><strong>Estresse financeiro:</strong> Custos do tratamento</li>
          <li><strong>Dinâmica familiar:</strong> Alterações nos papéis</li>
        </ul>
        <h3>Impacto na Criança</h3>
        <ul>
          <li><strong>Autoestima:</strong> Sentimento de diferença</li>
          <li><strong>Socialização:</strong> Dificuldades com pares</li>
          <li><strong>Desempenho escolar:</strong> Efeitos das crises e medicação</li>
          <li><strong>Independência:</strong> Limitações impostas</li>
        </ul>
        <h2>Prognóstico da Epilepsia Infantil</h2>
        <div className="prognosis-box">
          <h3>📈 Estatísticas Encorajadoras:</h3>
          <ul>
            <li><strong>70-80%</strong> das crianças ficam livres de crises</li>
            <li><strong>60-70%</strong> podem descontinuar medicação</li>
            <li><strong>Maioria</strong> tem desenvolvimento normal</li>
            <li><strong>Muitas</strong> superam a epilepsia na adolescência</li>
          </ul>
        </div>
        <h2>Quando Descontinuar Medicação</h2>
        <p>Considerar retirada após:</p>
        <ul>
          <li><strong>2-5 anos sem crises</strong></li>
          <li><strong>EEG normal ou muito melhorado</strong></li>
          <li><strong>Desenvolvimento normal</strong></li>
          <li><strong>Acordo familiar</strong></li>
        </ul>
        <h3>Processo de Retirada</h3>
        <ul>
          <li><strong>Redução gradual:</strong> 25% da dose a cada 2-4 semanas</li>
          <li><strong>Monitoramento rigoroso:</strong> Sinais de recidiva</li>
          <li><strong>Suporte familiar:</strong> Orientação contínua</li>
        </ul>
        <h2>Vida Normal com Epilepsia</h2>
        <p>Crianças com epilepsia bem controlada podem:</p>
        <ul>
          <li><strong>Frequentar escola regularmente</strong></li>
          <li><strong>Praticar esportes (com supervisão)</strong></li>
          <li><strong>Ter vida social ativa</strong></li>
          <li><strong>Desenvolver talentos e hobbies</strong></li>
          <li><strong>Ter perspectivas profissionais normais</strong></li>
        </ul>
        <div className="hope-message">
          <h3>💙 Mensagem de Esperança:</h3>
          <p>A epilepsia infantil não define o futuro da criança. Com tratamento adequado, a maioria das crianças pode ter uma vida plena e produtiva, livre de crises e limitações.</p>
        </div>
        <div className="cta-article">
          <h3>Precisa de Tratamento para Epilepsia?</h3>
          <p>Se seu filho foi diagnosticado com epilepsia ou você suspeita de crises, procure tratamento especializado. Como neuropediatra em Belo Horizonte, desenvolvo planos de tratamento personalizados para controle eficaz das crises.</p>
          <a href="/agendar-consulta" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default Article6Page; 