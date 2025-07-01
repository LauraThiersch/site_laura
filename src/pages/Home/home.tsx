import React from 'react';
import { Helmet } from 'react-helmet'; // Importamos o Helmet para meta tags de SEO
import './home.css';
import Button from '../../components/Button/button';
import FAQ from '../../components/FAQ/faq';
// Lembre-se de renomear o arquivo da imagem para algo descritivo para SEO de Imagens
import doctorImage from '../../assets/images/dra-laura-thiersch-neuropediatra-bh-05.png'; 
import brainIcon from '../../assets/images/icon-brain.png'; // Exemplo de ícone, substitua conforme necessário

const Home: React.FC = () => {
  // Dados para o FAQ da Dra. Laura, com foco nas palavras-chave e dores dos pais
  const faqItems = [
    {
      question: "A Dra. Laura atende crianças com suspeita de TEA em Belo Horizonte?",
      answer: "Sim, a Dra. Laura Thiersch é uma neuropediatra em Belo Horizonte com vasta experiência no diagnóstico e acompanhamento de crianças com suspeita ou já diagnosticadas com Transtorno do Espectro Autista (TEA), oferecendo um plano de cuidados individualizado e humanizado."
    },
    {
      question: "Qual a idade mínima para atendimento com a Dra. Laura?",
      answer: "A Dra. Laura Thiersch atende pacientes desde o nascimento (recém-nascidos) até a adolescência, acompanhando todas as fases do neurodesenvolvimento infantil. Sua experiência em epilepsia infantil desde recém-nascidos é um diferencial."
    },
    {
      question: "A Dra. Laura faz diagnóstico e acompanhamento de TDAH em crianças?",
      answer: "Sim, a Dra. Laura Thiersch realiza o diagnóstico e acompanhamento completo do Transtorno do Déficit de Atenção e Hiperatividade (TDAH) em crianças e adolescentes. Ela oferece abordagens terapêuticas que incluem orientações comportamentais, escolares e, quando necessário, manejo medicamentoso."
    },
    {
      question: "A Dra. Laura trata epilepsia infantil?",
      answer: "Sim, o tratamento da epilepsia infantil é uma das grandes áreas de expertise da Dra. Laura Thiersch. Ela atua no diagnóstico preciso, manejo medicamentoso e acompanhamento contínuo de crianças com diferentes tipos de epilepsia, buscando o controle das crises e a melhor qualidade de vida."
    },
    {
      question: "Como agendar uma consulta com a Dra. Laura?",
      answer: "Para agendar uma consulta com a Dra. Laura Thiersch, você pode entrar em contato diretamente pelo WhatsApp: (31) 99562-6630, ou através do formulário de contato em nosso site. Nossa equipe está pronta para auxiliar você com datas e horários disponíveis em Belo Horizonte."
    },
    {
      question: "A Dra. Laura atende convênio ou particular?",
      answer: "A Dra. Laura Thiersch realiza atendimentos particulares. Para mais informações sobre valores e formas de pagamento, por favor, entre em contato diretamente com nossa equipe pelo WhatsApp ou telefone."
    },
    {
      question: "O consultório da Dra. Laura é acessível?",
      answer: "Sim, o consultório da Dra. Laura Thiersch, localizado na Rua Piauí, 1790, Funcionários, Belo Horizonte - MG, é projetado para oferecer acessibilidade e conforto a todos os pacientes e suas famílias. Em caso de necessidades específicas, por favor, nos informe previamente."
    },
    {
      question: "A Dra. Laura faz avaliação de atraso no desenvolvimento?",
      answer: "Com certeza. A avaliação de atrasos no desenvolvimento neuropsicomotor é uma área fundamental da atuação da Dra. Laura Thiersch. Ela identifica e orienta intervenções precoces para atrasos na fala, motor, cognitivo e social, garantindo o máximo potencial de desenvolvimento para a criança."
    },
     {
      question: "Quais os primeiros sinais de TEA que devo observar no meu filho?",
      answer: "Alguns sinais de alerta para TEA incluem dificuldades na interação social (pouco contato visual, não responde ao nome), atraso na fala ou ausência dela, movimentos repetitivos, sensibilidade sensorial e interesses restritos. Se notar algum desses sinais, procure uma avaliação neuropediátrica."
    },
    {
      question: "Como é o tratamento da epilepsia infantil?",
      answer: "O tratamento da epilepsia infantil é individualizado e visa controlar as crises com o mínimo de efeitos colaterais. Envolve o uso de medicações antiepilépticas, orientações sobre segurança, mudanças no estilo de vida e, em alguns casos, dieta cetogênica. A Dra. Laura Thiersch acompanhará todo o processo."
    },
  ];

  return (
    <>
      {/* Helmet: CRUCIAL para o SEO! Define o título da página, meta descrição e palavras-chave.
        Isso é o que o Google e as redes sociais leem para entender do que se trata sua página.
        Preenchemos com as palavras-chave mais relevantes para a Dra. Laura Thiersch. */}
      <Helmet>
        {/* Título da Página: O mais importante para o SEO. Deve ser único e descritivo. */}
        <title>Dra. Laura Thiersch: Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia Infantil</title>
        
        {/* Meta Descrição: Resumo do conteúdo da página. Aparece nos resultados de busca. */}
        <meta 
          name="description" 
          content="Pediatra em Belo Horizonte com atuação em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes." 
        />
        
        {/* Meta Keywords: Embora menos impactantes hoje, ainda podem ajudar a reforçar o tema. */}
        <meta 
          name="keywords" 
          content="neuropediatra Belo Horizonte, neurologista infantil BH, TEA, Transtorno do Espectro Autista, TDAH, Transtorno do Déficit de Atenção e Hiperatividade, Epilepsia Infantil, atraso desenvolvimento infantil, dificuldades escolares, consulta neuropediátrica, Dra. Laura Thiersch, neurodesenvolvimento infantil, médico infantil BH, neurologia pediátrica, belo horizonte" 
        />
        
        {/* Canonical URL: Indica ao Google a versão preferencial da página para evitar conteúdo duplicado. */}
        <link rel="canonical" href="https://www.laurathiersch.com.br/" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        
        {/* Open Graph Tags (para compartilhamento em redes sociais como Facebook, LinkedIn) */}
        <meta property="og:title" content="Dra. Laura Thiersch: Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia Infantil" />
        <meta property="og:description" content="Pediatra em Belo Horizonte com atuação em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-neuropediatra-bh-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}
        
        {/* Twitter Card Tags (para compartilhamento no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dra. Laura Thiersch: Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia Infantil" />
        <meta name="twitter:description" content="Pediatra em Belo Horizonte com atuação em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-neuropediatra-bh-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}

        {/* Schema Markup para Physician/LocalBusiness (para Google Knowledge Panel) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dra. Laura Thiersch",
              "url": "https://www.laurathiersch.com.br",
              "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-perfil.jpg", // Foto de perfil da Dra. Laura
              "logo": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png",
              "description": "Neuropediatra em Belo Horizonte com atendimento especializado em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Piauí, 1790 - Funcionários",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "postalCode": "30150-320",
                "addressCountry": "BR"
              },
              "telephone": "+5531995626630",
              "email": "contato@dralaurathiersch.com.br",
              "medicalSpecialty": "https://schema.org/Pediatric",
              "sameAs": [
                "https://www.instagram.com/lauraneuroped/",
                "https://www.facebook.com/lauraneuroped/",
                "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte",
                "https://g.co/kgs/tWPeVGb" // Link do Google My Business
              ],
              "knowsAbout": [
                "Transtorno do Espectro Autista (TEA)", 
                "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)", 
                "Epilepsia Infantil", 
                "Atraso no Desenvolvimento Neuropsicomotor", 
                "Cefaleia Infantil", 
                "Distúrbios do Sono em Crianças", 
                "Paralisia Cerebral", 
                "Síndromes Genéticas com Acometimento Neurológico",
                "Neurologia Pediátrica",
                "Desenvolvimento Infantil"
              ]
            }
          `}
        </script>
      </Helmet>

      <main className="home-page">
        {/* Seção Hero com fundo ondulado */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title"
          itemScope itemType="https://schema.org/WebPageElement"
        >
          <div className="hero-container">
            <div className="hero-content">
              <h1 id="hero-title">
                Dra. Laura Thiersch: Neuropediatra
              </h1>
              <h2>Cuidado Humanizado para o Desenvolvimento do Seu Filho</h2>
              <p>
                Médica com experiência em Transtorno do Espectro Autista (TEA), TDAH e Epilepsia Infantil. Proporcionamos um acompanhamento dedicado e personalizado para cada criança e sua família.
              </p>
              <Button 
                variant="appointment" 
                href="https://wa.me/5531995626630"
                ariaLabel="Agendar consulta de neuropediatria em Belo Horizonte com a Dra. Laura Thiersch"
                title="Agende sua Consulta de Neuropediatria via WhatsApp"
              >
                Agende sua Consulta
              </Button>
            </div>
            <div className="hero-image">
              <img 
                src={doctorImage} 
                alt="Dra. Laura Thiersch - Pediatra com experiência em TEA, TDAH e Epilepsia Infantil em Belo Horizonte" 
                title="Dra. Laura Thiersch, Neurologista Infantil em BH"
              />
            </div>
          </div>
        </section>

        {/* Seção Sobre a Dra. Laura */}
        <section 
          className="about-section" 
          aria-labelledby="about-title"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="container">
            <h2 id="about-title" className="section-title">
              <span className="elegant-title">Sobre a Dra. Laura Thiersch</span>
              <span className="section-subtitle">Paixão e Expertise em Neurologia Pediátrica</span>
            </h2>
            <div className="about-content">
              <p>
                Dra. Laura Thiersch sempre foi movida pela paixão em cuidar e transformar a vida das crianças. Sua jornada na medicina foi marcada pelo profundo interesse no desenvolvimento infantil e nas complexidades do sistema nervoso pediátrico. Formada em Medicina, dedicou-se à residência em Pediatria e, posteriormente, especializou-se em Neurologia Pediátrica no renomado **Hospital Infantil João Paulo II em Belo Horizonte**, referência em Minas Gerais para condições neurológicas complexas.
              </p>
              <p>
                Com anos de experiência e um olhar atento e carinhoso, a Dra. Laura se dedica a oferecer cuidados de excelência, combinando seu vasto conhecimento científico com um atendimento humanizado e individualizado. Seu compromisso é com o potencial de cada criança, buscando diagnósticos precisos e tratamentos eficazes que promovam a melhor qualidade de vida e o pleno desenvolvimento.
              </p>
              <Button 
                variant="secondary" 
                href="/sobre"
                ariaLabel="Saiba mais sobre a formação e experiência da Dra. Laura Thiersch Neuropediatra"
                title="Conheça a história e especialidades da Dra. Laura Thiersch"
              >
                Conheça Mais
              </Button>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais / Nossos Pilares de Atendimento */}
        <section 
          className="features-section" 
          aria-labelledby="features-title"
          itemScope itemType="https://schema.org/Service" // A seção inteira pode ser vista como um tipo de serviço ou característica
        >
          <div className="container">
            <h2 id="features-title" className="section-title">
              <span className="elegant-title">Nossos Diferenciais</span>
              <span className="section-subtitle">O Atendimento Que o Seu Filho Merece em Belo Horizonte</span>
            </h2>
            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">❤️</div>
                <h3>Atendimento Humanizado e Acolhedor</h3>
                <p>Priorizamos um ambiente seguro e de escuta ativa, onde a criança e a família se sintam compreendidas e confortáveis desde o primeiro contato com a neuropediatra.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🔬</div>
                <h3>Prática Baseada em Evidências Científicas</h3>
                <p>Nossa abordagem é fundamentada nas mais recentes pesquisas e diretrizes da neurologia infantil, garantindo diagnósticos precisos e tratamentos eficazes e inovadores.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">👨‍👩‍👧‍👦</div>
                <h3>Abordagem Familiar e Multidisciplinar</h3>
                <p>Envolvemos ativamente os pais e trabalhamos em colaboração com outros especialistas (fonoaudiólogos, psicólogos, terapeutas) para um cuidado integral e coordenado.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🌱</div>
                <h3>Foco no Pleno Desenvolvimento Infantil</h3>
                <p>Nossa missão é maximizar o potencial de cada criança, promovendo o neurodesenvolvimento saudável e superando desafios, seja em casos de TEA, TDAH, Epilepsia ou atrasos gerais.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Seção Importância da Neuropediatria */}
        <section 
          className="importance-section" 
          aria-labelledby="importance-title"
          itemScope itemType="https://schema.org/AboutPage" // Abordando o tema da importância da especialidade
        >
          <div className="container">
            <h2 id="importance-title" className="section-title">
              <span className="elegant-title">A Importância da Neuropediatria para o Futuro do Seu Filho</span>
              <span className="section-subtitle">Entenda Como um Especialista Pode Fazer a Diferença</span>
            </h2>
            <div className="importance-content">
              <p>
                A Neurologia Pediátrica é uma especialidade médica vital para o diagnóstico, tratamento e acompanhamento de condições que afetam o cérebro, a medula espinhal, os nervos e os músculos de crianças e adolescentes. Desde o nascimento, o sistema nervoso está em constante desenvolvimento, e qualquer alteração pode impactar significativamente o aprendizado, o comportamento e a qualidade de vida.
              </p>
              <p>
                Um acompanhamento neurológico infantil adequado, realizado por uma neuropediatra experiente como a Dra. Laura Thiersch, permite a identificação precoce de transtornos como TEA, TDAH e epilepsia, bem como atrasos no desenvolvimento neuropsicomotor. Intervenções realizadas no momento certo podem maximizar o potencial de cada criança, proporcionando-lhes as ferramentas necessárias para um futuro mais autônomo e feliz.
              </p>
              <p>
                Com um olhar atento, carinhoso e cientificamente embasado, a Dra. Laura se dedica a oferecer cuidados de excelência, combinando seu amor pela medicina e seu compromisso inabalável em proporcionar o melhor para seus pequenos pacientes e suas famílias em Belo Horizonte.
              </p>
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <FAQ items={faqItems} />

        {/* Seção CTA */}
        <section 
          className="cta-section" 
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction"
        >
          <div className="container">
            <h2 id="cta-title">Proporcione o Melhor Cuidado Neurológico para o Seu Filho em Belo Horizonte</h2>
            <p className="cta-description">
              Convidamos você a conhecer o consultório da Dra. Laura Thiersch, onde compromisso, paixão e ciência se unem para transformar a saúde e o desenvolvimento das crianças.
            </p>
            <Button 
              variant="appointment" 
              href="https://wa.me/5531995626630"
              ariaLabel="Agende a primeira consulta com a Dra. Laura Thiersch Neuropediatra em BH"
              title="Agende sua Consulta de Neuropediatria em Belo Horizonte"
            >
              Agende sua Consulta Agora!
            </Button>
            <p className="cta-contact-info">
              <span className="cta-label">Prefere ligar?</span> <a className="cta-link" href="tel:+5531995626630" target="_blank" rel="noopener noreferrer">(31) 99562-6630</a>
              <span className="cta-label"> | Ou envie um e-mail: </span>
              <a className="cta-link" href="mailto:contato@dralaurathiersch.com.br" target="_blank" rel="noopener noreferrer">contato@dralaurathiersch.com.br</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
