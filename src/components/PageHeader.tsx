interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold text-fg-primary">{title}</h1>
        <p className="mx-auto max-w-2xl text-xl text-fg-secondary">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
