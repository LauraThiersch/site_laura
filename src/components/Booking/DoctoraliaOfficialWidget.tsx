import React, { useEffect, useRef } from 'react';
import { AnalyticsService } from '../../services/AnalyticsService';
import GoogleAdsConversionService from '../../services/GoogleAdsConversionService';
import './booking.css';

// Declaração global para o widget do Doctoralia
declare global {
  interface Window {
    ZLWidget?: any;
  }
}

interface DoctoraliaOfficialWidgetProps {
  doctorId: string;
  className?: string;
  showBranding?: boolean;
  showOpinions?: boolean;
  type?: 'big_with_calendar' | 'small' | 'profile';
}

const DoctoraliaOfficialWidget: React.FC<DoctoraliaOfficialWidgetProps> = ({
  doctorId,
  className = '',
  showBranding = false,
  showOpinions = false,
  type = 'big_with_calendar'
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rastrear visualização do widget oficial
    AnalyticsService.trackEvent('doctoralia_official_widget_viewed', {
      event_category: 'conversao',
      event_label: 'doctoralia_official_widget',
      page_location: window.location.href,
      widget_type: type
    });

    // Carregar o script do Doctoralia se ainda não foi carregado
    if (!document.getElementById('zl-widget-s')) {
      const script = document.createElement('script');
      script.id = 'zl-widget-s';
      script.src = '//platform.docplanner.com/js/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Configurar o widget após o script carregar
    const setupWidget = () => {
      if (window.ZLWidget) {
        // O widget será renderizado automaticamente pelo script
        console.log('Widget Doctoralia carregado com sucesso');
      } else {
        // Tentar novamente em 100ms se o script ainda não carregou
        setTimeout(setupWidget, 100);
      }
    };

    setupWidget();

    // Adicionar listener para eventos do widget
    const handleWidgetEvent = (event: any) => {
      if (event.detail && event.detail.type) {
        switch (event.detail.type) {
          case 'booking_started':
            AnalyticsService.trackEvent('doctoralia_booking_started', {
              event_category: 'conversao',
              event_label: 'doctoralia_official_booking_start',
              widget_type: type
            });
            break;
          case 'booking_completed':
            AnalyticsService.trackEvent('doctoralia_booking_completed', {
              event_category: 'conversao_principal',
              event_label: 'doctoralia_official_success',
              value: 1,
              currency: 'BRL',
              widget_type: type
            });
            
            // 🎯 Rastrear conversão de agendamento para Google Ads
            GoogleAdsConversionService.trackBookingConversion({
              page_url: window.location.href,
              page_title: document.title,
              booking_source: 'doctoralia',
              booking_method: 'official_widget',
              widget_type: type
            });
            break;
          case 'widget_clicked':
            AnalyticsService.trackEvent('doctoralia_widget_clicked', {
              event_category: 'engajamento',
              event_label: 'doctoralia_official_interaction',
              widget_type: type
            });
            
            // 🎯 Rastrear clique de agendamento para Google Ads
            GoogleAdsConversionService.trackBookingClick('doctoralia', {
              page_url: window.location.href,
              button_location: 'official_widget',
              widget_type: type
            });
            break;
        }
      }
    };

    document.addEventListener('doctoralia-widget-event', handleWidgetEvent);

    return () => {
      document.removeEventListener('doctoralia-widget-event', handleWidgetEvent);
    };
  }, [doctorId, type]);

  return (
    <div className={`doctoralia-official-widget ${className}`} ref={widgetRef}>
      <div className="widget-header">
        <h3>Agendar Consulta com Dra. Laura Thiersch</h3>
        <p>Neuropediatra em Belo Horizonte</p>
      </div>
      
      <div className="widget-container">
        {/* Widget oficial do Doctoralia */}
        <a 
          id="zl-url" 
          className="zl-url" 
          href={`https://www.doctoralia.com.br/${doctorId}/neurologista-pediatrico/belo-horizonte`}
          rel="nofollow" 
          data-zlw-doctor={doctorId}
          data-zlw-type={type}
          data-zlw-opinion={showOpinions.toString()}
          data-zlw-hide-branding={(!showBranding).toString()}
          data-zlw-saas-only="false"
          data-zlw-a11y-title="Widget de marcação de consultas médicas"
        >
          Laura Maria Silva Thiersch - Doctoralia.com.br
        </a>
      </div>

      <div className="widget-info">
        <div className="info-item">
          <span className="info-icon">📍</span>
          <span>Consultório no Prado, BH</span>
        </div>
        <div className="info-item">
          <span className="info-icon">🕒</span>
          <span>Segunda a Sexta, 08h às 17h</span>
        </div>
        <div className="info-item">
          <span className="info-icon">💳</span>
          <span>Atendimento Particular</span>
        </div>
      </div>
    </div>
  );
};

export default DoctoraliaOfficialWidget; 