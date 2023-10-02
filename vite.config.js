/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    // alias: {
    //   // Define your aliases using path.resolve()
    //   "/src": path.resolve(__dirname, "src"),
    // },
  },
});
