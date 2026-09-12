# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend
- Install dependencies: `cd frontend && npm install`
- Run development server: `cd frontend && npm run dev`
- Build for production: `cd frontend && npm run build`
- Lint code: `cd frontend && npm run lint`

### Backend
- Install dependencies: `cd backend && npm install`
- Run server: `cd backend && node server.js`

## Architecture

### Frontend (React + Vite)
- **Location**: `/frontend`
- **Styling**: Tailwind CSS v4 with a custom design system defined in `tailwind.config.cjs`.
- **Routing**: Simple state-based routing managed in `src/App.jsx`.
- **Pages**: Located in `src/pages/` (e.g., `Dashboard.jsx`, `AllSchemes.jsx`, `AskRaastaAI.jsx`).
- **Components**: Reusable UI elements in `src/components/` (e.g., `Header.jsx`, `VoiceInput.jsx`).

### Backend (Node.js + Express)
- **Location**: `/backend`
- **Core Server**: `server.js` (handles API requests).
- **AI Integration**: Uses Google Gemini AI (`@google/genai`) to provide conversational assistance in multiple Indian languages.
- **API Endpoint**: `POST /api/chat` - accepts `text` and `lang` to provide a localized AI response.
- **Environment**: Requires `GEMINI_API_KEY` in a `.env` file.

## Key Design Tokens
The project uses a specific set of custom Tailwind tokens for consistency:
- **Colors**: `primary`, `secondary`, `tertiary`, `surface-container`, etc.
- **Fonts**: `Plus Jakarta Sans` (defined as `font-display-lg`, `font-body-md`, etc.).
- **Spacing**: Custom tokens like `space-md`, `gutter-desktop`.
