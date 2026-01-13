
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", color = "white" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo principal do A e F fundidos */}
      <path 
        d="M10 80L35 20H55L65 45H75V55H69L80 80H65L58 62H35L28 80H10ZM40 50H58L50 32L40 50Z" 
        fill={color} 
      />
      <path 
        d="M55 58H85V68H62L70 85H55V58Z" 
        fill={color} 
      />
      
      {/* Claquete (Parte Superior do F) */}
      <g transform="translate(50, 15) rotate(-15)">
        <rect width="45" height="12" rx="1" fill={color} />
        {/* Listras da Claquete */}
        <path d="M5 0L15 0L10 12L0 12L5 0Z" fill="#000B1A" opacity="0.4" />
        <path d="M20 0L30 0L25 12L15 12L20 0Z" fill="#000B1A" opacity="0.4" />
        <path d="M35 0L45 0L40 12L30 12L35 0Z" fill="#000B1A" opacity="0.4" />
      </g>
      
      {/* Base da Claquete */}
      <rect x="52" y="32" width="40" height="10" rx="1" fill={color} />
      <path d="M57 32L67 32L62 42L52 42L57 32Z" fill="#000B1A" opacity="0.4" />
      <path d="M72 32L82 32L77 42L67 42L72 32Z" fill="#000B1A" opacity="0.4" />
    </svg>
  );
};

export default Logo;
