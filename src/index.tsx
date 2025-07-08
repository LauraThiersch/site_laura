import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4'; // <-- NOVO: Importa o react-ga4
import './index.css'; // Importa os estilos base e globais
import App from './App'; // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importa a função de reporte de Core Web Vitals
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// 🎯 CONFIGURAÇÃO MATADORA GA4 - DRA LAURA THIERSCH NEUROPEDIATRA BH
// Inicialização otimizada
ReactGA.initialize('G-RWY87ZSVH3', {
      // Configurações personalizadas
  gaOptions: {
    custom_map: {
      'dimension1': 'neuropediatra_bh', // Palavra-chave principal
      'dimension2': 'tea_tdah_epilepsia', // Especialidades-chave
      'dimension3': 'prado_bh', // Localização específica
      'dimension4': 'laura_thiersch', // Marca pessoal
      'dimension5': 'consulta_agendamento' // Conversão principal
    },
    // Compliance LGPD e otimização para privacidade
    anonymize_ip: true, // Obrigatório no Brasil
    allow_google_signals: true,
    allow_ad_personalization_signals: true
  },
  gtagOptions: {
    // Grupos de conteúdo
    'content_group1': 'Neuropediatria', // Categoria principal
          'content_group2': 'Belo Horizonte', // Localização
    'content_group3': 'TEA_TDAH_Epilepsia', // Sub-especialidades
    'content_group4': 'Consultorio_Prado', // Área de atuação
    // Parâmetro para otimização de performance (Core Web Vitals)
          'custom_parameter_performance': 'optimized'
  }
});

  // 🚀 Pageview inicial otimizado
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
  title: "Dra Laura Thiersch - Neuropediatra Especialista TEA TDAH Epilepsia BH",
  // Parâmetros personalizados para análise de funil
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
