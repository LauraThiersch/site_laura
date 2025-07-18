import { siteConfig } from '../../siteConfig.js';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DoctoraliaReviews from '../../components/DoctoraliaReviews/DoctoraliaReviews';
import AdvancedSchema from '../../components/SchemaOrg/advancedSchema';
import Button from '../../components/Button/button';
import './epilepsia.css';

const EpilepsiaPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    telefone: '',
    email: '',
    observacoes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de agendar uma consulta para avaliação de Epilepsia:

*Dados da criança:*
Nome: ${formData.nome}
Idade: ${formData.idade} anos

*Contato:*
Telefone: ${formData.telefone}
Email: ${formData.email}

*Observações:*
${formData.observacoes || 'Não informado'}

*Origem:* Formulário da página Epilepsia`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>"Epilepsia Infantil em Belo Horizonte | Dra. Laura Thiersch"</title>
        <meta name="description" content="Tipos, primeiros socorros e tratamento da epilepsia infantil em BH. Dra. Laura Thiersch, neuropediatra com experiência em epilepsia infantil." />
        <meta name="keywords" content="Epilepsia infantil tratamento, neuropediatra BH, primeiros socorros epilepsia, Dra. Laura Thiersch, neurologista infantil Belo Horizonte" />
        <link rel="canonical" href={`${siteConfig.baseUrl}/epilepsia-infantil-bh`} />

      </Helmet>
      {/* Schema.org Avançado - Específico para Epilepsia */}
      <AdvancedSchema pageType="epilepsia" />
      <main className="epilepsia-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1>Epilepsia Infantil em Belo Horizonte</h1>
            <p className="hero-description">
              Diagnóstico especializado e tratamento eficaz da epilepsia infantil 
              com a Dra. Laura Thiersch, neuropediatra experiente em Belo Horizonte.
            </p>
          </div>
        </section>

        {/* Tipos de Epilepsia */}
        <section className="content-section">
          <div className="container">
            <h2>Tipos de Epilepsia Infantil</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  A epilepsia infantil pode se manifestar de diferentes formas, cada uma 
                  com características específicas e tratamentos adequados:
                </p>
                <h3>Epilepsia Focal (Parcial):</h3>
                <ul>
                  <li><strong>Crises focais simples:</strong> A criança permanece consciente, pode ter movimentos involuntários em uma parte do corpo</li>
                  <li><strong>Crises focais complexas:</strong> Perda de consciência parcial, comportamentos automáticos</li>
                  <li><strong>Crises focais com generalização secundária:</strong> Começam focais e se espalham para todo o corpo</li>
                </ul>
                <h3>Epilepsia Generalizada:</h3>
                <ul>
                  <li><strong>Crises de ausência:</strong> Breves momentos de "desligamento", comum em crianças</li>
                  <li><strong>Crises tônico-clônicas:</strong> Perda de consciência, contrações musculares, convulsões</li>
                  <li><strong>Crises mioclônicas:</strong> Movimentos bruscos e rápidos</li>
                  <li><strong>Crises atônicas:</strong> Perda súbita do tônus muscular</li>
                </ul>
                <h3>Síndromes Epilépticas Específicas:</h3>
                <ul>
                  <li><strong>Síndrome de West:</strong> Espasmos infantis, geralmente aparece antes dos 1 ano</li>
                  <li><strong>Síndrome de Lennox-Gastaut:</strong> Múltiplos tipos de crises, difícil controle</li>
                  <li><strong>Epilepsia Rolândica Benigna:</strong> Crises noturnas, geralmente benigna</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Primeiros Socorros */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Primeiros Socorros em Crises Epilépticas</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  Saber como agir durante uma crise epiléptica é fundamental para a segurança da criança:
                </p>
                <h3>O que FAZER durante uma crise:</h3>
                <ul>
                  <li><strong>Mantenha a calma:</strong> A maioria das crises dura menos de 2 minutos</li>
                  <li><strong>Proteja a criança:</strong> Afaste objetos perigosos, coloque algo macio sob a cabeça</li>
                  <li><strong>Deite a criança de lado:</strong> Posição lateral evita engasgo</li>
                  <li><strong>Libere as vias aéreas:</strong> Remova objetos da boca apenas se estiverem soltos</li>
                  <li><strong>Cronometre a crise:</strong> Anote o tempo de duração</li>
                  <li><strong>Permaneça ao lado:</strong> Não deixe a criança sozinha</li>
                </ul>
                <h3>O que NÃO FAZER:</h3>
                <ul>
                  <li><strong>Não segure a criança:</strong> Pode causar lesões</li>
                  <li><strong>Não coloque objetos na boca:</strong> Pode causar danos</li>
                  <li><strong>Não tente parar a crise:</strong> Deixe que termine naturalmente</li>
                  <li><strong>Não dê água ou medicamentos:</strong> Durante a crise</li>
                </ul>
                <h3>Quando procurar atendimento de emergência:</h3>
                <ul>
                  <li>Crise com duração superior a 5 minutos</li>
                  <li>Múltiplas crises seguidas sem recuperação</li>
                  <li>Dificuldade para respirar após a crise</li>
                  <li>Lesão durante a crise</li>
                  <li>Primeira crise da criança</li>
                </ul>
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
                  O tratamento da epilepsia infantil é individualizado e pode incluir diferentes abordagens:
                </p>
                <h3>Tratamento Medicamentoso:</h3>
                <ul>
                  <li><strong>Antiepilépticos:</strong> Carbamazepina, valproato, lamotrigina, levetiracetam</li>
                  <li><strong>Individualização:</strong> Escolha baseada no tipo de crise e perfil da criança</li>
                  <li><strong>Monitoramento:</strong> Ajuste de doses conforme resposta e efeitos colaterais</li>
                  <li><strong>Adesão:</strong> Fundamental para o sucesso do tratamento</li>
                </ul>
                <h3>Tratamento Não-Medicamentoso:</h3>
                <ul>
                  <li><strong>Dieta cetogênica:</strong> Para casos refratários, sob supervisão médica</li>
                  <li><strong>Estimulação do nervo vago:</strong> Em casos selecionados</li>
                  <li><strong>Cirurgia:</strong> Para casos específicos com foco epiléptico bem definido</li>
                </ul>
                <h3>Acompanhamento Multidisciplinar:</h3>
                <ul>
                  <li><strong>Neuropediatra:</strong> Controle das crises e ajustes medicamentosos</li>
                  <li><strong>Psicólogo:</strong> Suporte emocional para criança e família</li>
                  <li><strong>Fonoaudiólogo:</strong> Se houver comprometimento da fala</li>
                  <li><strong>Fisioterapeuta:</strong> Se houver comprometimento motor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Orientações de Segurança */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Orientações de Segurança</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  Crianças com epilepsia podem ter uma vida normal com algumas precauções:
                </p>
                <h3>Atividades Seguras:</h3>
                <ul>
                  <li><strong>Esportes:</strong> Natação com supervisão, caminhadas, ciclismo com capacete</li>
                  <li><strong>Escola:</strong> Informar professores sobre a condição e primeiros socorros</li>
                  <li><strong>Banho:</strong> Sempre com supervisão, preferir chuveiro</li>
                  <li><strong>Dormir:</strong> Evitar travesseiros muito altos, manter ambiente seguro</li>
                </ul>
                <h3>Precauções Importantes:</h3>
                <ul>
                  <li><strong>Medicamentos:</strong> Nunca interromper sem orientação médica</li>
                  <li><strong>Consultas:</strong> Manter acompanhamento regular</li>
                  <li><strong>Exames:</strong> Realizar exames de controle conforme solicitado</li>
                  <li><strong>Emergências:</strong> Ter contatos de emergência sempre à mão</li>
                </ul>
                <h3>Qualidade de Vida:</h3>
                <ul>
                  <li><strong>Sono adequado:</strong> Fundamental para controle das crises</li>
                  <li><strong>Alimentação regular:</strong> Evitar longos períodos sem comer</li>
                  <li><strong>Atividade física:</strong> Beneficial para o controle da epilepsia</li>
                  <li><strong>Vida social:</strong> Incentivar participação em atividades normais</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações do Doctoralia */}
        <section className="content-section">
          <div className="container">
            <div className="section-header">
              <h2>Avaliações de Pais</h2>
              <p>
                Confira as experiências reais de famílias que consultaram com a Dra. Laura Thiersch 
                para diagnóstico e tratamento de epilepsia.
              </p>
            </div>
            
            <DoctoraliaReviews 
              maxReviews={4}
              showRating={true}
              showDate={true}
              className="epilepsia-reviews"
            />
            
            <div className="reviews-cta">
              <p>Quer compartilhar sua experiência?</p>
              <Link to="/avaliacoes" className="btn-secondary">
                Deixar Avaliação
              </Link>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="content-section alt-bg">
          <div className="container">
            <h2>Agende uma Avaliação</h2>
            <div className="contact-form-container">
              <p>
                Se seu filho apresenta crises epilépticas ou você suspeita de epilepsia, 
                agende uma consulta para avaliação especializada.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo da criança:<span className="required-star">*</span></label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    value={formData.nome}
                    onChange={handleChange}
                    required 
                    aria-required="true"
                    aria-label="Nome completo da criança"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="idade">Idade:<span className="required-star">*</span></label>
                  <input 
                    type="number" 
                    id="idade" 
                    name="idade" 
                    min="0" 
                    max="18" 
                    value={formData.idade}
                    onChange={handleChange}
                    required 
                    aria-required="true"
                    aria-label="Idade da criança"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone para contato:<span className="required-star">*</span></label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    value={formData.telefone}
                    onChange={handleChange}
                    required 
                    pattern="[0-9]{2}[0-9]{4,5}[0-9]{4}"
                    aria-required="true"
                    aria-label="Telefone para contato"
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail:<span className="required-star">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    aria-required="true"
                    aria-label="Endereço de e-mail"
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="observacoes">Observações sobre as crises ou sintomas:</label>
                  <textarea 
                    id="observacoes" 
                    name="observacoes" 
                    rows={4}
                    value={formData.observacoes}
                    onChange={handleChange}
                    aria-label="Observações sobre as crises ou sintomas"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  variant="appointment"
                  ariaLabel="Enviar dados para WhatsApp e agendar consulta de Epilepsia"
                  title="Clique para enviar dados via WhatsApp"
                  trackingCategory="Conversao_Epilepsia"
                  trackingAction="Clique_Formulario_Epilepsia"
                  trackingLabel="Formulario_Epilepsia_WhatsApp"
                  conversionType="whatsapp"
                >
                  Enviar via WhatsApp
                </Button>
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
              <Link to="/tdah-tratamento-bh" className="link-card">
                <h3>Tratamento TDAH</h3>
                <p>Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade</p>
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

export default EpilepsiaPage; 