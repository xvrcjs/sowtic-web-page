// Configuración de Vite para el proyecto
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassSilencer from "./scripts/sassSilencer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        logger: sassSilencer,
      },
    },
  },
  server: {
    host: true,
    port: 8080,
    strictPort: true,
    // Allow any ngrok domain (e.g. *.ngrok-free.app) for external access
    allowedHosts: [/\.ngrok-free\.app$/],
  },
  logLevel: "info",
});
