import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4'; // <-- NOVO: Importa o react-ga4
import './index.css'; // Importa os estilos base e globais
import App from './App'; // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importa a função de reporte de Core Web Vitals
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { siteConfig } from './siteConfig.js';

// Configuração Google Analytics 4
ReactGA.initialize(siteConfig.googleAnalyticsId, {
  gaOptions: {
    custom_map: {
      'dimension1': 'neuropediatra_bh',
      'dimension2': 'tea_tdah_epilepsia',
      'dimension3': 'prado_bh',
      'dimension4': 'neuropediatra_bh',
      'dimension5': 'consulta_agendamento'
    },
    // Compliance LGPD e otimização para privacidade
    anonymize_ip: true, // Obrigatório no Brasil
    allow_google_signals: true,
    allow_ad_personalization_signals: true
  },
  gtagOptions: {
    'content_group1': 'Neuropediatria',
    'content_group2': siteConfig.contact.address.city,
    'content_group3': 'TEA_TDAH_Epilepsia',
    'content_group4': 'Consultorio_Prado',
    'custom_parameter_performance': 'optimized'
  }
});

  // Pageview inicial
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
  title: "Dra Laura Thiersch - Neuropediatra com Experiência em TEA TDAH Epilepsia BH",
  'dimension1': 'primeira_visita_neuropediatra_bh',
  'dimension2': 'interesse_tea_tdah_epilepsia'
});

// Console logs para debug (você pode remover em produção)
console.log('🎯 GA4 Inicializado');
console.log('📊 Rastreamento ativo para: TEA, TDAH, Epilepsia');
console.log('🏥 Foco: Consultório Prado BH');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// React.StrictMode ajuda a identificar potenciais problemas na aplicação durante o desenvolvimento.
// É uma excelente prática para manter o código limpo e otimizado.
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente principal da aplicação */}
  </React.StrictMode>
);

// reportWebVitals é importante para monitorar as métricas de performance (Core Web Vitals),
// que são importantes para performance.
// Vamos otimizar isso no próximo passo para enviar dados para o GA4
reportWebVitals();

// Ativa o PWA (service worker)
serviceWorkerRegistration.register();
