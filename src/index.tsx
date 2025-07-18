import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos base e globais
import App from './App'; // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importa a função de reporte de Core Web Vitals
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Google Analytics e Google Ads já configurados no index.html
// Console logs para debug (você pode remover em produção)
console.log('🎯 GA4 e Google Ads configurados via gtag.js');
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
