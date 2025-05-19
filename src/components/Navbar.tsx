
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll event to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when a link is clicked
  const handleNavClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-navy-dark/90 backdrop-blur py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="font-mono text-teal text-xl font-semibold">
          &lt;dev<span className="text-white">&amp;</span>data /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className={cn(
                    'nav-link font-mono text-sm',
                    activeSection === item.link.substring(1) && 'active'
                  )}
                >
                  <span className="text-teal">0{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="btn-primary">Resume</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={cn(
              'fixed inset-0 bg-navy-light/90 backdrop-blur flex justify-center items-center transition-all duration-300 z-40',
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center space-y-8 mb-8">
                {navItems.map((item, index) => (
                  <li key={index} className="text-center">
                    <a
                      href={item.link}
                      className={cn(
                        'nav-link text-lg font-mono',
                        activeSection === item.link.substring(1) && 'active'
                      )}
                      onClick={handleNavClick}
                    >
                      <div className="text-teal mb-1">0{index + 1}.</div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Button className="btn-primary mt-4">Resume</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
