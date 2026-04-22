"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Lumina Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d7?auto=format&fit=crop&q=80&w=800",
    description: "A complete visual identity for a high-end lighting studio, focusing on minimalism and light play.",
    tools: ["Photoshop", "Illustrator", "Figma"],
    client: "Lumina Studios"
  },
  {
    id: 2,
    title: "Urban Pulse",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic social media campaign for a streetwear brand, utilizing bold typography and gritty textures.",
    tools: ["Photoshop", "After Effects"],
    client: "Pulse Wear"
  },
  {
    id: 3,
    title: "Ethereal Magazine",
    category: "Print",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    description: "Editorial design for a quarterly arts publication, featuring custom layouts and photo treatments.",
    tools: ["InDesign", "Photoshop"],
    client: "Ethereal Collective"
  },
  {
    id: 4,
    title: "Neon Nights",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    description: "A series of digital illustrations exploring the intersection of technology and nature in a cyberpunk future.",
    tools: ["Photoshop", "Procreate"],
    client: "Personal Project"
  },
  {
    id: 5,
    title: "Organic Roots",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    description: "Sustainable packaging design for an organic skincare line, using earthy tones and recycled materials.",
    tools: ["Illustrator", "Photoshop"],
    client: "Roots Skincare"
  },
  {
    id: 6,
    title: "Velocity App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    description: "Interface design for a high-performance fitness tracking app, prioritizing speed and clarity.",
    tools: ["Figma", "Photoshop"],
    client: "Velocity Tech"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={16} />
            Creative Design Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            WE CRAFT <br />
            <span className="text-primary">VISUAL STORIES.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            A boutique studio specializing in branding, digital experiences, and high-end visual content that leaves a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg">View Our Work</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg">Our Services</Button>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
              <p className="text-muted-foreground text-lg">A curated collection of our most impactful projects.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="rounded-full">All</Button>
              <Button variant="ghost" className="rounded-full">Branding</Button>
              <Button variant="ghost" className="rounded-full">Digital</Button>
              <Button variant="ghost" className="rounded-full">Print</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-12 h-14">
              Load More Projects
              <ArrowDown className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;