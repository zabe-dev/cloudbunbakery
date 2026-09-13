import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:3100",
    channel: "chrome",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["iPhone 13"],
        defaultBrowserType: "chromium",
        deviceScaleFactor: 1,
      },
    },
  ],
  webServer: {
    command: "npm exec http-server -- out -p 3100 -a 127.0.0.1 -c-1",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
  },
});
