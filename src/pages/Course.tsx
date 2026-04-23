"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseStep from '@/components/CourseStep';
import SEO from '@/components/SEO';
import { Accordion } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, Users, Sparkles, Trophy } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const STEPS = [
  {
    number: 1,
    title: "Interface & Basic Tools",
    description: "Master the Photoshop workspace. Learn how to navigate panels, customize your layout, and understand the core toolset.",
    skills: ["Workspace Customization", "Selection Tools", "Zoom & Pan", "Basic Brushes"],
    duration: "45 mins",
    content: {
      overview: "Setting up your environment is the first step to professional mastery. Photoshop offers near-infinite customizability, but most designers clutter their screen with unused panels. This lesson cuts through the noise to build a high-performance 'cockpit'.",
      detailedGuide: [
        "THE TOOLBAR: Located on the left, this is your primary arsenal. We distinguish between the Move Tool (V) and the Artboard Tool. Crucially, we disable 'Auto-Select' in the Options Bar—a common beginner trap that leads to accidental layer selection in complex files.",
        "ESSENTIAL PANELS: We configure the 'Graphic and Web' workspace. The Layers Panel is your heart; the Properties Panel is context-sensitive, changing its controls based on your selection; and the History Panel allows for non-destructive backtracking.",
        "RESOLUTION & COLOR: For digital work, we set documents to 72 PPI (Pixels Per Inch) and RGB Color Mode. For print, we shift to 300 PPI and CMYK. Working in the wrong mode can lead to muddy colors or pixelated prints.",
        "THE OPTIONS BAR: Every tool has a 'secret life' at the top of the screen. Here, you control Brush Hardness, Flow, and Opacity. Understanding the difference between Opacity (overall transparency) and Flow (speed of paint buildup) is vital for digital painting."
      ],
      shortcuts: [
        { action: "Zoom In", mac: "⌘ +", win: "Ctrl +" },
        { action: "Zoom Out", mac: "⌘ -", win: "Ctrl -" },
        { action: "Fit to Screen", mac: "⌘ 0", win: "Ctrl 0" },
        { action: "Hand Tool", mac: "Space", win: "Space" },
        { action: "Undo", mac: "⌘ Z", win: "Ctrl Z" }
      ],
      proTips: [
        "Press 'Tab' to hide all panels and focus entirely on your canvas for final reviews.",
        "Use 'F' to cycle through screen modes (Standard, Full Screen with Menu, Full Screen).",
        "Save your custom workspace under Window → Workspace → New Workspace to prevent panel loss."
      ],
      commonMistakes: [
        "Working in CMYK for web projects, which limits your color gamut and filter options.",
        "Keeping the 'Navigator' panel open—it's a waste of space if you master the Spacebar + Scroll zoom.",
        "Not naming layers from the start. 'Layer 1' becomes a nightmare in a 100-layer file."
      ],
      workflow: [
        "Reset to 'Essentials' workspace via Window menu",
        "Open Layers, Properties, and Character panels",
        "Disable 'Auto-Select' on the Move Tool",
        "Set default resolution to 72 PPI for web",
        "Save as 'Pro Studio' workspace"
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
      overview: "If you aren't using layers correctly, you aren't using Photoshop. This lesson teaches the 'Stacking' philosophy that allows for infinite revisions without ever destroying your original pixels.",
      detailedGuide: [
        "LAYER TYPES: We break down the four pillars: Pixel Layers (raster data), Adjustment Layers (non-destructive color/tone), Type Layers (vector text), and Shape Layers (vector geometry). Mixing these correctly is the key to a flexible file.",
        "BLENDING MODES: These are mathematical algorithms that determine how pixels interact. We focus on the 'Big Three': Multiply (darkens, great for shadows), Screen (lightens, perfect for glows), and Overlay (increases contrast, ideal for textures).",
        "OPACITY VS FILL: A common point of confusion. Opacity affects the entire layer including effects (like Drop Shadow). Fill affects only the pixels, leaving the layer styles at 100% visibility. This is essential for advanced UI design.",
        "ORGANIZATION: In a professional studio, files are handed off between designers. We implement a strict naming and color-coding convention. Red for 'Background', Blue for 'Subject', and Green for 'Post-Processing' groups."
      ],
      shortcuts: [
        { action: "New Layer", mac: "⌘ ⇧ N", win: "Ctrl Shift N" },
        { action: "Group Layers", mac: "⌘ G", win: "Ctrl G" },
        { action: "Merge Layers", mac: "⌘ E", win: "Ctrl E" },
        { action: "Select All Layers", mac: "⌘ ⌥ A", win: "Ctrl Alt A" }
      ],
      proTips: [
        "Alt-Click the eye icon to 'Solo' a layer, hiding everything else instantly.",
        "Use 'Lock Transparent Pixels' to paint only on existing shapes without bleeding over edges.",
        "Right-click the eye icon to color-code your groups for instant visual navigation."
      ],
      commonMistakes: [
        "Merging layers too early. Once merged, you lose the ability to edit individual elements.",
        "Using 'Opacity' when you should be using 'Fill' on layers with complex styles.",
        "Not using 'Adjustment Layers' and instead applying destructive changes via Image → Adjustments."
      ],
      workflow: [
        "Import base assets as Smart Objects",
        "Create a 'Base' group for original images",
        "Apply non-destructive Adjustment Layers",
        "Group and name every element logically",
        "Color-code groups for hand-off"
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
        "LAYER MASKS: We master the 'Black Hides, White Reveals' mantra. Using a soft brush on a mask allows for seamless blending between two images that would be impossible with the destructive Eraser tool.",
        "CLIPPING MASKS: This is the secret to modern UI and typography. We 'clip' a photo into a piece of text or a specific shape. The photo only appears where the layer below it has pixels. It's the cleanest way to handle complex layouts.",
        "ADVANCED SELECTIONS: We tackle the hardest subjects—hair and fur. We use the 'Select and Mask' workspace, utilizing the 'Refine Edge' brush to intelligently separate fine details from complex backgrounds.",
        "THE PEN TOOL: While intimidating, the Pen Tool (P) is the only way to get surgical, vector-perfect selections. We learn the 'Rubber Band' method to preview paths before clicking, ensuring smooth curves every time."
      ],
      shortcuts: [
        { action: "Default Colors", mac: "D", win: "D" },
        { action: "Switch Colors", mac: "X", win: "X" },
        { action: "Brush Tool", mac: "B", win: "B" },
        { action: "Pen Tool", mac: "P", win: "P" },
        { action: "Add Mask", mac: "Click Icon", win: "Click Icon" }
      ],
      proTips: [
        "Shift-Click a mask thumbnail to temporarily disable it and see the original image.",
        "Alt-Click a mask to view it in full-screen grayscale—essential for finding 'stray' pixels.",
        "Use the 'Lasso' tool for quick, rough masks, then refine with a soft brush."
      ],
      commonMistakes: [
        "Using the Eraser tool. It is the #1 sign of an amateur workflow.",
        "Masking with a brush that is too hard, creating 'cut-out' looks that don't blend.",
        "Forgetting to select the mask thumbnail before painting, accidentally painting black on your photo."
      ],
      workflow: [
        "Create a rough selection with the Lasso tool",
        "Apply a Layer Mask",
        "Enter 'Select and Mask' for edge refinement",
        "Use a soft black brush at 20% flow to blend edges",
        "Apply a Clipping Mask for text effects"
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
        "HEALING VS CLONING: The Spot Healing Brush is for quick fixes. The Healing Brush (J) is for precision, as it matches the texture of the source to the lighting of the destination. The Clone Stamp (S) is for total pixel replacement.",
        "CONTENT-AWARE FILL: Photoshop's AI engine. We learn how to remove entire people or objects from a scene. We use the 'Sampling Area' to tell Photoshop exactly which parts of the image to use as a reference for the 'guess'.",
        "FREQUENCY SEPARATION: The industry standard for skin. We split the image into two layers: 'Low Frequency' (colors and tones) and 'High Frequency' (texture and pores). This allows us to smooth skin tones without losing the natural skin texture.",
        "NON-DESTRUCTIVE RETOUCHING: We never retouch on the original layer. We create a new blank layer and set our tools to 'Sample All Layers'. This keeps the original photo pristine and allows us to toggle our work on and off."
      ],
      shortcuts: [
        { action: "Healing Brush", mac: "J", win: "J" },
        { action: "Clone Stamp", mac: "S", win: "S" },
        { action: "Sample Source", mac: "⌥ Click", win: "Alt Click" },
        { action: "Brush Size", mac: "[ or ]", win: "[ or ]" }
      ],
      proTips: [
        "Always lower the 'Flow' of your brush to 5-10% for skin work. It's better to build up the effect slowly.",
        "When using the Clone Stamp, change your source point frequently to avoid 'repeating patterns'.",
        "Use the 'Patch Tool' for large areas like under-eye bags for a more natural blend."
      ],
      commonMistakes: [
        "Over-smoothing skin until it looks like a 3D render. Pores are necessary for realism.",
        "Retouching directly on the 'Background' layer.",
        "Not matching the grain/noise of the original photo in your retouched areas, making them look 'blurry'."
      ],
      workflow: [
        "Duplicate background for safety",
        "Create a 'Blemish' layer for Spot Healing",
        "Create a 'Texture' layer for Clone Stamping",
        "Set up Frequency Separation for skin smoothing",
        "Apply a subtle 'Grain' filter to match original noise"
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
      overview: "Color is the emotional language of an image. In this lesson, we move from 'Correction' (fixing mistakes) to 'Grading' (creating a mood). We use the most powerful tools in the software to manipulate light and hue.",
      detailedGuide: [
        "CURVES MASTERY: Curves is the king of adjustments. We learn the 'S-Curve' to add punchy contrast. We then dive into individual Red, Green, and Blue channels to remove color casts (e.g., adding Cyan to the shadows to counter a yellow tint).",
        "LEVELS VS CURVES: Levels is for quick exposure fixes (Black point, White point, Midtones). Curves is for surgical control. We learn to read the Histogram to ensure we aren't 'clipping' (losing detail in) our highlights or shadows.",
        "SELECTIVE COLOR: This is how we get 'The Look'. We can target just the Greens in a forest and shift them toward Yellow for a fall look, or target the Cyans in the sky to make them deeper and more cinematic.",
        "LUMINOSITY MASKING: A pro secret. We create masks based on the brightness of pixels. This allows us to apply a warm orange glow only to the highlights of a sunset without affecting the dark foreground."
      ],
      shortcuts: [
        { action: "Curves", mac: "⌘ M", win: "Ctrl M" },
        { action: "Levels", mac: "⌘ L", win: "Ctrl L" },
        { action: "Hue/Saturation", mac: "⌘ U", win: "Ctrl U" },
        { action: "Invert Mask", mac: "⌘ I", win: "Ctrl I" }
      ],
      proTips: [
        "Use the 'Targeted Adjustment Tool' (the little hand icon in Curves) to click and drag directly on the image to adjust specific tones.",
        "Apply a 'Color Lookup' (LUT) at 15-20% opacity as a final 'glue' to bring all colors together.",
        "Always check your 'Info' panel to ensure your whites are truly white (255, 255, 255) and not tinted."
      ],
      commonMistakes: [
        "Pushing Saturation too high. Use 'Vibrance' instead—it's smarter and protects skin tones.",
        "Ignoring the 'White Balance' at the start. You can't grade a 'broken' image effectively.",
        "Not using the 'Opacity' slider on your adjustment layers to dial back the effect."
      ],
      workflow: [
        "Fix exposure with a Levels layer",
        "Correct White Balance with a Photo Filter",
        "Add contrast with a Curves S-Curve",
        "Shift specific hues with Selective Color",
        "Apply a final LUT for cinematic consistency"
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
    content: {}
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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Photoshop Mastery: <br />
                <span className="text-primary">Zero to Pro.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Start for free with our 5-step foundation course. Upgrade to Pro for just $10 to unlock advanced techniques and earn your Adobe Certified Professional status.
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
                    <div className="font-bold">Adobe Certificate</div>
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

            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700">
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
                Get lifetime access to all 10 steps, advanced project files, and the Adobe Certified Professional path for just $10.
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