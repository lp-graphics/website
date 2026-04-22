"use client";

import React from 'react';
import { BookOpen, Lightbulb, AlertCircle, CheckCircle2, Zap, Target, Info } from 'lucide-react';

interface DocumentationProps {
  title: string;
  skills: string[];
  content: {
    overview: string;
    detailedGuide: string[];
    proTips: string[];
    commonMistakes: string[];
    workflow: string[];
  };
}

const StepDocumentation = ({ title, skills, content }: DocumentationProps) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Overview Section */}
      <section>
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
          <Info className="text-blue-500" size={22} />
          In-Depth Overview
        </h4>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {content.overview}
        </p>
      </section>

      {/* Detailed Guide */}
      <section className="bg-muted/30 rounded-[32px] p-8 border">
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-6">
          <BookOpen className="text-primary" size={22} />
          The Comprehensive Guide
        </h4>
        <div className="space-y-6">
          {content.detailedGuide.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section>
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-6">
          <Target className="text-red-500" size={22} />
          Professional Workflow
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.workflow.map((step, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips & Mistakes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-amber-50/50 rounded-[32px] p-8 border border-amber-100">
          <h4 className="flex items-center gap-2 text-lg font-bold text-amber-700 mb-4">
            <Lightbulb size={20} />
            Pro Mastery Tips
          </h4>
          <ul className="space-y-4">
            {content.proTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-amber-900/80">
                <Zap className="shrink-0 text-amber-500" size={16} />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-red-50/50 rounded-[32px] p-8 border border-red-100">
          <h4 className="flex items-center gap-2 text-lg font-bold text-red-700 mb-4">
            <AlertCircle size={20} />
            Avoid These Pitfalls
          </h4>
          <ul className="space-y-4">
            {content.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex gap-3 text-sm text-red-900/80">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                {mistake}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Skills Recap */}
      <section className="pt-6 border-t">
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Skills Validated in this Lesson</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">
              <CheckCircle2 size={14} />
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StepDocumentation;