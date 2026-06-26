'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-from focus:ring-offset-2 focus:ring-offset-bg-primary';

  const variants = {
    primary:
      'bg-gradient-brand text-white hover:shadow-glow hover:scale-105 active:scale-95',
    secondary:
      'border-2 border-brand-from text-brand-from hover:bg-brand-from/10 hover:border-brand-to',
    ghost: 'text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
