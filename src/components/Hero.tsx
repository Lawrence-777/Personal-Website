'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { personalInfo } from '@/content/personal';

const ROLES = ['数据工程师', 'AI数据工程', '数仓建设专家'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Name */}
        <h1 className="mb-6 text-5xl font-bold text-fg-primary md:text-7xl">
          {personalInfo.name}
        </h1>

        {/* Dynamic Role */}
        <div className="mb-8 h-12">
          <p className="text-2xl font-semibold text-brand-from md:text-3xl">
            {ROLES[currentRoleIndex]}
          </p>
        </div>

        {/* Bio */}
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-fg-secondary md:text-xl">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/projects">
            <Button variant="primary">查看项目</Button>
          </Link>
          <Link href="/resume/李梁_数据工程师.pdf" download>
            <Button variant="secondary">下载简历</Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-fg-tertiary" />
        </div>
      </div>
    </section>
  );
}
