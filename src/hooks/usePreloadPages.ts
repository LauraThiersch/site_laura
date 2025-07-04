import { useEffect } from 'react';

// Hook para preload das páginas de forma segura
export const usePreloadPages = () => {
  useEffect(() => {
    // Preload das páginas quando o usuário navega
    const preloadPage = (path: string) => {
      switch (path) {
        case '/sobre':
          import('../pages/Sobre/sobre');
          break;
        case '/atendimentos':
          import('../pages/Atendimentos/atendimentos');
          break;
        case '/contato':
          import('../pages/Contato/contato');
          break;
        case '/tea-tratamento-bh':
          import('../pages/TEA/tea');
          break;
        case '/tdah-tratamento-bh':
          import('../pages/TDAH/tdah');
          break;
        case '/epilepsia-infantil-bh':
          import('../pages/Epilepsia/epilepsia');
          break;
        case '/blog':
          import('../pages/Blog/blog');
          break;
        default:
          break;
      }
    };

    // Preload das páginas principais após carregamento inicial
    const timer = setTimeout(() => {
      preloadPage('/sobre');
      preloadPage('/atendimentos');
      preloadPage('/contato');
      preloadPage('/tea-tratamento-bh');
      preloadPage('/tdah-tratamento-bh');
      preloadPage('/epilepsia-infantil-bh');
      preloadPage('/blog');
    }, 2000); // 2 segundos após carregamento

    return () => clearTimeout(timer);
  }, []);
}; 