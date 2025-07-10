import React from 'react';
import { siteConfig } from '../../config/siteConfig';

interface AdvancedSchemaProps {
  pageType: 'home' | 'sobre' | 'atendimentos' | 'contato' | 'tea' | 'tdah' | 'epilepsia' | 'blog' | 'avaliacoes';
}

const AdvancedSchema: React.FC<AdvancedSchemaProps> = ({ pageType }) => {
  // Schema.org para Dra. Laura Thiersch (Person)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.contact.fullName,
    "alternateName": "Dra. Laura Thiersch",
    "jobTitle": "Neuropediatra",
    "description": "Neuropediatra especialista em TEA, TDAH e Epilepsia Infantil em Belo Horizonte",
    "url": siteConfig.baseUrl,
    "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-perfil.jpg",
    "sameAs": [
      "https://www.instagram.com/lauraneuroped/",
      "https://www.facebook.com/lauraneuroped/",
      "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universidade Federal de Minas Gerais (UFMG)"
    },
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Consultório Dra. Laura Thiersch"
    },
    "knowsAbout": [
      "Transtorno do Espectro Autista (TEA)",
      "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)",
      "Epilepsia Infantil",
      "Neurodesenvolvimento Infantil",
      "Neurologia Pediátrica"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    }
  };

  // Schema.org para MedicalOrganization (Consultório)
  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Consultório Dra. Laura Thiersch - Neuropediatra",
    "alternateName": "Dra. Laura Thiersch Neuropediatra",
    "url": siteConfig.baseUrl,
    "logo": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png",
    "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-consultorio.jpg",
    "description": "Consultório especializado em neuropediatria em Belo Horizonte, oferecendo diagnóstico e tratamento para TEA, TDAH e Epilepsia Infantil.",
    "medicalSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Neuropediatria",
      "description": "Especialidade médica que trata de distúrbios neurológicos em crianças"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.93085798660937,
      "longitude": -43.96385768462244
    },
    "telephone": "+5531995626630",
    "email": siteConfig.contact.email,
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer"
    ],
    "currenciesAccepted": "BRL",
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    }
  };

  // Schema.org MedicalProcedure para TEA
  const teaProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Diagnóstico de TEA (Transtorno do Espectro Autista)",
    "description": "Avaliação completa para diagnóstico de Transtorno do Espectro Autista em crianças",
    "bodyLocation": "Brain",
    "preparation": "Trazer exames anteriores, relatórios escolares e vídeos do comportamento da criança",
    "procedureType": "Diagnostic",
    "howPerformed": "Avaliação clínica, observação comportamental, aplicação de instrumentos padronizados (ADOS-2, ADI-R, CARS-2)",
    "followup": "Acompanhamento multidisciplinar com fonoaudiologia, terapia ocupacional e psicologia",
    "expectedPrognosis": "Melhora significativa com intervenção precoce e adequada",
    "seriousAdverseOutcome": "Atraso no diagnóstico pode comprometer o desenvolvimento",
    "availableService": {
      "@type": "MedicalService",
      "name": "Diagnóstico TEA",
      "url": "https://www.laurathiersch.com.br/tea-tratamento-bh"
    }
  };

  // Schema.org MedicalProcedure para TDAH
  const tdahProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Diagnóstico de TDAH (Transtorno do Déficit de Atenção e Hiperatividade)",
    "description": "Avaliação completa para diagnóstico de TDAH em crianças e adolescentes",
    "bodyLocation": "Brain",
    "preparation": "Trazer relatórios escolares, questionários preenchidos por pais e professores",
    "procedureType": "Diagnostic",
    "howPerformed": "Entrevista clínica, avaliação comportamental, aplicação de escalas de avaliação",
    "followup": "Acompanhamento com terapia comportamental e, quando necessário, tratamento medicamentoso",
    "expectedPrognosis": "Excelente resposta ao tratamento adequado",
    "seriousAdverseOutcome": "Não diagnosticado pode causar prejuízos escolares e sociais",
    "availableService": {
      "@type": "MedicalService",
      "name": "Diagnóstico TDAH",
      "url": "https://www.laurathiersch.com.br/tdah-tratamento-bh"
    }
  };

  // Schema.org MedicalProcedure para Epilepsia
  const epilepsyProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Diagnóstico e Tratamento de Epilepsia Infantil",
    "description": "Avaliação e tratamento especializado para epilepsia em crianças",
    "bodyLocation": "Brain",
    "preparation": "Trazer exames de imagem (ressonância, tomografia) e eletroencefalograma se disponíveis",
    "procedureType": "Diagnostic",
    "howPerformed": "Avaliação clínica, análise de exames complementares, classificação do tipo de epilepsia",
    "followup": "Acompanhamento regular para controle das crises e ajuste medicamentoso",
    "expectedPrognosis": "Controle adequado das crises na maioria dos casos",
    "seriousAdverseOutcome": "Crises não controladas podem causar lesões",
    "availableService": {
      "@type": "MedicalService",
      "name": "Tratamento Epilepsia",
      "url": "https://www.laurathiersch.com.br/epilepsia-infantil-bh"
    }
  };

  // Schema.org MedicalCondition para TEA
  const teaConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Transtorno do Espectro Autista (TEA)",
    "alternateName": "Autismo",
    "description": "Condição neurológica que afeta o desenvolvimento social e comunicativo",
    "signOrSymptom": [
      "Dificuldade na interação social",
      "Comportamentos repetitivos",
      "Interesses restritos",
      "Atraso na linguagem",
      "Dificuldade no contato visual"
    ],
    "cause": "Fatores genéticos e ambientais",
    "riskFactor": [
      "Histórico familiar",
      "Idade avançada dos pais",
      "Complicações na gestação"
    ],
    "possibleTreatment": [
      "Intervenção comportamental (ABA)",
      "Terapia ocupacional",
      "Fonoaudiologia",
      "Psicologia"
    ],
    "url": "https://www.laurathiersch.com.br/tea-tratamento-bh"
  };

  // Schema.org MedicalCondition para TDAH
  const tdahConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)",
    "alternateName": "TDAH",
    "description": "Condição neurológica caracterizada por desatenção, hiperatividade e impulsividade",
    "signOrSymptom": [
      "Dificuldade para manter a atenção",
      "Hiperatividade",
      "Impulsividade",
      "Dificuldade para seguir instruções",
      "Perda frequente de objetos"
    ],
    "cause": "Fatores genéticos e neurobiológicos",
    "riskFactor": [
      "Histórico familiar",
      "Exposição a toxinas durante a gestação",
      "Prematuridade"
    ],
    "possibleTreatment": [
      "Terapia comportamental",
      "Medicamentos estimulantes",
      "Orientação familiar",
      "Intervenção escolar"
    ],
    "url": "https://www.laurathiersch.com.br/tdah-tratamento-bh"
  };

  // Schema.org MedicalCondition para Epilepsia
  const epilepsyConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Epilepsia Infantil",
    "alternateName": "Epilepsia",
    "description": "Condição neurológica caracterizada por crises epilépticas recorrentes",
    "signOrSymptom": [
      "Crises convulsivas",
      "Crises de ausência",
      "Movimentos involuntários",
      "Perda de consciência",
      "Comportamentos automáticos"
    ],
    "cause": "Diversos fatores incluindo genéticos, estruturais e metabólicos",
    "riskFactor": [
      "Histórico familiar",
      "Trauma craniano",
      "Infecções do sistema nervoso",
      "Malformações cerebrais"
    ],
    "possibleTreatment": [
      "Medicamentos antiepilépticos",
      "Dieta cetogênica",
      "Cirurgia (em casos selecionados)",
      "Estimulação do nervo vago"
    ],
    "url": "https://www.laurathiersch.com.br/epilepsia-infantil-bh"
  };

  // Schema.org base para MedicalBusiness (mantido para compatibilidade)
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Laura Thiersch - Neuropediatra",
    "alternateName": "Dra. Laura Thiersch",
    "url": siteConfig.baseUrl,
    "logo": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png",
    "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-perfil.jpg",
    "description": "Neuropediatra em Belo Horizonte especialista em TEA, TDAH e Epilepsia Infantil. Consultório no Prado, BH com atendimento humanizado e especializado.",
    "medicalSpecialty": [
      "https://schema.org/Pediatric",
      "https://schema.org/Neurology"
    ],
    "knowsAbout": [
      "Transtorno do Espectro Autista (TEA)",
      "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)",
      "Epilepsia Infantil",
      "Atraso no Desenvolvimento Neuropsicomotor",
      "Cefaleia Infantil",
      "Distúrbios do Sono em Crianças",
      "Paralisia Cerebral",
      "Síndromes Genéticas com Acometimento Neurológico"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.93085798660937,
      "longitude": -43.96385768462244
    },
    "telephone": "+5531995626630",
    "email": siteConfig.contact.email,
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer"
    ],
    "currenciesAccepted": "BRL",
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "sameAs": [
      "https://www.instagram.com/lauraneuroped/",
      "https://www.facebook.com/lauraneuroped/",
      "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Neuropediatria",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Consulta Neuropediátrica",
            "description": "Avaliação completa do neurodesenvolvimento infantil"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Diagnóstico de TEA",
            "description": "Avaliação para diagnóstico de Transtorno do Espectro Autista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Tratamento de TDAH",
            "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Acompanhamento de Epilepsia",
            "description": "Tratamento e controle de crises epilépticas infantis"
          }
        }
      ]
    }
  };

  // Schema.org para Reviews
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "MedicalBusiness",
      "name": "Dra. Laura Thiersch - Neuropediatra"
    },
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  };

  // Schema.org para Reviews individuais
  const individualReviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalBusiness",
      "name": "Dra. Laura Thiersch - Neuropediatra"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Mãe de João"
    },
    "reviewBody": "A Dra. Laura foi fundamental no diagnóstico precoce do nosso filho. Sua dedicação e conhecimento nos deram esperança e direção para o tratamento. Hoje ele está muito melhor e conseguindo se desenvolver.",
    "datePublished": "2024-01-15"
  };

  // Schema.org LocalBusiness expandido
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dra. Laura Thiersch - Neuropediatra",
    "alternateName": "Consultório Dra. Laura Thiersch",
    "url": siteConfig.baseUrl,
    "logo": "https://www.laurathiersch.com.br/images/logo-dra-laura-thiersch-neuropediatra.png",
    "image": "https://www.laurathiersch.com.br/images/dra-laura-thiersch-consultorio.jpg",
    "description": "Consultório especializado em neuropediatria em Belo Horizonte, oferecendo diagnóstico e tratamento para TEA, TDAH e Epilepsia Infantil.",
    "telephone": "+5531995626630",
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.93085798660937,
      "longitude": -43.96385768462244
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer"
    ],
    "currenciesAccepted": "BRL",
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Neuropediatria",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Consulta Neuropediátrica",
            "description": "Avaliação completa do neurodesenvolvimento infantil"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Diagnóstico de TEA",
            "description": "Avaliação para diagnóstico de Transtorno do Espectro Autista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Tratamento de TDAH",
            "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Acompanhamento de Epilepsia",
            "description": "Tratamento e controle de crises epilépticas infantis"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mãe de João"
        },
        "reviewBody": "A Dra. Laura foi fundamental no diagnóstico precoce do nosso filho. Sua dedicação e conhecimento nos deram esperança e direção para o tratamento.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Pais de Maria"
        },
        "reviewBody": "O acompanhamento com a Dra. Laura mudou nossa vida. Ela não só diagnosticou o TEA da nossa filha, mas nos orientou sobre os melhores tratamentos.",
        "datePublished": "2024-01-10"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Pais de Pedro"
        },
        "reviewBody": "O diagnóstico do TDAH do nosso filho pela Dra. Laura foi um divisor de águas. Com o tratamento adequado, ele melhorou muito na escola e em casa.",
        "datePublished": "2024-01-05"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/lauraneuroped/",
      "https://www.facebook.com/lauraneuroped/",
      "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
    ]
  };

  // Schema.org para FAQ (se estiver na página home)
  const faqSchema = pageType === 'home' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A Dra. Laura atende crianças com suspeita de TEA em Belo Horizonte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, a Dra. Laura Thiersch é uma neuropediatra em Belo Horizonte com vasta experiência no diagnóstico e acompanhamento de crianças com suspeita ou já diagnosticadas com Transtorno do Espectro Autista (TEA), oferecendo um plano de cuidados individualizado e humanizado."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a idade mínima para atendimento com a Dra. Laura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Dra. Laura Thiersch atende pacientes desde o nascimento (recém-nascidos) até a adolescência, acompanhando todas as fases do neurodesenvolvimento infantil. Sua experiência em epilepsia infantil desde recém-nascidos é um diferencial."
        }
      },
      {
        "@type": "Question",
        "name": "A Dra. Laura faz diagnóstico e acompanhamento de TDAH em crianças?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, a Dra. Laura Thiersch realiza o diagnóstico e acompanhamento completo do Transtorno do Déficit de Atenção e Hiperatividade (TDAH) em crianças e adolescentes. Ela oferece abordagens terapêuticas que incluem orientações comportamentais, escolares e, quando necessário, manejo medicamentoso."
        }
      }
    ]
  } : null;

  // Schema.org para Blog
  const blogSchema = pageType === 'blog' ? {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Educativo - Dra. Laura Thiersch",
    "description": "Artigos educativos sobre neuropediatria, TEA, TDAH, epilepsia e desenvolvimento infantil",
    "url": "https://www.laurathiersch.com.br/blog",
    "publisher": {
      "@type": "Person",
      "name": "Dra. Laura Thiersch",
      "jobTitle": "Neuropediatra",
      "url": siteConfig.baseUrl
    },
    "author": {
      "@type": "Person",
      "name": "Dra. Laura Thiersch",
      "jobTitle": "Neuropediatra"
    },
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "about": [
      {
        "@type": "MedicalCondition",
        "name": "Transtorno do Espectro Autista"
      },
      {
        "@type": "MedicalCondition",
        "name": "Transtorno do Déficit de Atenção e Hiperatividade"
      },
      {
        "@type": "MedicalCondition",
        "name": "Epilepsia Infantil"
      }
    ]
  } : null;

  // Schema.org para página de Avaliações
  const reviewsPageSchema = pageType === 'avaliacoes' ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Avaliações e Depoimentos - Dra. Laura Thiersch",
    "description": "Avaliações e depoimentos de pacientes da Dra. Laura Thiersch, neuropediatra em Belo Horizonte especialista em TEA, TDAH e Epilepsia Infantil",
    "url": "https://www.laurathiersch.com.br/avaliacoes",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Mãe de João"
          },
          "reviewBody": "A Dra. Laura foi fundamental no diagnóstico precoce do nosso filho. Sua dedicação e conhecimento nos deram esperança e direção para o tratamento.",
          "datePublished": "2024-01-15"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Pais de Maria"
          },
          "reviewBody": "O acompanhamento com a Dra. Laura mudou nossa vida. Ela não só diagnosticou o TEA da nossa filha, mas nos orientou sobre os melhores tratamentos.",
          "datePublished": "2024-01-10"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Pais de Pedro"
          },
          "reviewBody": "O diagnóstico do TDAH do nosso filho pela Dra. Laura foi um divisor de águas. Com o tratamento adequado, ele melhorou muito na escola e em casa.",
          "datePublished": "2024-01-05"
        }
      ]
    }
  } : null;

  // Schema.org para Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.laurathiersch.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageType === 'tea' ? 'TEA' : 
                pageType === 'tdah' ? 'TDAH' : 
                pageType === 'epilepsia' ? 'Epilepsia' :
                pageType === 'sobre' ? 'Sobre' :
                pageType === 'atendimentos' ? 'Atendimentos' :
                pageType === 'contato' ? 'Contato' :
                pageType === 'blog' ? 'Blog' :
                pageType === 'avaliacoes' ? 'Avaliações' : 'Página',
        "item": `https://www.laurathiersch.com.br/${pageType}`
      }
    ]
  };

  // Schema.org para Reviews/Avaliações
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "MedicalOrganization",
      "name": "Consultório Dra. Laura Thiersch - Neuropediatra",
      "url": siteConfig.baseUrl
    },
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  };

  // Schema.org para Review individual
  const individualReviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalOrganization",
      "name": "Consultório Dra. Laura Thiersch - Neuropediatra"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Mãe de paciente"
    },
    "reviewBody": "Excelente atendimento, muito atenciosa e profissional. Recomendo muito!",
    "datePublished": "2024-01-15"
  };

  // Função para retornar schemas específicos baseado no tipo de página
  const getSpecificSchemas = () => {
    switch (pageType) {
      case 'tea':
        return [teaProcedureSchema, teaConditionSchema];
      case 'tdah':
        return [tdahProcedureSchema, tdahConditionSchema];
      case 'epilepsia':
        return [epilepsyProcedureSchema, epilepsyConditionSchema];
      default:
        return [];
    }
  };

  return (
    <>
      {/* Schema.org Person - Dra. Laura */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      
      {/* Schema.org MedicalOrganization - Consultório */}
      <script type="application/ld+json">
        {JSON.stringify(medicalOrganizationSchema)}
      </script>
      
      {/* Schema.org MedicalBusiness (mantido para compatibilidade) */}
      <script type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </script>
      
      {/* Schema.org AggregateRating */}
      <script type="application/ld+json">
        {JSON.stringify(reviewsSchema)}
      </script>
      
      {/* Schema.org Reviews individuais */}
      <script type="application/ld+json">
        {JSON.stringify(individualReviewsSchema)}
      </script>
      
      {/* Schema.org LocalBusiness expandido */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Schema.org específicos para cada especialidade */}
      {getSpecificSchemas().map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Schema.org FAQ (apenas na home) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Schema.org Blog (apenas na página do blog) */}
      {blogSchema && (
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      )}
      
      {/* Schema.org página de Avaliações */}
      {reviewsPageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewsPageSchema)}
        </script>
      )}
      
      {/* Schema.org Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Schema.org Reviews/Avaliações */}
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
      
      {/* Schema.org Review individual */}
      <script type="application/ld+json">
        {JSON.stringify(individualReviewSchema)}
      </script>
    </>
  );
};

export default AdvancedSchema; 