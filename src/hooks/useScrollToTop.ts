import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Força o scroll para o topo imediatamente
    window.scrollTo(0, 0);
    
    // Também tenta com setTimeout para garantir que funcione
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // E mais uma vez com delay maior para garantir
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
    
    // Força o scroll do documento também
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, [pathname]);
}; 