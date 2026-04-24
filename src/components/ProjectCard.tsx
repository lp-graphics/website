"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Layers, Clock, X } from 'lucide-react';
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  client: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative overflow-hidden rounded-2xl bg-muted cursor-pointer aspect-[4/5] hover:shadow-lg transition-all duration-300">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
            <Badge className="w-fit mb-2 md:mb-3 bg-white/20 backdrop-blur-md border-none text-white text-xs md:text-sm">
              {project.category}
            </Badge>
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-white/80 text-xs md:text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[32px] border-none w-[95vw] md:w-full max-h-[90vh] overflow-y-auto md:overflow-visible">
        {/* Custom Close Button with White Circle Background */}
        <DialogPrimitive.Close className="absolute right-4 top-4 md:right-6 md:top-6 z-50 rounded-full bg-white p-2 shadow-xl hover:scale-110 transition-all duration-200 group">
          <X className="h-5 w-5 md:h-6 md:w-6 text-black" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[400px] md:h-full min-h-[300px]">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-12 flex flex-col bg-white">
            <DialogHeader className="mb-6 md:mb-8">
              <Badge className="w-fit mb-3 md:mb-4 bg-primary/10 text-primary border-none px-4 py-1">{project.category}</Badge>
              <DialogTitle className="text-2xl md:text-4xl font-bold tracking-tight">{project.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 md:space-y-8 flex-grow">
              <div>
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 md:mb-3">Project Overview</h4>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 md:mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-primary" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] md:text-xs font-bold bg-muted px-3 py-1.5 rounded-full">{tool}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 md:mb-3 flex items-center gap-2">
                    <Clock size={14} className="text-primary" /> Client
                  </h4>
                  <p className="text-xs md:text-sm font-bold">{project.client}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t flex gap-3 md:gap-4">
              <Button className="flex-grow rounded-2xl h-12 md:h-14 text-base md:text-lg font-bold shadow-lg shadow-primary/20">View Case Study</Button>
              <Button variant="outline" size="icon" className="rounded-2xl h-12 w-12 md:h-14 md:w-14">
                <ExternalLink size={18} md:size={20} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;