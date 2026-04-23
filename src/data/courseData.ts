export const COURSE_STEPS = [
  {
    id: "interface-mastery",
    number: 1,
    title: "Interface & Pro Setup",
    description: "Master the Photoshop workspace. Learn how to navigate panels, customize your layout, and understand the core toolset.",
    skills: ["Workspace Customization", "Selection Tools", "Zoom & Pan", "Basic Brushes"],
    duration: "45 mins",
    isLocked: false,
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
    id: "layer-architecture",
    number: 2,
    title: "The Power of Layers",
    description: "Layers are the foundation of non-destructive editing. Learn how to organize, group, and blend layers effectively.",
    skills: ["Layer Management", "Blending Modes", "Opacity vs Fill", "Layer Groups"],
    duration: "60 mins",
    isLocked: false,
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
    id: "precision-masking",
    number: 3,
    title: "Masking & Selections",
    description: "Go beyond basic selections. Master layer masks, clipping masks, and advanced selection techniques.",
    skills: ["Layer Masks", "Clipping Masks", "Refine Edge", "Pen Tool Basics"],
    duration: "90 mins",
    isLocked: false,
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
    id: "high-end-retouching",
    number: 4,
    title: "Retouching Essentials",
    description: "Learn professional skin retouching and object removal. Master the Healing Brush and Clone Stamp.",
    skills: ["Healing Brush", "Clone Stamp", "Content-Aware Fill", "Frequency Separation"],
    duration: "75 mins",
    isLocked: false,
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
    id: "color-grading",
    number: 5,
    title: "Color Theory & Grading",
    description: "Understand color theory in practice. Use Adjustment Layers, Curves, and Levels to fix exposure.",
    skills: ["Adjustment Layers", "Curves & Levels", "Color Balance", "Selective Color"],
    duration: "60 mins",
    isLocked: false,
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
    id: "master-compositing",
    number: 6,
    title: "Master Compositing",
    description: "Bring multiple images together seamlessly. Learn about perspective matching and lighting consistency.",
    skills: ["Perspective Warp", "Lighting Match", "Shadow Creation", "Atmospheric Depth"],
    duration: "120 mins",
    isLocked: true,
    content: {
      overview: "Compositing is the pinnacle of Photoshop skill. It requires a deep understanding of physics, light, and perspective to trick the human eye into believing multiple photos are one.",
      detailedGuide: [
        "PERSPECTIVE MATCHING: We use the 'Perspective Warp' tool to align the horizon lines of different images. If your subject was shot from below and your background from above, the composite will never look real without this step.",
        "LIGHTING CONSISTENCY: We analyze the 'Light Source' in every asset. We use Curves to match the black points and white points of our subject to the background, ensuring they share the same environmental light.",
        "SHADOW CREATION: Real shadows aren't just black blobs. We create 'Contact Shadows' (dark and sharp) and 'Cast Shadows' (softer and longer) using multiple layers and Gaussian Blur to ground the subject.",
        "ATMOSPHERIC DEPTH: We use 'Haze' and 'Fog' layers to separate the foreground from the background. This mimics the way air particles scatter light over long distances, adding massive scale to your work."
      ],
      shortcuts: [
        { action: "Free Transform", mac: "⌘ T", win: "Ctrl T" },
        { action: "Perspective Warp", mac: "Menu", win: "Menu" },
        { action: "Gaussian Blur", mac: "Menu", win: "Menu" },
        { action: "New Layer via Copy", mac: "⌘ J", win: "Ctrl J" }
      ],
      proTips: [
        "Add a tiny bit of 'Noise' to the final composite to unify the different grain structures of your source images.",
        "Use a 'Check Layer' (Solid Black layer set to Color mode) to see if your luminosity values match across all assets.",
        "Always blur the background slightly to mimic a real camera's depth of field."
      ],
      commonMistakes: [
        "Ignoring the horizon line. If perspectives don't match, the image feels 'off' instantly.",
        "Making shadows too dark. Real shadows usually contain some reflected color from the environment.",
        "Not matching the color temperature between the subject and the background."
      ],
      workflow: [
        "Align horizon lines with Perspective Warp",
        "Match luminosity with Curves",
        "Match color with Color Balance",
        "Paint contact and cast shadows",
        "Add atmospheric haze and final grain"
      ]
    }
  },
  {
    id: "smart-workflow",
    number: 7,
    title: "Smart Objects & Filters",
    description: "Work smarter, not harder. Master Smart Objects for non-destructive filtering.",
    skills: ["Smart Objects", "Camera Raw Filter", "Blur Gallery", "Liquify"],
    duration: "45 mins",
    isLocked: true,
    content: {
      overview: "Smart Objects are the 'Save States' of Photoshop. They allow you to scale, rotate, and apply filters without ever losing the original pixel data.",
      detailedGuide: [
        "LINKED VS EMBEDDED: We learn when to 'Link' a file (great for large projects where assets change) versus 'Embedding' it (keeping everything inside one PSD).",
        "SMART FILTERS: Every filter applied to a Smart Object becomes a 'Smart Filter'. This means you can double-click 'Gaussian Blur' three days later and change the radius from 10px to 5px without starting over.",
        "CAMERA RAW FILTER: The most powerful engine in Photoshop. We use it as a Smart Filter to apply professional-grade color grading and texture adjustments to any layer, not just RAW photos.",
        "MOCKUP CREATION: We build a professional product mockup. By using Smart Objects, we can swap out a label design on a 3D bottle with one click, maintaining all the highlights and shadows automatically."
      ],
      shortcuts: [
        { action: "Convert to Smart Object", mac: "Right Click", win: "Right Click" },
        { action: "Edit Smart Object", mac: "Double Click", win: "Double Click" },
        { action: "Camera Raw", mac: "⌘ ⇧ A", win: "Ctrl Shift A" },
        { action: "Liquify", mac: "⌘ ⇧ X", win: "Ctrl Shift X" }
      ],
      proTips: [
        "You can nest Smart Objects inside other Smart Objects for complex, modular designs.",
        "Use the 'Smart Filter Mask' to hide a filter from specific parts of your layer.",
        "Smart Objects preserve the original resolution, so you can shrink an image and then blow it back up without losing quality."
      ],
      commonMistakes: [
        "Rasterizing layers before applying filters. This is a destructive workflow.",
        "Not using Smart Objects for logos, which leads to pixelation when resizing.",
        "Forgetting that Smart Objects increase file size significantly."
      ],
      workflow: [
        "Convert all base assets to Smart Objects",
        "Apply Camera Raw for base correction",
        "Add Smart Filters for creative effects",
        "Use Smart Object instances for mockups",
        "Save as a template for future use"
      ]
    }
  },
  {
    id: "typography-layout",
    number: 8,
    title: "Typography & Layout",
    description: "Integrate text and vector shapes into your designs. Learn about kerning and tracking.",
    skills: ["Type Tool", "Character Panel", "Vector Shapes", "Path Operations"],
    duration: "60 mins",
    isLocked: true,
    content: {
      overview: "Design is 90% typography. This lesson moves beyond just 'typing' and into the world of professional typesetting and layout hierarchy.",
      detailedGuide: [
        "THE CHARACTER PANEL: We master Kerning (space between two letters), Tracking (space across a word), and Leading (space between lines). These are the marks of a professional designer.",
        "VECTOR SHAPES: Photoshop isn't just for pixels. We use the Shape Tool (U) to create crisp, scalable icons and UI elements that stay sharp at any size.",
        "TEXT ON A PATH: We learn how to make text follow curves and circles, essential for badge design and creative editorial layouts.",
        "HIERARCHY & GRID: We set up a 12-column grid system to ensure our layouts feel balanced and professional, rather than just 'placed' randomly."
      ],
      shortcuts: [
        { action: "Type Tool", mac: "T", win: "T" },
        { action: "Increase Leading", mac: "⌥ ↓", win: "Alt ↓" },
        { action: "Increase Tracking", mac: "⌥ →", win: "Alt →" },
        { action: "Reset Character", mac: "Menu", win: "Menu" }
      ],
      proTips: [
        "Never use the 'Bold' or 'Italic' buttons in the panel; always use the actual font weight from the dropdown for better geometry.",
        "Use 'Area Type' for long paragraphs to control the bounding box easily.",
        "Hold Shift while using the Shape tool to maintain perfect proportions (circles/squares)."
      ],
      commonMistakes: [
        "Stretching text vertically or horizontally. This is a cardinal sin of design.",
        "Using too many fonts. Stick to 2-3 max for a cohesive look.",
        "Ignoring 'Leading', which makes text hard to read when lines are too close."
      ],
      workflow: [
        "Set up a layout grid",
        "Place primary headline with proper tracking",
        "Set body copy with comfortable leading",
        "Add vector accents for visual interest",
        "Align everything to the grid"
      ]
    }
  },
  {
    id: "automation-speed",
    number: 9,
    title: "Automation & Speed",
    description: "Speed up your workflow. Learn how to record custom actions and use batch processing.",
    skills: ["Recording Actions", "Batch Processing", "Image Processor", "Droplets"],
    duration: "45 mins",
    isLocked: true,
    content: {
      overview: "Time is money. This lesson teaches you how to make Photoshop do the boring work for you, so you can focus on being creative.",
      detailedGuide: [
        "RECORDING ACTIONS: We record a complex 'Cinematic Look' action. Every step—from Curves to Sharpening—is saved so you can apply it to 100 photos with one click.",
        "BATCH PROCESSING: We use the 'Image Processor' to resize, convert to JPEG, and apply an action to an entire folder of images automatically while you grab a coffee.",
        "DROPLETS: We create a 'Droplet' on your desktop. You can drag and drop files directly onto this icon to trigger a Photoshop workflow without even opening the app first.",
        "TOOL PRESETS: We save our favorite brush settings, gradients, and patterns as presets for instant access in any project."
      ],
      shortcuts: [
        { action: "Actions Panel", mac: "⌥ F9", win: "Alt F9" },
        { action: "Play Action", mac: "Click Play", win: "Click Play" },
        { action: "Stop Recording", mac: "Click Stop", win: "Click Stop" },
        { action: "Batch Menu", mac: "File → Auto", win: "File → Auto" }
      ],
      proTips: [
        "Insert 'Stops' in your actions to allow for manual adjustment of specific layers during the playback.",
        "Use 'Conditional Actions' to make Photoshop decide what to do based on the image orientation (Portrait vs Landscape).",
        "Organize your actions into 'Sets' to keep your workspace clean."
      ],
      commonMistakes: [
        "Recording 'Save As' steps with specific filenames, which causes the action to overwrite the same file every time.",
        "Not testing actions on different sized images before running a batch.",
        "Forgetting to 'Stop' recording, leading to massive, broken actions."
      ],
      workflow: [
        "Plan the workflow steps on paper",
        "Record the action on a test image",
        "Add 'Stops' for user input",
        "Run a Batch test on 5 images",
        "Export as a Droplet for desktop use"
      ]
    }
  },
  {
    id: "final-masterclass",
    number: 10,
    title: "The Final Masterclass",
    description: "Put it all together. Follow a full start-to-finish workflow for a professional commercial project.",
    skills: ["Workflow Management", "Final Export Settings", "Portfolio Presentation", "Client Delivery"],
    duration: "180 mins",
    isLocked: true,
    content: {
      overview: "The capstone project. We take a real-world client brief and build a high-end commercial advertisement from scratch using every skill learned in the course.",
      detailedGuide: [
        "THE BRIEF: We analyze a creative brief for a luxury watch brand. We define the mood, the target audience, and the technical requirements.",
        "ASSET PREPARATION: We source high-res assets, convert them to Smart Objects, and set up our master PSD with a professional group structure.",
        "THE BUILD: We perform high-end retouching on the watch, composite it into a dramatic environment, apply cinematic color grading, and add professional typography.",
        "EXPORT & DELIVERY: We learn about 'Export As' settings, color profiles for different platforms, and how to package the final files for a client."
      ],
      shortcuts: [
        { action: "Export As", mac: "⌘ ⌥ ⇧ W", win: "Ctrl Alt Shift W" },
        { action: "Save for Web", mac: "⌘ ⌥ ⇧ S", win: "Ctrl Alt Shift S" },
        { action: "Package File", mac: "Menu", win: "Menu" },
        { action: "Full Screen", mac: "F", win: "F" }
      ],
      proTips: [
        "Always export a 'Web-Ready' version and a 'High-Res Print' version for the client.",
        "Create a 'Making Of' time-lapse or breakdown for your portfolio to show your process.",
        "Use 'Layer Comps' to show the client different versions of the design within the same file."
      ],
      commonMistakes: [
        "Not checking the final export on a mobile device. Colors can look very different.",
        "Sending the client a 2GB PSD instead of a flattened TIFF or high-quality JPEG.",
        "Forgetting to include the fonts or linked assets in the final delivery package."
      ],
      workflow: [
        "Analyze the client brief",
        "Build the master composition",
        "Apply pro retouching and grading",
        "Add final typography and branding",
        "Export and package for delivery"
      ]
    }
  }
];