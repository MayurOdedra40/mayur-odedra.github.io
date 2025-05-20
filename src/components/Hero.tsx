
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="font-mono text-teal mb-4 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Mayur Odedra.
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold text-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Building interfaces. Breaking down data. Bridging ideas.
          </h3>

          <p className="text-slate text-lg mb-8 max-w-lg animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            I'm a web developer specializing in building exceptional digital experiences 
            and a data science student passionate about extracting insights from complex datasets.
            Currently, I'm focused on creating accessible, human-centered products
            while expanding my expertise in machine learning and data visualization.
          </p>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
            <Button
              className="btn-primary group"
            >
              Check out my work
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
