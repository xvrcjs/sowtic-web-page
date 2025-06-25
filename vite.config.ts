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
    // Explicitly allow ngrok domain for external access
    allowedHosts: [
      "d59f-2800-810-5f6-429-dc71-6518-499-4cb7.ngrok-free.app",
    ],
  },
  logLevel: "info",
});
