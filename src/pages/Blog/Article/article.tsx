import React from 'react';
import { useParams } from 'react-router-dom';
import './article.css';

const ArticlePage: React.FC = () => {
  // No futuro, pode-se usar o slug para buscar o artigo correto
  // const { slug } = useParams();

  return (
    <article className="article-page">
      <h1>Sinais Precoces de TEA: O que Observar nos Primeiros Anos</h1>
      <img
        src="/images/blog/default-article.jpg"
        alt="Bebê sendo examinado por neuropediatra, representando sinais precoces de TEA"
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
        <p><strong>O Transtorno do Espectro Autista (TEA) pode ser identificado nos primeiros meses de vida através de sinais específicos que os pais devem conhecer.</strong> Como neuropediatra em Belo Horizonte, atendo diariamente famílias preocupadas com o desenvolvimento de seus filhos, e a identificação precoce é fundamental para o sucesso do tratamento.</p>
        <h2>Por que a Identificação Precoce é Crucial?</h2>
        <p>A detecção precoce do TEA permite iniciar intervenções terapêuticas ainda nos primeiros anos de vida, quando o cérebro da criança apresenta maior plasticidade. Estudos mostram que crianças diagnosticadas e tratadas antes dos 3 anos têm melhores prognósticos de desenvolvimento.</p>
        <h2>Principais Sinais de TEA por Faixa Etária</h2>
        <h3>0 a 6 meses</h3>
        <ul>
          <li><strong>Contato visual limitado:</strong> Bebê evita ou tem dificuldade para manter o olhar</li>
          <li><strong>Sorriso social ausente:</strong> Não esboça sorriso em resposta aos pais</li>
          <li><strong>Resposta reduzida ao nome:</strong> Não reage quando chamado</li>
          <li><strong>Pouca expressão facial:</strong> Rosto inexpressivo ou pouco responsivo</li>
        </ul>
        <h3>6 a 12 meses</h3>
        <ul>
          <li><strong>Ausência de balbucios:</strong> Não faz sons ou balbucios típicos</li>
          <li><strong>Não imita gestos:</strong> Não copia movimentos simples como "tchau"</li>
          <li><strong>Pouco interesse em brincadeiras sociais:</strong> Não gosta de "esconde-esconde"</li>
          <li><strong>Movimentos repetitivos:</strong> Balançar as mãos ou corpo</li>
        </ul>
        <h3>12 a 24 meses</h3>
        <ul>
          <li><strong>Atraso na fala:</strong> Não fala palavras simples até os 16 meses</li>
          <li><strong>Não aponta para objetos:</strong> Ausência de gesto de apontar</li>
          <li><strong>Brincadeiras repetitivas:</strong> Alinha objetos ou gira brinquedos</li>
          <li><strong>Dificuldade com mudanças:</strong> Angústia com alterações na rotina</li>
        </ul>
        <h2>Sinais de Alerta que Requerem Avaliação Imediata</h2>
        <div className="alert-box">
          <h3>⚠️ Procure um neuropediatra se a criança:</h3>
          <ul>
            <li>Não sorri socialmente aos 6 meses</li>
            <li>Não fala palavras simples aos 16 meses</li>
            <li>Não faz frases de 2 palavras aos 24 meses</li>
            <li>Perdeu habilidades que já havia adquirido</li>
            <li>Não responde ao nome aos 12 meses</li>
          </ul>
        </div>
        <h2>Diferenças entre TEA e Desenvolvimento Típico</h2>
        <p>É importante distinguir os sinais de TEA de variações normais do desenvolvimento. Cada criança tem seu próprio ritmo, mas certos marcos são universais:</p>
        <table>
          <thead>
            <tr>
              <th>Idade</th>
              <th>Desenvolvimento Típico</th>
              <th>Sinais de TEA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 meses</td>
              <td>Sorriso social, contato visual</td>
              <td>Pouco contato visual, expressão limitada</td>
            </tr>
            <tr>
              <td>12 meses</td>
              <td>Aponta, imita, balbucia</td>
              <td>Não aponta, não imita, pouco balbucio</td>
            </tr>
            <tr>
              <td>18 meses</td>
              <td>Primeiras palavras, jogo simbólico</td>
              <td>Atraso na fala, brincadeiras repetitivas</td>
            </tr>
          </tbody>
        </table>
        <h2>Como Buscar Ajuda em Belo Horizonte</h2>
        <p>Se você identificou alguns desses sinais em seu filho, é fundamental buscar avaliação especializada. Como neuropediatra em BH, recomendo:</p>
        <ol>
          <li><strong>Não espere "para ver se melhora":</strong> A intervenção precoce é mais eficaz</li>
          <li><strong>Procure um neuropediatra especializado:</strong> Profissional com experiência em TEA</li>
          <li><strong>Documente comportamentos:</strong> Filme momentos do dia a dia da criança</li>
          <li><strong>Prepare informações:</strong> Histórico da gravidez, parto e desenvolvimento</li>
        </ol>
        <h2>O Processo de Avaliação</h2>
        <p>A avaliação para TEA em meu consultório em Belo Horizonte inclui:</p>
        <ul>
          <li><strong>Anamnese detalhada:</strong> Histórico completo da criança e família</li>
          <li><strong>Observação clínica:</strong> Avaliação do comportamento e interação</li>
          <li><strong>Aplicação de escalas:</strong> CARS, ADOS, M-CHAT quando apropriado</li>
          <li><strong>Avaliação multidisciplinar:</strong> Encaminhamento para outros profissionais se necessário</li>
        </ul>
        <h2>Esperança e Perspectivas</h2>
        <p>Um diagnóstico precoce de TEA não é motivo para desespero. Com o tratamento adequado, as crianças podem desenvolver habilidades importantes e ter uma qualidade de vida excelente. O acompanhamento especializado e o suporte familiar são fundamentais nesse processo.</p>
        <div className="cta-article">
          <h3>Precisa de uma Avaliação Especializada?</h3>
          <p>Se você reconheceu alguns desses sinais em seu filho, não hesite em buscar ajuda. Como neuropediatra em Belo Horizonte, estou aqui para orientar e apoiar sua família nesse processo.</p>
          <a href="/agendar-consulta" className="btn-whatsapp">Agendar Consulta</a>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage; 