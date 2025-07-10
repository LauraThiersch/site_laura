import { siteConfig } from '../../siteConfig';
import React from 'react';
import { Helmet } from 'react-helmet'; // Importamos o Helmet para meta tags
import './atendimentos.css';
import Button from '../../components/Button/button'; // Certifique-se de que o caminho está correto

// Componente para um card de depoimento, otimizado com Schema.org
interface TestimonialProps {
  name: string;
  relation: string;
  text: string;
  rating?: number; // Adicionado rating para Schema.org
}

const Testimonial: React.FC<TestimonialProps> = ({ name, relation, text, rating = 5 }) => {
  return (
    <article 
      className="testimonial-card"
      itemScope // Indica que este é um item para o Schema.org
      itemType="https://schema.org/Review" // Define como um Review
    >
      <div className="testimonial-content">
        <p itemProp="reviewBody">"{text}"</p> {/* Corpo do depoimento */}
      </div>
      <div 
        className="testimonial-author"
        itemProp="author" // Define o autor do review
        itemType="https://schema.org/Person" // O autor é uma Pessoa
        itemScope
      >
        <p><strong><span itemProp="name">{name}</span></strong></p> {/* Nome do autor */}
        <p itemProp="jobTitle">{relation}</p> {/* Relação (ex: Mãe de...) */}
      </div>
      {/* Avaliação em estrelas para Schema.org, caso queira exibir */}
      <div 
        itemProp="reviewRating" 
        itemType="https://schema.org/Rating" 
        itemScope
        style={{ display: 'none' }} // Pode ser invisível se não for exibir estrelas visuais
      >
        <meta itemProp="ratingValue" content={rating.toString()} />
        <meta itemProp="bestRating" content="5" />
      </div>
    </article>
  );
};

