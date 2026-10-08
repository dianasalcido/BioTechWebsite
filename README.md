# Centre for Sustainable Biotechnology

Homepage foundation for CSB at Stanislaus State, built on the `dianaloops` branch.

## Current assessment

The repository began with no committed application files, framework, dependencies, routing, styling system, or existing homepage. Because there was no established stack to preserve, this first foundation uses semantic HTML, modern CSS, and a tiny vanilla JavaScript enhancement layer. It has no runtime dependencies and is easy to migrate into a framework later if the project needs CMS-driven pages or more complex interactions.

## Homepage information architecture

1. Hero: the Central Valley biotechnology story, with a video-ready architecture and two clear actions.
2. Why CSB matters: regional context and the agriculture → biotechnology → sustainability → opportunity relationship.
3. Values: Innovation, Opportunity, and Community.
4. Our work: research, education/outreach, agriculture/sustainability, and workforce development.
5. Impact: only the supplied grant and target reach metrics.
6. Get involved: distinct pathways for students, K–12, industry, and community audiences.
7. Perspective: a supplied Dr. Arun quote.
8. Contact and footer: intentionally placeholder-driven until official contact, social, accessibility, privacy, and AI-disclosure wording is provided.

## Initial design system

- Palette: deep blue for trust and structure; warm off-white and white for breathing room; gold for energy and primary calls to action; orange for emphasis and focus states.
- Typography: system sans-serif stack with large, editorial display scale and readable body copy.
- Layout: generous whitespace, asymmetric editorial splits, bordered lists, full-width color fields, and varied content rhythms rather than repeated card grids.
- Interaction: visible focus rings, keyboard-operable mobile menu, reduced-motion handling, descriptive links, and large touch targets.

## Media and technical risks

- Video: `index.html` expects an optimized `assets/video/csb-hero.mp4` and optional `assets/images/hero-poster.jpg`; the CSS fallback remains usable when those files are absent. Add a mobile encode, captions/transcript when spoken content exists, and test bandwidth behavior before launch.
- Performance: do not ship a large camera-original file. Encode responsive versions, use a poster image, and consider disabling autoplay on constrained connections.
- Accessibility: the current video is muted and decorative, the page remains readable without it, reduced-motion users receive a static fallback, and focus states are explicit. Captions/transcript requirements should be revisited when the final edit has speech.
- Responsive behavior: layout shifts from editorial grids to single-column sections at tablet/mobile breakpoints; test real content lengths and a narrow 320px viewport before launch.

## Planned content additions

Add future content as data-backed collections for events, leadership profiles, research themes, programs, and video modules. Replace bracketed placeholders only with approved information; no missing program facts have been invented here.
