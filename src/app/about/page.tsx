'use client';

import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PageHeader from '@/components/PageHeader';
import { personalInfo } from '@/content/personal';
import { skills } from '@/content/skills';
import { GraduationCap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <PageHeader title="关于我" subtitle={personalInfo.bio} />

      {/* Education */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-fg-primary">教育背景</h2>
          <Card>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-gradient-brand p-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-fg-primary">
                      {personalInfo.education.school}
                    </h3>
                    <p className="mt-1 text-fg-secondary">
                      {personalInfo.education.degree} ·{' '}
                      {personalInfo.education.major}
                    </p>
                  </div>
                  <span className="text-sm text-fg-tertiary">
                    {personalInfo.education.duration}
                  </span>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-from" />
                  <span className="font-semibold text-brand-from">
                    {personalInfo.education.gpa}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.education.honors.map((honor) => (
                    <Badge key={honor}>{honor}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Detail */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-fg-primary">
              技能详情
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((category) => (
                <Card key={category.name}>
                  <h3 className="mb-4 text-lg font-bold text-fg-primary">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-fg-secondary"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-from" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Deep Dive */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-fg-primary">
            核心优势深度解读
          </h2>
          <div className="space-y-6">
            {personalInfo.coreAdvantages.map((advantage, index) => (
              <Card key={index}>
                <h3 className="mb-3 text-xl font-bold text-fg-primary">
                  {advantage.title}
                </h3>
                <p className="leading-relaxed text-fg-secondary">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
