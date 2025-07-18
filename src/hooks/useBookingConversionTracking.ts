import { useEffect } from 'react';
import GoogleAdsConversionService from '../services/GoogleAdsConversionService';

// 🚀 DECLARAÇÃO GLOBAL PARA GTAG
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useBookingConversionTracking = () => {
  useEffect(() => {
    // Função para detectar quando um agendamento foi realizado
    const detectBookingCompletion = () => {
      // Verifica se há elementos que indicam agendamento concluído
      const successElements = [
        '.doctoralia-booking-success',
        '.booking-confirmation',
        '.appointment-confirmed',
        '[data-booking-status="confirmed"]',
        '.success-message',
        '.confirmation-message',
        '.booking-complete'
      ];

      const hasSuccessElement = successElements.some(selector => 
        document.querySelector(selector)
      );

      // Verifica se há mensagens de sucesso no texto da página
      const successTexts = [
        'agendamento confirmado',
        'consulta agendada',
        'appointment confirmed',
        'booking confirmed',
        'agendamento realizado',
        'consulta marcada',
        'agendamento concluído',
        'consulta marcada com sucesso'
      ];

      const pageText = document.body.textContent?.toLowerCase() || '';
      const hasSuccessText = successTexts.some(text => pageText.includes(text));

      // Verifica se a URL mudou para uma página de confirmação
      const isConfirmationPage = window.location.href.includes('confirmation') || 
                                window.location.href.includes('success') ||
                                window.location.href.includes('confirmado') ||
                                window.location.href.includes('agendamento-concluido');

      if (hasSuccessElement || hasSuccessText || isConfirmationPage) {
        // 🎯 Rastrear conversão de agendamento para Google Ads
        GoogleAdsConversionService.trackBookingConversion({
          page_url: window.location.href,
          page_title: document.title,
          booking_source: 'doctoralia',
          booking_method: 'online_widget',
          conversion_detection_method: hasSuccessElement ? 'dom_element' : 
                                      hasSuccessText ? 'text_content' : 'url_change'
        });

        console.log('🎯 Agendamento detectado e rastreado!');
      }
    };

    // Observa mudanças no DOM para detectar agendamentos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          // Aguarda um pouco para garantir que o DOM foi atualizado
          setTimeout(detectBookingCompletion, 1000);
        }
      });
    });

    // Inicia a observação
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'data-booking-status', 'data-confirmation']
    });

    // Verifica inicialmente
    detectBookingCompletion();

    // Verifica periodicamente (a cada 5 segundos)
    const interval = setInterval(detectBookingCompletion, 5000);

    // Listener para mudanças de URL (SPA navigation)
    const handleUrlChange = () => {
      setTimeout(detectBookingCompletion, 2000);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('pushstate', handleUrlChange);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('pushstate', handleUrlChange);
    };
  }, []);

  return null;
}; 