"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseStep from '@/components/CourseStep';
import { Accordion } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Award, Users, Sparkles } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const STEPS = [
  {
    number: 1,
    title: "Interface & Basic Tools",
    description: "Master the Photoshop workspace. Learn how to navigate panels, customize your layout, and understand the core toolset from selection to basic painting.",
    skills: ["Workspace Customization", "Selection Tools", "Zoom & Pan", "Basic Brushes"],
    duration: "45 mins"
  },
  {
    number: 2,
    title: "The Power of Layers",
    description: "Layers are the foundation of non-destructive editing. Learn how to organize, group, and blend layers to create complex compositions without losing original data.",
    skills: ["Layer Management", "Blending Modes", "Opacity vs Fill", "Layer Groups"],
    duration: "60 mins"
  },
  {
    number: 3,
    title: "Masking & Selections",
    description: "Go beyond basic selections. Master layer masks, clipping masks, and advanced selection techniques like 'Select and Mask' for perfect cutouts.",
    skills: ["Layer Masks", "Clipping Masks", "Refine Edge", "Pen Tool Basics"],
    duration: "90 mins"
  },
  {
    number: 4,
    title: "Retouching Essentials",
    description: "Learn professional skin retouching and object removal. Master the Healing Brush, Clone Stamp, and Content-Aware Fill for flawless results.",
    skills: ["Healing Brush", "Clone Stamp", "Content-Aware Fill", "Frequency Separation"],
    duration: "75 mins"
  },
  {
    number: 5,
    title: "Color Grading & Correction",
    description: "Understand color theory in practice. Use Adjustment Layers, Curves, and Levels to fix exposure and create stunning cinematic color grades.",
    skills: ["Adjustment Layers", "Curves & Levels", "Color Balance", "Selective Color"],
    duration: "60 mins"
  },
  {
    number: 6,
    title: "Advanced Compositing",
    description: "Bring multiple images together seamlessly. Learn about perspective matching, lighting consistency, and atmospheric effects for realistic composites.",
    skills: ["Perspective Warp", "Lighting Match", "Shadow Creation", "Atmospheric Depth"],
    duration: "120 mins",
    isLocked: true
  },
  {
    number: 7,
    title: "Smart Objects & Filters",
    description: "Work smarter, not harder. Master Smart Objects for non-destructive filtering and learn how to use the Filter Gallery and Camera Raw Filter effectively.",
    skills: ["Smart Objects", "Camera Raw Filter", "Blur Gallery", "Liquify"],
    duration: "45 mins",
    isLocked: true
  },
  {
    number: 8,
    title: "Typography & Vector Art",
    description: "Integrate text and vector shapes into your designs. Learn about kerning, tracking, and using the Pen Tool for custom vector paths.",
    skills: ["Type Tool", "Character Panel", "Vector Shapes", "Path Operations"],
    duration: "60 mins",
    isLocked: true
  },
  {
    number: 9,
    title: "Actions & Automation",
    description: "Speed up your workflow. Learn how to record custom actions, use batch processing, and utilize scripts to handle repetitive tasks automatically.",
    skills: ["Recording Actions", "Batch Processing", "Image Processor", "Droplets"],
    duration: "45 mins",
    isLocked: true
  },
  {
    number: 10,
    title: "Professional Project Walkthrough",
    description: "Put it all together. Follow a full start-to-finish workflow for a professional commercial project, from brief to final export.",
    skills: ["Workflow Management", "Final Export Settings", "Portfolio Presentation", "Client Delivery"],
    duration: "180 mins",
    isLocked: true
  }
];

const Course = () => {
  const handleEnroll = () => {
    showSuccess("Redirecting to secure checkout...");
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <section className="pt-20 pb-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />
                Free Starter + Pro Mastery
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Photoshop Mastery: <br />
                <span className="text-primary">Zero to Pro.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Start for free with our 5-step foundation course. Upgrade to Pro for just $10 to unlock advanced techniques and the AI Practice Lab for all lessons.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Play size={18} />
                  </div>
                  <div>
                    <div className="font-bold">12+ Hours</div>
                    <div className="text-xs text-muted-foreground">Video Content</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="font-bold">5k+ Students</div>
                    <div className="text-xs text-muted-foreground">Enrolled</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-xl px-8 h-14 text-lg" onClick={handleEnroll}>
                  Unlock Pro — $10
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 text-lg">
                  Start Free Lessons
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Course Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border w-64 hidden md:block">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold">Free Progress</span>
                  <span className="text-primary font-bold">0/5</span>
                </div>
                <Progress value={0} className="h-2 mb-4" />
                <p className="text-xs text-muted-foreground">Complete the first 5 steps for free!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The 10-Step Roadmap</h2>
            <p className="text-muted-foreground text-lg">Steps 1-5 are free. Steps 6-10 require a Pro upgrade.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {STEPS.map((step) => (
              <CourseStep key={step.number} step={step} />
            ))}
          </Accordion>

          <div className="mt-20 text-center bg-white p-12 rounded-[40px] shadow-sm border">
            <h3 className="text-3xl font-bold mb-4">Ready to go Pro?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get lifetime access to all 10 steps, advanced project files, and the AI Practice Lab for just $10.
            </p>
            <Button size="lg" className="rounded-full px-12 h-16 text-xl shadow-lg shadow-primary/20" onClick={handleEnroll}>
              Unlock Full Access — $10
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Course;