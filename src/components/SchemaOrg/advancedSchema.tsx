import React from 'react';
import { siteConfig } from '../../siteConfig';

interface AdvancedSchemaProps {
  pageType?: string;
}

const AdvancedSchema: React.FC<AdvancedSchemaProps> = ({ pageType = 'home' }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dra. Laura Maria Silva Thiersch - Neuropediatra",
    "url": siteConfig.baseUrl,
    "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg`,
    "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
    "description": "Neuropediatra em Belo Horizonte especialista em TEA, TDAH e epilepsia infantil. Consultas particulares e convênio. Agende sua consulta com a Dra. Laura Thiersch.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.contact.coordinates.latitude,
      "longitude": siteConfig.contact.coordinates.longitude
    },
    "sameAs": [
      "https://www.instagram.com/lauraneuroped/",
      "https://www.facebook.com/lauraneuroped/",
      "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte",
      "https://maps.google.com/?q=Rua+Turquesa,+347+-+Prado,+Belo+Horizonte+-+MG,+30411-177"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Neuropediatria",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Consulta Neuropediátrica",
            "description": "Avaliação especializada em neurologia pediátrica"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Diagnóstico TEA",
            "description": "Avaliação e diagnóstico do Transtorno do Espectro Autista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Tratamento TDAH",
            "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Tratamento Epilepsia Infantil",
            "description": "Diagnóstico e tratamento da epilepsia em crianças"
          }
        }
      ]
    }
  };

  const teaSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Diagnóstico e Tratamento TEA",
    "description": "Avaliação especializada e tratamento do Transtorno do Espectro Autista (TEA) em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
    "url": `${siteConfig.baseUrl}/tea-tratamento-bh`,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
      "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-consultorio.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.zipCode,
        "addressCountry": siteConfig.contact.address.country
      },
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email
    },
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "serviceType": "Autism Diagnosis and Treatment",
    "category": "Medical Service",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${siteConfig.baseUrl}/tea-tratamento-bh`,
      "serviceType": "In-Person Consultation"
    }
  };

  const tdahSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Diagnóstico e Tratamento TDAH",
    "description": "Avaliação especializada e tratamento do Transtorno do Déficit de Atenção e Hiperatividade (TDAH) em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
    "url": `${siteConfig.baseUrl}/tdah-tratamento-bh`,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
      "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-consultorio.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.zipCode,
        "addressCountry": siteConfig.contact.address.country
      },
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email
    },
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "serviceType": "ADHD Diagnosis and Treatment",
    "category": "Medical Service",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${siteConfig.baseUrl}/tdah-tratamento-bh`,
      "serviceType": "In-Person Consultation"
    }
  };

  const epilepsiaSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Diagnóstico e Tratamento Epilepsia Infantil",
    "description": "Avaliação especializada e tratamento da epilepsia em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
    "url": `${siteConfig.baseUrl}/epilepsia-infantil-bh`,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
      "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-consultorio.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.zipCode,
        "addressCountry": siteConfig.contact.address.country
      },
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email
    },
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "serviceType": "Pediatric Epilepsy Treatment",
    "category": "Medical Service",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${siteConfig.baseUrl}/epilepsia-infantil-bh`,
      "serviceType": "In-Person Consultation"
    }
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Laura Maria Silva Thiersch",
    "jobTitle": "Neuropediatra",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
      "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.zipCode,
        "addressCountry": siteConfig.contact.address.country
      },
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email
    },
    "url": `${siteConfig.baseUrl}/tea-tratamento-bh`,
    "sameAs": [
      "https://www.instagram.com/lauraneuroped/",
      "https://www.facebook.com/lauraneuroped/",
      "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dra. Laura Thiersch - Neuropediatra",
    "url": `${siteConfig.baseUrl}/tdah-tratamento-bh`,
    "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
    "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-consultorio.jpg`,
    "description": "Clínica de Neurologia Pediátrica da Dra. Laura Thiersch em Belo Horizonte, especializada em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
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
            "@type": "MedicalService",
            "name": "Consulta Neuropediátrica",
            "description": "Avaliação especializada em neurologia pediátrica"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Diagnóstico TEA",
            "description": "Avaliação e diagnóstico do Transtorno do Espectro Autista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Tratamento TDAH",
            "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalService",
            "name": "Tratamento Epilepsia Infantil",
            "description": "Diagnóstico e tratamento da epilepsia em crianças"
          }
        }
      ]
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dra. Laura Thiersch - Neuropediatra em Belo Horizonte",
    "url": siteConfig.baseUrl,
    "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
    "image": `${siteConfig.baseUrl}/images/consultorio-neuropediatra-belo-horizonte.jpg`,
    "description": "Clínica de Neurologia Pediátrica da Dra. Laura Thiersch em Belo Horizonte, especializada em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.contact.coordinates.latitude,
      "longitude": siteConfig.contact.coordinates.longitude
    }
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog - Dra. Laura Thiersch Neuropediatra",
    "description": "Artigos educativos sobre TEA, TDAH, Epilepsia e desenvolvimento infantil. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
    "url": `${siteConfig.baseUrl}/blog`,
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Dra. Laura Thiersch - Neuropediatra",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`
      }
    },
    "author": {
      "@type": "Person",
      "name": "Dra. Laura Thiersch",
      "jobTitle": "Neuropediatra",
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Dra. Laura Thiersch - Neuropediatra"
      }
    }
  };

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dra. Laura Thiersch - Neuropediatra",
    "url": `${siteConfig.baseUrl}/avaliacoes`,
    "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
    "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg`,
    "description": "Avaliações e depoimentos de pacientes da Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Especialista em TEA, TDAH e Epilepsia Infantil.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${siteConfig.baseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageType.charAt(0).toUpperCase() + pageType.slice(1),
        "item": `${siteConfig.baseUrl}/${pageType}`
      }
    ]
  };

  let schemaToRender;

  switch (pageType) {
    case 'tea':
      schemaToRender = [baseSchema, teaSchema, breadcrumbSchema];
      break;
    case 'tdah':
      schemaToRender = [baseSchema, tdahSchema, breadcrumbSchema];
      break;
    case 'epilepsia':
      schemaToRender = [baseSchema, epilepsiaSchema, breadcrumbSchema];
      break;
    case 'sobre':
      schemaToRender = [baseSchema, aboutSchema, breadcrumbSchema];
      break;
    case 'atendimentos':
      schemaToRender = [baseSchema, servicesSchema, breadcrumbSchema];
      break;
    case 'contato':
      schemaToRender = [baseSchema, contactSchema, breadcrumbSchema];
      break;
    case 'blog':
      schemaToRender = [baseSchema, blogSchema, breadcrumbSchema];
      break;
    case 'avaliacoes':
      schemaToRender = [baseSchema, reviewsSchema, breadcrumbSchema];
      break;
    default:
      schemaToRender = [baseSchema];
  }

  return (
    <>
      {schemaToRender.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
};

export default AdvancedSchema; 