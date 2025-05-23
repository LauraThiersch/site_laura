import React from 'react';
import './sobre.css';
import Button from '../../components/Button/button';
import doctorImage from '../../assets/images/dra-bruna-vilela.png';

const Sobre: React.FC = () => {
  return (
    <div className="sobre-page">
      {/* Seção Hero */}
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">Sobre a Dra. Bruna Vilela</h1>
          <div className="sobre-hero-content">
            <div className="sobre-hero-image">
              <img src={doctorImage} alt="Dra. Bruna Vilela - Neurologista Infantil" />
            </div>
            <div className="sobre-hero-text">
              <h2>Neurologista Infantil dedicada ao cuidado das crianças</h2>
              <p>
                Dra. Bruna Vilela sempre soube que seu coração pertencia às crianças e suas famílias. 
                Desde a infância, ela se encantar com o universo infantil a guiou para a Medicina, 
                onde se formou em 2019 pela Universidade Federal de Juiz de Fora.
              </p>
              <Button 
                variant="appointment" 
                href="https://wa.me/XXXXXXXXXXX"
              >
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Biografia */}
      <section className="biografia-section">
        <div className="container">
          <h2 className="section-title">Biografia</h2>
          <div className="biografia-content">
            <p>
              Dra. Bruna Vilela é médica formada pela Universidade Federal de Juiz de Fora (UFJF) em 2019. 
              Após sua formação, dedicou-se à especialização em Pediatria, concluindo sua residência no 
              Hospital Infantil João Paulo II, em Belo Horizonte.
            </p>
            <p>
              Movida por sua paixão em compreender o desenvolvimento neurológico infantil, seguiu para a 
              especialização em Neurologia Pediátrica, também no Hospital Infantil João Paulo II, referência 
              em doenças raras em Minas Gerais.
            </p>
            <p>
              Durante sua formação, participou de diversos congressos e cursos de atualização, sempre 
              buscando aprimorar seus conhecimentos para oferecer o melhor atendimento possível aos seus 
              pequenos pacientes.
            </p>
            <p>
              Atualmente, dedica-se ao atendimento em consultório, onde aplica uma abordagem humanizada 
              e individualizada para cada criança, considerando não apenas os aspectos clínicos, mas também 
              o contexto familiar e social em que está inserida.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Visão e Missão */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-box">
              <h2>Visão</h2>
              <p>
                Ser referência em Neurologia Pediátrica, oferecendo atendimento de excelência e 
                contribuindo para o desenvolvimento saudável das crianças, através de diagnósticos 
                precisos e tratamentos personalizados.
              </p>
            </div>
            <div className="mission-box">
              <h2>Missão</h2>
              <p>
                Proporcionar cuidado neurológico infantil de qualidade, com empatia e dedicação, 
                buscando sempre o bem-estar das crianças e o apoio às suas famílias, através de 
                uma abordagem humanizada e baseada nas melhores evidências científicas.
              </p>
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
              A Neurologia Pediátrica é uma especialidade médica dedicada ao diagnóstico e tratamento 
              de condições que afetam o sistema nervoso das crianças, desde o nascimento até a adolescência.
            </p>
            <p>
              O sistema nervoso infantil está em constante desenvolvimento, e qualquer alteração pode 
              impactar significativamente o futuro da criança. Por isso, o acompanhamento com um 
              neuropediatra é fundamental para:
            </p>
            <ul className="importance-list">
              <li>Diagnosticar precocemente distúrbios neurológicos</li>
              <li>Acompanhar o desenvolvimento neuropsicomotor</li>
              <li>Tratar condições como epilepsia, cefaleia, transtornos do neurodesenvolvimento</li>
              <li>Orientar famílias sobre o manejo de condições neurológicas</li>
              <li>Trabalhar em conjunto com outros profissionais para uma abordagem multidisciplinar</li>
            </ul>
            <p>
              Com um olhar atento e carinhoso, Dra. Bruna se dedica a oferecer cuidados de excelência, 
              combinando seu amor pela medicina e seu compromisso em proporcionar o melhor para suas 
              crianças e suas famílias.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Agende uma consulta com a Dra. Bruna Vilela</h2>
          <p>Proporcione ao seu filho um cuidado neurológico especializado e humanizado.</p>
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

export default Sobre;
