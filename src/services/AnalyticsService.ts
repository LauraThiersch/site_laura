import { siteConfig } from '../siteConfig';
// Serviço de Analytics para rastreamento de conversões
// Integração com GA4 e eventos customizados

interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  page_location?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

class AnalyticsService {
  private static isGA4Loaded(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
  }

  static trackEvent(eventName: string, parameters: AnalyticsEvent): void {
    try {
      if (this.isGA4Loaded()) {
        window.gtag('event', eventName, parameters);
        console.log(`🎯 Analytics Event: ${eventName}`, parameters);
      } else {
        console.warn('GA4 não está carregado');
      }
    } catch (error) {
      console.error('Erro ao rastrear evento:', error);
    }
  }

  // Eventos específicos de agendamento
  static trackBookingWidgetView(pageLocation: string): void {
    this.trackEvent('booking_widget_viewed', {
      event_category: 'conversao',
      event_label: 'doctoralia_widget',
      page_location: pageLocation
    });
  }

  static trackSlotSelection(slotTime: string, slotDate: string): void {
    this.trackEvent('slot_selected', {
      event_category: 'conversao',
      event_label: 'doctoralia_slot_selection',
      slot_time: slotTime,
      slot_date: slotDate
    });
  }

  static trackBookingAttempt(patientAge: number): void {
    this.trackEvent('booking_attempt', {
      event_category: 'conversao',
      event_label: 'doctoralia_booking_attempt',
      patient_age: patientAge
    });
  }

  static trackBookingCompleted(value: number = 1): void {
    this.trackEvent('booking_completed', {
      event_category: 'conversao_principal',
      event_label: 'doctoralia_success',
      value: value,
      currency: 'BRL'
    });
  }

  static trackBookingError(errorMessage: string): void {
    this.trackEvent('booking_error', {
      event_category: 'erro',
      event_label: 'doctoralia_booking_error',
      error_message: errorMessage
    });
  }

  // Eventos de navegação
  static trackPageView(pageTitle: string, pageLocation: string): void {
    if (this.isGA4Loaded()) {
      window.gtag('config', siteConfig.googleAnalyticsId, {
        page_title: pageTitle,
        page_location: pageLocation
      });
    }
  }

  // Eventos de contato
  static trackContactClick(method: 'whatsapp' | 'phone' | 'email', location: string): void {
    this.trackEvent('contact_click', {
      event_category: 'conversao',
      event_label: `${method}_contact`,
      contact_method: method,
      page_location: location
    });
  }

  // Eventos de scroll e engajamento
  static trackScrollDepth(depth: number): void {
    this.trackEvent('scroll_depth', {
      event_category: 'engajamento',
      event_label: 'scroll',
      scroll_depth: depth
    });
  }

  // Eventos de tempo na página
  static trackTimeOnPage(seconds: number): void {
    this.trackEvent('time_on_page', {
      event_category: 'engajamento',
      event_label: 'time_spent',
      time_seconds: seconds
    });
  }

  // Eventos de formulário
  static trackFormStart(formName: string): void {
    this.trackEvent('form_start', {
      event_category: 'conversao',
      event_label: `${formName}_start`
    });
  }

  static trackFormComplete(formName: string): void {
    this.trackEvent('form_complete', {
      event_category: 'conversao',
      event_label: `${formName}_complete`
    });
  }

  static trackFormError(formName: string, errorType: string): void {
    this.trackEvent('form_error', {
      event_category: 'erro',
      event_label: `${formName}_error`,
      error_type: errorType
    });
  }

  // Eventos de conversão específicos
  static trackConversion(conversionType: string, value: number = 1): void {
    this.trackEvent('conversion', {
      event_category: 'conversao_principal',
      event_label: conversionType,
      value: value,
      currency: 'BRL'
    });
  }

  // Eventos de performance
  static trackPageLoadTime(loadTime: number): void {
    this.trackEvent('page_load_time', {
      event_category: 'performance',
      event_label: 'load_time',
      load_time_ms: loadTime
    });
  }

  // Eventos de erro
  static trackError(errorType: string, errorMessage: string): void {
    this.trackEvent('error', {
      event_category: 'erro',
      event_label: errorType,
      error_message: errorMessage
    });
  }

  // Método para inicializar analytics
  static initialize(): void {
    if (typeof window !== 'undefined') {
      // Configurar listeners para eventos automáticos
      this.setupAutomaticTracking();
    }
  }

  private static setupAutomaticTracking(): void {
    // Rastrear scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Rastrear em marcos específicos
        if ([25, 50, 75, 90].includes(maxScroll)) {
          this.trackScrollDepth(maxScroll);
        }
      }
    });

    // Rastrear tempo na página
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackTimeOnPage(timeSpent);
    });
  }
}

export { AnalyticsService };
export type { AnalyticsEvent }; 