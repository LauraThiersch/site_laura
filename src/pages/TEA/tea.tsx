import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AdvancedSchema from '../../components/SchemaOrg/advancedSchema';
import './tea.css';

const TEAPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tratamento TEA em Belo Horizonte | Dra. Laura Thiersch</title>
        <meta name="description" content="Sinais precoces, diagnóstico e tratamento do Transtorno do Espectro Autista (TEA) em BH. Dra. Laura Thiersch, neuropediatra especialista em autismo infantil." />
        <meta name="keywords" content="TEA Belo Horizonte, Autismo diagnóstico BH, neuropediatra BH, tratamento autismo infantil, Dra. Laura Thiersch" />
        <link rel="canonical" href="https://www.laurathiersch.com.br/tea-tratamento-bh" />

      </Helmet>
      {/* 🎯 Schema.org Avançado - Específico para TEA */}
      <AdvancedSchema pageType="tea" />
      <main className="tea-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1>Tratamento TEA em Belo Horizonte</h1>
            <p className="hero-description">
              Diagnóstico precoce e tratamento especializado do Transtorno do Espectro Autista (TEA) 
              com a Dra. Laura Thiersch, neuropediatra experiente em Belo Horizonte.
            </p>
          </div>
        </section>

        {/* Sinais Precoces */}
        <section className="content-section">
          <div className="container">
            <h2>Sinais Precoces de TEA</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O diagnóstico precoce do TEA é fundamental para o melhor desenvolvimento da criança. 
                  Alguns sinais podem ser observados desde os primeiros meses de vida:
                </p>
                <ul>
                  <li><strong>0-12 meses:</strong> Falta de contato visual, não responde ao nome, não sorri socialmente</li>
                  <li><strong>12-24 meses:</strong> Não aponta para objetos, não imita gestos, atraso na fala</li>
                  <li><strong>2-3 anos:</strong> Interesse restrito por brinquedos, movimentos repetitivos, dificuldade com mudanças</li>
                  <li><strong>3+ anos:</strong> Dificuldade na interação social, linguagem limitada, comportamentos estereotipados</li>
                </ul>
                <p>
                  É importante ressaltar que cada criança é única e pode apresentar diferentes 
                  combinações desses sinais. A avaliação especializada é essencial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Diagnóstico */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Processo de Diagnóstico</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O diagnóstico do TEA é realizado através de uma avaliação completa e multidisciplinar:
                </p>
                <ol>
                  <li><strong>Entrevista com os pais:</strong> Histórico detalhado do desenvolvimento da criança</li>
                  <li><strong>Avaliação clínica:</strong> Observação do comportamento e interação social</li>
                  <li><strong>Instrumentos padronizados:</strong> ADOS-2, ADI-R, CARS-2 para confirmação diagnóstica</li>
                  <li><strong>Avaliação complementar:</strong> Exames neurológicos quando necessário</li>
                  <li><strong>Encaminhamentos:</strong> Para equipe multidisciplinar (fonoaudiologia, terapia ocupacional, psicologia)</li>
                </ol>
                <p>
                  O diagnóstico é baseado nos critérios do DSM-5 e deve ser realizado por profissionais 
                  especializados em neurodesenvolvimento infantil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamentos Disponíveis */}
        <section className="content-section">
          <div className="container">
            <h2>Tratamentos Disponíveis</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  O tratamento do TEA é individualizado e pode incluir diferentes abordagens:
                </p>
                <ul>
                  <li><strong>Intervenção Comportamental:</strong> ABA (Applied Behavior Analysis) para desenvolvimento de habilidades</li>
                  <li><strong>Terapia Ocupacional:</strong> Melhora da coordenação motora e atividades da vida diária</li>
                  <li><strong>Fonoaudiologia:</strong> Desenvolvimento da comunicação e linguagem</li>
                  <li><strong>Psicologia:</strong> Suporte emocional e desenvolvimento social</li>
                  <li><strong>Intervenção Medicamentosa:</strong> Quando necessário para sintomas específicos</li>
                  <li><strong>Orient familiar:</strong> Suporte e orientações para pais e cuidadores</li>
                </ul>
                <p>
                  O sucesso do tratamento depende do trabalho em equipe e da participação ativa da família.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Depoimentos de Pais</h2>
            <div className="testimonials-grid">
              <blockquote className="testimonial">
                <p>
                  "A Dra. Laura foi fundamental no diagnóstico precoce do nosso filho. 
                  Sua dedicação e conhecimento nos deram esperança e direção para o tratamento. 
                  Hoje ele está muito melhor e conseguindo se desenvolver."
                </p>
                <cite>- Mãe de João, 5 anos</cite>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  "O acompanhamento com a Dra. Laura mudou nossa vida. Ela não só diagnosticou 
                  o TEA da nossa filha, mas nos orientou sobre os melhores tratamentos e 
                  como lidar com as dificuldades do dia a dia."
                </p>
                <cite>- Pais de Maria, 7 anos</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="content-section">
          <div className="container">
            <h2>Agende uma Avaliação</h2>
            <div className="contact-form-container">
              <p>
                Se você suspeita que seu filho pode ter TEA ou já tem o diagnóstico, 
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
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Outras Especialidades</h2>
            <div className="links-grid">
              <Link to="/tdah-tratamento-bh" className="link-card">
                <h3>Tratamento TDAH</h3>
                <p>Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade</p>
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

export default TEAPage; 