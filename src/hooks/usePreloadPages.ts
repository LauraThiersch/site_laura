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
        default:
          break;
      }
    };

    // Preload das páginas principais após carregamento inicial
    const timer = setTimeout(() => {
      preloadPage('/sobre');
      preloadPage('/atendimentos');
      preloadPage('/contato');
    }, 2000); // 2 segundos após carregamento

    return () => clearTimeout(timer);
  }, []);
}; 