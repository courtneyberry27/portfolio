import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {}
  },
  server: {
    port: 3000,
    open: false
  }
});
