"use client";

import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, CheckCircle2, PlayCircle } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

interface StepProps {
  number: number;
  title: string;
  description: string;
  skills: string[];
  duration: string;
}

const CourseStep = ({ step }: { step: StepProps }) => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [exercise, setExercise] = React.useState<string | null>(null);

  const generateExercise = () => {
    setIsGenerating(true);
    // Simulate AI call
    setTimeout(() => {
      const exercises = [
        "Create a surreal landscape using at least 3 different source images and matching the lighting.",
        "Retouch a portrait focusing on non-destructive skin smoothing and eye enhancement.",
        "Design a minimalist movie poster using only typography and layer masks.",
        "Develop a custom color grading action that gives a 'cinematic teal and orange' look."
      ];
      setExercise(exercises[Math.floor(Math.random() * exercises.length)]);
      setIsGenerating(false);
      showSuccess("AI Exercise Generated!");
    }, 1500);
  };

  return (
    <AccordionItem value={`step-${step.number}`} className="border-none mb-4 bg-white rounded-2xl overflow-hidden shadow-sm">
      <AccordionTrigger className="px-6 py-6 hover:no-underline group">
        <div className="flex items-center gap-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
            {step.number}
          </div>
          <div>
            <h3 className="text-xl font-bold">{step.title}</h3>
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
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {step.description}
          </p>
          
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3">What you'll master:</h4>
            <div className="flex flex-wrap gap-2">
              {step.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="rounded-lg px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Sparkles size={18} />
                AI Practice Lab
              </div>
              <Button 
                onClick={generateExercise} 
                disabled={isGenerating}
                variant="outline"
                className="rounded-xl bg-white"
              >
                {isGenerating ? "Generating..." : "Generate Exercise"}
              </Button>
            </div>
            
            {exercise ? (
              <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                <p className="text-primary/80 font-medium italic">
                  "{exercise}"
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">
                Click the button to get a custom, AI-generated practice prompt tailored to this lesson's skills.
              </p>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseStep;