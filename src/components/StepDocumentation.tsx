"use client";

import React from 'react';
import { BookOpen, Lightbulb, AlertCircle, CheckCircle2, Zap, Target, Info, Keyboard } from 'lucide-react';

interface DocumentationProps {
  title: string;
  skills: string[];
  content: {
    overview: string;
    detailedGuide: string[];
    shortcuts?: { action: string; mac: string; win: string }[];
    proTips: string[];
    commonMistakes: string[];
    workflow: string[];
  };
}

const StepDocumentation = ({ title, skills, content }: DocumentationProps) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Overview Section */}
      <section>
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
          <Info className="text-blue-500" size={22} />
          Technical Overview
        </h4>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {content.overview}
        </p>
      </section>

      {/* Detailed Guide */}
      <section className="bg-muted/30 rounded-[32px] p-10 border">
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-8">
          <BookOpen className="text-primary" size={22} />
          The Comprehensive Guide
        </h4>
        <div className="space-y-8">
          {content.detailedGuide.map((paragraph, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-primary/10">
              <p className="text-muted-foreground leading-relaxed text-base">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shortcuts Table */}
      {content.shortcuts && (
        <section className="bg-white rounded-[32px] p-8 border shadow-sm">
          <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-6">
            <Keyboard className="text-indigo-500" size={22} />
            Key Shortcuts to Memorize
          </h4>
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="px-6 py-4 font-bold">Action</th>
                  <th className="px-6 py-4 font-bold">Mac</th>
                  <th className="px-6 py-4 font-bold">Windows</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {content.shortcuts.map((s, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-medium">{s.action}</td>
                    <td className="px-6 py-4 font-mono text-xs bg-muted/30">{s.mac}</td>
                    <td className="px-6 py-4 font-mono text-xs">{s.win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Step-by-Step Workflow */}
      <section>
        <h4 className="flex items-center gap-2 text-xl font-bold text-primary mb-6">
          <Target className="text-red-500" size={22} />
          Professional Workflow
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.workflow.map((step, i) => (
            <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border shadow-sm hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-muted-foreground leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips & Mistakes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-amber-50/50 rounded-[32px] p-8 border border-amber-100">
          <h4 className="flex items-center gap-2 text-lg font-bold text-amber-700 mb-6">
            <Lightbulb size={20} />
            Pro Mastery Tips
          </h4>
          <ul className="space-y-5">
            {content.proTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-amber-900/80 leading-relaxed">
                <Zap className="shrink-0 text-amber-500 mt-0.5" size={16} />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-red-50/50 rounded-[32px] p-8 border border-red-100">
          <h4 className="flex items-center gap-2 text-lg font-bold text-red-700 mb-6">
            <AlertCircle size={20} />
            Avoid These Pitfalls
          </h4>
          <ul className="space-y-5">
            {content.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex gap-3 text-sm text-red-900/80 leading-relaxed">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                {mistake}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StepDocumentation;