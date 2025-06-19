import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassLogger from "./scripts/sassLogger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        logger: sassLogger,
      },
    },
  },
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  logLevel: "info",
});
