import React, { useEffect } from 'react';

interface FontOptimizerProps {
  fonts?: Array<{
    family: string;
    src: string;
    weight?: string;
    style?: string;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  }>;
}

const FontOptimizer: React.FC<FontOptimizerProps> = ({ 
  fonts = [
    {
      family: 'Berose Demo',
      src: '/fonts/BEROSE DEMO.TTF',
      weight: 'normal',
      style: 'normal',
      display: 'swap'
    },
    {
      family: 'Gobold High Thin',
      src: '/fonts/GOBOLD HIGH THIN.OTF',
      weight: 'normal',
      style: 'normal',
      display: 'swap'
    }
  ]
}) => {
  useEffect(() => {
    // 1. Preload de fontes críticas
    const preloadCriticalFonts = () => {
      fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.src;
        link.as = 'font';
        link.type = font.src.includes('.ttf') ? 'font/ttf' : 'font/otf';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // 2. Injetar @font-face com font-display: swap
    const injectFontFaces = () => {
      const style = document.createElement('style');
      style.textContent = fonts.map(font => `
        @font-face {
          font-family: '${font.family}';
          src: url('${font.src}') format('${font.src.includes('.ttf') ? 'truetype' : 'opentype'}');
          font-weight: ${font.weight || 'normal'};
          font-style: ${font.style || 'normal'};
          font-display: ${font.display || 'swap'};
        }
      `).join('\n');
      document.head.appendChild(style);
    };

    // 3. Detectar quando as fontes estão carregadas
    const detectFontLoading = () => {
      if ('fonts' in document) {
        const fontLoadPromises = fonts.map(font => 
          document.fonts.load(`${font.weight || 'normal'} 1em '${font.family}'`)
        );

        Promise.all(fontLoadPromises).then(() => {
          // Todas as fontes carregaram
          document.documentElement.classList.add('fonts-loaded');
          console.log('✅ Todas as fontes carregaram com sucesso');
        }).catch(error => {
          console.warn('⚠️ Erro ao carregar fontes:', error);
        });
      }
    };

    // 4. Fallback para fontes não carregadas
    const setupFontFallbacks = () => {
      const style = document.createElement('style');
      style.textContent = `
        .font-loading {
          font-family: 'Berose Demo', 'Arial', sans-serif;
          opacity: 0.8;
        }
        
        .fonts-loaded .font-loading {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        
        .font-fallback {
          font-family: 'Arial', 'Helvetica', sans-serif;
        }
      `;
      document.head.appendChild(style);
    };

    // 5. Otimização de performance com font-display: swap
    const optimizeFontDisplay = () => {
      // Adicionar classe para indicar que as fontes estão carregando
      document.documentElement.classList.add('font-loading');
      
      // Remover classe após um tempo para garantir que as fontes carregaram
      setTimeout(() => {
        document.documentElement.classList.remove('font-loading');
      }, 3000);
    };

    // Executar todas as otimizações
    preloadCriticalFonts();
    injectFontFaces();
    detectFontLoading();
    setupFontFallbacks();
    optimizeFontDisplay();

    // Cleanup
    return () => {
      // Remover elementos injetados se necessário
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [fonts]);

  // 6. Componente para testar carregamento de fontes
  const FontTestComponent = () => {
    useEffect(() => {
      const testFont = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Testar se a fonte está disponível
        const testString = 'Teste de Fonte';
        ctx.font = '16px "Berose Demo"';
        const width1 = ctx.measureText(testString).width;
        
        ctx.font = '16px Arial';
        const width2 = ctx.measureText(testString).width;
        
        // Se as larguras são diferentes, a fonte carregou
        if (Math.abs(width1 - width2) > 1) {
          document.documentElement.classList.add('custom-font-loaded');
        }
      };

      // Testar após um pequeno delay
      setTimeout(testFont, 100);
    }, []);

    return null;
  };

  return (
    <>
      <FontTestComponent />
      {/* CSS adicional para otimização */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Otimização de fontes */
          .font-optimized {
            font-display: swap;
          }
          
          /* Indicador de carregamento */
          .font-loading-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #007bff;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .font-loading .font-loading-indicator {
            opacity: 1;
          }
          
          /* Melhorar legibilidade durante carregamento */
          .font-loading {
            text-rendering: optimizeSpeed;
          }
          
          .fonts-loaded {
            text-rendering: optimizeLegibility;
          }
        `
      }} />
      
      {/* Indicador visual de carregamento */}
      <div className="font-loading-indicator">
        Carregando fontes...
      </div>
    </>
  );
};

export default FontOptimizer; 