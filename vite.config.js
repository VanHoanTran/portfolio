/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
//import path from "path";

// https://vitejs.dev/config/

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default defineConfig({
  plugins: [react()],
  root,
  server: {
    port: 8080,
    open: true,
  },
  // resolve: {
  //   alias: {
  //     "/src": resolve(__dirname, "src"),
  //   },
  // },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
