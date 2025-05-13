import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // binds to 0.0.0.0, required for Render
    port: 10000, // optional: specify a fixed port (Render scans this)
    strictPort: true, // ensures the specified port is used
  }
});
