"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Menu } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle 
} from '@/components/ui/sheet';

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
  const [visibleProjects, setVisibleProjects] = React.useState(9);

  const loadMoreProjects = () => {
    const newVisibleCount = visibleProjects + 3;
    setVisibleProjects(newVisibleCount);
    showSuccess(`Loading more projects...`);
  };

  const displayedProjects = ALL_PROJECTS.slice(0, visibleProjects);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Portfolio" />
      
      {/* Minimal Floating Menu for Navigation since Header is removed */}
      <div className="fixed top-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/80 backdrop-blur-md shadow-xl border-none hover:scale-110 transition-all">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="rounded-l-[40px] border-none p-12">
            <SheetHeader className="mb-12">
              <SheetTitle className="text-3xl font-bold tracking-tighter">LP GRAPHICS</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6">
              <Button variant="ghost" className="justify-start text-2xl font-bold h-auto p-0 hover:bg-transparent hover:text-primary" onClick={() => navigate('/')}>Portfolio</Button>
              <Button variant="ghost" className="justify-start text-2xl font-bold h-auto p-0 hover:bg-transparent hover:text-primary" onClick={() => navigate('/services')}>Services</Button>
              <Button variant="ghost" className="justify-start text-2xl font-bold h-auto p-0 hover:bg-transparent hover:text-primary" onClick={() => navigate('/reviews')}>Reviews</Button>
              <Button variant="ghost" className="justify-start text-2xl font-bold h-auto p-0 hover:bg-transparent hover:text-primary" onClick={() => navigate('/course')}>PS Course</Button>
              <div className="h-px bg-muted my-4" />
              <Button className="rounded-full h-14 text-lg font-bold" onClick={() => window.open("https://be.net/lp_graphics", "_blank")}>Hire Us</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Portfolio Section - Starts at the very top */}
      <section className="relative pt-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-sm font-bold">
                LP
              </div>
              <h1 className="text-4xl font-black tracking-tighter">SELECTED WORKS</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl">
              High-end sports graphics and visual identities crafted for elite performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {displayedProjects.map((project, i) => (
              <div key={project.id} className="animate-in fade-in zoom-in-95 duration-1000" style={{ animationDelay: `${i * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
            
            {/* Bottom Fade Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
          </div>

          {visibleProjects < ALL_PROJECTS.length && (
            <div className="mt-12 text-center relative z-20">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-12 h-14 bg-white shadow-xl border-none hover:scale-105 transition-all"
                onClick={loadMoreProjects}
              >
                Load More
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