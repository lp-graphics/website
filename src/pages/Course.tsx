"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseStep from '@/components/CourseStep';
import { Accordion } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Users, Sparkles, Trophy } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const STEPS = [
  {
    number: 1,
    title: "Interface & Basic Tools",
    description: "Master the Photoshop workspace. Learn how to navigate panels, customize your layout, and understand the core toolset.",
    skills: ["Workspace Customization", "Selection Tools", "Zoom & Pan", "Basic Brushes"],
    duration: "45 mins",
    content: {
      overview: "The Photoshop interface can be overwhelming for beginners. This lesson breaks down the 'cockpit' of the world's most powerful image editor, showing you how to strip away the noise and focus on the tools that actually matter for professional work.",
      detailedGuide: [
        "We start by exploring the Toolbar, the vertical strip on the left. You'll learn the difference between the Move tool and the Artboard tool, and why the 'Auto-Select' feature is often a designer's worst enemy.",
        "Next, we dive into Panels. Photoshop is modular; we'll show you how to dock, undock, and save custom workspaces for different tasks like 'Retouching' or 'Digital Painting'.",
        "Finally, we cover the Options Bar. Every tool has a secret life at the top of your screen. Understanding how to change brush hardness, flow, and opacity here is the first step toward mastery."
      ],
      proTips: [
        "Press 'Tab' to hide all panels and focus entirely on your canvas.",
        "Use 'F' to cycle through screen modes for a distraction-free experience.",
        "Hold 'Spacebar' to temporarily switch to the Hand tool for quick navigation."
      ],
      commonMistakes: [
        "Keeping too many panels open, which eats up valuable screen real estate.",
        "Not saving your custom workspace, leading to frustration when panels disappear.",
        "Ignoring the 'Search' feature (Cmd+F) when you can't find a specific filter."
      ],
      workflow: [
        "Reset to 'Essentials' workspace",
        "Customize the Toolbar to hide unused tools",
        "Open the 'Layers' and 'Properties' panels",
        "Save as 'My Pro Workspace'"
      ]
    }
  },
  {
    number: 2,
    title: "The Power of Layers",
    description: "Layers are the foundation of non-destructive editing. Learn how to organize, group, and blend layers effectively.",
    skills: ["Layer Management", "Blending Modes", "Opacity vs Fill", "Layer Groups"],
    duration: "60 mins",
    content: {
      overview: "If you aren't using layers correctly, you aren't using Photoshop. This lesson teaches you the 'Stacking' philosophy that allows for infinite revisions without ever destroying your original pixels.",
      detailedGuide: [
        "We'll explore the different types of layers: Pixel layers, Adjustment layers, Type layers, and Shape layers. Each has a specific role in your composition.",
        "Blending Modes are where the magic happens. We'll demystify the 'Multiply', 'Screen', and 'Overlay' modes, showing you how they interact with the layers beneath them to create lighting and texture effects.",
        "Organization is key. You'll learn the 'Group and Color' method used in high-end studios to keep files with 500+ layers manageable and hand-off ready."
      ],
      proTips: [
        "Use 'Alt + Click' on the eye icon to isolate a single layer.",
        "The difference between Opacity and Fill is crucial for layers with styles like 'Drop Shadow'.",
        "Always name your layers. 'Layer 57 copy 2' is a recipe for disaster."
      ],
      commonMistakes: [
        "Merging layers too early, making it impossible to go back and edit.",
        "Not using groups, leading to a 'wall of layers' that is impossible to navigate.",
        "Confusing 'Background' layers with standard pixel layers."
      ],
      workflow: [
        "Create a new layer for every major change",
        "Group related elements (e.g., 'Background', 'Subject')",
        "Apply a Blending Mode to add texture",
        "Color-code groups for quick identification"
      ]
    }
  },
  {
    number: 3,
    title: "Masking & Selections",
    description: "Go beyond basic selections. Master layer masks, clipping masks, and advanced selection techniques.",
    skills: ["Layer Masks", "Clipping Masks", "Refine Edge", "Pen Tool Basics"],
    duration: "90 mins",
    content: {
      overview: "Masking is the 'Eraser' tool's professional older brother. It allows you to hide parts of a layer without actually deleting them, giving you the freedom to change your mind later.",
      detailedGuide: [
        "We'll master the 'Black Hides, White Reveals' mantra of layer masks. You'll learn how to use soft brushes to create seamless transitions between images.",
        "Clipping masks are a game-changer for UI design and typography. We'll show you how to 'clip' a photo into a piece of text or a specific shape.",
        "Advanced selections: We'll tackle the hardest subjects—hair and fur—using the 'Select and Mask' workspace and the 'Refine Edge' brush."
      ],
      proTips: [
        "Shift-click a mask to temporarily disable it.",
        "Alt-click a mask to view it in full-screen grayscale for precise cleaning.",
        "Use the 'Lasso' tool for quick masks and the 'Pen' tool for surgical precision."
      ],
      commonMistakes: [
        "Using the Eraser tool instead of a mask (the #1 beginner mistake).",
        "Masking with a brush that is too hard, creating unnatural edges.",
        "Forgetting to select the mask thumbnail before painting, accidentally painting on the image."
      ],
      workflow: [
        "Make a rough selection with the Quick Selection tool",
        "Click the 'Add Layer Mask' icon",
        "Enter 'Select and Mask' to refine edges",
        "Use a soft black brush to clean up the mask"
      ]
    }
  },
  {
    number: 4,
    title: "Retouching Essentials",
    description: "Learn professional skin retouching and object removal. Master the Healing Brush and Clone Stamp.",
    skills: ["Healing Brush", "Clone Stamp", "Content-Aware Fill", "Frequency Separation"],
    duration: "75 mins",
    content: {
      overview: "Professional retouching isn't about making people look like plastic; it's about removing distractions while preserving natural texture. This lesson covers the 'Invisible Art' of high-end retouching.",
      detailedGuide: [
        "We'll start with the 'Spot Healing Brush' for quick fixes, then move to the 'Healing Brush' for more control over texture and color matching.",
        "The Clone Stamp is your power tool. You'll learn how to use it on a separate layer with 'Sample All Layers' enabled to keep your work non-destructive.",
        "Content-Aware Fill: We'll show you how to remove entire people or objects from a scene and have Photoshop intelligently 'guess' what was behind them."
      ],
      proTips: [
        "Always retouch on a new blank layer to keep the original image safe.",
        "Lower the 'Flow' of your brush for more gradual, natural-looking skin work.",
        "Use 'Frequency Separation' to edit skin color and skin texture independently."
      ],
      commonMistakes: [
        "Over-smoothing skin until it looks like a 3D render.",
        "Creating 'repeating patterns' when using the Clone Stamp.",
        "Not matching the grain/noise of the original photo in your retouched areas."
      ],
      workflow: [
        "Create a 'Retouch' layer",
        "Remove blemishes with the Spot Healing Brush",
        "Use the Clone Stamp for larger distractions",
        "Apply a subtle 'High Pass' filter to restore texture"
      ]
    }
  },
  {
    number: 5,
    title: "Color Grading & Correction",
    description: "Understand color theory in practice. Use Adjustment Layers, Curves, and Levels to fix exposure.",
    skills: ["Adjustment Layers", "Curves & Levels", "Color Balance", "Selective Color"],
    duration: "60 mins",
    content: {
      overview: "Color is the emotional language of an image. In this lesson, you'll learn how to fix 'broken' colors and then apply cinematic grades that tell a story.",
      detailedGuide: [
        "Curves is the most powerful adjustment in Photoshop. We'll break down the 'S-Curve' for contrast and how to edit individual Red, Green, and Blue channels.",
        "Color Balance vs. Selective Color: Learn when to shift the overall mood and when to target specific colors (like making the sky bluer without affecting the grass).",
        "Luminosity Masking: A pro secret for applying color adjustments only to the highlights or shadows of an image."
      ],
      proTips: [
        "Use the 'Targeted Adjustment Tool' in Curves to click and drag directly on the image.",
        "Check your Histogram constantly to ensure you aren't 'clipping' your blacks or whites.",
        "Apply a 'Color Lookup' (LUT) at 20% opacity for a quick professional finish."
      ],
      commonMistakes: [
        "Pushing saturation too high, leading to 'neon' colors that look cheap.",
        "Ignoring the 'White Balance' before starting the creative grade.",
        "Not using masks on adjustment layers to limit where the color change happens."
      ],
      workflow: [
        "Fix exposure with a Levels adjustment",
        "Correct White Balance with a Photo Filter",
        "Add contrast with a Curves S-Curve",
        "Use Selective Color to fine-tune the palette"
      ]
    }
  },
  {
    number: 6,
    title: "Advanced Compositing",
    description: "Bring multiple images together seamlessly. Learn about perspective matching and lighting consistency.",
    skills: ["Perspective Warp", "Lighting Match", "Shadow Creation", "Atmospheric Depth"],
    duration: "120 mins",
    isLocked: true,
    content: {} // Locked content
  },
  {
    number: 7,
    title: "Smart Objects & Filters",
    description: "Work smarter, not harder. Master Smart Objects for non-destructive filtering.",
    skills: ["Smart Objects", "Camera Raw Filter", "Blur Gallery", "Liquify"],
    duration: "45 mins",
    isLocked: true,
    content: {}
  },
  {
    number: 8,
    title: "Typography & Vector Art",
    description: "Integrate text and vector shapes into your designs. Learn about kerning and tracking.",
    skills: ["Type Tool", "Character Panel", "Vector Shapes", "Path Operations"],
    duration: "60 mins",
    isLocked: true,
    content: {}
  },
  {
    number: 9,
    title: "Actions & Automation",
    description: "Speed up your workflow. Learn how to record custom actions and use batch processing.",
    skills: ["Recording Actions", "Batch Processing", "Image Processor", "Droplets"],
    duration: "45 mins",
    isLocked: true,
    content: {}
  },
  {
    number: 10,
    title: "Professional Project Walkthrough",
    description: "Put it all together. Follow a full start-to-finish workflow for a professional commercial project.",
    skills: ["Workflow Management", "Final Export Settings", "Portfolio Presentation", "Client Delivery"],
    duration: "180 mins",
    isLocked: true,
    content: {}
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <div className="font-bold">Pro Certificate</div>
                    <div className="text-xs text-muted-foreground">Upon Completion</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg shadow-xl shadow-primary/20" onClick={handleEnroll}>
                  Unlock Pro — $10
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg">
                  Start Free Lessons
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Course Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border w-72 hidden md:block">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">Free Progress</span>
                  <span className="text-primary font-bold">0/5</span>
                </div>
                <Progress value={0} className="h-3 mb-4" />
                <p className="text-sm text-muted-foreground">Complete the first 5 steps for free!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">The 10-Step Roadmap</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              A structured journey from the basics to high-end professional workflows. Steps 1-5 are free to start.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {STEPS.map((step) => (
              <CourseStep key={step.number} step={step} />
            ))}
          </Accordion>

          <div className="mt-32 text-center bg-primary rounded-[60px] p-16 md:p-24 text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to go Pro?</h3>
              <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
                Get lifetime access to all 10 steps, advanced project files, and the AI Practice Lab for just $10.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-16 h-20 text-2xl font-bold shadow-2xl" onClick={handleEnroll}>
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