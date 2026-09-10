<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>
# CryptoTrail Frontend

A crypto tracking application built with React, Vite, and TypeScript.

## Getting Started

1. **Install dependencies:**
   npm install

2. **Run local development server:**
   npm run dev

3. **Build for production:**
   npm run build

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/722340fe-aa51-49e5-89cc-4345c5705896

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Run this frontend with your backend

Terminal 1:
cd /d C:\Users\Lenovo\OneDrive\Documents\codex
npm run dev -w backend

Terminal 2:
cd /d "C:\Users\Lenovo\Downloads\cryptotrail (2)"
npm run dev

Open http://127.0.0.1:3000. Keep both terminals running. Stop any older frontend using port 3000 first. Groq and Etherscan keys stay in the backend .env. The frontend forwards /api to backend port 3001.

The original component structure and styles are retained. History contains actual results from this browser session and resets on refresh. Multi-hop is explicitly illustrative and requires no seeding. Direct presets use live requests or cached results; npm run seed-demo in the backend project loads their prepared results for 15 minutes. Unknown risk and pricing fields are displayed as unavailable.
