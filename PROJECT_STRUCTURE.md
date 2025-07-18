# 📁 Project Structure

This document outlines the structure and organization of the **Reveal React Template** project, a React-based presentation framework built on top of Reveal.js.

## 🎯 Project Overview

This project is a React template for creating interactive presentations using Reveal.js. It provides reusable components for building slide-based presentations with TypeScript support, code highlighting, and modern development tooling.

## 📂 Root Directory Structure

```
reveal-react-template/
├── src/                          # Source code directory
├── public/                       # Static assets served directly
├── .github/                      # GitHub-specific configuration
├── biome.json                    # Biome formatter/linter configuration
├── eslint.config.js              # ESLint configuration
├── package.json                  # Project dependencies and scripts
├── pnpm-lock.yaml               # Lock file for pnpm package manager
├── README.md                     # Project documentation
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.mts              # Vite build tool configuration
```

## 🧩 Source Code Structure (`src/`)

### 📄 Core Application Files

- **`App.tsx`** - Main application component and routing logic
- **`main.tsx`** - Application entry point and React DOM mounting
- **`index.html`** - HTML template for the application
- **`index.css`** - Global styles and CSS imports
- **`global.d.ts`** - Global TypeScript type definitions

### 🔧 Components (`src/components/`)

**Components are the building blocks for creating presentations.** Each component is self-contained with its own directory containing:

- **`CodeBlock/`** - Syntax-highlighted code display component
  - Handles code syntax highlighting using highlight.js
  - Supports multiple programming languages

- **`Positioner/`** - Layout and positioning utility component
  - Manages slide element positioning and alignment
  - Contains positioning logic and constants

- **`Presentation/`** - Core presentation wrapper component
  - Integrates with Reveal.js library
  - Handles presentation initialization and configuration
  - Manages plugins (highlight, markdown, math, notes)

- **`SideNote/`** - Component for displaying presentation notes or annotations
  - Provides speaker notes functionality
  - Supports additional content display

- **`Slide/`** - Individual slide container component
  - Wraps content for each presentation slide
  - Handles slide-specific behavior and styling

#### Component Structure Pattern

Each component follows this structure:

```
ComponentName/
├── index.ts                 # Re-exports for clean imports
├── ComponentName.tsx        # Main component implementation
├── types.ts                 # TypeScript type definitions (if needed)
├── logic/                   # Business logic and utilities
│   └── constants.ts         # Component-specific constants
└── ComponentName.module.css # Component-specific styles (if needed)
```

### 📖 Pages (`src/pages/`)

**Each page represents a complete presentation.** Pages combine components to create full slide presentations.

- **`ReduxMiddlewarePage/`** - Complete presentation about Redux middleware
  - Contains multiple slide components for different topics
  - Includes assets like images (`folder-structure.png`, `fisherman.png`)
  - Organized into logical slide groups in subdirectories

- **`TutorialPage/`** - Tutorial presentation demonstrating framework usage
  - Shows examples of JavaScript and TypeScript code presentation
  - Serves as a reference implementation

#### Page Structure Pattern

```
PageName/
├── index.ts                 # Main page export
├── PageName.tsx             # Page component that combines slides
├── assets/                  # Page-specific assets (images, etc.)
├── SlideGroupName/          # Logical grouping of related slides
│   ├── index.ts             # Slide group exports
│   ├── SlideComponent.tsx   # Individual slide implementations
│   └── assets/              # Slide-specific assets
```

### 🛠️ Common Utilities (`src/common/`)

- **`constants.ts`** - Application-wide constants and configuration

- **`styles/themes/`** - Code highlighting themes for different appearance styles
  - Contains 30+ syntax highlighting themes (GitHub, VS Code, Monokai, etc.)
  - Allows customization of code block appearance

- **`types/`** - Shared TypeScript type definitions

- **`utils/`** - Utility functions and helpers
  - **`convertReactPropsToRevealProps.ts`** - Converts React props to Reveal.js format
  - **`languages/`** - Language registration for syntax highlighting
    - **`typescript.ts`** - TypeScript language definition
    - **`javascript/`** - JavaScript language definitions

## 🎨 Styling and Theming

- **Tailwind CSS** - Primary styling framework
- **CSS Modules** - Component-specific styling (when needed)
- **Highlight.js Themes** - Multiple syntax highlighting themes available

## 🔧 Development Tools

- **TypeScript** - Primary language with strict type checking
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting with multiple plugins
- **Biome** - Code formatting and additional linting
- **pnpm** - Fast, efficient package manager

## 📦 Key Dependencies

- **React 19** - UI framework
- **Reveal.js 5** - Presentation framework
- **highlight.js** - Code syntax highlighting
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Getting Started

1. **Install dependencies**: `pnpm install`
2. **Start development server**: `pnpm dev`
3. **Build for production**: `pnpm build`
4. **Run linting**: `pnpm lint`
5. **Format code**: `pnpm format-fix`

## 📝 Creating New Presentations

1. **Create a new page directory** under `src/pages/`
2. **Build slide components** using the existing component library
3. **Organize slides** into logical groups with subdirectories
4. **Import and use** in your page component
5. **Update** `App.tsx` to route to your new presentation

## 🏗️ Architecture Principles

- **Component-based architecture** - Reusable, composable presentation elements
- **TypeScript-first** - Strong typing for better development experience
- **Modular organization** - Clear separation of concerns between components and pages
- **Consistent file structure** - Predictable organization patterns
- **Modern tooling** - Latest development tools and practices

This structure provides a scalable foundation for creating rich, interactive presentations while maintaining clean code organization and developer experience.
