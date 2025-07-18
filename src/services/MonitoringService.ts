// 🚀 SISTEMA DE MONITORAMENTO AVANÇADO
// Monitora performance, SEO, analytics e gera relatórios

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

export interface SEOReport {
  metaTags: {
    title: boolean;
    description: boolean;
    keywords: boolean;
    canonical: boolean;
  };
  structuredData: boolean;
  images: {
    optimized: number;
    total: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
  };
}

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversions: number;
}

export interface MonitoringReport {
  timestamp: string;
  url: string;
  performance: PerformanceMetrics;
  seo: SEOReport;
  analytics: AnalyticsData;
  recommendations: string[];
}

class MonitoringService {
  private static instance: MonitoringService;
  private performanceObserver: PerformanceObserver | null = null;
  private reports: MonitoringReport[] = [];

  private constructor() {
    this.initializeMonitoring();
  }

  static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  private initializeMonitoring(): void {
    if (typeof window !== 'undefined') {
      this.setupPerformanceMonitoring();
      this.setupSEOMonitoring();
      this.setupAnalyticsMonitoring();
      this.setupErrorMonitoring();
    }
  }

  // 🎯 MONITORAMENTO DE PERFORMANCE
  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      this.performanceObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        this.logPerformanceMetric('LCP', lcp, 2500);
      });
      
      this.performanceObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          this.logPerformanceMetric('FID', fid, 100);
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((entryList) => {
        let cls = 0;
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        
        this.logPerformanceMetric('CLS', cls, 0.1);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fcp = entry.startTime;
          this.logPerformanceMetric('FCP', fcp, 1800);
        });
      });
      
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // TTFB (Time to First Byte)
      const navigationObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          const ttfb = entry.responseStart - entry.requestStart;
          this.logPerformanceMetric('TTFB', ttfb, 600);
        });
      });
      
      navigationObserver.observe({ entryTypes: ['navigation'] });
    }
  }

  private logPerformanceMetric(metric: string, value: number, threshold: number): void {
    const status = value <= threshold ? '✅' : '⚠️';
    console.log(`${status} ${metric}: ${value.toFixed(2)} (meta: ≤ ${threshold})`);
    
    if (value > threshold) {
      this.sendPerformanceAlert(metric, value, threshold);
    }
  }

  // 🔍 MONITORAMENTO DE SEO
  private setupSEOMonitoring(): void {
    // Verificar meta tags
    this.checkMetaTags();
    
    // Verificar structured data
    this.checkStructuredData();
    
    // Verificar imagens
    this.checkImageOptimization();
    
    // Verificar links
    this.checkLinks();
  }

  private checkMetaTags(): void {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');

    const issues = [];
    
    if (!title || title.length < 30 || title.length > 60) {
      issues.push('Título não otimizado (30-60 caracteres)');
    }
    
    if (!description || description.length < 120 || description.length > 160) {
      issues.push('Meta descrição não otimizada (120-160 caracteres)');
    }
    
    if (!keywords) {
      issues.push('Meta keywords ausente');
    }
    
    if (!canonical) {
      issues.push('URL canônica ausente');
    }

    if (issues.length > 0) {
      console.warn('🔍 SEO Issues:', issues);
    } else {
      console.log('✅ Meta tags otimizadas');
    }
  }

  private checkStructuredData(): void {
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (structuredData.length === 0) {
      console.warn('🔍 Structured Data ausente');
    } else {
      console.log(`✅ Structured Data encontrado (${structuredData.length} schemas)`);
    }
  }

  private checkImageOptimization(): void {
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src?.includes('.webp') || src?.includes('optimized')) {
        optimizedCount++;
      }
    });
    
    const optimizationRate = (optimizedCount / images.length) * 100;
    console.log(`🖼️ Imagens otimizadas: ${optimizedCount}/${images.length} (${optimizationRate.toFixed(1)}%)`);
    
    if (optimizationRate < 80) {
      console.warn('🔍 Baixa taxa de otimização de imagens');
    }
  }

  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    let internalLinks = 0;
    let externalLinks = 0;
    
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        if (href.startsWith('/') || href.includes(window.location.hostname)) {
          internalLinks++;
        } else if (href.startsWith('http')) {
          externalLinks++;
        }
      }
    });
    
    console.log(`🔗 Links: ${internalLinks} internos, ${externalLinks} externos`);
  }

  // 📊 MONITORAMENTO DE ANALYTICS
  private setupAnalyticsMonitoring(): void {
    // Verificar se Google Analytics está carregado
    if (typeof window.gtag !== 'undefined') {
      console.log('✅ Google Analytics carregado');
      
      // Monitorar eventos importantes
      this.trackImportantEvents();
    } else {
      console.warn('⚠️ Google Analytics não carregado');
    }
  }

  private trackImportantEvents(): void {
    // Monitorar cliques em botões importantes
    const importantButtons = document.querySelectorAll('[data-tracking], [conversionType]');
    
    importantButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const trackingData = {
          element: button.tagName,
          text: button.textContent?.trim(),
          url: window.location.href,
          timestamp: new Date().toISOString()
        };
        
        console.log('🎯 Evento importante:', trackingData);
      });
    });
  }

  // 🚨 MONITORAMENTO DE ERROS
  private setupErrorMonitoring(): void {
    // Capturar erros JavaScript
    window.addEventListener('error', (event) => {
      this.logError('JavaScript Error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        url: window.location.href
      });
    });

    // Capturar erros de recursos
    window.addEventListener('error', (event) => {
      if (event.target !== window && event.target) {
        const target = event.target as HTMLElement;
        this.logError('Resource Error', {
          type: target.tagName,
          src: (target as any).src || (target as any).href,
          url: window.location.href
        });
      }
    }, true);

    // Capturar rejeições de promises
    window.addEventListener('unhandledrejection', (event) => {
      this.logError('Promise Rejection', {
        reason: event.reason,
        url: window.location.href
      });
    });
  }

  private logError(type: string, data: any): void {
    console.error(`🚨 ${type}:`, data);
    
    // Em produção, enviar para serviço de monitoramento
    if (process.env.NODE_ENV === 'production') {
      this.sendErrorReport(type, data);
    }
  }

  // 📈 GERAR RELATÓRIO COMPLETO
  public generateReport(): MonitoringReport {
    const report: MonitoringReport = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      performance: this.getPerformanceMetrics(),
      seo: this.getSEOReport(),
      analytics: this.getAnalyticsData(),
      recommendations: this.generateRecommendations()
    };

    this.reports.push(report);
    console.log('📊 Relatório de Monitoramento:', report);
    
    return report;
  }

  private getPerformanceMetrics(): PerformanceMetrics {
    // Implementar coleta de métricas de performance
    return {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0
    };
  }

  private getSEOReport(): SEOReport {
    return {
      metaTags: {
        title: !!document.title,
        description: !!document.querySelector('meta[name="description"]'),
        keywords: !!document.querySelector('meta[name="keywords"]'),
        canonical: !!document.querySelector('link[rel="canonical"]')
      },
      structuredData: document.querySelectorAll('script[type="application/ld+json"]').length > 0,
      images: {
        optimized: document.querySelectorAll('img[src*=".webp"], img[src*="optimized"]').length,
        total: document.querySelectorAll('img').length
      },
      links: {
        internal: document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]').length,
        external: document.querySelectorAll('a[href^="http"]').length,
        broken: 0 // Implementar verificação de links quebrados
      }
    };
  }

  private getAnalyticsData(): AnalyticsData {
    // Implementar coleta de dados do Google Analytics
    return {
      pageViews: 0,
      uniqueVisitors: 0,
      bounceRate: 0,
      avgSessionDuration: 0,
      conversions: 0
    };
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    // Verificar performance
    if (document.querySelectorAll('img:not([loading="lazy"])').length > 0) {
      recommendations.push('Implementar lazy loading em todas as imagens');
    }
    
    if (document.querySelectorAll('script[src*="google-analytics"]').length === 0) {
      recommendations.push('Verificar implementação do Google Analytics');
    }
    
    if (document.querySelectorAll('link[rel="preload"]').length < 3) {
      recommendations.push('Adicionar preload para recursos críticos');
    }
    
    return recommendations;
  }

  // 🚨 ALERTAS E NOTIFICAÇÕES
  private sendPerformanceAlert(metric: string, value: number, threshold: number): void {
    const alert = {
      type: 'performance',
      metric,
      value,
      threshold,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    
    console.warn('🚨 Alerta de Performance:', alert);
    
    // Em produção, enviar para serviço de monitoramento
    if (process.env.NODE_ENV === 'production') {
      // Implementar envio para serviço externo
    }
  }

  private sendErrorReport(type: string, data: any): void {
    const report = {
      type: 'error',
      errorType: type,
      data,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    
    // Implementar envio para serviço de monitoramento
    console.error('📤 Enviando relatório de erro:', report);
  }

  // 📊 RELATÓRIOS HISTÓRICOS
  public getReports(): MonitoringReport[] {
    return this.reports;
  }

  public getLatestReport(): MonitoringReport | null {
    return this.reports.length > 0 ? this.reports[this.reports.length - 1] : null;
  }

  // 🔄 LIMPEZA E MANUTENÇÃO
  public cleanup(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    
    // Manter apenas os últimos 10 relatórios
    if (this.reports.length > 10) {
      this.reports = this.reports.slice(-10);
    }
  }
}

// Exportar instância singleton
const monitoringService = MonitoringService.getInstance();
export default monitoringService;

// Inicializar monitoramento automaticamente
if (typeof window !== 'undefined') {
  // Gerar relatório inicial após 5 segundos
  setTimeout(() => {
    monitoringService.generateReport();
  }, 5000);
  
  // Gerar relatório a cada 5 minutos
  setInterval(() => {
    monitoringService.generateReport();
  }, 5 * 60 * 1000);
  
  // Limpeza a cada hora
  setInterval(() => {
    monitoringService.cleanup();
  }, 60 * 60 * 1000);
} 