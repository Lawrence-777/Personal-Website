'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border-subtle bg-bg-secondary p-6 transition-all duration-300',
        hover && 'hover:-translate-y-2 hover:border-border-default hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
