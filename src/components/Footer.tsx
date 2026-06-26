'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/content/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-fg-primary">
              李梁
            </h3>
            <p className="text-sm text-fg-secondary">{personalInfo.bio}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-fg-primary">
              快速链接
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-fg-secondary transition-colors hover:text-brand-from"
                >
                  关于我
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-fg-secondary transition-colors hover:text-brand-from"
                >
                  项目经历
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-fg-secondary transition-colors hover:text-brand-from"
                >
                  联系方式
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-fg-primary">
              联系方式
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-fg-secondary">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition-colors hover:text-brand-from"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-fg-secondary">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border-subtle pt-8 text-center text-sm text-fg-tertiary">
          <p>© {currentYear} 李梁. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
