"use client";

import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import StepDocumentation from '@/components/StepDocumentation';
import { COURSE_STEPS } from '@/data/courseData';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  PlayCircle, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  BookOpen,
  Layout
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  
  const lessonIndex = COURSE_STEPS.findIndex(s => s.id === lessonId);
  const lesson = COURSE_STEPS[lessonIndex];
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const nextLesson = COURSE_STEPS[lessonIndex + 1];
  const prevLesson = COURSE_STEPS[lessonIndex - 1];

  const handleComplete = () => {
    showSuccess(`Lesson ${lesson.number} Completed!`);
    if (nextLesson && !nextLesson.isLocked) {
      navigate(`/course/lesson/${nextLesson.id}`);
    } else {
      navigate('/course');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={lesson.title} />
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-8">
              <Link to="/course" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Curriculum
              </Link>
              
              <div className="bg-muted/30 rounded-3xl p-6 border">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Layout size={18} />
                  Course Progress
                </h4>
                <Progress value={(lesson.number / 10) * 100} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">Step {lesson.number} of 10</p>
              </div>

              <nav className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground px-4 mb-4">Lessons</h4>
                {COURSE_STEPS.map((step) => (
                  <Link
                    key={step.id}
                    to={step.isLocked ? '#' : `/course/lesson/${step.id}`}
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all ${
                      step.id === lessonId 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                        : step.isLocked 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-muted'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      step.id === lessonId ? 'bg-white/20' : 'bg-muted'
                    }`}>
                      {step.isLocked ? <Lock size={12} /> : step.number}
                    </div>
                    <span className="text-sm font-medium truncate">{step.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow max-w-4xl">
            {lesson.isLocked ? (
              <div className="bg-muted/30 rounded-[40px] p-12 md:p-20 text-center border-2 border-dashed min-h-[600px] flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <Lock className="text-primary" size={40} />
                </div>
                <h2 className="text-4xl font-bold mb-6">Unlock Pro Mastery</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
                  This advanced lesson covers industry-standard techniques used by top studios. Upgrade to Pro to access the full 10-step roadmap and AI Practice Lab.
                </p>
                <Button size="lg" className="rounded-full px-12 h-16 text-xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30">
                  Unlock Full Course for $10
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Lesson Header */}
                <header>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">Lesson {lesson.number}</span>
                    <span className="text-muted-foreground text-sm">• {lesson.duration}</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{lesson.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </header>

                {/* Video Placeholder */}
                <div className="aspect-video bg-black rounded-[40px] overflow-hidden relative group cursor-pointer shadow-2xl">
                  <img 
                    src={`https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200&lesson=${lesson.number}`} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt="Video Preview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <PlayCircle className="text-primary" size={48} />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-white">
                    <span className="font-bold text-lg">Watch Lesson Video</span>
                    <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm">{lesson.duration}</span>
                  </div>
                </div>

                {/* Documentation */}
                <StepDocumentation 
                  title={lesson.title} 
                  skills={lesson.skills} 
                  content={lesson.content} 
                />

                {/* AI Lab Section */}
                <div className="bg-primary rounded-[40px] p-12 text-primary-foreground relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 font-bold text-2xl mb-8">
                      <Sparkles size={28} />
                      AI Practice Lab
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                      <h4 className="text-xl font-bold mb-4">Your Custom Challenge:</h4>
                      <p className="text-2xl font-medium leading-relaxed italic mb-8">
                        "Create a surreal landscape using at least 3 different source images and matching the lighting perfectly using the Curves techniques from this lesson."
                      </p>
                      <Button variant="secondary" className="rounded-full px-8 h-12 font-bold">
                        Generate New Prompt
                      </Button>
                    </div>
                    <p className="mt-8 text-primary-foreground/60 text-sm flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      Tip: Upload your result to the community gallery for feedback!
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                </div>

                {/* Navigation Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t">
                  {prevLesson ? (
                    <Link to={`/course/lesson/${prevLesson.id}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-muted transition-colors">
                        <ArrowLeft size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground uppercase font-bold">Previous</div>
                        <div className="font-bold">{prevLesson.title}</div>
                      </div>
                    </Link>
                  ) : <div />}

                  <Button 
                    size="lg" 
                    className="rounded-full px-12 h-16 text-xl font-bold shadow-xl shadow-primary/20"
                    onClick={handleComplete}
                  >
                    Complete & Continue
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonDetail;