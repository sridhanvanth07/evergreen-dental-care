# Evergreen Dental Care — Design Direction

## Ground-truth reference

The supplied screenshot is a tall, mostly blank verification-state capture with centered muted green copy near the top. It does not expose the clinic homepage layout. The accessible backup reference establishes the intended structure: a slim white navigation bar with a left clinic mark, compact uppercase navigation, and a rounded appointment CTA; a teal-to-green hero with a large greeting headline, doctor/family photography, a white statistic rail; airy white editorial sections; a four-point “why us” feature zone; leadership profiles; a transparent pricing callout; service cards; a quote/contact area; and a dark teal footer. Evergreen Dental Care will preserve that hierarchy and calm, high-trust feeling while using original branding, filler copy, and generated clinician imagery.

## Chosen approach: Botanical Clinical Editorial

### Design Movement
Contemporary editorial healthcare design with biophilic minimalism: clinical clarity softened by botanical color, generous margins, warm paper tones, and magazine-like type scale.

### Core Principles
- Use a restrained teal, forest, ivory, and citrus palette to make care feel both dependable and alive.
- Build the page around asymmetric editorial compositions rather than stacked centered blocks.
- Make trust visible through statistics, credentials, process explanation, and transparent appointment pathways.
- Use rounded image crops and precise thin rules as a quiet signature, not decoration for its own sake.

### Color Philosophy
The primary signature color is **Evergreen Teal** `#0D8C83`, a blue-leaning green that reads as modern healthcare rather than sterile hospital blue. Deep forest `#0E4543` anchors long-form text and footer surfaces. Warm ivory `#F7F5EF` prevents the page from feeling too white or cold, while a small amount of citrus `#F3C44D` signals optimism and highlights “book now” moments. Pale mint `#DDF2EA` provides breathable section contrast without a generic pastel wash.

### Layout Paradigm
Use a full-bleed hero with a left-anchored text column and a right-weighted clinician image, followed by overlapping stat cards. Content sections alternate between editorial two-column layouts, offset image frames, and service rows. On mobile, preserve the same left-edge alignment and let the stat rail become a horizontal scroll rather than collapsing everything into a centered stack.

### Signature Elements
- A small evergreen-leaf smile mark paired with a two-line wordmark.
- “Care notes” labels in compact uppercase with wide tracking and a tiny citrus rule.
- Rounded image windows and floating citrus circles that echo the reference site’s playful geometry.

### Interaction Philosophy
Interactions should feel like a gentle handoff: clear, responsive, and never noisy. Buttons lift by a few pixels, service cards reveal a slim citrus edge, navigation anchors glide to sections, and appointment submission acknowledges the user inline with a reassuring confirmation state.

### Animation
Use 180–260ms ease-out transitions for buttons, nav links, cards, and menu states. On first load, fade and rise the hero copy once, then stagger the image and stat rail by 60ms. Keep hover transforms to small translateY shifts and subtle shadow changes. Respect reduced-motion preferences and never animate layout dimensions.

### Typography System
Use **DM Serif Display** for hero and section headlines, giving the clinic a human editorial voice. Use **Manrope** for navigation, body copy, labels, forms, and statistics. Headlines should mix regular and italic emphasis sparingly; body copy should remain between 15–18px with 1.65 line height. All-caps labels use 0.16em tracking.

### Brand Essence
Evergreen Dental Care is a calm, modern dental studio for families and professionals who want expert treatment without the intimidating clinic experience. Personality: **reassuring, exacting, warm**.

### Brand Voice
Headlines are direct, optimistic, and human. CTAs sound like an invitation, not a sales pitch. Microcopy replaces jargon with plain-language reassurance.

Example lines:
- “A healthier smile starts with feeling at ease.”
- “Bring your questions. We’ll bring a clear plan.”

### Wordmark & Logo
Use the generated symbol as a compact evergreen leaf wrapped around a smile arc. Pair it with a custom two-line lockup: “EVERGREEN” in a strong uppercase sans and “DENTAL CARE” beneath it in smaller tracked type. The mark should appear at a clearly visible size in the header and footer, with the image asset also set as the favicon.

### Signature Brand Color
**Evergreen Teal — `#0D8C83`**

This direction is the implementation contract for all page components and CSS. When choosing between two options, ask: “Does this choice reinforce or dilute Botanical Clinical Editorial?”
