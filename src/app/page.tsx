'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectPreview from '@/components/ProjectPreview';
import SkillRadar from '@/components/SkillRadar';
import Timeline from '@/components/Timeline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { projects } from '@/content/projects';
import { personalInfo } from '@/content/personal';
import { skills } from '@/content/skills';
import { Sparkles, Target, Database, TrendingUp } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Target,
  Database,
  TrendingUp,
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Core Advantages */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-fg-primary">
          核心优势
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {personalInfo.coreAdvantages.map((advantage, index) => {
            const Icon =
              ICON_MAP[advantage.icon as keyof typeof ICON_MAP] || Sparkles;
            return (
              <Card key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-gradient-brand p-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-fg-primary">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-secondary">
                  {advantage.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-fg-primary">
            精选项目
          </h2>
          <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectPreview key={project.slug} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="primary">查看所有项目</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Visualization */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-fg-primary">
          技能可视化
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Radar Chart */}
          <SkillRadar />

          {/* Skills Tags */}
          <div className="rounded-xl border border-border-subtle bg-bg-secondary p-6">
            <h3 className="mb-6 text-center text-xl font-bold text-fg-primary">
              技术栈
            </h3>
            <div className="space-y-6">
              {skills.map((category) => (
                <div key={category.name}>
                  <h4 className="mb-3 font-semibold text-fg-primary">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border-default bg-bg-tertiary px-3 py-1.5 text-sm text-fg-secondary transition-colors hover:border-brand-from hover:text-brand-from"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-fg-primary">
            工作经历
          </h2>
          <div className="mx-auto max-w-3xl">
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
}
