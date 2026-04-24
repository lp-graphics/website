"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
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
  {
    id: 1,
    title: "Michael Olise | Bayern",
    category: "Sports Graphic",
    image: oliseImg,
    description: "High-end transfer announcement graphic for Michael Olise's move to Bayern München, featuring custom lighting and dynamic composition.",
    tools: ["Photoshop", "Camera Raw"],
    client: "Personal Concept"
  },
  {
    id: 2,
    title: "Mo Salah | The King",
    category: "Digital Art",
    image: salahImg,
    description: "A vibrant, high-contrast tribute to Mohamed Salah, utilizing advanced masking and color grading to create a 'royal' aesthetic.",
    tools: ["Photoshop", "Camera Raw"],
    client: "LFC Fanbase"
  },
  {
    id: 3,
    title: "Lamar Jackson | MVP",
    category: "Sports Graphic",
    image: lamarImg,
    description: "Gritty, texture-heavy design for Lamar Jackson, focusing on atmospheric depth and custom brushwork to match the Ravens' intensity.",
    tools: ["Photoshop", "Camera Raw"],
    client: "NFL Concepts"
  },
  {
    id: 4,
    title: "Kenan Yildiz | Juve",
    category: "Sports Graphic",
    image: yildizImg,
    description: "Clean, monochrome-focused design for Juventus star Kenan Yildiz, emphasizing form and professional typography.",
    tools: ["Photoshop", "Camera Raw"],
    client: "Serie A Weekly"
  },
  {
    id: 5,
    title: "Stephon Castle | Spurs",
    category: "Sports Graphic",
    image: castleImg,
    description: "Draft night concept for Stephon Castle, utilizing paper textures and custom vector elements to create a modern NBA aesthetic.",
    tools: ["Photoshop", "Camera Raw"],
    client: "NBA Draft Series"
  },
  {
    id: 6,
    title: "Desire Doue | PSG",
    category: "Sports Graphic",
    image: doueImg,
    description: "Dynamic blue-toned composition for Desire Doue, featuring advanced lighting effects and motion blur for a high-energy feel.",
    tools: ["Photoshop", "Camera Raw"],
    client: "PSG Concept"
  },
  {
    id: 7,
    title: "Eberechi Eze | Arsenal",
    category: "Sports Graphic",
    image: ezeImg,
    description: "Clean, editorial-style graphic for Eberechi Eze, focusing on layout hierarchy and professional sports branding.",
    tools: ["Photoshop", "Camera Raw"],
    client: "Premier League Concepts"
  },
  {
    id: 8,
    title: "Elliot Cadeau | Michigan",
    category: "Sports Graphic",
    image: cadeauImg,
    description: "Vibrant college basketball graphic for Elliot Cadeau, utilizing Michigan's iconic colors and custom pattern overlays.",
    tools: ["Photoshop", "Camera Raw"],
    client: "NCAA Series"
  },
  {
    id: 9,
    title: "Darius Acuff Jr | Hogs",
    category: "Sports Graphic",
    image: acuffImg,
    description: "High-impact recruitment graphic for Darius Acuff Jr, featuring custom textures and bold typography.",
    tools: ["Photoshop", "Camera Raw"],
    client: "Razorbacks Concept"
  }
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
          <h1 className="text-7xl md:text-[150px] lg:text-[180px] font-black tracking-tighter mb-8 leading-[0.85] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 uppercase">
            WE CRAFT <br />
            VISUAL STORIES.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            A boutique studio specializing in high-end sports graphics, digital experiences, and visual content that leaves a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" onClick={scrollToPortfolio}>View Our Work</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" onClick={handleServices}>Our Services</Button>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      <section ref={portfolioRef} className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
              <p className="text-muted-foreground text-lg">A curated collection of our most impactful sports graphics.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="rounded-full" onClick={() => showSuccess("Filtering by All")}>All</Button>
              <Button variant="ghost" className="rounded-full" onClick={() => showSuccess("Filtering by Sports")}>Sports</Button>
              <Button variant="ghost" className="rounded-full" onClick={() => showSuccess("Filtering by Digital")}>Digital</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {visibleProjects < ALL_PROJECTS.length && (
            <div className="mt-20 text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-12 h-14"
                onClick={loadMoreProjects}
              >
                Load More Projects
                <ArrowDown className="ml-2" size={18} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;