
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-light mb-8">
              I'm currently looking for new opportunities to collaborate on interesting projects. 
              Whether you have a question, a project idea, or just want to say hi, 
              my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            
            <div className="flex space-x-6 mb-8">
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@example.com" className="text-slate hover:text-teal transition-colors">
                <Mail size={24} />
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
              <p className="text-slate-light mb-2">Lüneburg, Germany</p>
              <p className="text-slate-light">Available for remote work worldwide</p>
            </div>
          </div>
          
          <div className="bg-navy-light p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-light mb-2">Name</label>
                <Input id="name" className="bg-navy border-navy-light focus:border-teal" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-light mb-2">Email</label>
                <Input id="email" type="email" className="bg-navy border-navy-light focus:border-teal" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-light mb-2">Message</label>
                <Textarea id="message" className="bg-navy border-navy-light focus:border-teal min-h-[150px]" placeholder="Your message" />
              </div>
              
              <Button className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
