'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-brand-from/30 bg-brand-from/10 px-3 py-1 text-xs font-medium text-brand-from',
        className
      )}
    >
      {children}
    </span>
  );
}
