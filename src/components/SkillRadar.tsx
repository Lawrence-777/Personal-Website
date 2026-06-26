'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { radarData } from '@/content/skills';

export default function SkillRadar() {
  return (
    <div className="rounded-xl border border-border-subtle bg-bg-secondary p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-fg-primary">
        技能雷达图
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#404040" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#a3a3a3', fontSize: 14 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#666666' }}
          />
          <Radar
            name="技能水平"
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#141414',
              border: '1px solid #262626',
              borderRadius: '8px',
              color: '#ffffff',
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
