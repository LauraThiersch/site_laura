import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'appointment' | 'whatsapp' | 'contact';
  href?: string;
  ariaLabel?: string;
  title?: string;
  rel?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  href,
  ariaLabel,
  title,
  rel = 'noopener noreferrer',
  target = '_blank',
  disabled
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;
  
  const isExternal = href && !href.startsWith('/');
  
  // Link externo otimizado para SEO
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        {...(isExternal ? { target: target, rel: rel } : {})}
        aria-label={ariaLabel || `${children} - Dra. Laura Thiersch Neuropediatra`}
        title={title || `${children} - Consulta com Neuropediatra em Belo Horizonte`}
        role="button"
        itemProp={variant === 'appointment' ? 'url' : undefined}
      >
        <span itemProp={variant === 'appointment' ? 'name' : undefined}>
          {children}
        </span>
      </a>
    );
  }
  
  // Botão semântico otimizado
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel || `${children} - Ação no site da Dra. Laura Thiersch`}
      title={title || `${children} - Neuropediatra especialista em TEA, TDAH e Epilepsia`}
      role="button"
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