const Atendimentos: React.FC = () => {
  // Dados para os depoimentos da Dra. Laura
  const testimonials = [
    {
      name: "Najla",
      relation: "Consulta verificada",
      text: "A Dra Laura é maravilhosa. Super atenciosa, detalhista e disponível!"
    },
    {
      name: "Raphaela Silva",
      relation: "Consulta verificada",
      text: "Gostei do atendimento prestado ao meu filho. A Dra Laura foi atenciosa, explicou as dúvidas que surgiram e foi carinhosa com o paciente."
    },
    {
      name: "Adilson pai do PEDRO",
      relation: "Consulta verificada",
      text: "Excelente profissional, atendimento com explicações de entendimento fácil"
    },
    {
      name: "Sarah",
      relation: "Consulta verificada",
      text: "Nossa primeira impressão da Dra. Laura foi ótima. Eu e minha filha nos sentimos à vontade e acolhidas. Grandes expectativas em alcançar bons resultados com o auxílio da Dra."
    }
  ];

  return (
    <>
              {/* Configuração de meta tags */}
      <Helmet>
                  {/* Título da Página: Deve ser único e descritivo. */}
        <title>Atendimentos em Neuropediatria em Belo Horizonte | Dra. Laura Thiersch</title>
        
        {/* Meta Descrição: Resumo do conteúdo da página. Aparece nos resultados de busca. */}
        <meta 
          name="description" 
          content="Atendimentos especializados em neuropediatria em Belo Horizonte com a Dra. Laura Thiersch. Diagnóstico e tratamento de TEA, TDAH, Epilepsia Infantil, atraso no desenvolvimento e dificuldades escolares. Consultório no Prado, BH." 
        />
        
                  {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="neuropediatra Belo Horizonte, neurologista infantil BH, tratamento TEA, TDAH em crianças, epilepsia infantil, atraso desenvolvimento infantil, dificuldades escolares, consulta neuropediátrica, Dra. Laura Thiersch, neurodesenvolvimento infantil, cefaleia infantil, distúrbios do sono infantil, paralisia cerebral, síndromes genéticas" 
        />
        
        {/* Canonical URL: Indica ao Google a versão preferencial da página para evitar conteúdo duplicado. */}
        <link rel="canonical" href={`${siteConfig.baseUrl}/atendimentos`} />
        
        {/* Open Graph Tags (para compartilhamento em redes sociais como Facebook, LinkedIn) */}
        <meta property="og:title" content="Atendimentos em Neuropediatria em Belo Horizonte | Dra. Laura Thiersch" />
        <meta property="og:description" content="Conheça os serviços especializados da Dra. Laura Thiersch, neuropediatra em BH. Avaliações e tratamentos para TEA, TDAH, Epilepsia Infantil, atraso no desenvolvimento e dificuldades escolares. Agende sua consulta!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.baseUrl}/atendimentos`} />
        <meta property="og:image" content={`${siteConfig.baseUrl}/images/laura-thiersch-neuropediatra-bh-social.jpg`} />
        
        {/* Twitter Card Tags (para compartilhamento no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atendimentos em Neuropediatria em Belo Horizonte | Dra. Laura Thiersch" />
        <meta name="twitter:description" content="Conheça os serviços especializados da Dra. Laura Thiersch, neuropediatra em BH. Avaliações e tratamentos para TEA, TDAH, Epilepsia Infantil, atraso no desenvolvimento e dificuldades escolares. Agende sua consulta!" />
        <meta name="twitter:image" content={`${siteConfig.baseUrl}/images/laura-thiersch-neuropediatra-bh-social.jpg`} /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}
      </Helmet>

      {/* Conteúdo principal da página */}
      <main className="atendimentos-page">
        {/* Seção Hero */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title" // Acessibilidade
          itemScope itemType="https://schema.org/WebPage" // Tipo de página
        >
          <div className="container">
            <h1 id="hero-title" className="page-title">
              Atendimentos Especializados em Neuropediatria em Belo Horizonte
            </h1>
            <p className="atendimentos-intro">
              A Dra. Laura Thiersch oferece uma gama completa de serviços de neurologia infantil em Belo Horizonte, dedicados ao cuidado integral do neurodesenvolvimento de crianças e adolescentes. Nosso objetivo é proporcionar diagnósticos precisos e tratamentos eficazes para diversas condições neurológicas, garantindo o bem-estar e o pleno potencial de cada paciente.
            </p>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section 
          className="services-section" 
          aria-labelledby="services-title"
          itemScope itemType="https://schema.org/MedicalSpecialty" // Tipo de especialidade médica
        >
          <div className="container">
            {/* H2: Título da seção de serviços. */}
            <h2 id="services-title" className="section-title">
              Principais Áreas de Atuação da Neuropediatra Dra. Laura Thiersch
            </h2>
            <div className="services-grid">
              {/* Card 1: Consulta Neuropediátrica e Acompanhamento do Neurodesenvolvimento */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog" // Para agrupar ofertas de serviço
                itemScope itemType="https://schema.org/Service" // Cada card é um Serviço
              >
                <div className="service-icon" aria-hidden="true">🧠</div>
                <h3 itemProp="name">Consulta Neuropediátrica e Acompanhamento do Neurodesenvolvimento</h3>
                <p itemProp="description">
                  A consulta com a Dra. Laura Thiersch, sua neuropediatra em BH, é o primeiro passo para um acompanhamento neurológico infantil completo. Realizamos uma avaliação detalhada do desenvolvimento motor, cognitivo, de linguagem e social da criança, desde o nascimento até a adolescência. Nosso foco é a identificação precoce de marcos atípicos e a orientação para um neurodesenvolvimento saudável e pleno.
                </p>
              </article>

              {/* Card 2: Transtorno do Espectro Autista (TEA) */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">🧩</div>
                <h3 itemProp="name">Transtorno do Espectro Autista (TEA): Diagnóstico e Suporte em BH</h3>
                <p itemProp="description">
                  Oferecemos diagnóstico preciso e acompanhamento especializado para crianças com Transtorno do Espectro Autista (TEA) em Belo Horizonte. A Dra. Laura Thiersch trabalha com uma abordagem multidisciplinar, orientando famílias e escolas para o desenvolvimento de estratégias de intervenção que promovem a comunicação, interação social e autonomia, visando a melhor qualidade de vida para crianças com TEA.
                </p>
              </article>

              {/* Card 3: Transtorno de Déficit de Atenção e Hiperatividade (TDAH) */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true"> TDAH</div>
                <h3 itemProp="name">Transtorno de Déficit de Atenção e Hiperatividade (TDAH): Abordagem Terapêutica</h3>
                <p itemProp="description">
                  O tratamento do TDAH em crianças e adolescentes é uma das especialidades da Dra. Laura Thiersch. Através de uma avaliação cuidadosa, definimos o plano terapêutico mais adequado, que pode incluir orientações comportamentais, acompanhamento escolar e, quando necessário, medicação. Nosso objetivo é ajudar seu filho a gerenciar os sintomas do TDAH, melhorando o foco, a organização e o desempenho acadêmico e social.
                </p>
              </article>

              {/* Card 4: Epilepsia Infantil */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">⚡</div>
                <h3 itemProp="name">Epilepsia Infantil: Diagnóstico, Manejo e Controle de Crises em Crianças</h3>
                <p itemProp="description">
                  A Dra. Laura Thiersch tem experiência no diagnóstico e tratamento da epilepsia infantil. Com expertise no manejo de diferentes tipos de crises epilépticas em crianças, oferecemos um plano terapêutico individualizado, que inclui medicação, orientações sobre segurança e suporte contínuo para a família. Nosso compromisso é com o controle das crises e a melhoria da qualidade de vida do seu filho.
                </p>
              </article>

              {/* Card 5: Atraso no Desenvolvimento Neuropsicomotor */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">🏃‍♀️</div>
                <h3 itemProp="name">Atraso no Desenvolvimento Neuropsicomotor: Identificação e Intervenção Precoce</h3>
                <p itemProp="description">
                  Atrasos na fala, na marcha, na coordenação motora ou no desenvolvimento cognitivo podem ser sinais importantes. A Dra. Laura Thiersch realiza a identificação precoce de atrasos no desenvolvimento neuropsicomotor, encaminhando para as terapias necessárias (fisioterapia, fonoaudiologia, terapia ocupacional) e acompanhando a evolução para garantir a intervenção mais eficaz e o máximo potencial de recuperação.
                </p>
              </article>

              {/* Card 6: Dificuldades Escolares e Transtornos de Aprendizagem */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">📚</div>
                <h3 itemProp="name">Dificuldades Escolares e Transtornos de Aprendizagem: Investigação e Suporte</h3>
                <p itemProp="description">
                  Quando a criança apresenta dificuldades persistentes na escola, como dislexia, discalculia ou outros transtornos de aprendizagem, a avaliação neuropediátrica é fundamental. A Dra. Laura Thiersch investiga as causas neurológicas dessas dificuldades, oferece diagnóstico e orienta pais e educadores sobre as melhores estratégias de suporte para que a criança possa alcançar seu pleno potencial acadêmico.
                </p>
              </article>

              {/* Card 7: Cefaleia (Dor de Cabeça) em Crianças e Adolescentes */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">🤕</div>
                <h3 itemProp="name">Cefaleia (Dor de Cabeça) em Crianças e Adolescentes: Diagnóstico e Tratamento</h3>
                <p itemProp="description">
                  A dor de cabeça em crianças e adolescentes é uma queixa comum que merece atenção especializada. A Dra. Laura Thiersch realiza o diagnóstico diferencial dos tipos de cefaleia, como enxaqueca ou cefaleia tensional, e estabelece um plano de tratamento e manejo para aliviar a dor e melhorar a qualidade de vida do seu filho, evitando o impacto na rotina escolar e social.
                </p>
              </article>

              {/* Card 8: Distúrbios do Sono na Infância e Adolescência */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">😴</div>
                <h3 itemProp="name">Distúrbios do Sono na Infância e Adolescência: Avaliação e Tratamento</h3>
                <p itemProp="description">
                  Problemas de sono, como insônia, apneia do sono ou parassonias (terror noturno, sonambulismo), podem afetar significativamente o desenvolvimento e o comportamento infantil. A neuropediatra Dra. Laura Thiersch avalia e trata os distúrbios do sono em crianças, buscando restabelecer padrões de sono saudáveis essenciais para o crescimento, aprendizado e bem-estar geral.
                </p>
              </article>

              {/* Card 9: Paralisia Cerebral e Síndromes Genéticas com Acometimento Neurológico */}
              <article 
                className="service-card" 
                itemProp="hasOfferCatalog"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="service-icon" aria-hidden="true">♿</div>
                <h3 itemProp="name">Paralisia Cerebral e Síndromes Genéticas com Acometimento Neurológico</h3>
                <p itemProp="description">
                  A Dra. Laura Thiersch oferece acompanhamento especializado para crianças com Paralisia Cerebral e diversas síndromes genéticas que apresentam manifestações neurológicas. O objetivo é otimizar o desenvolvimento, gerenciar sintomas e proporcionar o melhor suporte possível para a criança e sua família, através de um plano de cuidados integrados e personalizados.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Seção Abordagem */}
        <section 
          className="approach-section" 
          aria-labelledby="approach-title"
          itemScope itemType="https://schema.org/WebPageElement" // Elemento da página
        >
          <div className="container">
            <h2 id="approach-title" className="section-title">Nossa Abordagem: Humanização e Ciência no Neurodesenvolvimento</h2>
            <div className="approach-content">
              <p>
                A Dra. Laura Thiersch acredita que cada criança é única e, por isso, merece um atendimento 
                personalizado que considere não apenas os aspectos clínicos, mas também o contexto familiar, 
                social e emocional em que está inserida. Sua prática é focada em oferecer o melhor cuidado neuropediátrico em Belo Horizonte, com um olhar integral para o bem-estar infantil.
              </p>
              <p>
                Sua abordagem é baseada em três pilares fundamentais:
              </p>
              <div className="approach-pillars">
                <article className="pillar"> {/* Usando article para elementos auto-contidos */}
                  <h3>Humanização</h3>
                  <p>
                    Atendimento acolhedor e empático, criando um ambiente seguro e confortável para 
                    crianças e suas famílias, com foco na individualidade de cada paciente.
                  </p>
                </article>
                <article className="pillar">
                  <h3>Ciência</h3>
                  <p>
                    Prática baseada nas mais recentes e rigorosas evidências científicas, garantindo 
                    diagnósticos precisos e tratamentos inovadores e eficazes para as condições neurológicas infantis.
                  </p>
                </article>
                <article className="pillar">
                  <h3>Integração</h3>
                  <p>
                    Trabalho em conjunto e em rede com outros profissionais da saúde (psicólogos, fonoaudiólogos, terapeutas 
                    ocupacionais, etc.) para uma abordagem multidisciplinar completa e resultados otimizados.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section 
          className="testimonials-section" 
          aria-labelledby="testimonials-title"
          itemScope itemType="https://schema.org/UserReviews" // Avaliações de usuários
        >
          <div className="container">
            <h2 id="testimonials-title" className="section-title">O que Nossos Pacientes Dizem sobre a Dra. Laura Thiersch</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={`testimonial-${index}`} // Chave única
                  name={testimonial.name}
                  relation={testimonial.relation}
                  text={testimonial.text}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Processo de Atendimento */}
        <section 
          className="process-section" 
          aria-labelledby="process-title"
          itemScope itemType="https://schema.org/HowTo" // Tipo de "Como Fazer"
        >
          <div className="container">
            <h2 id="process-title" className="section-title">Como Funciona o Atendimento na Clínica da Dra. Laura Thiersch</h2>
            <div className="process-steps">
              <article 
                className="step"
                itemProp="step" itemScope itemType="https://schema.org/HowToStep" // Cada passo é um HowToStep
              >
                <div className="step-number" itemProp="position" content="1">1</div>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <h3 itemProp="name">Agendamento Facilitado</h3>
                  <p itemProp="text">
                    Entre em contato via WhatsApp (
                    <a
                      href="https://wa.me/5531985486226"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { // Rastreamento GA4 para clique no WhatsApp dentro do texto
                        if (window.gtag) {
                          window.gtag('event', 'Clique_WhatsApp', {
                            event_category: 'Conversao_Atendimentos',
                            event_label: 'WhatsApp_Texto_Atendimentos',
                            conversion_type: 'whatsapp',
                            contact_method: 'whatsapp',
                            area_conversao: 'neuropediatra_bh',
                            localizacao_consultorio: 'grao_mogol_bh',
                            value: 1,
                            currency: 'BRL'
                          });
                          console.log('🎯 Clique no WhatsApp (Texto Atendimentos) rastreado');
                        }
                      }}
                    >
                      31 98548-6226
                    </a>
                    ) ou telefone para agendar sua consulta com a Dra. Laura Thiersch, escolhendo a data e horário que melhor se adequam à sua rotina em Belo Horizonte.
                  </p>
                </div>
              </article>
              <article 
                className="step"
                itemProp="step" itemScope itemType="https://schema.org/HowToStep"
              >
                <div className="step-number" itemProp="position" content="2">2</div>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <h3 itemProp="name">Preparação para a Consulta</h3>
                  <p itemProp="text">
                    Reúna exames anteriores, relatórios escolares e anote os principais sintomas e 
                    preocupações para que a Dra. Laura possa ter um panorama completo durante a consulta neurológica infantil.
                  </p>
                </div>
              </article>
              <article 
                className="step"
                itemProp="step" itemScope itemType="https://schema.org/HowToStep"
              >
                <div className="step-number" itemProp="position" content="3">3</div>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <h3 itemProp="name">A Consulta Humanizada e Detalhada</h3>
                  <p itemProp="text">
                    Durante o atendimento na clínica em BH, a Dra. Laura realizará uma avaliação completa, conversando 
                    com os pais e interagindo com a criança de forma lúdica e acolhedora, focando no neurodesenvolvimento.
                  </p>
                </div>
              </article>
              <article 
                className="step"
                itemProp="step" itemScope itemType="https://schema.org/HowToStep"
              >
                <div className="step-number" itemProp="position" content="4">4</div>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <h3 itemProp="name">Plano de Cuidados Personalizado</h3>
                  <p itemProp="text">
                    Após a avaliação, será elaborado um plano de cuidados individualizado para o paciente, que pode incluir 
                    exames complementares, medicações e/ou encaminhamentos para outros profissionais para um tratamento multidisciplinar eficaz.
                  </p>
                </div>
              </article>
              <article 
                className="step"
                itemProp="step" itemScope itemType="https://schema.org/HowToStep"
              >
                <div className="step-number" itemProp="position" content="5">5</div>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <h3 itemProp="name">Acompanhamento Contínuo do Neurodesenvolvimento</h3>
                  <p itemProp="text">
                    Consultas de retorno serão agendadas para monitorar a evolução do desenvolvimento da criança e realizar ajustes 
                    no tratamento quando necessário, garantindo o melhor suporte para sua família.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section 
          className="cta-section" 
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction" // Tipo de chamada para ação
        >
          <div className="container">
            <h2 id="cta-title">Pronto para Agendar a Consulta do Seu Filho com a Dra. Laura Thiersch?</h2>
            <p className="cta-description">
              Agende uma consulta com a Dra. Laura Thiersch e proporcione ao seu filho um cuidado neurológico especializado, humanizado e focado no seu desenvolvimento.
            </p>
            <Button
              variant="appointment"
              href="/agendar-consulta"
              ariaLabel="Agendar sua consulta de neuropediatria com a Dra. Laura Thiersch"
              title="Agende sua consulta de neuropediatria em Belo Horizonte com a Dra. Laura Thiersch"
              trackingCategory="Conversao_Atendimentos"
              trackingAction="Clique_Agendamento_Atendimentos_CTA"
              trackingLabel="Botao_Agendamento_Atendimentos"
              conversionType="navigation"
            >
              Agende Sua Consulta
            </Button>
            <p className="cta-contact-info">
              <span className="cta-label">Prefere ligar?</span> 
              <a
                className="cta-link"
                href="tel:+5531985486226"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'Clique_Telefone', {
                      event_category: 'Conversao_Atendimentos',
                      event_label: 'Telefone_Atendimentos',
                      conversion_type: 'phone',
                      contact_method: 'phone',
                      area_conversao: 'neuropediatra_bh',
                      localizacao_consultorio: 'grao_mogol_bh',
                      value: 1,
                      currency: 'BRL'
                    });
                    console.log('🎯 Clique no telefone (Atendimentos) rastreado');
                  }
                }}

                rel="noopener noreferrer"
                aria-label="Ligar para a Dra. Laura Thiersch"
                title="Ligue para agendar sua consulta"
              >
                (31) 98548-6226
              </a>
              <span className="cta-label"> | Ou envie um e-mail: </span>
              <a
                className="cta-link"
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'Clique_Email', {
                      event_category: 'Conversao_Atendimentos',
                      event_label: 'Email_Atendimentos',
                      conversion_type: 'email',
                      contact_method: 'email',
                      area_conversao: 'neuropediatra_bh',
                      localizacao_consultorio: 'grao_mogol_bh',
                      value: 1,
                      currency: 'BRL'
                    });
                    console.log('🎯 Clique no email (Atendimentos) rastreado');
                  }
                }}

                rel="noopener noreferrer"
                aria-label="Enviar email para a Dra. Laura Thiersch"
                title="Envie um email para agendar"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Atendimentos;
