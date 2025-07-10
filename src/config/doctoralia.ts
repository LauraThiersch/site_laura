import { siteConfig } from './siteConfig';

// Configuração do Doctoralia

export const DOCTORALIA_CONFIG = {
  // ID da Dra. Laura no Doctoralia
  DOCTOR_ID: process.env.REACT_APP_DOCTORALIA_ID || 'laura-maria-silva-thiersch',
  
  // Especialidade
  SPECIALTY: 'neurologista-pediatrico',
  
  // Localização
  LOCATION: 'belo-horizonte',
  
  // URL completa do perfil
  PROFILE_URL: 'https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte',
  
  // Configurações do Widget
  WIDGET: {
    // Tipo padrão do widget
    DEFAULT_TYPE: 'big_with_calendar' as const,
    
    // Mostrar branding do Doctoralia
    SHOW_BRANDING: false,
    
    // Mostrar opiniões
    SHOW_OPINIONS: false,
    
    // Widget SaaS only
    SAAS_ONLY: false,
    
    // Título para acessibilidade
    A11Y_TITLE: 'Widget de marcação de consultas médicas'
  },
  
  // Configurações de Analytics
  ANALYTICS: {
    // Categoria padrão para eventos
    DEFAULT_CATEGORY: 'conversao',
    
    // Labels específicos
    LABELS: {
      WIDGET_VIEWED: 'doctoralia_widget_viewed',
      BOOKING_STARTED: 'doctoralia_booking_started',
      BOOKING_COMPLETED: 'doctoralia_booking_completed',
      WIDGET_CLICKED: 'doctoralia_widget_clicked'
    }
  },
  
  // Informações do consultório
  CLINIC: {
    NAME: 'Dra. Laura Thiersch - Neuropediatra',
    ADDRESS: 'Rua Turquesa, 347 - Prado, Belo Horizonte - MG',
    PHONE: '+5531995626630',
    EMAIL: siteConfig.contact.email,
    HOURS: 'Segunda a Sexta, 08h às 17h',
    PAYMENT: 'Atendimento Particular'
  }
};

// Tipos para TypeScript
export type WidgetType = 'big_with_calendar' | 'small' | 'profile';

// Função para gerar URL do widget
export const getDoctoraliaWidgetUrl = (type: WidgetType = 'big_with_calendar') => {
  return `https://www.doctoralia.com.br/${DOCTORALIA_CONFIG.DOCTOR_ID}/${DOCTORALIA_CONFIG.SPECIALTY}/${DOCTORALIA_CONFIG.LOCATION}`;
};

// Função para gerar atributos do widget
export const getWidgetAttributes = (type: WidgetType = 'big_with_calendar') => {
  return {
    'data-zlw-doctor': DOCTORALIA_CONFIG.DOCTOR_ID,
    'data-zlw-type': type,
    'data-zlw-opinion': DOCTORALIA_CONFIG.WIDGET.SHOW_OPINIONS.toString(),
    'data-zlw-hide-branding': (!DOCTORALIA_CONFIG.WIDGET.SHOW_BRANDING).toString(),
    'data-zlw-saas-only': DOCTORALIA_CONFIG.WIDGET.SAAS_ONLY.toString(),
    'data-zlw-a11y-title': DOCTORALIA_CONFIG.WIDGET.A11Y_TITLE
  };
};

// Função para rastrear eventos do widget
export const trackWidgetEvent = (eventName: string, additionalParams: Record<string, any> = {}) => {
  const baseParams = {
    event_category: DOCTORALIA_CONFIG.ANALYTICS.DEFAULT_CATEGORY,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    ...additionalParams
  };

  // Aqui você pode integrar com seu serviço de analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, baseParams);
  }

  console.log(`🎯 Doctoralia Event: ${eventName}`, baseParams);
}; 