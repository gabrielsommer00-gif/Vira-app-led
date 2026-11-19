import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const rootDir = import.meta.dirname;
const port = Number(process.env.PORT) || 3001;

export default defineConfig({
  root: rootDir,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
      '@shared': path.resolve(rootDir, 'shared'),
      '@server': path.resolve(rootDir, 'server'),
    },
  },
  server: {
    port,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  preview: {
    port,
    host: '0.0.0.0',
  },
  build: {
    outDir: path.resolve(rootDir, 'dist'),
    emptyOutDir: true,
  },
});
