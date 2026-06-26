'use client';

import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '@/content/experience';

export default function Timeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8">
          {/* Timeline Line */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-[7px] top-8 h-full w-0.5 bg-border-default" />
          )}

          {/* Timeline Dot */}
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-brand-from bg-bg-primary">
            <div className="absolute inset-0 animate-ping rounded-full bg-brand-from opacity-75" />
          </div>

          {/* Content */}
          <div className="rounded-xl border border-border-subtle bg-bg-secondary p-6 transition-all hover:border-border-default hover:shadow-md">
            {/* Header */}
            <div className="mb-4">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-xl font-bold text-fg-primary">
                  {exp.company}
                </h3>
                <span className="text-sm text-fg-tertiary">{exp.duration}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-fg-secondary">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.role}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-fg-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-from" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
