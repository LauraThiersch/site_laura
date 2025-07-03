import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  pageType: 'home' | 'sobre' | 'atendimentos' | 'contato';
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ pageType }) => {
  useEffect(() => {
    // 🚀 Otimizações de Core Web Vitals
    
    // 1. Preload de recursos críticos
    const preloadCriticalResources = () => {
      // Preload da fonte principal
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/BEROSE DEMO.TTF';
      fontLink.as = 'font';
      fontLink.type = 'font/ttf';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload da imagem hero (apenas na home)
      if (pageType === 'home') {
        const heroImage = document.createElement('link');
        heroImage.rel = 'preload';
        heroImage.href = '/images/dra-laura-thiersch-hero.webp';
        heroImage.as = 'image';
        document.head.appendChild(heroImage);
      }
    };

    // 2. Otimização de LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Definir dimensões das imagens para evitar layout shift
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.width || !img.height) {
          // Definir dimensões padrão se não estiverem definidas
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });
    };

    // 3. Otimização de CLS (Cumulative Layout Shift)
    const optimizeCLS = () => {
      // Reservar espaço para elementos que carregam dinamicamente
      const containers = document.querySelectorAll('.dynamic-content');
      containers.forEach(container => {
        (container as HTMLElement).style.minHeight = '200px';
      });
    };

    // 4. Otimização de FID (First Input Delay)
    const optimizeFID = () => {
      // Deferir JavaScript não crítico
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    };

    // 5. Monitoramento de Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Monitorar LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          
          // Enviar para analytics se LCP > 2.5s
          if (lastEntry.startTime > 2500) {
            // Implementar alerta ou métrica
            console.warn('LCP acima do recomendado:', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitorar CLS
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          console.log('CLS:', clsValue);
          
          // Enviar para analytics se CLS > 0.1
          if (clsValue > 0.1) {
            console.warn('CLS acima do recomendado:', clsValue);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Monitorar FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const firstInputEntry = entry as any;
            const fid = firstInputEntry.processingStart - entry.startTime;
            console.log('FID:', fid);
            
            // Enviar para analytics se FID > 100ms
            if (fid > 100) {
              console.warn('FID acima do recomendado:', fid);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }
    };

    // Executar otimizações
    preloadCriticalResources();
    optimizeLCP();
    optimizeCLS();
    optimizeFID();
    monitorCoreWebVitals();

    // Cleanup
    return () => {
      // Limpar observers se necessário
    };
  }, [pageType]);

  // 6. Otimização de imagens com Intersection Observer
  useEffect(() => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    return () => {
      lazyImages.forEach(img => imageObserver.unobserve(img));
    };
  }, []);

  return null; // Componente não renderiza nada visualmente
};

export default PerformanceOptimizer; 