import React from 'react';

interface AdvancedSchemaProps {
  pageType: 'home' | 'sobre' | 'atendimentos' | 'contato';
}

const AdvancedSchema: React.FC<AdvancedSchemaProps> = ({ pageType }) => {
  // Schema.org base para MedicalBusiness
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Laura Thiersch - Neuropediatra",
    "alternateName": "Dra. Laura Thiersch",
    "url": "https://www.laurathiersch.com.br",
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
      "streetAddress": "Rua Turquesa, 347",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30411-177",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.93085798660937,
      "longitude": -43.96385768462244
    },
    "telephone": "+5531995626630",
    "email": "contato@lauraneuroped.com.br",
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
      "name": "Belo Horizonte"
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

  return (
    <>
      {/* Schema.org MedicalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </script>
      
      {/* Schema.org AggregateRating */}
      <script type="application/ld+json">
        {JSON.stringify(reviewsSchema)}
      </script>
      
      {/* Schema.org FAQ (apenas na home) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </>
  );
};

export default AdvancedSchema; 