import { siteConfig } from '../../config/siteConfig';
import React from 'react';

interface RichSnippetsProps {
  pageType: 'home' | 'sobre' | 'atendimentos' | 'contato';
}

const RichSnippets: React.FC<RichSnippetsProps> = ({ pageType }) => {
  // Snippets específicos para cada página
  const getPageSpecificSnippets = () => {
    switch (pageType) {
      case 'home':
        return {
          // Rich Snippet para Local Business
          localBusiness: {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dra. Laura Thiersch - Neuropediatra",
            "description": "Neuropediatra em Belo Horizonte especialista em TEA, TDAH e Epilepsia Infantil",
            "url": siteConfig.baseUrl,
            "telephone": "+5531985486226",
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
            "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          // Rich Snippet para BreadcrumbList
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteConfig.baseUrl
              }
            ]
          }
        };

      case 'sobre':
        return {
          // Rich Snippet para Person (Dra. Laura)
          person: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": siteConfig.contact.fullName,
            "alternateName": "Dra. Laura Thiersch",
            "jobTitle": "Neuropediatra",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Dra. Laura Thiersch - Neuropediatra"
            },
            "description": "Neuropediatra em Belo Horizonte com especialização em TEA, TDAH e Epilepsia Infantil",
            "knowsAbout": [
              "Transtorno do Espectro Autista (TEA)",
              "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)",
              "Epilepsia Infantil",
              "Neurodesenvolvimento Infantil"
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Universidade Federal de Minas Gerais"
            },
            "hasCredential": [
              "Residência em Pediatria",
              "Residência em Neurologia Infantil",
              "Especialização em Neuropediatria"
            ]
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteConfig.baseUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Sobre",
                "item": "https://www.laurathiersch.com.br/sobre"
              }
            ]
          }
        };

      case 'atendimentos':
        return {
          // Rich Snippet para Service
          service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Consultas de Neuropediatria",
            "description": "Atendimento especializado em neuropediatria para crianças e adolescentes",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Dra. Laura Thiersch - Neuropediatra"
            },
            "serviceType": "Consulta Médica",
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
            }
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteConfig.baseUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Atendimentos",
                "item": "https://www.laurathiersch.com.br/atendimentos"
              }
            ]
          }
        };

      case 'contato':
        return {
          // Rich Snippet para ContactPage
          contactPage: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contato - Dra. Laura Thiersch",
            "description": "Entre em contato para agendar sua consulta com a Dra. Laura Thiersch",
            "mainEntity": {
              "@type": "MedicalBusiness",
              "name": "Dra. Laura Thiersch - Neuropediatra",
              "telephone": "+5531985486226",
              "email": siteConfig.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.contact.address.street,
                "addressLocality": siteConfig.contact.address.city,
                "addressRegion": siteConfig.contact.address.state,
                "postalCode": siteConfig.contact.address.zipCode,
                "addressCountry": siteConfig.contact.address.country
              }
            }
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteConfig.baseUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contato",
                "item": "https://www.laurathiersch.com.br/contato"
              }
            ]
          }
        };

      default:
        return {};
    }
  };

  const snippets = getPageSpecificSnippets();

  return (
    <>
      {Object.entries(snippets).map(([key, schema]) => (
        <script key={key} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
};

export default RichSnippets; 