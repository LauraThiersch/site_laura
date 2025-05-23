import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'appointment';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  href
}) => {
  const buttonClass = `button ${variant} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
