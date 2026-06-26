'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/content/projects';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <PageHeader
        title="项目经历"
        subtitle="数据工程与AI数据生产全链路实战经验"
      />

      {/* Tag Filter */}
      <section className="bg-bg-secondary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                selectedTag === null
                  ? 'border-brand-from bg-brand-from/10 text-brand-from'
                  : 'border-border-default bg-bg-tertiary text-fg-secondary hover:border-brand-from hover:text-brand-from'
              }`}
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                  selectedTag === tag
                    ? 'border-brand-from bg-brand-from/10 text-brand-from'
                    : 'border-border-default bg-bg-tertiary text-fg-secondary hover:border-brand-from hover:text-brand-from'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-fg-secondary">暂无相关项目</p>
          </div>
        )}
      </section>
    </div>
  );
}
