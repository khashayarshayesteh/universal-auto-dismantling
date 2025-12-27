import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use root because of custom domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
