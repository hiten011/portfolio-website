# Hiten Gupta - Portfolio Website

## Overview
A modern, professional portfolio website built with React, Vite, and TailwindCSS. Features include light/dark theme toggle, responsive design, and a clean, minimalist aesthetic.

## Recent Changes
- **Oct 4, 2025 - Portfolio Enhancements**: Major updates to portfolio
  - Refactored to frontend-only architecture (minimal backend serves static files only)
  - Fixed Resume page with proper PDF embed/viewer and download functionality
  - Enhanced Skills section with visual icons from react-icons/si
  - Organized skills by categories (Languages, Frontend, Backend, Databases, Tools)
  - Added dedicated Experience page with interactive timeline design
  - Experience preview now appears on homepage
  - Removed Experience section from About page
  - All skills now display with logos in responsive grid layout
  - Smooth animations and hover effects throughout

- **Oct 4, 2025 - Initial Setup**: Created portfolio website with all core pages
  - Implemented theme system with localStorage persistence
  - Added responsive navigation with mobile hamburger menu
  - Created constants.js for easy content management
  - Built all pages: Home, Projects, About, Contact, Resume, Experience
  - Integrated Framer Motion for smooth animations
  - Added SEO meta tags and Open Graph support

## Project Structure
```
client/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillBadge.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Resume.tsx
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx
│   ├── constants/        # Content data
│   │   └── data.ts
│   └── App.tsx
```

## Content Management
All personal content can be easily updated in `client/src/constants/data.ts`:
- Personal information (name, bio, contact details)
- Social media links
- Skills and technologies
- Projects with descriptions and links
- Work experience
- Education details
- Certifications and activities

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Routing**: Wouter (lightweight React Router alternative)
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui

## Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Light/dark theme with localStorage persistence
- ✅ Smooth page transitions and animations
- ✅ Mobile-friendly hamburger navigation
- ✅ PDF resume viewer with download option
- ✅ SEO optimized with meta tags
- ✅ Accessible keyboard navigation
- ✅ Clean, modern UI following design guidelines

## User Preferences
- Professional, minimalist design aesthetic
- Clean typography with Inter and JetBrains Mono fonts
- Subtle animations and transitions
- Content-first approach with strategic use of whitespace
