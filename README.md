# Frontend Developer Assignment

## Live Demo
🔗 [cheerful-muffin-124438.netlify.app](https://cheerful-muffin-124438.netlify.app)

---

## Overview
This project is a responsive frontend application built using **React + Vite + JavaScript + SCSS**.  
The UI is implemented based on the provided Adobe XD designs for desktop and mobile views.  
All application data is stored and persisted using **browser Local Storage**.

---

## Tech Stack
- React (Vite)
- JavaScript (ES6+)
- SCSS
- Local Storage
- Playwright (E2E Testing)

---

## Features
- Pixel-accurate UI based on XD designs
- Fully responsive (desktop & mobile)
- Local Storage based data persistence
- Smooth interactions and transitions
- Accessible and keyboard friendly
- Cross-browser compatible

---

## Setup Instructions

```
git clone https://github.com/akhilaravind/drive-lah-test
cd drive-lah-test
npm install
npm run dev
```

## Build
```
npm run build
npm run preview
```

## End-to-End Testing (Playwright)
Install
```
npm install -D @playwright/test
npx playwright install
```

## Run Tests
```
npx playwright test
npx playwright test --ui
npx playwright show-report
```

## Playwright Configuration
`playwright.config.js`

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    viewport: { width: 1280, height: 800 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],

  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
});
```

## Assumptions

- No backend integration required
- Local Storage used as the primary data source
- No external UI libraries used
