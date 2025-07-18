// src/services/GoogleAdsConversionService.ts
// Serviço específico para rastreamento de conversões do Google Ads

// 🚀 DECLARAÇÃO GLOBAL PARA GTAG
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export interface ConversionEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  conversion_id?: string;
  conversion_label?: string;
  [key: string]: any;
}

class GoogleAdsConversionService {
  private isGtagAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
  }

  /**
   * Rastreia conversão de contato (formulário enviado)
   */
  trackContactConversion(params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Conversao_Contato',
      event_label: 'Formulario_Contato_Enviado',
      value: 1,
      currency: 'BRL',
      conversion_type: 'form',
      contact_method: 'form',
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para conversão de contato
    window.gtag('event', 'ads_conversion_Fale_conosco_1', eventParams);

    // Evento adicional para GA4 (mantém compatibilidade com sistema existente)
    window.gtag('event', 'form_submit_success', {
      ...eventParams,
      event_category: 'Conversao_Contato',
      event_label: 'Formulario_Contato_Enviado',
      // Parâmetros específicos do GA4 da Dra. Laura
      dimension1: 'neuropediatra_bh',
      dimension2: 'tea_tdah_epilepsia',
      dimension3: 'prado_bh',
      dimension4: 'neuropediatra_bh',
      dimension5: 'consulta_agendamento'
    });

    console.log('🎯 Conversão de contato rastreada:', eventParams);
  }

  /**
   * Rastreia conversão de agendamento (agendamento realizado)
   */
  trackBookingConversion(params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Conversao_Agendamento',
      event_label: 'Agendamento_Realizado',
      value: 1,
      currency: 'BRL',
      conversion_type: 'booking',
      booking_method: 'doctoralia',
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para conversão de agendamento
    window.gtag('event', 'ads_conversion_Agendamento_1', eventParams);

    // Evento adicional para GA4 (mantém compatibilidade com sistema existente)
    window.gtag('event', 'booking_completed', {
      ...eventParams,
      event_category: 'Conversao_Agendamento',
      event_label: 'Agendamento_Realizado',
      // Parâmetros específicos do GA4 da Dra. Laura
      dimension1: 'neuropediatra_bh',
      dimension2: 'tea_tdah_epilepsia',
      dimension3: 'prado_bh',
      dimension4: 'neuropediatra_bh',
      dimension5: 'consulta_agendamento'
    });

    console.log('🎯 Conversão de agendamento rastreada:', eventParams);
  }

  /**
   * Rastreia clique em botão de contato (antes da conversão)
   */
  trackContactClick(buttonType: 'whatsapp' | 'phone' | 'email' | 'form', params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Clique_Contato',
      event_label: `Clique_${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}`,
      value: 0.5, // Valor menor para cliques
      currency: 'BRL',
      button_type: buttonType,
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para clique de contato
    window.gtag('event', 'ads_conversion_Fale_conosco_1', eventParams);

    // Evento adicional para GA4
    window.gtag('event', 'contact_button_click', {
      ...eventParams,
      event_category: 'Clique_Contato',
      event_label: `Clique_${buttonType}`
    });

    console.log('🎯 Clique de contato rastreado:', eventParams);
  }

  /**
   * Rastreia clique em botão de agendamento (antes da conversão)
   */
  trackBookingClick(buttonType: 'doctoralia' | 'whatsapp' | 'phone', params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Clique_Agendamento',
      event_label: `Clique_${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}`,
      value: 0.5, // Valor menor para cliques
      currency: 'BRL',
      button_type: buttonType,
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para clique de agendamento
    window.gtag('event', 'ads_conversion_Agendamento_1', eventParams);

    // Evento adicional para GA4
    window.gtag('event', 'booking_button_click', {
      ...eventParams,
      event_category: 'Clique_Agendamento',
      event_label: `Clique_${buttonType}`
    });

    console.log('🎯 Clique de agendamento rastreado:', eventParams);
  }

  /**
   * Rastreia carregamento da página de contato (página de conversão)
   */
  trackContactPageView(params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Pagina_Contato',
      event_label: 'Carregamento_Pagina_Contato',
      value: 0.3, // Valor baixo para visualização de página
      currency: 'BRL',
      page_type: 'contact',
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para página de contato
    window.gtag('event', 'ads_conversion_Fale_conosco_1', eventParams);

    console.log('🎯 Página de contato rastreada:', eventParams);
  }

  /**
   * Rastreia carregamento da página de agendamento (página de conversão)
   */
  trackBookingPageView(params?: ConversionEventParams) {
    if (!this.isGtagAvailable()) {
      console.warn('Google Ads conversion tracking not available');
      return;
    }

    const eventParams: ConversionEventParams = {
      event_category: 'Pagina_Agendamento',
      event_label: 'Carregamento_Pagina_Agendamento',
      value: 0.3, // Valor baixo para visualização de página
      currency: 'BRL',
      page_type: 'booking',
      area_conversao: 'neuropediatra_bh',
      localizacao_consultorio: 'prado_bh',
      ...params
    };

    // Evento específico do Google Ads para página de agendamento
    window.gtag('event', 'ads_conversion_Agendamento_1', eventParams);

    console.log('🎯 Página de agendamento rastreada:', eventParams);
  }
}

// Exporta uma instância única do serviço
const googleAdsConversionService = new GoogleAdsConversionService();
export { googleAdsConversionService as GoogleAdsConversionService };
export default googleAdsConversionService; 