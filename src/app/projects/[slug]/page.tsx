import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building2, Code, Target, AlertCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import DataCard from '@/components/ui/DataCard';
import Card from '@/components/ui/Card';
import { projects } from '@/content/projects';

// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${project.color}22 0%, var(--bg-primary) 100%)`,
        }}
      >
        <div className="container mx-auto px-6">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-fg-secondary transition-colors hover:text-brand-from"
          >
            <ArrowLeft className="h-4 w-4" />
            返回项目列表
          </Link>

          <h1 className="mb-6 text-4xl font-bold text-fg-primary md:text-5xl">
            {project.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-fg-secondary">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Card>
            <h2 className="mb-4 text-2xl font-bold text-fg-primary">
              项目概述
            </h2>
            <p className="leading-relaxed text-fg-secondary">
              {project.summary}
            </p>
          </Card>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-bg-secondary py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-fg-primary">
              项目成果
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <DataCard
                  key={metric.label}
                  title={metric.label}
                  after={metric.value}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-full bg-gradient-brand p-2">
                <AlertCircle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-fg-primary">项目背景</h2>
            </div>
            <p className="leading-relaxed text-fg-secondary">
              {project.background}
            </p>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg-secondary py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <Card>
              <div className="mb-6 flex items-center gap-2">
                <div className="rounded-full bg-gradient-brand p-2">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-fg-primary">技术栈</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-default bg-bg-tertiary px-3 py-1.5 text-sm text-fg-secondary transition-colors hover:border-brand-from hover:text-brand-from"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="mb-6 flex items-center gap-2">
              <div className="rounded-full bg-gradient-brand p-2">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-fg-primary">核心贡献</h2>
            </div>
            <ul className="space-y-4">
              {project.contributions.map((contribution, index) => (
                <li
                  key={index}
                  className="flex gap-3 leading-relaxed text-fg-secondary"
                >
                  <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-from" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Challenges (Optional) */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="bg-bg-secondary py-12">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <Card>
                <h2 className="mb-6 text-2xl font-bold text-fg-primary">
                  技术挑战
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-relaxed text-fg-secondary"
                    >
                      <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between border-t border-border-subtle pt-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-fg-secondary transition-colors hover:text-brand-from"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <div className="text-xs text-fg-tertiary">上一个项目</div>
                <div className="font-semibold">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-fg-secondary transition-colors hover:text-brand-from"
            >
              <div className="text-right">
                <div className="text-xs text-fg-tertiary">下一个项目</div>
                <div className="font-semibold">{nextProject.title}</div>
              </div>
              <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
