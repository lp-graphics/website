"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Layers, Clock } from 'lucide-react';

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
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border-none">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[250px] md:h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader className="mb-6">
              <Badge className="w-fit mb-3">{project.category}</Badge>
              <DialogTitle className="text-2xl md:text-3xl font-bold">{project.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 flex-grow">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                    <Layers size={14} /> Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-xs bg-muted px-2 py-1 rounded-md">{tool}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                    <Clock size={14} /> Client
                  </h4>
                  <p className="text-sm font-medium">{project.client}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t flex gap-4">
              <Button className="flex-grow rounded-xl">View Live Project</Button>
              <Button variant="outline" size="icon" className="rounded-xl">
                <ExternalLink size={18} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;