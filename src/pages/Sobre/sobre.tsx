import React from 'react';
import { Helmet } from 'react-helmet'; // Importamos o Helmet para meta tags de SEO
import './sobre.css';
import Button from '../../components/Button/button';
// Lembre-se de renomear o arquivo da imagem para algo descritivo para SEO de Imagens
import doctorImage from '../../assets/images/dra-laura-thiersch-neuropediatra-bh-07.png'; 

const Sobre: React.FC = () => {
  return (
    <>
      {/* Helmet: CRUCIAL para o SEO! Define o título da página, meta descrição e palavras-chave.
        Isso é o que o Google e as redes sociais leem para entender do que se trata sua página.
        Preenchemos com as palavras-chave mais relevantes para a Dra. Laura Thiersch. */}
      <Helmet>
        {/* Título da Página: O mais importante para o SEO. Deve ser único e descritivo. */}
        <title>Sobre a Dra. Laura Thiersch: Neuropediatra em Belo Horizonte</title>
        
        {/* Meta Descrição: Resumo do conteúdo da página. Aparece nos resultados de busca. */}
        <meta 
          name="description" 
          content="Conheça a Dra. Laura Thiersch, pediatra em Belo Horizonte com atuação em neurologia infantil. Saiba sobre sua formação em UFMG e FHEMIG, sua experiência com TEA, TDAH, Epilepsia Infantil." 
        />
        
        {/* Meta Keywords: Embora menos impactantes hoje, ainda podem ajudar a reforçar o tema. */}
        <meta 
          name="keywords" 
          content="Dra Laura Thiersch, neuropediatra Belo Horizonte, neurologista infantil BH, formação neuropediatra, experiência neuropediatria, desenvolvimento infantil, transtornos neurodesenvolvimento, TEA, TDAH, Epilepsia Infantil, UFMG, FHEMIG, Belo Horizonte" 
        />
        
        {/* Canonical URL: Indica ao Google a versão preferencial da página para evitar conteúdo duplicado. */}
        <link rel="canonical" href="https://www.laurathiersch.com.br/sobre" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        
        {/* Open Graph Tags (para compartilhamento em redes sociais como Facebook, LinkedIn) */}
        <meta property="og:title" content="Sobre a Dra. Laura Thiersch: Neuropediatra em Belo Horizonte" />
        <meta property="og:description" content="Conheça a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Saiba sobre sua formação em UFMG e FHEMIG, sua experiência com TEA, TDAH, Epilepsia Infantil e sua paixão pelo neurodesenvolvimento infantil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laurathiersch.com.br/sobre" /> {/* SUBSTITUA PELA URL REAL DO SITE! */}
        <meta property="og:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-sobre-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}
        
        {/* Twitter Card Tags (para compartilhamento no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre a Dra. Laura Thiersch: Neuropediatra em Belo Horizonte" />
        <meta name="twitter:description" content="Conheça a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Saiba sobre sua formação em UFMG e FHEMIG, sua experiência com TEA, TDAH, Epilepsia Infantil e sua paixão pelo neurodesenvolvimento infantil." />
        <meta name="twitter:image" content="https://www.laurathiersch.com.br/images/laura-thiersch-sobre-social.jpg" /> {/* Imagem de destaque para compartilhamento. CRIE UMA! */}

        {/* Schema Markup para Physician/Person (para Google Knowledge Panel e Rich Snippets) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dra. Laura Thiersch",
              "url": "https://www.laurathiersch.com.br/sobre",
              "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-neuropediatra-bh-perfil.png",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Universidade Federal de Minas Gerais (UFMG)"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Hospital da Fundação Hospitalar do Estado de Minas Gerais (FHEMIG)"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Hospital das Clínicas da UFMG (HC-UFMG)"
                }
              ],
              "medicalSpecialty": "https://schema.org/Pediatric",
              "jobTitle": "Neuropediatra",
              "description": "Neurologista Pediátrica em Belo Horizonte com formação pela UFMG e FHEMIG, especializada em Transtornos do Neurodesenvolvimento, TEA, TDAH e Epilepsia Infantil. Preceptora na Residência de Neurologia Pediátrica no HC-UFMG.",
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
              "sameAs": [
                "https://www.instagram.com/lauraneuroped/",
                "https://www.facebook.com/lauraneuroped/",
                "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte",
                "https://g.co/kgs/tWPeVGb"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* main: Tag semântica que indica o conteúdo principal e único da página. */}
      <main className="sobre-page">
        {/* Seção Hero: Introdução da página. */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title"
          itemScope itemType="https://schema.org/WebPage"
        >
          <div className="container">
            <h1 id="hero-title" className="page-title">
              Sobre a Dra. Laura Thiersch: Sua Neuropediatra
            </h1>
            <div className="sobre-hero-content">
              <div className="sobre-hero-image">
                <img 
                  src={doctorImage} 
                  alt="Dra. Laura Thiersch - Pediatra com experiência em TEA, TDAH e Epilepsia Infantil em Belo Horizonte" 
                  title="Dra. Laura Thiersch - Neurologista Infantil em BH"
                />
              </div>
              <div className="sobre-hero-text">
                <h2>Neuropediatra com Paixão e Expertise no Cuidado Infantil</h2>
                <p>
                  Desde a infância, a Dra. Laura Thiersch sentiu um chamado para o cuidado e a medicina, especialmente com as crianças. Essa paixão a guiou para a formação em Medicina, onde se encantou pela complexidade e beleza do sistema nervoso em desenvolvimento. Sua jornada a levou à especialização em Pediatria e, posteriormente, à Neurologia Pediátrica, consolidando seu compromisso com a saúde e o bem-estar dos pequenos pacientes em Belo Horizonte.
                </p>
                <Button 
                  variant="appointment" 
                  href="https://wa.me/5531995626630"
                  ariaLabel="Agende sua consulta com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte"
                  title="Agendar Consulta com Neuropediatra"
                >
                  Agende sua Consulta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Biografia Detalhada e Formação */}
        <section 
          className="biografia-section" 
          aria-labelledby="biografia-title"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="container">
            <h2 id="biografia-title" className="section-title">
              <span className="elegant-title">Formação e Experiência Profissional da Dra. Laura Thiersch</span>
              <span className="section-subtitle">Um Caminho Dedicado à Neurologia Pediátrica em BH</span>
            </h2>
            <div className="biografia-content">
              <p>
                A Dra. Laura Maria Silva Thiersch é uma Pediatra altamente qualificada com atuação em neurologia infantil, com uma sólida formação acadêmica e experiência clínica, sempre buscando a excelência no cuidado ao neurodesenvolvimento infantil.
              </p>
              <h3>Sua Jornada Acadêmica e Profissional:</h3>
              <ul>
                <li>**Graduação em Medicina:** Pela renomada **Universidade Federal de Minas Gerais (UFMG)**.</li>
                <li>**Residência Médica em Pediatria:** Concluída no **Hospital Infantil João Paulo II, em Belo Horizonte**, uma referência em Minas Gerais.</li>
                <li>**Residência Médica em Neurologia Pediátrica:** Especialização também realizada no **Hospital Infantil João Paulo II (FHEMIG)**, aprofundando o conhecimento em condições neurológicas infantis.</li>
                <li>**Pós-graduação em Transtornos do Neurodesenvolvimento:** Constantemente atualizada nas mais recentes abordagens para TEA, TDAH, dificuldades de aprendizagem, entre outros.</li>
                <li>**Preceptora na Residência de Neurologia Pediátrica no Hospital das Clínicas da UFMG (HC-UFMG):** Compartilha seu vasto conhecimento e experiência com futuros neuropediatras.</li>
                <li>**Experiência em Epilepsia Infantil:** Desde o atendimento de recém-nascidos até adolescentes, com foco no diagnóstico e tratamento de casos complexos.</li>
              </ul>
              <p>
                Sua vivência em instituições de saúde de excelência em Belo Horizonte e sua dedicação à pesquisa e atualização constante garantem um atendimento baseado nas mais recentes evidências científicas e nas melhores práticas da neuropediatria, oferecendo o melhor para o desenvolvimento do seu filho.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Visão e Missão */}
        <section 
          className="vision-mission-section" 
          aria-labelledby="vision-mission-title"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="container">
            <h2 id="vision-mission-title" className="section-title">
              <span className="elegant-title">Visão e Missão da Dra. Laura Thiersch</span>
              <span className="section-subtitle">Nossos Pilares de Atendimento em Neuropediatria</span>
            </h2>
            <div className="vision-mission-grid">
              <article className="vision-box">
                <h3 className="sub-title">Visão</h3>
                <p>
                  Ser reconhecida como referência em Neurologia Pediátrica em Belo Horizonte e região, oferecendo atendimento de excelência e contribuindo significativamente para o **desenvolvimento saudável e o pleno potencial** de cada criança, através de diagnósticos precisos, tratamentos personalizados e uma abordagem integral e humanizada.
                </p>
              </article>
              <article className="mission-box">
                <h3 className="sub-title">Missão</h3>
                <p>
                  Proporcionar **cuidado neurológico infantil** de qualidade, com empatia, dedicação e ética, buscando sempre o bem-estar das crianças e o apoio às suas famílias. Nosso compromisso é com uma abordagem **multidisciplinar e baseada nas melhores evidências científicas**, garantindo que cada paciente receba a atenção e o tratamento que merece para prosperar.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Seção Importância da Neuropediatria */}
        <section 
          className="importance-section" 
          aria-labelledby="importance-title"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="container">
            <h2 id="importance-title" className="section-title">
              <span className="elegant-title">A Importância da Neuropediatria para o Futuro do Seu Filho</span>
              <span className="section-subtitle">Como a Especialidade Faz a Diferença no Desenvolvimento Infantil</span>
            </h2>
            <div className="importance-content">
              <p>
                A Neurologia Pediátrica é uma especialidade médica vital para o diagnóstico, tratamento e acompanhamento de condições que afetam o cérebro, a medula espinhal, os nervos e os músculos de crianças e adolescentes. Desde o nascimento, o sistema nervoso está em constante desenvolvimento, e qualquer alteração pode impactar significativamente o aprendizado, o comportamento e a qualidade de vida.
              </p>
              <p>
                O **acompanhamento com um neuropediatra experiente** como a Dra. Laura Thiersch é fundamental para a **identificação precoce** de transtornos como o **Transtorno do Espectro Autista (TEA)**, o **Transtorno do Déficit de Atenção e Hiperatividade (TDAH)** e a **Epilepsia Infantil**, bem como **atrasos no desenvolvimento neuropsicomotor**. Intervenções realizadas no momento certo podem maximizar o potencial de cada criança, proporcionando-lhes as ferramentas necessárias para um futuro mais autônomo e feliz.
              </p>
              <ul className="importance-list">
                <li>Diagnosticar precocemente distúrbios neurológicos infantis (TEA, TDAH, Epilepsia).</li>
                <li>Acompanhar o desenvolvimento neuropsicomotor em todas as fases da infância.</li>
                <li>Tratar condições como cefaleias, síndromes genéticas e distúrbios do sono em crianças.</li>
                <li>Orientar famílias sobre o manejo de condições neurológicas e o suporte adequado.</li>
                <li>Trabalhar em conjunto com outros profissionais para uma abordagem multidisciplinar.</li>
              </ul>
              <p>
                Com um olhar atento, carinhoso e cientificamente embasado, a Dra. Laura se dedica a oferecer **cuidados de excelência em Neuropediatria em Belo Horizonte**, combinando seu amor pela medicina e seu compromisso inabalável em proporcionar o melhor para seus pequenos pacientes e suas famílias.
              </p>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section 
          className="cta-section" 
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction"
        >
          <div className="container">
            <h2 id="cta-title">Agende uma Consulta com a Dra. Laura Thiersch em Belo Horizonte</h2>
            <p className="cta-description">
              Agende uma consulta com a Dra. Laura Thiersch e proporcione ao seu filho um cuidado neurológico especializado, humanizado e focado no seu desenvolvimento.
            </p>
            <Button 
              variant="appointment" 
              href="https://wa.me/5531995626630"
              ariaLabel="Agendar sua consulta de neuropediatria via WhatsApp com a Dra. Laura Thiersch"
              title="Agende sua consulta de neuropediatria em Belo Horizonte com a Dra. Laura Thiersch"
            >
              Agende Sua Consulta Via WhatsApp
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

export default Sobre;
