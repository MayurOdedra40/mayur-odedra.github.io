
import React from 'react';
import { 
  Code, 
  Database, 
  ChartBar, 
  Laptop 
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'data_analysis' | 'machine_learning';
};

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'REST API Design', level: 85, category: 'backend' },
  
  // Data Analysis
  { name: 'Python', level: 85, category: 'data_analysis' },
  { name: 'Pandas', level: 80, category: 'data_analysis' },
  { name: 'SQL', level: 75, category: 'data_analysis' },
  { name: 'Data Visualization', level: 80, category: 'data_analysis' },
  { name: 'Statistical Analysis', level: 70, category: 'data_analysis' },
  
  // Machine Learning
  { name: 'Scikit-learn', level: 70, category: 'machine_learning' },
  { name: 'TensorFlow', level: 65, category: 'machine_learning' },
  { name: 'NLP', level: 60, category: 'machine_learning' },
  { name: 'Deep Learning', level: 55, category: 'machine_learning' },
  { name: 'Model Deployment', level: 50, category: 'machine_learning' },
];

export default function Skills() {
  const categoryIcons = {
    frontend: <Code size={24} />,
    backend: <Laptop size={24} />,
    data_analysis: <Database size={24} />,
    machine_learning: <ChartBar size={24} />,
  };
  
  const categoryNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    data_analysis: 'Data Analysis',
    machine_learning: 'Machine Learning',
  };
  
  const categoryColors = {
    frontend: 'text-blue-400',
    backend: 'text-purple-400',
    data_analysis: 'text-green-400',
    machine_learning: 'text-orange-400',
  };
  
  const progressColors = {
    frontend: 'bg-blue-500',
    backend: 'bg-purple-500',
    data_analysis: 'bg-green-500',
    machine_learning: 'bg-orange-500',
  };

  const categories = ['frontend', 'backend', 'data_analysis', 'machine_learning'] as const;

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div key={category} className="bg-navy-light rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <span className={cn("mr-3", categoryColors[category])}>
                  {categoryIcons[category]}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {categoryNames[category]}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-lighter">{skill.name}</span>
                        <span className="text-slate font-mono text-sm">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={cn("h-2 bg-navy", progressColors[category])} 
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
