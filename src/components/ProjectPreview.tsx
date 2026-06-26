import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { Project } from '@/content/projects';
import { Calendar, Building2 } from 'lucide-react';

interface ProjectPreviewProps {
  project: Project;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-fg-primary">
          {project.title}
        </h3>

        {/* Company & Duration */}
        <div className="mb-4 space-y-2 text-sm text-fg-secondary">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>{project.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Background Summary */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-fg-secondary">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
