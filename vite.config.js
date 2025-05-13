import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 10000,
    strictPort: true,
    allowedHosts: ['mernfrontend-1-o7zj.onrender.com'], // 👈 Add your Render frontend domain here
  },
});
