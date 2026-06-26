'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group h-full transition-transform hover:scale-[1.02]">
        {/* Header */}
        <div
          className="mb-4 h-2 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
          }}
        />

        {/* Title & Company */}
        <h3 className="mb-2 text-xl font-bold text-fg-primary transition-colors group-hover:text-brand-from">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-fg-tertiary">
          {project.company} · {project.duration}
        </p>

        {/* Summary */}
        <p className="mb-4 line-clamp-3 text-fg-secondary">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="rounded-lg bg-bg-primary p-3">
              <p className="text-xs text-fg-tertiary">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-brand-from">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-4 flex items-center gap-2 text-sm text-brand-from opacity-0 transition-opacity group-hover:opacity-100">
          <span>查看详情</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </Card>
    </Link>
  );
}
