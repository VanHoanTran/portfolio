import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      // eslint-disable-next-line no-undef
      "@components": path.resolve(__dirname, "src/components"),
      // eslint-disable-next-line no-undef
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
});
