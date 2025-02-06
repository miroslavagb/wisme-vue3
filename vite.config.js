import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'https://json.schemastore.org/prettierrc': path.resolve(__dirname, 'schemas/prettierrc.json'),
      'https://json.schemastore.org/jsconfig': path.resolve(__dirname, 'schemas/jsconfig.json'),
    },
  },
  server: {
    host: true, 
    port: 5173, 
  },
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'lionfish-app-v3fsi.ondigitalocean.app', 
    ],
  },
});
