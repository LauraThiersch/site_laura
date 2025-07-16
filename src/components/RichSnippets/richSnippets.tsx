import React from 'react';
import { siteConfig } from '../../siteConfig';

const RichSnippets: React.FC = () => {
  return (
    <>
      {/* Schema.org para LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Dra. Laura Thiersch - Neuropediatra",
          "url": siteConfig.baseUrl,
          "logo": `${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png`,
          "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg`,
          "description": "Neuropediatra em Belo Horizonte com experiência em TEA, TDAH e Epilepsia Infantil. Consultas particulares e convênio. Agende sua consulta com a Dra. Laura Thiersch.",
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
            "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
          ]
        })}
      </script>

      {/* Schema.org para Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dra. Laura Maria Silva Thiersch",
          "alternateName": "Dra. Laura Thiersch",
          "jobTitle": "Neuropediatra",
          "description": "Neuropediatra com experiência em TEA, TDAH e Epilepsia Infantil em Belo Horizonte",
          "url": siteConfig.baseUrl,
          "image": `${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg`,
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
        })}
      </script>

      {/* Schema.org para BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Sobre",
              "item": `${siteConfig.baseUrl}/sobre`
            }
          ]
        })}
      </script>

      {/* Schema.org para MedicalService - TEA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalService",
          "name": "Diagnóstico e Tratamento TEA",
          "description": "Avaliação especializada e tratamento do Transtorno do Espectro Autista (TEA) em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
          "url": `${siteConfig.baseUrl}/tea-tratamento-bh`,
          "provider": {
            "@type": "MedicalOrganization",
            "name": "Dra. Laura Thiersch - Neuropediatra",
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
          "category": "Medical Service"
        })}
      </script>

      {/* Schema.org para MedicalService - TDAH */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalService",
          "name": "Diagnóstico e Tratamento TDAH",
          "description": "Avaliação especializada e tratamento do Transtorno do Déficit de Atenção e Hiperatividade (TDAH) em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
          "url": `${siteConfig.baseUrl}/tdah-tratamento-bh`,
          "provider": {
            "@type": "MedicalOrganization",
            "name": "Dra. Laura Thiersch - Neuropediatra",
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
          "category": "Medical Service"
        })}
      </script>

      {/* Schema.org para MedicalService - Epilepsia */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalService",
          "name": "Diagnóstico e Tratamento Epilepsia Infantil",
          "description": "Avaliação especializada e tratamento da epilepsia em crianças e adolescentes. Dra. Laura Thiersch, neuropediatra em Belo Horizonte.",
          "url": `${siteConfig.baseUrl}/epilepsia-infantil-bh`,
          "provider": {
            "@type": "MedicalOrganization",
            "name": "Dra. Laura Thiersch - Neuropediatra",
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
          "category": "Medical Service"
        })}
      </script>

      {/* Schema.org para BreadcrumbList - Atendimentos */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Atendimentos",
              "item": `${siteConfig.baseUrl}/atendimentos`
            }
          ]
        })}
      </script>

      {/* Schema.org para BreadcrumbList - Contato */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Contato",
              "item": `${siteConfig.baseUrl}/contato`
            }
          ]
        })}
      </script>
    </>
  );
};

export default RichSnippets; 