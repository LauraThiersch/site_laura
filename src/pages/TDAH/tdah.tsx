import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AdvancedSchema from '../../components/SchemaOrg/advancedSchema';
import './tdah.css';

const TDAHPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tratamento TDAH em Belo Horizonte | Dra. Laura Thiersch</title>
        <meta name="description" content="Sintomas, diagnóstico e tratamento do TDAH em BH. Dra. Laura Thiersch, neuropediatra especialista em TDAH infantil." />
        <meta name="keywords" content="TDAH crianças BH, diagnóstico TDAH Belo Horizonte, neuropediatra BH, tratamento TDAH infantil, Dra. Laura Thiersch" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/tdah-tratamento-bh" />

      </Helmet>
      {/* 🎯 Schema.org Avançado - Específico para TDAH */}
      <AdvancedSchema pageType="tdah" />
      <main className="tdah-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1>Tratamento TDAH em Belo Horizonte</h1>
            <p className="hero-description">
              Diagnóstico especializado e tratamento eficaz do Transtorno do Déficit de Atenção 
              e Hiperatividade (TDAH) com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte.
            </p>
          </div>
        </section>

        {/* Sintomas de TDAH */}
        <section className="content-section">
          <div className="container">
            <h2>Sintomas de TDAH</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O TDAH é caracterizado por três grupos principais de sintomas que podem 
                  se manifestar de diferentes formas em cada criança:
                </p>
                <h3>Sintomas de Desatenção:</h3>
                <ul>
                  <li>Dificuldade para manter a atenção em tarefas ou atividades</li>
                  <li>Parece não escutar quando falam diretamente com ela</li>
                  <li>Dificuldade para seguir instruções e completar tarefas</li>
                  <li>Evita ou reluta em se envolver em tarefas que exigem esforço mental</li>
                  <li>Perde objetos necessários para atividades</li>
                  <li>Distrai-se facilmente com estímulos externos</li>
                </ul>
                <h3>Sintomas de Hiperatividade:</h3>
                <ul>
                  <li>Mexe as mãos ou pés ou se remexe na cadeira</li>
                  <li>Levanta-se da cadeira em situações onde deveria permanecer sentado</li>
                  <li>Corre ou escala em situações inadequadas</li>
                  <li>Dificuldade para brincar ou se envolver em atividades de lazer silenciosamente</li>
                  <li>Fala excessivamente</li>
                </ul>
                <h3>Sintomas de Impulsividade:</h3>
                <ul>
                  <li>Dá respostas precipitadas antes das perguntas serem completadas</li>
                  <li>Dificuldade para aguardar sua vez</li>
                  <li>Interrompe ou se intromete em conversas ou jogos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico Diferencial */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Diagnóstico Diferencial</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O diagnóstico do TDAH requer uma avaliação cuidadosa, pois muitos sintomas 
                  podem ser confundidos com outras condições:
                </p>
                <ul>
                  <li><strong>Problemas de sono:</strong> Crianças com sono inadequado podem apresentar sintomas similares</li>
                  <li><strong>Ansiedade:</strong> Pode causar dificuldade de concentração e inquietação</li>
                  <li><strong>Depressão:</strong> Pode afetar a atenção e motivação</li>
                  <li><strong>Dificuldades de aprendizagem:</strong> Podem ser confundidas com desatenção</li>
                  <li><strong>Problemas auditivos:</strong> Podem simular desatenção</li>
                  <li><strong>Condições médicas:</strong> Como problemas de tireoide ou deficiências nutricionais</li>
                </ul>
                <p>
                  Por isso, é fundamental uma avaliação completa que inclua história clínica 
                  detalhada, observação comportamental e, quando necessário, exames complementares.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Abordagens Terapêuticas */}
        <section className="content-section">
          <div className="container">
            <h2>Abordagens Terapêuticas</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O tratamento do TDAH é multimodal e deve ser individualizado para cada criança:
                </p>
                <h3>Intervenção Comportamental:</h3>
                <ul>
                  <li><strong>Terapia Cognitivo-Comportamental:</strong> Desenvolve estratégias de organização e autocontrole</li>
                  <li><strong>Treinamento de Pais:</strong> Orientações para manejo comportamental em casa</li>
                  <li><strong>Intervenção Escolar:</strong> Adaptações e estratégias para o ambiente escolar</li>
                </ul>
                <h3>Intervenção Medicamentosa:</h3>
                <ul>
                  <li><strong>Estimulantes:</strong> Metilfenidato e anfetaminas são os mais utilizados</li>
                  <li><strong>Não-estimulantes:</strong> Atomoxetina e guanfacina como alternativas</li>
                  <li><strong>Individualização:</strong> Cada criança responde diferentemente aos medicamentos</li>
                </ul>
                <h3>Intervenções Complementares:</h3>
                <ul>
                  <li><strong>Atividade física regular:</strong> Ajuda no controle da hiperatividade</li>
                  <li><strong>Hábitos de sono adequados:</strong> Fundamental para o controle dos sintomas</li>
                  <li><strong>Alimentação balanceada:</strong> Evita picos de açúcar que podem piorar os sintomas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Orientações para Pais */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Orientações para Pais</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O suporte da família é fundamental no tratamento do TDAH. Aqui estão algumas 
                  orientações importantes:
                </p>
                <ul>
                  <li><strong>Estabeleça rotinas:</strong> Crianças com TDAH se beneficiam muito de rotinas previsíveis</li>
                  <li><strong>Use comandos claros e diretos:</strong> Evite instruções longas e complexas</li>
                  <li><strong>Crie um ambiente organizado:</strong> Reduza distrações no ambiente de estudo</li>
                  <li><strong>Recompense comportamentos positivos:</strong> Use reforço positivo frequentemente</li>
                  <li><strong>Mantenha comunicação com a escola:</strong> Trabalhe em parceria com professores</li>
                  <li><strong>Cuide de si mesmo:</strong> Pais também precisam de suporte e descanso</li>
                  <li><strong>Mantenha expectativas realistas:</strong> Cada criança tem seu ritmo de desenvolvimento</li>
                </ul>
                <p>
                  Lembre-se: o TDAH não é uma falha na educação ou falta de limites. 
                  É uma condição neurológica que pode ser tratada com sucesso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="content-section">
          <div className="container">
            <h2>Depoimentos de Pais</h2>
            <div className="testimonials-grid">
              <blockquote className="testimonial">
                <p>
                  "O diagnóstico do TDAH do nosso filho pela Dra. Laura foi um divisor de águas. 
                  Com o tratamento adequado, ele melhorou muito na escola e em casa. 
                  Hoje ele consegue se concentrar e completar suas tarefas."
                </p>
                <cite>- Pais de Pedro, 9 anos</cite>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  "A Dra. Laura nos orientou sobre como lidar com a hiperatividade da nossa filha. 
                  As estratégias que ela nos passou funcionaram muito bem. 
                  Hoje nossa filha está muito mais tranquila e focada."
                </p>
                <cite>- Mãe de Ana, 8 anos</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Agende uma Avaliação</h2>
            <div className="contact-form-container">
              <p>
                Se você suspeita que seu filho pode ter TDAH ou já tem o diagnóstico, 
                agende uma consulta para avaliação especializada.
              </p>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo da criança:</label>
                  <input type="text" id="nome" name="nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="idade">Idade:</label>
                  <input type="number" id="idade" name="idade" min="0" max="18" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone para contato:</label>
                  <input type="tel" id="telefone" name="telefone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="observacoes">Observações ou sintomas observados:</label>
                  <textarea id="observacoes" name="observacoes" rows={4}></textarea>
                </div>
                <button type="submit" className="btn-appointment">
                  Solicitar Agendamento
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Links Internos */}
        <section className="content-section">
          <div className="container">
            <h2>Outras Especialidades</h2>
            <div className="links-grid">
              <Link to="/tea-tratamento-bh" className="link-card">
                <h3>Tratamento TEA</h3>
                <p>Diagnóstico e tratamento do Transtorno do Espectro Autista</p>
              </Link>
              <Link to="/epilepsia-infantil-bh" className="link-card">
                <h3>Epilepsia Infantil</h3>
                <p>Tratamento especializado para epilepsia em crianças</p>
              </Link>
              <Link to="/atendimentos" className="link-card">
                <h3>Todos os Atendimentos</h3>
                <p>Conheça todos os serviços oferecidos pela Dra. Laura Thiersch</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TDAHPage; 