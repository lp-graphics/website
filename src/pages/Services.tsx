"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Layout, 
  Share2, 
  PenTool, 
  BookOpen, 
  Box, 
  ExternalLink, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const SERVICES = [
  {
    title: "Branding & Identity",
    description: "We create cohesive visual identities that tell your brand's story and resonate with your target audience.",
    icon: Palette,
    features: ["Logo Design", "Brand Guidelines", "Typography", "Color Theory"],
    color: "bg-blue-500"
  },
  {
    title: "UI/UX Design",
    description: "User-centric digital experiences designed for conversion and ease of use across all devices.",
    icon: Layout,
    features: ["Mobile Apps", "Websites", "Wireframing", "Prototyping"],
    color: "bg-purple-500"
  },
  {
    title: "Social Media Content",
    description: "High-impact visuals tailored for social platforms to increase engagement and brand awareness.",
    icon: Share2,
    features: ["Post Design", "Story Templates", "Motion Graphics", "Ad Creative"],
    color: "bg-pink-500"
  },
  {
    title: "Digital Illustration",
    description: "Custom artwork and illustrations that give your brand a unique and memorable personality.",
    icon: PenTool,
    features: ["Character Design", "Iconography", "Editorial Art", "Vector Graphics"],
    color: "bg-orange-500"
  },
  {
    title: "Print & Editorial",
    description: "Sophisticated layouts for physical media, from magazines to large-scale event signage.",
    icon: BookOpen,
    features: ["Magazines", "Brochures", "Posters", "Business Cards"],
    color: "bg-green-500"
  },
  {
    title: "Packaging Design",
    description: "Tangible brand experiences that stand out on the shelf and delight customers upon unboxing.",
    icon: Box,
    features: ["Product Boxes", "Labels", "Sustainable Materials", "3D Mockups"],
    color: "bg-indigo-500"
  }
];

const Services = () => {
  const handleBehanceClick = () => {
    window.open("https://be.net/lp_graphics", "_blank");
    showSuccess("Opening Behance Portfolio...");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Services" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our <span className="text-primary">Expertise.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We provide a full suite of creative services to help your business stand out in a crowded digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" onClick={handleBehanceClick}>
              <ExternalLink className="mr-2" size={20} />
              View on Behance
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" onClick={handleBehanceClick}>
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="group p-8 rounded-[40px] bg-white border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-current/20`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold group-hover:translate-x-2 transition-transform" onClick={handleBehanceClick}>
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behance CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              See our latest work <br /> live on Behance
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12">
              We regularly update our portfolio with our most recent client projects and creative experiments.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white/20 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6 text-left">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary font-black text-3xl">
                    Bē
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">LP Graphics</h4>
                    <p className="text-primary-foreground/60">Top Rated Creative Studio</p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-bold" onClick={handleBehanceClick}>
                  Follow on Behance
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />
      </section>

      <Footer />
    </div>
  );
};

export default Services;