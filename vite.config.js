import { defineConfig } from 'vite';

export default defineConfig({
  root: 'docs', 
  server: { open: '/index.html' },
  build: { outDir: 'dist', emptyOutDir: true },
});