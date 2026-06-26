'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-6">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-brand-from">404</h1>
        <h2 className="mb-6 text-3xl font-bold text-fg-primary">
          页面未找到
        </h2>
        <p className="mb-8 text-xl text-fg-secondary">
          抱歉,您访问的页面不存在
        </p>
        <Link href="/">
          <Button variant="primary">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
