import React from 'react';
import './styles.css';
import Button from '../../components/Button';

interface TestimonialProps {
  name: string;
  relation: string;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, relation, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"{text}"</p>
      </div>
      <div className="testimonial-author">
        <p><strong>{name}</strong></p>
        <p>{relation}</p>
      </div>
    </div>
  );
};

const Atendimentos: React.FC = () => {
  // Dados para os depoimentos
  const testimonials = [
    {
      name: "Maria Silva",
      relation: "Mãe do Pedro, 7 anos",
      text: "A Dra. Bruna foi fundamental no diagnóstico e tratamento do meu filho. Sua abordagem carinhosa fez toda a diferença para que ele se sentisse confortável durante as consultas."
    },
    {
      name: "João Pereira",
      relation: "Pai da Laura, 5 anos",
      text: "Estamos muito satisfeitos com o atendimento da Dra. Bruna. Ela explica tudo detalhadamente e sempre está disponível para esclarecer nossas dúvidas. Recomendo a todos!"
    },
    {
      name: "Ana Oliveira",
      relation: "Mãe do Lucas, 10 anos",
      text: "Depois de passar por vários médicos, finalmente encontramos a Dra. Bruna. Sua dedicação e conhecimento nos trouxeram segurança e esperança para o tratamento do nosso filho."
    }
  ];

  return (
    <div className="atendimentos-page">
      {/* Seção Hero */}
      <section className="atendimentos-hero">
        <div className="container">
          <h1 className="page-title">Atendimentos</h1>
          <p className="hero-description">
            Conheça os serviços oferecidos pela Dra. Bruna Vilela para o cuidado neurológico do seu filho.
          </p>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Serviços Oferecidos</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Avaliação Neurológica</h3>
              <p>
                Avaliação completa do desenvolvimento neurológico da criança, identificando possíveis 
                alterações e estabelecendo diagnósticos precisos.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Acompanhamento do Desenvolvimento</h3>
              <p>
                Monitoramento do desenvolvimento neuropsicomotor, garantindo que a criança esteja 
                atingindo os marcos esperados para sua idade.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💊</div>
              <h3>Tratamento de Epilepsia</h3>
              <p>
                Diagnóstico e tratamento de diferentes tipos de epilepsia, com acompanhamento 
                personalizado e ajustes de medicação quando necessário.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧩</div>
              <h3>Avaliação de Transtornos do Neurodesenvolvimento</h3>
              <p>
                Diagnóstico e orientação para transtornos como TDAH, TEA, dificuldades de aprendizagem 
                e outros distúrbios do neurodesenvolvimento.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤕</div>
              <h3>Tratamento de Cefaleia</h3>
              <p>
                Avaliação e tratamento de diferentes tipos de dor de cabeça em crianças e adolescentes, 
                com abordagem individualizada.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Telemedicina</h3>
              <p>
                Consultas online para casos de retorno e algumas avaliações iniciais, proporcionando 
                comodidade para famílias que residem em locais distantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Abordagem */}
      <section className="approach-section">
        <div className="container">
          <h2 className="section-title">Nossa Abordagem</h2>
          <div className="approach-content">
            <p>
              A Dra. Bruna Vilela acredita que cada criança é única e, por isso, merece um atendimento 
              personalizado que considere não apenas os aspectos clínicos, mas também o contexto familiar, 
              social e emocional em que está inserida.
            </p>
            <p>
              Sua abordagem é baseada em três pilares fundamentais:
            </p>
            <div className="approach-pillars">
              <div className="pillar">
                <h3>Humanização</h3>
                <p>
                  Atendimento acolhedor e empático, criando um ambiente seguro e confortável para 
                  crianças e suas famílias.
                </p>
              </div>
              <div className="pillar">
                <h3>Ciência</h3>
                <p>
                  Prática baseada nas melhores e mais atuais evidências científicas, garantindo 
                  diagnósticos precisos e tratamentos eficazes.
                </p>
              </div>
              <div className="pillar">
                <h3>Integração</h3>
                <p>
                  Trabalho em conjunto com outros profissionais (psicólogos, fonoaudiólogos, terapeutas 
                  ocupacionais, etc.) para uma abordagem multidisciplinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Depoimentos</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                name={testimonial.name}
                relation={testimonial.relation}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Processo de Atendimento */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Como Funciona o Atendimento</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Agendamento</h3>
              <p>
                Entre em contato via WhatsApp para agendar sua consulta, escolhendo a data e horário 
                que melhor se adequam à sua rotina.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Preparação</h3>
              <p>
                Reúna exames anteriores, relatórios escolares e anote os principais sintomas e 
                preocupações para discutir durante a consulta.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Consulta</h3>
              <p>
                Durante o atendimento, a Dra. Bruna realizará uma avaliação completa, conversando 
                com os pais e interagindo com a criança de forma lúdica e acolhedora.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Plano de Cuidados</h3>
              <p>
                Após a avaliação, será elaborado um plano de cuidados personalizado, que pode incluir 
                exames complementares, medicações e/ou encaminhamentos para outros profissionais.
              </p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Acompanhamento</h3>
              <p>
                Consultas de retorno serão agendadas para monitorar a evolução e realizar ajustes 
                no tratamento quando necessário.
              </p>
            </div>
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

export default Atendimentos;
