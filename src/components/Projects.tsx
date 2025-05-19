
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'data';
};

const projects: Project[] = [
  {
    title: 'E-commerce Dashboard',
    description: 'A responsive admin dashboard for e-commerce sites with real-time analytics, inventory management, and customer insights. Built with React, TypeScript, and CSS Grid.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    github: '#',
    demo: '#',
    category: 'web',
  },
  {
    title: 'COVID-19 Data Analysis',
    description: 'Statistical analysis of COVID-19 data using Python to identify trends and correlations between various factors. Includes interactive visualization dashboard built with Plotly.',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144',
    tags: ['Python', 'Pandas', 'Plotly', 'Scikit-learn'],
    github: '#',
    demo: '#',
    category: 'data',
  },
  {
    title: 'Restaurant Booking App',
    description: 'A full-stack application for restaurant reservations with features like real-time availability, user authentication, and automated email confirmations.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    github: '#',
    demo: '#',
    category: 'web',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'Machine learning model for analyzing sentiment in customer reviews. Includes data preprocessing pipeline, model training, and a simple API for integration.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0',
    tags: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
    github: '#',
    demo: '#',
    category: 'data',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'data'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-navy-dark">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => setFilter('all')}
              className={cn(
                "text-sm font-mono px-3 py-1 rounded",
                filter === 'all' ? 'text-teal border border-teal' : 'text-slate hover:text-teal'
              )}
            >
              All
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setFilter('web')}
              className={cn(
                "text-sm font-mono px-3 py-1 rounded",
                filter === 'web' ? 'text-teal border border-teal' : 'text-slate hover:text-teal'
              )}
            >
              Web Dev
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setFilter('data')}
              className={cn(
                "text-sm font-mono px-3 py-1 rounded",
                filter === 'data' ? 'text-teal border border-teal' : 'text-slate hover:text-teal'
              )}
            >
              Data Science
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-navy-light rounded-lg overflow-hidden shadow-xl hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-teal/20 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-xs font-mono px-2 py-1 rounded", 
                    project.category === 'web' ? 'bg-blue-900/30 text-blue-400' : 'bg-green-900/30 text-green-400'
                  )}>
                    {project.category === 'web' ? 'Web Development' : 'Data Science'}
                  </span>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
                        <Link size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-slate-lighter bg-navy/60 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary group">
            View All Projects
            <ArrowRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
