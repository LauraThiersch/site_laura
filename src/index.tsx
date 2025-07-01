import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos base e globais
import App from './App'; // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importa a função de reporte de Core Web Vitals

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
// que são um fator de ranqueamento do Google.
reportWebVitals();
