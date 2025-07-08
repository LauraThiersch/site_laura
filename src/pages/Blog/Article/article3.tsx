import React from 'react';
import './article.css';

const Article3Page: React.FC = () => {
  return (
    <article className="article-page">
      <h1>Epilepsia Infantil: Primeiros Socorros e Segurança</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Criança recebendo primeiros socorros para epilepsia"
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
        <span>9 min de leitura</span>
      </div>
      <div className="article-content">
        <p><strong>A epilepsia afeta aproximadamente 1% das crianças, e saber como agir durante uma crise pode salvar vidas.</strong> Como neuropediatra em Belo Horizonte, ensino regularmente pais e cuidadores sobre os primeiros socorros corretos. Este guia completo vai preparar você para situações de emergência.</p>
        <h2>O que é uma Crise Epiléptica?</h2>
        <p>Uma crise epiléptica é uma descarga elétrica anormal no cérebro que pode causar diferentes tipos de sintomas. Nem todas as crises são iguais - algumas são mais óbvias, outras podem passar despercebidas.</p>
        <h2>Tipos de Crises Epilépticas</h2>
        <h3>Crises Generalizadas</h3>
        <ul>
          <li><strong>Tônico-clônicas:</strong> Perda de consciência, rigidez e movimentos convulsivos</li>
          <li><strong>Ausências:</strong> "Desligamento" por alguns segundos</li>
          <li><strong>Mioclônicas:</strong> Movimentos bruscos e rápidos</li>
          <li><strong>Atônicas:</strong> Perda súbita do tônus muscular</li>
        </ul>
        <h3>Crises Focais</h3>
        <ul>
          <li><strong>Consciente:</strong> Movimentos involuntários, mas criança está acordada</li>
          <li><strong>Alteração da consciência:</strong> Comportamentos automáticos</li>
        </ul>
        <h2>Primeiros Socorros Durante uma Crise</h2>
        <div className="emergency-box">
          <h3>🚨 O QUE FAZER:</h3>
          <ol>
            <li><strong>Mantenha a calma</strong> - Sua tranquilidade é essencial</li>
            <li><strong>Proteja a criança:</strong> Remova objetos perigosos ao redor</li>
            <li><strong>Posicione-a de lado:</strong> Evita que engasgue com saliva</li>
            <li><strong>Proteja a cabeça:</strong> Coloque algo macio embaixo</li>
            <li><strong>Cronometre a crise:</strong> Anote duração e características</li>
            <li><strong>Permaneça próximo:</strong> Até a criança se recuperar</li>
          </ol>
        </div>
        <div className="warning-box">
          <h3>❌ O QUE NÃO FAZER:</h3>
          <ul>
            <li>Não tente conter os movimentos</li>
            <li>Não coloque objetos na boca</li>
            <li>Não dê água ou remédios</li>
            <li>Não sacuda a criança</li>
            <li>Não deixe a criança sozinha</li>
          </ul>
        </div>
        <h2>Quando Chamar o SAMU (192)</h2>
        <div className="alert-box">
          <h3>🚨 CHAME AJUDA IMEDIATAMENTE SE:</h3>
          <ul>
            <li>A crise dura mais de 5 minutos</li>
            <li>Há dificuldade para respirar após a crise</li>
            <li>A criança se machuca durante a crise</li>
            <li>Há múltiplas crises seguidas</li>
            <li>A criança não recupera a consciência</li>
            <li>É a primeira crise da criança</li>
          </ul>
        </div>
        <h2>Após a Crise: Cuidados Importantes</h2>
        <ul>
          <li><strong>Mantenha a criança deitada:</strong> Até se recuperar completamente</li>
          <li><strong>Verifique se há ferimentos:</strong> Observe cortes ou hematomas</li>
          <li><strong>Ofereça conforto:</strong> A criança pode estar confusa</li>
          <li><strong>Monitore sinais vitais:</strong> Respiração e consciência</li>
          <li><strong>Documente detalhes:</strong> Para relatar ao médico</li>
        </ul>
        <h2>Segurança no Dia a Dia</h2>
        <h3>Em Casa</h3>
        <ul>
          <li><strong>Banheiro:</strong> Supervisione banhos, evite trancar a porta</li>
          <li><strong>Cozinha:</strong> Cuidado com fogão e objetos cortantes</li>
          <li><strong>Quarto:</strong> Cama baixa, evite beliches</li>
          <li><strong>Escadas:</strong> Portões de segurança se necessário</li>
        </ul>
        <h3>Na Escola</h3>
        <ul>
          <li><strong>Informe a escola:</strong> Sobre a condição da criança</li>
          <li><strong>Treine professores:</strong> Primeiros socorros básicos</li>
          <li><strong>Tenha plano de emergência:</strong> Contatos e medicações</li>
          <li><strong>Evite isolamento:</strong> Criança deve participar de atividades</li>
        </ul>
        <h2>Medicação de Emergência</h2>
        <p>Algumas crianças precisam de medicação especial para crises prolongadas:</p>
        <table>
          <thead>
            <tr>
              <th>Medicação</th>
              <th>Forma</th>
              <th>Quando Usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Midazolam</td>
              <td>Spray nasal</td>
              <td>Crise &gt; 5 minutos</td>
            </tr>
            <tr>
              <td>Diazepam</td>
              <td>Gel retal</td>
              <td>Crise &gt; 5 minutos</td>
            </tr>
            <tr>
              <td>Lorazepam</td>
              <td>Comprimido</td>
              <td>Conforme orientação médica</td>
            </tr>
          </tbody>
        </table>
        <h2>Plano de Emergência Personalizado</h2>
        <p>Todo paciente com epilepsia deve ter um plano escrito:</p>
        <div className="plan-box">
          <h3>📋 Modelo de Plano de Emergência:</h3>
          <ul>
            <li><strong>Nome da criança:</strong> _________________</li>
            <li><strong>Tipo de crise:</strong> _________________</li>
            <li><strong>Duração típica:</strong> _________________</li>
            <li><strong>Medicação de emergência:</strong> _________________</li>
            <li><strong>Quando administrar:</strong> _________________</li>
            <li><strong>Contato médico:</strong> _________________</li>
            <li><strong>Contato dos pais:</strong> _________________</li>
          </ul>
        </div>
        <h2>Atividades Físicas e Esportes</h2>
        <p>Crianças com epilepsia podem e devem praticar esportes, mas com precauções:</p>
        <h3>✅ Atividades Recomendadas:</h3>
        <ul>
          <li>Natação (com supervisão)</li>
          <li>Caminhada e corrida</li>
          <li>Esportes em equipe</li>
          <li>Ciclismo (com capacete)</li>
        </ul>
        <h3>⚠️ Atividades que Requerem Cuidado:</h3>
        <ul>
          <li>Escalada (com equipamentos)</li>
          <li>Ginástica (com colchões)</li>
          <li>Natação (supervisão constante)</li>
          <li>Ciclismo (locais seguros)</li>
        </ul>
        <h2>Impacto Psicológico</h2>
        <p>A epilepsia pode afetar a autoestima da criança. É importante:</p>
        <ul>
          <li><strong>Promover independência:</strong> Dentro dos limites de segurança</li>
          <li><strong>Educar sobre a condição:</strong> Conhecimento reduz ansiedade</li>
          <li><strong>Buscar apoio psicológico:</strong> Se necessário</li>
          <li><strong>Conectar com outros:</strong> Grupos de apoio</li>
        </ul>
        <h2>Tecnologia e Epilepsia</h2>
        <p>Dispositivos modernos podem ajudar no controle:</p>
        <ul>
          <li><strong>Aplicativos:</strong> Para registrar crises</li>
          <li><strong>Dispositivos de alerta:</strong> Para detectar crises</li>
          <li><strong>Sensores:</strong> Para monitoramento noturno</li>
        </ul>
        <h2>Quando Procurar um Neuropediatra</h2>
        <div className="medical-box">
          <h3>🏥 Consulte um especialista se:</h3>
          <ul>
            <li>Primeira crise da criança</li>
            <li>Crises estão ficando mais frequentes</li>
            <li>Medicação não está controlando</li>
            <li>Efeitos colaterais da medicação</li>
            <li>Dúvidas sobre atividades permitidas</li>
          </ul>
        </div>
        <h2>Esperança e Qualidade de Vida</h2>
        <p>Com tratamento adequado, a maioria das crianças com epilepsia pode ter uma vida normal. O controle das crises permite que participem de todas as atividades típicas da infância.</p>
        <div className="cta-article">
          <h3>Precisa de Orientação Especializada?</h3>
          <p>Se seu filho tem epilepsia ou você suspeita de crises, procure avaliação médica. Como neuropediatra em Belo Horizonte, posso ajudar no diagnóstico e tratamento adequado.</p>
          <a href="/agendar-consulta" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default Article3Page; 