'use client';

import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import Card from './Card';

interface DataCardProps {
  title: string;
  before?: string;
  after: string;
  trend?: 'up' | 'down' | 'neutral';
  improvement?: string;
  className?: string;
}

export default function DataCard({
  title,
  before,
  after,
  trend = 'neutral',
  improvement,
  className,
}: DataCardProps) {
  const TrendIcon =
    trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : TrendingUp;
  const trendColor =
    trend === 'up'
      ? 'text-accent-success'
      : trend === 'down'
      ? 'text-accent-error'
      : 'text-fg-secondary';

  return (
    <Card className={className} hover={false}>
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-fg-secondary">{title}</h4>
        <div className="flex items-baseline gap-2">
          {before && (
            <>
              <span className="text-lg text-fg-tertiary line-through">
                {before}
              </span>
              <span className="text-fg-tertiary">→</span>
            </>
          )}
          <span className="text-2xl font-bold text-fg-primary">{after}</span>
        </div>
        {improvement && (
          <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span>{improvement}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
