import { ReportHandler } from 'web-vitals';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// 🎯 INTERFACE PERSONALIZADA PARA NOSSOS PARÂMETROS GA4
// Baseada na nossa estratégia SEO para Dra Laura Thiersch Neuropediatra BH
interface CustomGA4EventParams {
  area_desempenho: string;
  segmento_usuario: string;
  foco_seo: string;
  metric_name: string;
  metric_value: number;
  value?: number; // Valor principal do evento para GA4
}

// 🚀 DECLARAÇÃO GLOBAL PARA GTAG (RESOLVE O PROBLEMA DE TIPAGEM)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 🎯 FUNÇÃO OTIMIZADA PARA ENVIAR CORE WEB VITALS PARA GA4
// Usando gtag diretamente (MELHOR para GA4)
const sendToGA4 = (metric: any) => {
  // Verifica se o gtag está disponível
  if (!window.gtag) {
    console.warn('Google Analytics gtag not available.');
    return;
  }

  // 💡 ESTRUTURA CORRETA PARA GA4: parâmetros diretos, sem aninhamento
  const eventParams: CustomGA4EventParams = {
    area_desempenho: 'performance_neuropediatra_bh',
    segmento_usuario: `${metric.name}_tea_tdah_epilepsia`,
    foco_seo: 'core_web_vitals_seo',
    metric_name: metric.name,
    metric_value: metric.value,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
  };

  // Envia evento para GA4 com estrutura correta
  window.gtag('event', 'core_web_vitals_report', eventParams);

  // Log para debug (você pode remover em produção)
  console.log(`🚀 Core Web Vital enviado para GA4: ${metric.name} = ${metric.value}`);
  
  // Análise específica das métricas para otimização SEO
  if (metric.name === 'LCP') {
    console.log(`📊 LCP (Largest Contentful Paint): ${metric.value}ms - ${metric.value <= 2500 ? '✅ BOM' : '⚠️ PRECISA MELHORAR'}`);
  }
  if (metric.name === 'FID') {
    console.log(`📊 FID (First Input Delay): ${metric.value}ms - ${metric.value <= 100 ? '✅ BOM' : '⚠️ PRECISA MELHORAR'}`);
  }
  if (metric.name === 'CLS') {
    console.log(`📊 CLS (Cumulative Layout Shift): ${metric.value} - ${metric.value <= 0.1 ? '✅ BOM' : '⚠️ PRECISA MELHORAR'}`);
  }
  if (metric.name === 'FCP') {
    console.log(`📊 FCP (First Contentful Paint): ${metric.value}ms - ${metric.value <= 1800 ? '✅ BOM' : '⚠️ PRECISA MELHORAR'}`);
  }
  if (metric.name === 'TTFB') {
    console.log(`📊 TTFB (Time to First Byte): ${metric.value}ms - ${metric.value <= 800 ? '✅ BOM' : '⚠️ PRECISA MELHORAR'}`);
  }
};

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Configura cada métrica para ser enviada tanto para o callback original
      // quanto para o GA4 com nossa estratégia personalizada
      
      getCLS((metric) => {
        onPerfEntry(metric); // Callback original
        sendToGA4(metric); // Envia para GA4 com nossa estratégia
      });
      
      getFID((metric) => {
        onPerfEntry(metric);
        sendToGA4(metric);
      });
      
      getFCP((metric) => {
        onPerfEntry(metric);
        sendToGA4(metric);
      });
      
      getLCP((metric) => {
        onPerfEntry(metric);
        sendToGA4(metric);
      });
      
      getTTFB((metric) => {
        onPerfEntry(metric);
        sendToGA4(metric);
      });
    });
  } else {
    // Se não há callback, ainda assim enviamos para o GA4
    // Isso garante que sempre tenhamos dados de performance no Analytics
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToGA4);
      getFID(sendToGA4);
      getFCP(sendToGA4);
      getLCP(sendToGA4);
      getTTFB(sendToGA4);
    });
  }
};

function sendToConsole(metric: any) {
  console.log(metric.name, metric.value);
}

getCLS(sendToConsole);
getFID(sendToConsole);
getLCP(sendToConsole);
getFCP(sendToConsole);
getTTFB(sendToConsole);

export default reportWebVitals;
