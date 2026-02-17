import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-serif font-medium tracking-wide transition-all duration-300 rounded-full group cursor-hover";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-lg hover:shadow-gold-500/30 hover:scale-105",
    outline: "border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white hover:border-transparent",
    text: "text-gold-600 hover:text-gold-800 underline-offset-4 hover:underline px-0 py-0"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
      )}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;