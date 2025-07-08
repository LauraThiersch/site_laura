import React, { useState } from 'react';
import DoctoraliaOfficialWidget from './DoctoraliaOfficialWidget';
import DoctoraliaWidget from './DoctoraliaWidget';
import { AnalyticsService } from '../../services/AnalyticsService';
import './booking.css';

interface BookingWidgetSelectorProps {
  doctorId: string;
  specialtyId: string;
  className?: string;
  defaultWidget?: 'official' | 'custom';
}

const BookingWidgetSelector: React.FC<BookingWidgetSelectorProps> = ({
  doctorId,
  specialtyId,
  className = '',
  defaultWidget = 'official'
}) => {
  const [selectedWidget, setSelectedWidget] = useState<'official' | 'custom'>(defaultWidget);

  const handleWidgetChange = (widget: 'official' | 'custom') => {
    setSelectedWidget(widget);
    
    AnalyticsService.trackEvent('widget_switched', {
      event_category: 'engajamento',
      event_label: `switched_to_${widget}_widget`,
      previous_widget: selectedWidget,
      new_widget: widget
    });
  };

  return (
    <div className={`booking-widget-selector ${className}`}>
      {/* Seletor de Widget (apenas em desenvolvimento) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="widget-selector">
          <h4>Escolha o Widget de Agendamento:</h4>
          <div className="selector-buttons">
            <button
              className={`selector-btn ${selectedWidget === 'official' ? 'active' : ''}`}
              onClick={() => handleWidgetChange('official')}
            >
              🏥 Widget Oficial Doctoralia
            </button>
            <button
              className={`selector-btn ${selectedWidget === 'custom' ? 'active' : ''}`}
              onClick={() => handleWidgetChange('custom')}
            >
              🛠️ Widget Customizado
            </button>
          </div>
        </div>
      )}

      {/* Widget Selecionado */}
      <div className="selected-widget">
        {selectedWidget === 'official' ? (
          <DoctoraliaOfficialWidget
            doctorId={doctorId}
            type="big_with_calendar"
            showBranding={false}
            showOpinions={false}
            className="main-booking-widget"
          />
        ) : (
          <DoctoraliaWidget
            doctorId={doctorId}
            specialtyId={specialtyId}
            className="main-booking-widget"
          />
        )}
      </div>

      {/* Informações Adicionais */}
      <div className="widget-info-section">
        <div className="info-card">
          <h4>📞 Outras Formas de Agendamento</h4>
          <div className="contact-methods">
            <a
              href="https://wa.me/5531995626630"
              className="contact-method whatsapp"
              onClick={() => {
                AnalyticsService.trackContactClick('whatsapp', window.location.href);
              }}
            >
              <span className="method-icon">📱</span>
              <span className="method-text">WhatsApp</span>
            </a>
            <a
              href="tel:+5531995626630"
              className="contact-method phone"
              onClick={() => {
                AnalyticsService.trackContactClick('phone', window.location.href);
              }}
            >
              <span className="method-icon">📞</span>
              <span className="method-text">Telefone</span>
            </a>
            <a
              href="mailto:contato@lauraneuroped.com.br"
              className="contact-method email"
              onClick={() => {
                AnalyticsService.trackContactClick('email', window.location.href);
              }}
            >
              <span className="method-icon">📧</span>
              <span className="method-text">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidgetSelector; 