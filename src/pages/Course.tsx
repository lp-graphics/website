"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { COURSE_STEPS } from '@/data/courseData';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Users, 
  Sparkles, 
  Trophy, 
  Lock, 
  ArrowRight,
  Clock,
  BookOpen
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Course = () => {
  const handleEnroll = () => {
    showSuccess("Redirecting to Behance for enrollment...");
    setTimeout(() => {
      window.open("https://be.net/lp_graphics", "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <SEO title="PS Course" />
      <Navbar />
      
      <section className="pt-20 pb-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />
                Adobe Certified Professional Path
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Photoshop Mastery: <br />
                <span className="text-primary">Zero to Pro.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                The most comprehensive Photoshop roadmap on the internet. Start for free with our foundation modules, then unlock the full professional curriculum.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Play size={20} />
                  </div>
                  <div>
                    <div className="font-bold">12+ Hours</div>
                    <div className="text-xs text-muted-foreground">HD Video Content</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-bold">5k+ Students</div>
                    <div className="text-xs text-muted-foreground">Active Community</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Adobe Certificate</div>
                    <div className="text-xs text-muted-foreground">Industry Recognized</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg shadow-2xl shadow-primary/20" onClick={handleEnroll}>
                  Unlock Full Access — $10
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg">
                  View Free Lessons
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative group">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Course Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="text-primary fill-primary" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">The 10-Step Roadmap</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              A structured journey from the basics to high-end professional workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {COURSE_STEPS.map((step) => {
              return (
                <Link 
                  key={step.id} 
                  to={step.isLocked ? '#' : `/course/lesson/${step.id}`}
                  className={`group bg-white rounded-[32px] p-8 border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-center gap-8 ${step.isLocked ? 'opacity-75' : ''}`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0 transition-colors ${
                    step.isLocked 
                      ? 'bg-muted text-muted-foreground' 
                      : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    {step.isLocked ? <Lock size={32} /> : step.number}
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      {step.isLocked && <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest">Pro Only</span>}
                      {!step.isLocked && <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest">Free Access</span>}
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{step.description}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Clock size={14} className="text-primary" /> {step.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <BookOpen size={14} className="text-primary" /> {step.skills.length} Modules
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Sparkles size={14} className="text-primary" /> AI Lab Included
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {step.isLocked ? (
                      <Button variant="outline" className="rounded-full px-8 h-12 border-dashed" onClick={(e) => {
                        e.preventDefault();
                        handleEnroll();
                      }}>Unlock Step</Button>
                    ) : (
                      <Button className="rounded-full px-8 h-12 transition-transform group-hover:translate-x-2">
                        Start Lesson <ArrowRight className="ml-2" size={18} />
                      </Button>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-32 text-center bg-primary rounded-[60px] p-16 md:p-24 text-primary-foreground relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to go Pro?</h3>
              <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Get lifetime access to all 10 steps, advanced project files, the AI Practice Lab, and the Adobe Certified Professional path for just $10.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-16 h-20 text-2xl font-bold shadow-2xl hover:scale-105 transition-transform" onClick={handleEnroll}>
                Unlock Full Access — $10
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Course;