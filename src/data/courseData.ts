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
      overview: "Setting up your environment is the first step to professional mastery. Photoshop offers near-infinite customizability, but most designers clutter their screen with unused panels. This lesson cuts through the noise to build a high-performance 'cockpit' designed for speed and precision. We don't just look at where buttons are; we look at why they are there and how to optimize the software's engine for high-resolution commercial work.",
      detailedGuide: [
        "THE TOOLBAR PHILOSOPHY: Located on the left, this is your primary arsenal. We distinguish between the Move Tool (V) and the Artboard Tool. Crucially, we disable 'Auto-Select' in the Options Bar—a common beginner trap. In a professional environment with 200+ layers, Auto-Select causes the software to jump between layers based on where you click, leading to accidental movements of background elements. We learn to use Cmd/Ctrl + Click to select layers manually, giving you total control over your canvas architecture.",
        "ESSENTIAL PANEL CONFIGURATION: We move away from the 'Essentials' default and configure a 'Graphic and Web' hybrid workspace. The Layers Panel is your heart and should occupy at least 40% of your vertical sidebar. We dock the Properties Panel directly above it; this panel is context-sensitive and is the most powerful tool for adjusting live shapes, typography, and mask densities without digging through menus. We also introduce the History Panel, but we configure it to 100 states in Preferences to allow for deep non-destructive backtracking during complex compositing phases.",
        "RESOLUTION, COLOR SPACE & BIT DEPTH: This is where most projects fail before they start. For digital work, we set documents to 72 PPI (Pixels Per Inch) and RGB Color Mode (sRGB for web, Adobe RGB for high-end photography). However, we dive into 16-bit vs 8-bit modes. While 8-bit is standard, 16-bit is essential for heavy color grading to prevent 'banding' in gradients. We discuss the performance trade-offs of working in higher bit depths and when it is strictly necessary for commercial delivery.",
        "THE OPTIONS BAR & TOOL PRESETS: Every tool has a 'secret life' at the top of the screen. We master the Brush Tool (B) settings here. We explore the critical difference between Opacity (the overall transparency of the stroke) and Flow (the speed at which 'ink' leaves the brush). Professionals often keep Opacity at 100% and drop Flow to 5-10% for organic, pressure-sensitive blending that mimics real-world airbrushing. We also set up Tool Presets for our most used configurations to save hours of repetitive clicking.",
        "PERFORMANCE & SCRATCH DISKS: To handle 10-page document equivalents, Photoshop needs memory. We go into the Preferences menu to allocate at least 70% of available RAM to the software. We also discuss 'Scratch Disks'—temporary storage used when RAM is full. We learn why you should never use your primary OS drive as a scratch disk and how a dedicated external SSD can prevent the dreaded 'Scratch Disk Full' error during a deadline."
      ],
      shortcuts: [
        { action: "Zoom In/Out", mac: "⌘ + / ⌘ -", win: "Ctrl + / Ctrl -" },
        { action: "Fit to Screen", mac: "⌘ 0", win: "Ctrl 0" },
        { action: "Hand Tool (Temporary)", mac: "Spacebar (Hold)", win: "Spacebar (Hold)" },
        { action: "Toggle Screen Modes", mac: "F", win: "F" },
        { action: "Hide/Show All Panels", mac: "Tab", win: "Tab" },
        { action: "Default Colors (D) / Switch (X)", mac: "D / X", win: "D / X" }
      ],
      proTips: [
        "Use 'Spring-Loaded Shortcuts': Hold a tool's key (like 'E' for Eraser), use it, and release. Photoshop will automatically snap back to your previous tool.",
        "Enable 'Overscroll' in Preferences to move your canvas freely even when zoomed out, preventing the 'stuck in the corner' feeling.",
        "Set your 'Recent File List' to 50 to quickly jump between different versions of a project."
      ],
      commonMistakes: [
        "Working in CMYK for web projects. This disables many filters and limits your color gamut significantly.",
        "Leaving 'Use Graphics Processor' unchecked in Performance settings, which makes the UI laggy and disables 3D features.",
        "Not saving a custom Workspace. If you accidentally drag a panel out, you'll spend 10 minutes trying to find it again."
      ],
      workflow: [
        "Reset to 'Essentials' then strip away the Navigator and Learn panels",
        "Open Layers, Properties, Character, and History panels",
        "Go to Preferences > Performance and allocate 70% RAM",
        "Set 'Auto-Select' to OFF on the Move Tool",
        "Save as 'LP Pro Studio' workspace for instant recall"
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
      overview: "If you aren't using layers correctly, you aren't using Photoshop; you're just painting on a digital napkin. This lesson teaches the 'Stacking' philosophy that allows for infinite revisions. We move beyond simple stacking into complex layer hierarchies, clipping relationships, and the mathematical logic behind blending modes that define the look of modern digital art.",
      detailedGuide: [
        "THE FOUR PILLARS OF LAYER TYPES: We break down the fundamental differences between Pixel Layers (raster data), Adjustment Layers (non-destructive math), Type Layers (vector-based text), and Shape Layers (mathematical geometry). We learn why you should almost never 'Rasterize' a layer, as it permanently destroys the ability to scale or edit properties. We introduce the concept of 'Smart Objects' as a container that protects your original pixels from any transformation or filter.",
        "BLENDING MODE MATHEMATICS: Blending modes aren't just random effects; they are algorithms. We categorize them into 'The Big Three' groups. The Darken group (Multiply) looks at the luminance of pixels and removes white. The Lighten group (Screen) removes black. The Contrast group (Overlay/Soft Light) ignores 50% gray and pushes pixels toward black or white. Understanding this math allows you to predict exactly how a texture or light effect will interact with your subject without cycling through the list blindly.",
        "OPACITY VS FILL - THE DEEP DIVE: This is the most misunderstood feature in the Layers panel. Opacity affects the entire layer, including any Layer Styles (like Drop Shadow or Stroke). Fill only affects the 'interior' pixels. We demonstrate this by creating a 'Glass' effect: we drop the Fill to 0% but keep the Opacity at 100%. The object becomes invisible, but the reflections and shadows remain. This is the secret to advanced UI design and realistic glass/water compositing.",
        "PROFESSIONAL ORGANIZATION & HAND-OFF: In a high-end studio, your PSD is a shared document. We implement a strict naming convention (e.g., 'BG_Forest_01', 'SUBJ_Model_Main'). We use Layer Groups (Cmd/Ctrl + G) to create a nested hierarchy. We also explore 'Layer Comps', a powerful feature that allows you to save different versions of a layout (e.g., 'Mobile Version' vs 'Desktop Version') within a single file, toggling between them with one click.",
        "LAYER LOCKING & ISOLATION: We explore the four types of locks: Transparency, Image, Position, and All. We focus on 'Lock Transparent Pixels', which allows you to repaint a shape without ever bleeding over the edges. This is essential for adding highlights and shadows to characters or products without needing complex masks for every single stroke."
      ],
      shortcuts: [
        { action: "New Layer", mac: "⌘ ⇧ N", win: "Ctrl Shift N" },
        { action: "Group Selected Layers", mac: "⌘ G", win: "Ctrl G" },
        { action: "Merge Layers (Destructive)", mac: "⌘ E", win: "Ctrl E" },
        { action: "Stamp Visible (New Layer)", mac: "⌘ ⌥ ⇧ E", win: "Ctrl Alt Shift E" },
        { action: "Cycle Blending Modes", mac: "⇧ + / -", win: "Shift + / -" }
      ],
      proTips: [
        "Alt-Click the eye icon to 'Solo' a layer. This hides everything else instantly, allowing you to inspect a single element for stray pixels.",
        "Right-click the eye icon to color-code your groups. Use Red for 'Background', Blue for 'Subject', and Green for 'Effects'.",
        "Use 'Search' in the Layers panel to find layers by name, type, or even specific effects when working on 500+ layer documents."
      ],
      commonMistakes: [
        "Merging layers to 'save space'. This is a death sentence for revisions. Use Groups instead.",
        "Applying 'Image > Adjustments' directly to a layer. This is destructive. Always use the Adjustment Layer icons at the bottom of the panel.",
        "Not naming layers. 'Layer 54 copy 2' is the hallmark of an amateur and makes collaboration impossible."
      ],
      workflow: [
        "Import all assets as Smart Objects",
        "Create a 'BASE' group for raw assets",
        "Apply non-destructive Adjustment Layers above the base",
        "Use 'Stamp Visible' for final global sharpening",
        "Color-code and name every group before saving"
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
      overview: "Masking is the 'Eraser' tool's professional, non-destructive older brother. In this lesson, we master the art of 'hiding' rather than 'deleting'. We tackle the hardest subjects in digital imaging—hair, fur, and transparent objects—using a combination of AI-powered selection tools and surgical manual techniques with the Pen Tool.",
      detailedGuide: [
        "THE MASKING MANTRA: 'Black Hides, White Reveals'. We explore the Layer Mask as a grayscale map. We learn to use soft brushes for organic blending and hard brushes for mechanical edges. We also dive into 'Density' and 'Feather' controls within the Properties panel, which allow you to adjust the softness of a mask globally without repainting it.",
        "CLIPPING MASKS - THE DESIGNER'S SECRET: Clipping masks allow one layer to take the shape of the layer below it. We use this to 'clip' a high-res texture into a piece of typography. This keeps the text editable while giving it a complex visual fill. We also use this for 'Adjustment Layer Clipping', ensuring a color change only affects the specific object it is clipped to, rather than the entire scene.",
        "ADVANCED SELECTION & REFINE EDGE: We enter the 'Select and Mask' workspace to tackle hair. We use the 'Refine Edge' brush to intelligently analyze the pixels between the hair and the background. We learn about 'Decontaminate Colors', which removes the background color 'fringe' that often ruins a composite, replacing it with the colors of the hair itself.",
        "THE PEN TOOL MASTERY: While AI tools are getting better, the Pen Tool (P) remains the only way to get surgical, vector-perfect selections for product photography. We learn the 'Rubber Band' method to preview paths and the 'Alt-Click' technique to break handles for sharp corners. We discuss why 'Paths' are superior to 'Selections' for long-term project storage.",
        "CHANNEL MASKING FOR TRANSPARENCY: For the most complex tasks, like smoke or glass, we look at the individual Red, Green, and Blue channels. We find the channel with the most contrast, duplicate it, and use 'Levels' to turn it into a high-contrast silhouette. This is the 'God Tier' of masking that separates the pros from the hobbyists."
      ],
      shortcuts: [
        { action: "Add Layer Mask", mac: "Click Icon", win: "Click Icon" },
        { action: "Invert Mask", mac: "⌘ I", win: "Ctrl I" },
        { action: "View Mask Only", mac: "⌥ Click Mask", win: "Alt Click Mask" },
        { action: "Disable Mask", mac: "⇧ Click Mask", win: "Shift Click Mask" },
        { action: "Make Selection from Path", mac: "⌘ Enter", win: "Ctrl Enter" }
      ],
      proTips: [
        "Use the 'Lasso' tool to make a rough selection, then hold Alt while clicking the 'Add Mask' icon to hide the selection instead of showing it.",
        "When masking hair, use a 'Custom Hair Brush' on the mask edges to paint back individual strands for a 100% realistic look.",
        "Always keep your masks slightly 'choked' (contracted by 1-2 pixels) to avoid the white halo effect common in poor composites."
      ],
      commonMistakes: [
        "Using the Eraser tool. It is the #1 sign of an amateur workflow and makes it impossible to bring back pixels later.",
        "Masking with a brush that is too hard. Real objects have a slight 'optical blur' at the edges; a 100% hard brush looks like a cheap paper cutout.",
        "Forgetting to select the mask thumbnail before painting, resulting in black paint directly on your image."
      ],
      workflow: [
        "Create a rough path with the Pen Tool",
        "Convert path to selection with 0.5px feather",
        "Apply Layer Mask",
        "Use 'Select and Mask' for hair/fur refinement",
        "Use a soft black brush at 20% flow to blend the base"
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
      overview: "Professional retouching isn't about making people look like plastic; it's about removing distractions while preserving natural texture. This lesson covers the 'Invisible Art' of high-end retouching, from basic blemish removal to the industry-standard Frequency Separation technique used in fashion magazines.",
      detailedGuide: [
        "HEALING VS CLONING - THE TECHNICAL DIFFERENCE: The Spot Healing Brush is for quick, AI-driven fixes. The Healing Brush (J) is for precision, as it matches the texture of the source to the lighting of the destination. The Clone Stamp (S) is for total pixel replacement. We learn to use the 'Clone Source' panel to rotate or flip our sample point, preventing the 'repeating pattern' look that ruins amateur retouches.",
        "CONTENT-AWARE FILL & AI GENERATIVE FILL: We explore Photoshop's latest AI engines. We learn how to remove entire people or objects from a scene by defining a 'Sampling Area'. We discuss the ethics and technical limitations of AI fill, and how to manually 'clean up' the AI's mistakes using traditional tools to ensure a high-res finish.",
        "FREQUENCY SEPARATION - THE GOLD STANDARD: This is the secret to perfect skin. We split the image into two layers: 'Low Frequency' (colors and tones) and 'High Frequency' (texture, pores, and fine lines). This allows us to smooth out blotchy skin tones on the Low layer without losing the natural skin texture on the High layer. We provide the exact mathematical steps to set this up manually.",
        "DODGE & BURN FOR DIMENSION: Retouching often flattens an image. We use Dodge (lighten) and Burn (darken) on a 50% Gray layer set to 'Overlay' mode. This allows us to manually sculpt the face, enhancing cheekbones and jawlines, and adding 'pop' to the eyes without touching the original pixels.",
        "NON-DESTRUCTIVE RETOUCHING WORKFLOW: We never retouch on the original layer. We create a new blank layer and set our tools to 'Sample All Layers'. This keeps the original photo pristine, allows us to toggle our work on and off for client review, and makes it easy to dial back the intensity using the layer opacity slider."
      ],
      shortcuts: [
        { action: "Healing Brush", mac: "J", win: "J" },
        { action: "Clone Stamp", mac: "S", win: "S" },
        { action: "Sample Source", mac: "⌥ Click", win: "Alt Click" },
        { action: "Brush Size / Hardness", mac: "[ ] / ⇧ [ ]", win: "[ ] / Shift [ ]" },
        { action: "Patch Tool", mac: "J (Cycle)", win: "J (Cycle)" }
      ],
      proTips: [
        "Always lower the 'Flow' of your brush to 5-10% for skin work. It's better to build up the effect slowly than to overdo it in one click.",
        "When using the Clone Stamp, change your source point frequently. This avoids 'ghosting' and repeating textures.",
        "Use the 'Healing Brush' for wrinkles and the 'Clone Stamp' for hard edges like stray hairs against a background."
      ],
      commonMistakes: [
        "Over-smoothing skin until it looks like a 3D render. Pores are necessary for realism and 'believability'.",
        "Retouching directly on the 'Background' layer, making it impossible to undo changes later.",
        "Not matching the grain/noise of the original photo in your retouched areas, making them look 'blurry' or 'smudged'."
      ],
      workflow: [
        "Duplicate background for safety and hide it",
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
      overview: "Color is the emotional language of an image. In this lesson, we move from 'Correction' (fixing mistakes) to 'Grading' (creating a mood). We use the most powerful tools in the software—Curves, Selective Color, and Camera Raw—to manipulate light and hue with cinematic precision.",
      detailedGuide: [
        "CURVES MASTERY - THE KING OF TOOLS: Curves is the most powerful adjustment in Photoshop. We learn the 'S-Curve' to add punchy contrast. We then dive into individual Red, Green, and Blue channels. We learn that adding Red to the highlights and Cyan to the shadows creates a classic cinematic look. We also explore the 'Targeted Adjustment Tool' to click and drag directly on the image to adjust specific tones.",
        "LEVELS VS CURVES - WHEN TO USE WHICH: Levels is for quick exposure fixes (Black point, White point, Midtones). Curves is for surgical control. We learn to read the Histogram—a graph of every pixel's brightness—to ensure we aren't 'clipping' (losing detail in) our highlights or shadows. We discuss why 'Clipping' is the #1 sign of an amateur edit.",
        "SELECTIVE COLOR & HUE/SATURATION: This is how we get 'The Look'. We can target just the Greens in a forest and shift them toward Yellow for a fall look, or target the Cyans in the sky to make them deeper. We learn why 'Vibrance' is superior to 'Saturation' for protecting skin tones from becoming orange and 'fried'.",
        "LUMINOSITY MASKING - THE PRO SECRET: We learn how to create masks based on the brightness of pixels. This allows us to apply a warm orange glow only to the highlights of a sunset without affecting the dark foreground. This is the key to the 'High-End' look seen in professional landscape and architectural photography.",
        "COLOR LOOKUP (LUTs) & FINAL GLUE: We explore the 'Color Lookup' adjustment layer. We learn how to use industry-standard .CUBE files to apply a consistent 'grade' across multiple images. We discuss using these at 15-20% opacity as a final 'glue' to bring all the disparate colors of a composite together into one cohesive story."
      ],
      shortcuts: [
        { action: "Curves", mac: "⌘ M", win: "Ctrl M" },
        { action: "Levels", mac: "⌘ L", win: "Ctrl L" },
        { action: "Hue/Saturation", mac: "⌘ U", win: "Ctrl U" },
        { action: "Invert Mask", mac: "⌘ I", win: "Ctrl I" },
        { action: "Camera Raw Filter", mac: "⌘ ⇧ A", win: "Ctrl Shift A" }
      ],
      proTips: [
        "Use a 'Black & White' adjustment layer set to 'Luminosity' mode to control the brightness of specific colors without changing their hue.",
        "Always check your 'Info' panel to ensure your whites are truly white (255, 255, 255) and not tinted by a stray color grade.",
        "Apply a 'Gradient Map' set to 'Soft Light' at low opacity for a quick, professional color wash."
      ],
      commonMistakes: [
        "Pushing Saturation too high. It destroys detail and makes the image look 'cheap'.",
        "Ignoring the 'White Balance' at the start. You can't grade a 'broken' image effectively; fix the temperature first.",
        "Not using the 'Opacity' slider on your adjustment layers to dial back the effect for a more natural look."
      ],
      workflow: [
        "Fix exposure with a Levels layer using the Histogram",
        "Correct White Balance with a Photo Filter or Camera Raw",
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
      overview: "Compositing is the pinnacle of Photoshop skill. It requires a deep understanding of physics, light, and perspective to trick the human eye into believing multiple photos are one. This lesson covers the 'Full Build' of a commercial composite, from horizon alignment to atmospheric haze.",
      detailedGuide: [
        "PERSPECTIVE MATCHING & HORIZON LINES: We use the 'Perspective Warp' tool to align the horizon lines of different images. If your subject was shot from below and your background from above, the composite will never look real. We learn how to find the 'Vanishing Point' in any photo and match our assets to it.",
        "LIGHTING CONSISTENCY & LUMINOSITY MATCHING: We analyze the 'Light Source' in every asset. We use Curves to match the black points and white points of our subject to the background. We learn the 'Check Layer' trick: a solid black layer set to 'Color' mode, which allows us to see only the brightness values and match them perfectly.",
        "SHADOW CREATION - CONTACT & CAST: Real shadows aren't just black blobs. We create 'Contact Shadows' (dark, sharp, and thin) where the object touches the ground, and 'Cast Shadows' (softer, longer, and tinted by the environment). We use multiple layers and Gaussian Blur to ground the subject realistically.",
        "ATMOSPHERIC DEPTH & HAZE: We use 'Haze' and 'Fog' layers to separate the foreground from the background. This mimics the way air particles scatter light over long distances. We learn how to use the 'Depth Map' feature in Neural Filters to automate this process for complex scenes.",
        "UNIFYING WITH NOISE & GRAIN: The final secret to a perfect composite is 'Unification'. Every camera sensor has a different noise pattern. We apply a global 'Add Noise' filter (at 1-2%) to the entire image to 'marry' the different assets together, making them look like they were shot on the same camera."
      ],
      shortcuts: [
        { action: "Free Transform", mac: "⌘ T", win: "Ctrl T" },
        { action: "Perspective Warp", mac: "Menu", win: "Menu" },
        { action: "Gaussian Blur", mac: "Menu", win: "Menu" },
        { action: "New Layer via Copy", mac: "⌘ J", win: "Ctrl J" }
      ],
      proTips: [
        "Use 'Match Color' (Image > Adjustments > Match Color) as a starting point, but always refine it manually with Curves.",
        "When creating shadows, sample a dark color from the environment rather than using pure black (#000000).",
        "Always blur the background slightly to mimic a real camera's depth of field, which helps 'seat' the subject."
      ],
      commonMistakes: [
        "Ignoring the horizon line. If perspectives don't match, the image feels 'off' instantly to the human brain.",
        "Making shadows too dark or too sharp. Real shadows are influenced by ambient light and distance.",
        "Not matching the color temperature between the subject and the background."
      ],
      workflow: [
        "Align horizon lines with Perspective Warp",
        "Match luminosity with Curves using a Check Layer",
        "Match color temperature with Color Balance",
        "Paint contact and cast shadows on separate layers",
        "Add atmospheric haze and final grain for unification"
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
      overview: "Smart Objects are the 'Save States' of Photoshop. They allow you to scale, rotate, and apply filters without ever losing the original pixel data. This lesson teaches you how to build 'Future-Proof' files that can be edited months later with zero quality loss.",
      detailedGuide: [
        "LINKED VS EMBEDDED SMART OBJECTS: We learn when to 'Link' a file (great for large projects where assets change, like a logo) versus 'Embedding' it (keeping everything inside one PSD). We discuss how this affects file size and portability.",
        "SMART FILTERS & RE-EDITABILITY: Every filter applied to a Smart Object becomes a 'Smart Filter'. This means you can double-click 'Gaussian Blur' three days later and change the radius from 10px to 5px. We also explore the 'Smart Filter Mask', which allows you to hide a filter from specific parts of a layer.",
        "CAMERA RAW AS A SMART FILTER: The most powerful engine in Photoshop. We use it as a Smart Filter to apply professional-grade color grading, texture adjustments, and 'Dehaze' to any layer, not just RAW photos. This is the fastest way to get a 'finished' look.",
        "MOCKUP CREATION & DISPLACEMENT MAPS: We build a professional product mockup. By using Smart Objects, we can swap out a label design on a 3D bottle with one click. We also explore 'Displacement Maps' to make the label wrap realistically around the curves of the bottle.",
        "LIQUIFY & SMART OBJECTS: We learn how to use the Liquify tool non-destructively. This is essential for high-end fashion retouching, allowing you to adjust shapes and proportions while maintaining the ability to 'reset' or 'tweak' the mesh later."
      ],
      shortcuts: [
        { action: "Convert to Smart Object", mac: "Right Click", win: "Right Click" },
        { action: "Edit Smart Object", mac: "Double Click", win: "Double Click" },
        { action: "Camera Raw", mac: "⌘ ⇧ A", win: "Ctrl Shift A" },
        { action: "Liquify", mac: "⌘ ⇧ X", win: "Ctrl Shift X" }
      ],
      proTips: [
        "You can nest Smart Objects inside other Smart Objects for complex, modular designs like a website UI.",
        "Use 'Replace Contents' to quickly swap out an image while keeping all the filters and masks applied to it.",
        "Smart Objects preserve the original resolution, so you can shrink an image to 1% and then blow it back up to 100% without losing quality."
      ],
      commonMistakes: [
        "Rasterizing layers before applying filters. This is a destructive workflow and the mark of a beginner.",
        "Not using Smart Objects for logos, which leads to pixelation when resizing for different layouts.",
        "Forgetting that Smart Objects increase file size significantly; use them strategically."
      ],
      workflow: [
        "Convert all base assets to Smart Objects immediately",
        "Apply Camera Raw for base correction and sharpening",
        "Add Smart Filters for creative effects like Blur or Noise",
        "Use Smart Object instances for mockups and templates",
        "Save as a 'Master Template' for future use"
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
      overview: "Design is 90% typography. This lesson moves beyond just 'typing' and into the world of professional typesetting, layout hierarchy, and vector integration within a raster environment.",
      detailedGuide: [
        "THE CHARACTER PANEL - BEYOND THE BASICS: We master Kerning (space between two letters), Tracking (space across a word), and Leading (space between lines). We discuss the 'Optical' vs 'Metric' kerning settings and why pros always choose Optical for headlines.",
        "VECTOR SHAPES & PATH OPERATIONS: Photoshop isn't just for pixels. We use the Shape Tool (U) to create crisp, scalable icons. We explore 'Path Operations' like Combine, Subtract, and Intersect to build complex vector logos directly in Photoshop.",
        "TEXT ON A PATH & WARP: We learn how to make text follow curves and circles, essential for badge design. We also explore 'Type Warp' to create 70s-style retro typography without distorting the letterforms into a blurry mess.",
        "HIERARCHY, GRIDS & ALIGNMENT: We set up a 12-column grid system using 'New Guide Layout'. We discuss the 'Rule of Thirds' and 'Golden Ratio' in layout design to ensure our designs feel balanced and professional.",
        "LAYER STYLES FOR TYPE: We move beyond the 'Drop Shadow'. We learn to create 'Inner Glows' for a 3D look, 'Bevel and Emboss' for glass effects, and 'Gradient Overlays' that follow the light source of our composite."
      ],
      shortcuts: [
        { action: "Type Tool", mac: "T", win: "T" },
        { action: "Increase Leading", mac: "⌥ ↓", win: "Alt ↓" },
        { action: "Increase Tracking", mac: "⌥ →", win: "Alt →" },
        { action: "Reset Character Panel", mac: "Menu", win: "Menu" },
        { action: "Show/Hide Guides", mac: "⌘ ;", win: "Ctrl ;" }
      ],
      proTips: [
        "Never use the 'Faux Bold' or 'Faux Italic' buttons; always use the actual font weight from the dropdown for better geometry.",
        "Use 'Area Type' (click and drag) for long paragraphs to control the bounding box easily.",
        "Hold Shift while using the Shape tool to maintain perfect proportions for circles and squares."
      ],
      commonMistakes: [
        "Stretching text vertically or horizontally. This is a cardinal sin of design and ruins the font's geometry.",
        "Using too many fonts. Stick to 2-3 max for a cohesive and professional look.",
        "Ignoring 'Leading', which makes text hard to read when lines are too close together."
      ],
      workflow: [
        "Set up a layout grid using 'New Guide Layout'",
        "Place primary headline with proper tracking and kerning",
        "Set body copy with comfortable leading for readability",
        "Add vector accents and shapes for visual interest",
        "Align everything to the grid for a clean finish"
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
      overview: "Time is money. This lesson teaches you how to make Photoshop do the boring work for you, so you can focus on being creative. We explore the world of Actions, Batching, and Droplets for high-volume production.",
      detailedGuide: [
        "RECORDING ACTIONS - THE LOGIC: We record a complex 'Cinematic Look' action. Every step—from Curves to Sharpening—is saved. We learn how to make actions 'Flexible' so they work on both vertical and horizontal images.",
        "BATCH PROCESSING & IMAGE PROCESSOR: We use the 'Image Processor' to resize, convert to JPEG, and apply an action to an entire folder of 500 images automatically. This is how professional studios handle large-scale deliveries.",
        "DROPLETS - DESKTOP AUTOMATION: We create a 'Droplet' on your desktop. You can drag and drop files directly onto this icon to trigger a Photoshop workflow without even opening the app first. It's the ultimate speed hack.",
        "TOOL PRESETS & LIBRARIES: We save our favorite brush settings, gradients, and patterns as presets. We also explore 'Creative Cloud Libraries' to sync our assets across Photoshop, Illustrator, and InDesign.",
        "CONDITIONAL ACTIONS: We dive into the 'Advanced' side of automation. We learn how to make Photoshop decide what to do based on the image properties (e.g., 'If image is Landscape, rotate 90 degrees; if Portrait, do nothing')."
      ],
      shortcuts: [
        { action: "Actions Panel", mac: "⌥ F9", win: "Alt F9" },
        { action: "Play Action", mac: "Click Play", win: "Click Play" },
        { action: "Stop Recording", mac: "Click Stop", win: "Click Stop" },
        { action: "Batch Menu", mac: "File > Auto", win: "File > Auto" }
      ],
      proTips: [
        "Insert 'Stops' in your actions to allow for manual adjustment of specific layers (like a mask) during the playback.",
        "Use 'Button Mode' in the Actions panel for a cleaner, one-click interface.",
        "Organize your actions into 'Sets' to keep your workspace clean and professional."
      ],
      commonMistakes: [
        "Recording 'Save As' steps with specific filenames, which causes the action to overwrite the same file every time.",
        "Not testing actions on different sized images before running a massive batch.",
        "Forgetting to 'Stop' recording, leading to massive, broken actions that include every accidental click."
      ],
      workflow: [
        "Plan the workflow steps on paper before recording",
        "Record the action on a test image carefully",
        "Add 'Stops' for user input where manual work is needed",
        "Run a Batch test on a small sample of 5 images",
        "Export as a Droplet for instant desktop access"
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
      overview: "The capstone project. We take a real-world client brief and build a high-end commercial advertisement from scratch using every skill learned in the course. This is the final test of your professional mastery.",
      detailedGuide: [
        "THE BRIEF & MOODBOARDING: We analyze a creative brief for a luxury watch brand. We define the mood, the target audience, and the technical requirements. We build a moodboard directly in Photoshop to guide our color and light choices.",
        "ASSET PREPARATION & SMART HIERARCHY: We source high-res assets, convert them to Smart Objects, and set up our master PSD with a professional group structure. We discuss 'Non-Destructive' file management for large-scale projects.",
        "THE BUILD - RETOUCHING & COMPOSITING: We perform high-end retouching on the watch, composite it into a dramatic environment, apply cinematic color grading, and add professional typography. We use every tool from the previous 9 lessons.",
        "EXPORT, PROFILES & DELIVERY: We learn about 'Export As' settings, color profiles (sRGB vs ProPhoto), and how to package the final files for a client. We discuss the difference between 'Flattened' and 'Layered' delivery.",
        "PORTFOLIO PRESENTATION: We learn how to create 'Before & After' sliders and 'Process Breakdowns' to showcase our work on Behance or a personal portfolio. We discuss how to talk about your technical process to land high-paying clients."
      ],
      shortcuts: [
        { action: "Export As", mac: "⌘ ⌥ ⇧ W", win: "Ctrl Alt Shift W" },
        { action: "Save for Web", mac: "⌘ ⌥ ⇧ S", win: "Ctrl Alt Shift S" },
        { action: "Package File", mac: "Menu", win: "Menu" },
        { action: "Full Screen Mode", mac: "F", win: "F" }
      ],
      proTips: [
        "Always export a 'Web-Ready' version and a 'High-Res Print' version for the client to avoid confusion.",
        "Create a 'Making Of' time-lapse or breakdown for your portfolio to show your value as a thinker, not just a button-pusher.",
        "Use 'Layer Comps' to show the client different versions of the design within the same file."
      ],
      commonMistakes: [
        "Not checking the final export on a mobile device. Colors and contrast can look very different on phone screens.",
        "Sending the client a 2GB PSD instead of a flattened TIFF or high-quality JPEG.",
        "Forgetting to include the fonts or linked assets in the final delivery package."
      ],
      workflow: [
        "Analyze the client brief and build a moodboard",
        "Build the master composition with Smart Objects",
        "Apply pro retouching, grading, and lighting",
        "Add final typography and branding elements",
        "Export, package, and present for delivery"
      ]
    }
  }
];