import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // three.js (~740 kB) is lazy-loaded by the hero scene, so its size doesn't block first paint
  build: { chunkSizeWarningLimit: 800 },
});
