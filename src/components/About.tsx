
import React from 'react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-slate-light mb-4">
              Hello! I'm Mayur, I'm a Master's student in Management and Data Science at Leuphana University Lüneburg, with a Bachelor’s in Information Technology and 2 years of web development experience across two companies. Currently, I support two departments at Leuphana as a student assistant while actively exploring diverse career opportunities across tech, research, and innovation.
            </p>

            <p className="text-slate-light mb-4">
              Fast-forward to today, I've completed a degree in Computer Science and I'm currently pursuing a Master's in Data Science. My dual expertise allows me to not only build beautiful, interactive web applications but also implement advanced analytics and data visualizations.
            </p>

            <p className="text-slate-light mb-4">
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients while deepening my knowledge in machine learning algorithms and statistical analysis.
            </p>

            <div className="mt-6">
              <h3 className="text-lg text-white mb-3">
                Here are a few technologies I've been working with recently:
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                {[
                  'JavaScript (ES6+)', 
                  'TypeScript', 
                  'React', 
                  'Python',
                  'Node.js',
                  'Next.js',
                  'TensorFlow',
                  'Pandas',
                  'SQL'
                ].map((tech, index) => (
                  <li key={index} className="text-slate-light flex items-start">
                    <span className="text-teal mr-2">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative md:col-span-1 group">
            <div className="relative rounded-md overflow-hidden w-3/4 md:w-full mx-auto">
              <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"
                alt="Profile"
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-teal rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
