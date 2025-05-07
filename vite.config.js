import * as path from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/admin/" : "/",
  build: {
    // Use conditional logic to set the outDir based on the build mode
    outDir: `deploy/${mode}`, // Default to 'dist/development' if not production or staging
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirName, "./src/"),
    },
  },
  envDir: "environments",
  server: {
    port: 3001,
    open: "/admin/login",
    proxy: {
      "/api": {
        target: "https://rainflowweb.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  preview: {
    port: 3001,
    open: "/admin/login",
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.gif"],
}));
