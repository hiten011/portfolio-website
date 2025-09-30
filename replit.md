# Hiten Gupta Portfolio

## Overview

This is a personal portfolio website for Hiten Gupta, a Computer Science student and software developer at the University of Adelaide. The application is built using React 18 with Vite as the build tool, providing a modern, fast, and responsive web experience. The portfolio showcases personal information, skills, professional experience, projects, and educational background through a clean, interactive interface with full dark/light mode theme switching capabilities.

**Last Updated**: September 30, 2025 - Fully implemented portfolio with all sections, Resume page, and responsive design

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React 18 with Vite**
- **Problem**: Need for a fast, modern development environment with hot module replacement
- **Solution**: Vite-powered React application leveraging ESNext features
- **Rationale**: Vite provides instant server start, lightning-fast HMR, and optimized production builds compared to traditional bundlers like webpack
- **Pros**: Fast development experience, minimal configuration, built-in TypeScript support
- **Cons**: Relatively newer tooling compared to established build systems

**Component Architecture**
- Single Page Application (SPA) structure with smooth scrolling navigation
- Component-based architecture with modular CSS
- Data separated into constants file (`src/constants/data.js`) for easy content management
- **Components**:
  - `Navbar`: Fixed navigation with smooth scrolling and theme toggle
  - `Hero`: Landing section with introduction and social links
  - `About`: Education details and academic achievements
  - `Skills`: Technical skills organized by category
  - `Experience`: Professional work experience
  - `Projects`: Showcase of personal and academic projects with live demos
  - `Resume`: Professional resume page with print/download functionality
  - `Contact`: Contact information and additional achievements
- **Rationale**: Separation of concerns allows non-technical updates to portfolio content without touching component logic

**Styling Approach**
- Custom CSS with CSS variables for theming
- Theme switching capability (light/dark mode) using data attributes and localStorage persistence
- Google Fonts integration (Inter font family)
- Fully responsive design with mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Mobile hamburger menu with smooth transitions
- **Solution**: CSS custom properties enable dynamic theming without CSS-in-JS overhead
- **Pros**: Performance-friendly, no runtime style injection, easy to maintain, fully responsive
- **Cons**: Less dynamic than CSS-in-JS solutions but sufficient for current needs

**TypeScript Configuration**
- TypeScript support configured but currently using JSX files
- Strict mode enabled with ESNext target
- **Rationale**: Prepared for gradual TypeScript adoption while maintaining JavaScript flexibility

### Development Environment

**Build Tool: Vite 5.0**
- React plugin for JSX transformation and Fast Refresh
- Custom server configuration for Replit deployment (host: 0.0.0.0, port: 5000)
- Separate dev, build, and preview scripts

**Module System**
- ES Modules (`"type": "module"` in package.json)
- Modern JavaScript features with ESNext compilation target

### Data Management

**Content Structure**
- Centralized data store in `src/constants/data.js`
- Exported objects for personal info, skills, experience, and education
- **Rationale**: Makes content updates straightforward without navigating component files
- **Pros**: Easy content management, clear data structure
- **Cons**: No CMS integration, requires code changes for updates

**Data Categories** (all editable in `src/constants/data.js`):
1. Personal Information (contact, bio, social links - GitHub, LinkedIn, LeetCode)
2. Technical Skills (categorized by languages, web tech, databases, tools)
3. Professional Experience (James Anthony Consulting internship with detailed responsibilities)
4. Educational Background (University of Adelaide degree, GPA 6.75/7.0, coursework, scholarship)
5. Projects (CatWiz, Cinematch, Minesweeper 2.0 with live demos and GitHub links)
6. Additional Information (activities, hobbies, certifications)

## External Dependencies

### Core Framework Dependencies
- **React 18.2.0**: UI library for component-based architecture
- **React DOM 18.2.0**: DOM rendering for React components
- **Vite 5.0.0**: Build tool and development server

### Development Tools
- **@vitejs/plugin-react 4.2.0**: Official Vite plugin for React Fast Refresh
- **TypeScript 5.2.2**: Type checking and language support (configured but optional)
- **@types/react & @types/react-dom**: TypeScript definitions for React

### External Services
- **Google Fonts**: Inter font family loaded via CDN for typography
- **Social Platform Links**: GitHub, LinkedIn, and LeetCode profile integrations (display only, no API integration)

### Hosting Platform
- **Replit**: Configured for Replit deployment with custom server settings
- Server exposed on 0.0.0.0:5000 for Replit's proxy system

### No Backend/Database
- Static frontend application with no server-side logic
- No database integration or data persistence layer
- No authentication or authorization mechanisms
- Content is hardcoded in JavaScript constants