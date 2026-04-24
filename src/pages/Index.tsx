"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, CloseIcon } from 'lucide-react'; // Added CloseIcon
import { showSuccess } from '@/utils/toast';

// Importing local assets
import oliseImg from '@/assets/portfolio/olise-1.jpg';
import salahImg from '@/assets/portfolio/mo-salah.png';
import lamarImg from '@/assets/portfolio/lamar-jackson.jpg';
import yildizImg from '@/assets/portfolio/kenan-yildiz.jpg';
import castleImg from '@/assets/portfolio/stephon-castle.jpg';
import doueImg from '@/assets/portfolio/desire-doue.jpg';
import ezeImg from '@/assets/portfolio/eze.jpg';
import cadeauImg from '@/assets/portfolio/elliot-cadeau.jpg';
import acuffImg from '@/assets/portfolio/darius-acuff.jpg';

const ALL_PROJECTS = [
  // ... (same as before)
];

const Index = () => {
  const navigate = useNavigate();
  const portfolioRef = React.useRef<HTMLDivElement>(null);
  const [visibleProjects, setVisibleProjects] = React.useState(6);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServices = () => {
    navigate('/services');
  };

  const loadMoreProjects = () => {
    const newVisibleCount = visibleProjects + 3;
    setVisibleProjects(newVisibleCount);
    showSuccess(`Loading ${Math.min(3, ALL_PROJECTS.length - visibleProjects)} more projects...`);
  };

  const displayedProjects = ALL_PROJECTS.slice(0, visibleProjects);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Home" />
      <Navbar />
      
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={16} />
            LP Graphics Studio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"> // Increased text size
            WE CRAFT <br />
            <span className="text-primary">VISUAL STORIES.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"> // Increased text size
            A boutique studio specializing in high-end sports graphics, digital experiences, and visual content that leaves a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" onClick={scrollToPortfolio}>View Our Work</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" onClick={handleServices}>Our Services</Button>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10">
          {/* Added close button (X) */}
          <CloseIcon 
            className="absolute top-2 right-2 text-white text-2xl" 
            onClick={() => navigate('/')} // Navigate back to homepage
          />
          
          <img 
            src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200" 
            alt="Course Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section ref={portfolioRef} className="py-24 bg-muted/20">
        {/* ... (same as before) */}
      </section>

      <Footer />
    </div>
  );
};

export default Index;