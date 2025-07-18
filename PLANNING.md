# 🎯 Project Planning Document

## 📋 Project Overview

This is a **React-based presentation framework** built on top of Reveal.js, designed for creating beautiful, interactive slide presentations with modern web technologies.

## 🏗️ Architecture & Tech Stack

### Core Technologies

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Presentation Engine**: Reveal.js
- **Styling**: Tailwind CSS + CSS Modules
- **Code Quality**: ESLint + Biome
- **Package Manager**: pnpm

### Project Structure Philosophy

- **Component-based architecture** with clear separation of concerns
- **Page-based routing** for different presentations
- **Modular slide components** that can be reused across presentations
- **Consistent naming conventions** and file organization
- **Maximum 500 lines per file** to maintain readability

## 🎨 Design Principles

### Code Style Guidelines

- TypeScript as primary language
- Async/await over promises
- Function declarations over arrow functions
- Relative imports throughout the project
- Optional chaining for safer property access
- Props destructuring inside function body (not in signature)

### Component Architecture

- **Slide**: Individual slide wrapper component
- **Presentation**: Container for multiple slides
- **CodeBlock**: Syntax-highlighted code display
- **SideNote**: Speaker notes functionality
- **Positioner**: Layout and positioning utilities

## 🚀 Current Features

- Interactive code syntax highlighting with multiple themes
- Speaker notes support
- Responsive design
- Multiple presentation support
- TypeScript and JavaScript code examples
- Beautiful transitions and animations

## 🔮 Future Vision

- Template library for common slide patterns
- Theme customization system
- Export to PDF/static formats
- Collaboration features
- Plugin system for extensions

## 📁 File Organization

```
src/
├── pages/           # Different presentations
├── components/      # Reusable UI components
├── common/          # Shared utilities and constants
└── public/          # Static assets
```

## 🧪 Testing Strategy

- Unit tests for all new components
- Tests co-located with source files
- Naming convention: `*.test.ts` or `*.spec.ts`
- Focus on component behavior and logic

## 🎯 Success Metrics

- Maintainable, readable codebase
- Reusable component library
- Easy creation of new presentations
- Smooth development experience
- High performance and accessibility
