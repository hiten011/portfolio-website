# Design Guidelines: Modern Developer Portfolio

## Design Approach

**Reference-Based Approach** inspired by Linear's clean aesthetics, Vercel's minimalism, and modern developer portfolio best practices. The design emphasizes sophisticated simplicity, strategic use of space, and content-first presentation that showcases technical expertise while maintaining visual elegance.

## Core Design Principles

1. **Professional Minimalism** - Clean layouts with purposeful whitespace
2. **Content Hierarchy** - Clear visual structure guiding users through your story
3. **Subtle Sophistication** - Refined animations and transitions, never distracting
4. **Technical Credibility** - Design that reflects your engineering expertise

---

## Color Palette

### Dark Mode (Primary)
- **Background**: 12 8% 8% (rich dark base)
- **Surface**: 12 8% 12% (elevated elements)
- **Primary Accent**: 200 95% 60% (vibrant blue for CTAs, links)
- **Text Primary**: 0 0% 98% (high contrast)
- **Text Secondary**: 0 0% 70% (muted content)
- **Border**: 0 0% 20% (subtle divisions)

### Light Mode
- **Background**: 0 0% 100% (pure white)
- **Surface**: 0 0% 98% (cards, elevated)
- **Primary Accent**: 200 90% 50% (professional blue)
- **Text Primary**: 0 0% 10% (near black)
- **Text Secondary**: 0 0% 40% (readable gray)
- **Border**: 0 0% 90% (soft divisions)

### Semantic Colors
- **Success/Active**: 142 70% 45% (green for project status)
- **Warning/Highlight**: 35 90% 55% (amber for featured work)

---

## Typography

### Font Families
- **Primary**: Inter (clean, modern, excellent readability)
- **Monospace**: JetBrains Mono (code snippets, technical details)

### Type Scale
- **Hero**: text-6xl md:text-7xl font-bold (72px desktop)
- **H1**: text-4xl md:text-5xl font-bold (48px desktop)
- **H2**: text-3xl md:text-4xl font-semibold (36px desktop)
- **H3**: text-2xl font-semibold (24px)
- **Body Large**: text-lg (18px for intros)
- **Body**: text-base (16px standard)
- **Small**: text-sm (14px labels, captions)

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 (desktop), py-12 (mobile)
- Card gaps: gap-6 to gap-8
- Margins: mb-4, mt-8, mx-auto

### Container Strategy
- **Max Width**: max-w-7xl (1280px) for main content
- **Narrow Content**: max-w-4xl for text-heavy sections
- **Full Width**: Projects grid spans full container

### Grid Systems
- **Projects**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- **Skills**: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- **Contact**: Single column, max-w-2xl centered

---

## Component Library

### Navigation
**Desktop**: Horizontal nav with subtle hover states, logo left, links center/right, theme toggle far right
**Mobile**: Hamburger icon (three lines) with slide-in overlay menu, smooth transform animations

### Hero Section (Home Page)
- **Layout**: Asymmetric split - 60% text content, 40% visual element
- **Content**: Name (text-6xl), title/role (text-xl text-muted), brief bio (text-lg), CTA buttons (primary + secondary)
- **Visual**: Gradient orb/mesh background or abstract geometric pattern (NOT a photo)
- **Height**: min-h-[85vh] for impact without forcing 100vh

### Project Cards
- **Structure**: Image thumbnail → Title → Tech stack tags → Description → Links (Live/GitHub)
- **Image**: aspect-video with object-cover, subtle hover scale
- **Tech Tags**: Pill badges with background-accent/10 border-accent/20
- **Hover**: Lift effect (hover:-translate-y-1) + shadow increase

### Resume Page
- **PDF Viewer**: Embedded iframe with min-h-screen, border rounded-lg
- **Download Button**: Prominent, fixed or sticky position for accessibility
- **Fallback**: Mobile-friendly view with key sections if PDF doesn't render

### Skills Section
- **Display**: Grid of skill cards or tag cloud
- **Categories**: Visual grouping (Languages, Frameworks, Tools)
- **Style**: Subtle background cards or outlined badges

### Contact Form
- **Layout**: Single column, max-w-2xl
- **Fields**: Name, Email, Message (textarea)
- **Validation**: Inline error states with red borders
- **Submit**: Primary button with loading state

### Footer
- **Content**: Social links (GitHub, LinkedIn, LeetCode), quick nav, copyright
- **Style**: Minimal, py-8, border-t border-border

---

## Animations & Transitions

**Philosophy**: Subtle, purposeful, never distracting

### Page Transitions (Framer Motion)
- Fade + slight Y-axis movement (20px)
- Duration: 0.3s ease-out

### Micro-interactions
- Button hover: Slight scale (1.02) + brightness increase
- Card hover: -translate-y-1 + shadow-xl
- Link hover: Underline slide-in effect
- Theme toggle: Rotate icon 180deg

### Scroll Animations
- Fade-in on scroll for project cards (stagger 0.1s)
- Avoid parallax or complex scroll-driven effects

---

## Images

### Hero Section
**No large hero image** - Use gradient mesh or abstract geometric patterns instead for a modern, design-forward look that doesn't compete with content

### Project Thumbnails
- **Placement**: Top of each project card
- **Aspect**: 16:9 ratio (aspect-video)
- **Description**: Screenshots or mockups of CatWiz, Cinematch, Minesweeper 2.0 projects
- **Treatment**: Rounded corners (rounded-lg), subtle border in light mode

### About Page (Optional)
- **Professional Photo**: Circle crop (rounded-full), max-w-64, placed alongside bio text
- **Treatment**: Subtle shadow, grayscale to color on hover

---

## Accessibility & Performance

- **Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus States**: Visible ring-2 ring-primary ring-offset-2
- **Keyboard Navigation**: Full support, logical tab order
- **Theme Toggle**: Persists preference, smooth transition (0.2s)
- **Image Optimization**: Lazy loading, WebP format, responsive srcset

---

## Page-Specific Layouts

### Home
Hero → Featured Projects (3 cards) → Skills Grid → CTA Section

### Projects  
Page header → Filter/Sort (optional) → Project grid (all projects) → Pagination if needed

### About
Intro section → Experience timeline → Education → Certifications & Activities

### Contact
Form (left 60%) + Contact info/social (right 40%) on desktop, stacked mobile

### Resume
Embedded PDF viewer + Download button (prominent placement top-right)

---

**Final Note**: Every element serves a purpose. The design should feel effortless while showcasing your technical capabilities through clean execution, smooth interactions, and attention to detail. Trust the spacing system, limit color usage to accent elements, and let your work speak through well-crafted project presentations.