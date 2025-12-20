import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/universal-auto-dismantling/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
