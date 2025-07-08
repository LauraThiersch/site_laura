import React from 'react';
import './button.css';

// 🚀 DECLARAÇÃO GLOBAL PARA GTAG
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 🎯 INTERFACE PARA PROPS DO BOTÃO COM RASTREAMENTO
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'appointment' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
  className?: string;
  // 💡 NOVAS PROPS PARA RASTREAMENTO GA4
  trackingCategory?: string;
  trackingAction?: string;
  trackingLabel?: string;
  conversionType?: 'whatsapp' | 'phone' | 'email' | 'form' | 'navigation' | 'other';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  title,
  className = '',
  // Parâmetros de rastreamento com valores padrão inteligentes
  trackingCategory = 'Interacao_Usuario',
  trackingAction = 'Clique_Botao',
  trackingLabel = 'Botao_Generico',
  conversionType = 'other'
}) => {

  // 🚀 FUNÇÃO DE RASTREAMENTO INTELIGENTE
  const handleClick = (event: React.MouseEvent) => {
    // Rastrear evento no GA4 se disponível
    if (window.gtag) {
      // 💡 PARÂMETROS BASEADOS NA CONFIGURAÇÃO
      const eventParams = {
        event_category: trackingCategory,
        event_label: trackingLabel,
        // Parâmetros personalizados para análise de conversão
        area_conversao: 'neuropediatra_bh',
        tipo_interacao: conversionType,
        especialidade_foco: 'tea_tdah_epilepsia',
        localizacao_consultorio: 'prado_bh',
        // Dados adicionais para análise
        button_text: typeof children === 'string' ? children : 'Botao_Complexo',
        page_url: window.location.pathname,
        timestamp: new Date().toISOString()
      };

      // Enviar evento principal
      window.gtag('event', trackingAction, eventParams);

      // 🎯 EVENTO ESPECÍFICO PARA CONVERSÕES IMPORTANTES
      if (['whatsapp', 'phone', 'email'].includes(conversionType)) {
        window.gtag('event', 'conversao_contato', {
          event_category: 'Conversao',
          event_label: `Conversao_${conversionType.toUpperCase()}`,
          conversion_type: conversionType,
          contact_method: conversionType,
          area_conversao: 'neuropediatra_bh',
          value: 1, // Valor da conversão
          currency: 'BRL'
        });
      }

      // Log para debug
      console.log(`🎯 Evento rastreado: ${trackingAction} - ${trackingLabel}`);
      console.log(`💰 Tipo de conversão: ${conversionType}`);
    }

    // Executar onClick personalizado se fornecido
    if (onClick) {
      onClick();
    }
  };

  // 🎯 CLASSES CSS DINÂMICAS
  const buttonClasses = `btn btn-${variant} ${className}`.trim();

  // 🚀 RENDERIZAÇÃO CONDICIONAL: LINK OU BOTÃO
  if (href) {
    // Se tem href, renderiza como link (para WhatsApp, telefone, etc.)
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={handleClick}
        aria-label={ariaLabel}
        title={title}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  // Se não tem href, renderiza como botão (para formulários, etc.)
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
