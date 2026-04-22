"use client";

import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, PlayCircle, Lock } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import StepDocumentation from './StepDocumentation';

interface StepProps {
  number: number;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  isLocked?: boolean;
  content: any; // Detailed documentation content
}

const CourseStep = ({ step }: { step: StepProps }) => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [exercise, setExercise] = React.useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = React.useState(false);

  const generateExercise = () => {
    if (step.isLocked || hasGenerated) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const exercises = [
        "Create a surreal landscape using at least 3 different source images and matching the lighting.",
        "Retouch a portrait focusing on non-destructive skin smoothing and eye enhancement.",
        "Design a minimalist movie poster using only typography and layer masks.",
        "Develop a custom color grading action that gives a 'cinematic teal and orange' look."
      ];
      setExercise(exercises[Math.floor(Math.random() * exercises.length)]);
      setIsGenerating(false);
      setHasGenerated(true);
      showSuccess(`AI Exercise for Step ${step.number} Ready!`);
    }, 1000);
  };

  return (
    <AccordionItem 
      value={`step-${step.number}`} 
      className="border-none mb-6 bg-white rounded-[32px] overflow-hidden shadow-sm border hover:shadow-md transition-all"
    >
      <AccordionTrigger 
        className="px-8 py-8 hover:no-underline group"
        onClick={() => !step.isLocked && generateExercise()}
      >
        <div className="flex items-center gap-8 text-left w-full">
          <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
            {step.isLocked ? <Lock size={24} /> : step.number}
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
              {step.isLocked && <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-none px-3 py-1">PRO</Badge>}
            </div>
            <div className="flex gap-6">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <PlayCircle size={16} className="text-primary" /> {step.duration}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles size={16} className="text-primary" /> AI Practice Lab Included
              </span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-8 pb-12 pt-4">
        <div className="pl-24">
          {step.isLocked ? (
            <div className="bg-muted/30 rounded-[40px] p-12 text-center border-2 border-dashed">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Lock className="text-muted-foreground" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Unlock Professional Mastery</h4>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
                This advanced lesson covers industry-standard techniques used by top studios. Upgrade to Pro to access the full 10-step roadmap and AI Practice Lab.
              </p>
              <Button className="rounded-full px-12 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Unlock Full Course for $10
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              <StepDocumentation 
                title={step.title} 
                skills={step.skills} 
                content={step.content} 
              />

              {/* AI Lab Section */}
              <div className="bg-primary rounded-[40px] p-10 text-primary-foreground relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 font-bold text-xl mb-6">
                    <Sparkles size={24} />
                    AI Practice Lab
                  </div>
                  
                  {isGenerating ? (
                    <div className="flex items-center gap-4 text-primary-foreground/70 animate-pulse">
                      <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span className="text-lg">AI is analyzing lesson content to craft your challenge...</span>
                    </div>
                  ) : exercise ? (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <p className="text-xl font-medium leading-relaxed italic">
                          "{exercise}"
                        </p>
                      </div>
                      <p className="mt-6 text-primary-foreground/60 text-sm">
                        Tip: Upload your result to the community gallery for feedback!
                      </p>
                    </div>
                  ) : (
                    <p className="text-primary-foreground/70 text-lg">
                      Your custom practice prompt will appear here automatically.
                    </p>
                  )}
                </div>
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseStep;