'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/PageHeader';
import { personalInfo } from '@/content/personal';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <PageHeader
        title="联系我"
        subtitle="寻找数据工程 / AI数据工程相关机会"
      />

      {/* Contact Info */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Left: Contact Methods */}
          <Card>
            <h2 className="mb-6 text-2xl font-bold text-fg-primary">
              联系方式
            </h2>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-fg-secondary transition-colors hover:text-brand-from"
              >
                <div className="rounded-full bg-gradient-brand p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-fg-tertiary">邮箱</div>
                  <div className="font-medium">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-fg-secondary transition-colors hover:text-brand-from"
              >
                <div className="rounded-full bg-gradient-brand p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-fg-tertiary">电话</div>
                  <div className="font-medium">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-fg-secondary">
                <div className="rounded-full bg-gradient-brand p-2">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-fg-tertiary">位置</div>
                  <div className="font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Job Preferences */}
          <Card>
            <h2 className="mb-6 text-2xl font-bold text-fg-primary">
              求职信息
            </h2>
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-sm text-fg-tertiary">期望职位</div>
                <div className="text-lg font-semibold text-fg-primary">
                  数据工程师 / AI数据工程师
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm text-fg-tertiary">到岗时间</div>
                <div className="text-lg font-semibold text-fg-primary">
                  {personalInfo.availability}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm text-fg-tertiary">工作地点</div>
                <div className="text-lg font-semibold text-fg-primary">
                  {personalInfo.location} 或远程
                </div>
              </div>

              <div className="mt-6">
                <Link href="/resume/李梁_数据工程师.pdf" download>
                  <Button variant="primary" className="w-full">
                    <Download className="mr-2 h-5 w-5" />
                    下载简历 PDF
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
