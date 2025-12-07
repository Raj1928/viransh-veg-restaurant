import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/viransh-veg-restaurant/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});