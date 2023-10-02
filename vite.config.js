/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
//import path from "path";

// https://vitejs.dev/config/

const outDir = resolve(__dirname, "dist");
console.log(outDir);
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      "@data": "src/data",
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    //   rollupOptions: {
    //     input: {
    //       main: resolve(__dirname, "index.html"),
    //     },
    //   },
  },
});
