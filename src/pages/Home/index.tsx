import React from 'react';
import './styles.css';
import Button from '../../components/Button';
import FAQ from '../../components/FAQ';
import doctorImage from '../../assets/images/dra-bruna-vilela.png'; // Certifique-se de ter esta imagem

const Home: React.FC = () => {
  // Dados para o FAQ
  const faqItems = [
    {
      question: "Como devo me preparar para a consulta?",
      answer: "Para a consulta, traga todos os exames anteriores, relatórios escolares, e uma lista de medicamentos que a criança utiliza. É importante também anotar os principais sintomas e preocupações para discutir durante o atendimento."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer: "O agendamento é feito diretamente pelo WhatsApp. Basta clicar no botão 'Agende sua Consulta' e você será direcionado para iniciar uma conversa, onde nossa equipe irá auxiliá-lo com datas e horários disponíveis."
    },
    {
      question: "Qual a política de cancelamento?",
      answer: "Pedimos que cancelamentos sejam feitos com pelo menos 24 horas de antecedência. Isso nos permite oferecer o horário a outro paciente que possa estar precisando de atendimento urgente."
    },
    {
      question: "A Dra. Bruna oferece consultas por telemedicina?",
      answer: "Sim, oferecemos consultas por telemedicina para casos de retorno e algumas avaliações iniciais. Entre em contato para verificar se o seu caso é elegível para atendimento online."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamentos em dinheiro, PIX, cartões de débito e crédito. Também trabalhamos com os principais convênios médicos. Consulte-nos sobre seu plano específico."
    }
  ];

  return (
    <div className="home-page">
      {/* Seção Hero */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Dra. Bruna Vilela</h1>
            <h2>Neurologista Infantil</h2>
            <p>
              Cuidado especializado e atencioso para o desenvolvimento neurológico do seu filho.
            </p>
            <Button 
              variant="appointment" 
              href="https://wa.me/XXXXXXXXXXX"
            >
              Agende sua Consulta
            </Button>
          </div>
          <div className="hero-image">
            <img src={doctorImage} alt="Dra. Bruna Vilela - Neurologista Infantil" />
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Sobre a Dra. Bruna</h2>
          <div className="about-content">
            <p>
              Dra. Bruna Vilela sempre soube que seu coração pertencia às crianças e suas famílias. 
              Desde a infância, ela se encantar com o universo infantil a guiou para a Medicina, 
              onde se formou em 2019 pela Universidade Federal de Juiz de Fora.
            </p>
            <p>
              Movida por sua paixão por ajudar e entender os pequenos pacientes, Dra. Bruna se 
              especializou em Pediatria e Neurologia Pediátrica, concluindo suas residências no 
              renomado Hospital Infantil João Paulo II, referência em doenças raras em Minas Gerais.
            </p>
            <Button 
              variant="secondary" 
              href="/sobre"
            >
              Conheça mais
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Diferenciais */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Nossos Diferenciais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Atendimento Personalizado</h3>
              <p>Cada criança é única e merece um olhar atento às suas necessidades específicas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3>Abordagem Familiar</h3>
              <p>Envolvemos a família no processo de diagnóstico e tratamento para melhores resultados.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Educação Contínua</h3>
              <p>Constante atualização nas mais recentes pesquisas e tratamentos em Neurologia Infantil.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Cuidado Acolhedor</h3>
              <p>Ambiente acolhedor e adaptado para que as crianças se sintam seguras e confortáveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Importância da Neuropediatria */}
      <section className="importance-section">
        <div className="container">
          <h2 className="section-title">A Importância da Neuropediatria</h2>
          <div className="importance-content">
            <p>
              A Neurologia Pediátrica é fundamental para o diagnóstico e tratamento de condições que 
              afetam o sistema nervoso das crianças, desde o nascimento até a adolescência.
            </p>
            <p>
              Um acompanhamento neurológico adequado pode fazer toda a diferença no desenvolvimento 
              infantil, permitindo intervenções precoces que maximizam o potencial de cada criança.
            </p>
            <p>
              Com um olhar atento e carinhoso, Dra. Bruna se dedica a oferecer cuidados de excelência, 
              combinando seu amor pela medicina e seu compromisso em proporcionar o melhor para suas 
              crianças e suas famílias.
            </p>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <FAQ items={faqItems} />

      {/* Seção CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Você está convidado a conhecer o consultório da Dra. Bruna</h2>
          <p>Onde compromisso, paixão e cuidado transformam a saúde das crianças.</p>
          <Button 
            variant="appointment" 
            href="https://wa.me/XXXXXXXXXXX"
          >
            Agende sua consulta
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
