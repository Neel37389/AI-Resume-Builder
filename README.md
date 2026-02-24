# GitHub AI Resume Analyzer – Frontend

Live Demo: https://your-frontend-url.vercel.app

# Overview

This is the frontend for the GitHub AI Resume Analyzer, a full-stack AI-powered application that evaluates public GitHub repositories and generates role-specific resume feedback.

Users can:
- Enter a public GitHub username
- Fetch and display repositories
- Specify a target role (e.g., Frontend Engineer, Backend Engineer)
- Generate AI-powered analysis tailored to that role
- Download a structured PDF summary
- Toggle between light and dark mode
- The frontend emphasizes clean architecture, proper async handling, and production-ready UX patterns.

# Features

- GitHub API integration
- Role-based AI analysis integration
- Structured analysis rendering
- Loading skeleton states
- Error handling with retry functionality
- PDF export of AI-generated resume feedback
- Dark mode support
- Production deployment on Vercel

# Tech Stack

React (Vite), 
Tailwind CSS, 
Custom Hooks, 
Service Layer Pattern, 
jsPDF (PDF generation), 
Vercel (Deployment), 

# Architecture

The application follows separation of concerns:

# Service Layer

Responsible only for API communication:

- Sends repositories and target role to backend
- Handles response validation
- Throws errors for failed requests

# Custom Hooks

Encapsulate async logic and state handling:

- useGithub – Fetches repositories
- useAI – Manages AI analysis lifecycle

Each hook manages:

- Loading state
- Error state
- Data state
- Reset logic

# Presentational Components

Pure UI components that receive data via props and contain no business logic.

Examples:
- SearchBar
- RepoList
- AnalysisCard
- ErrorCard
- AnalysisSkeleton
- TargetRole
- Navbar / Footer
