"use client";

import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, CheckCircle2, PlayCircle, Lock, BookOpen, Lightbulb, AlertCircle } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

interface StepProps {
  number: number;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  isLocked?: boolean;
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
      className="border-none mb-4 bg-white rounded-2xl overflow-hidden shadow-sm"
    >
      <AccordionTrigger 
        className="px-6 py-6 hover:no-underline group"
        onClick={() => !step.isLocked && generateExercise()}
      >
        <div className="flex items-center gap-6 text-left w-full">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
            {step.isLocked ? <Lock size={20} /> : step.number}
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{step.title}</h3>
              {step.isLocked && <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-none">PRO</Badge>}
            </div>
            <div className="flex gap-4 mt-1">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <PlayCircle size={12} /> {step.duration}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 size={12} /> {step.skills.length} Key Skills
              </span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-8 pt-2">
        <div className="pl-[72px]">
          {step.isLocked ? (
            <div className="bg-muted/50 rounded-2xl p-8 text-center border-2 border-dashed">
              <Lock className="mx-auto mb-4 text-muted-foreground" size={32} />
              <h4 className="text-xl font-bold mb-2">This lesson is locked</h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Steps 6-10 contain advanced professional techniques. Unlock the full course to access this content and the AI Practice Lab.
              </p>
              <Button className="rounded-xl px-8 h-12 bg-primary hover:bg-primary/90">
                Unlock for $10
              </Button>
            </div>
          ) : (
            <>
              <div className="prose prose-sm max-w-none mb-8">
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Documentation Section */}
                <div className="space-y-6 mb-8">
                  <div className="bg-muted/30 rounded-xl p-5 border">
                    <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                      <BookOpen size={18} />
                      Lesson Documentation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Core Concepts</h5>
                        <ul className="space-y-2">
                          {step.skills.map((skill, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {skill}: Essential for professional {step.title.toLowerCase()} workflows.
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Lightbulb className="text-amber-500 shrink-0" size={18} />
                          <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Pro Tip</h5>
                            <p className="text-sm text-muted-foreground">Always use non-destructive methods. Keyboard shortcuts are your best friend for speed.</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <AlertCircle className="text-blue-500 shrink-0" size={18} />
                          <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Common Pitfall</h5>
                            <p className="text-sm text-muted-foreground">Avoid over-processing. Subtle changes often yield the most professional results.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <Sparkles size={18} />
                  AI Practice Lab
                </div>
                
                {isGenerating ? (
                  <div className="flex items-center gap-3 text-muted-foreground animate-pulse">
                    <div className="w-4 h-4 bg-primary/20 rounded-full animate-bounce" />
                    <span>AI is crafting your custom exercise...</span>
                  </div>
                ) : exercise ? (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-primary/80 font-medium italic">
                      "{exercise}"
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Expand this section to automatically generate a custom practice prompt.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseStep;