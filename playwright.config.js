import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: './src/e2e',
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
        command: "npm run dev",
        port: 5173,
        reuseExistingServer: true,
    },
});
