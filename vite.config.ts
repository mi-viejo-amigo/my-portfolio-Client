// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '../client', // Указываем корневую папку, чтобы Vite нашел index.html
  build: {
    
    outDir: '../dist/client', // Папка для клиентской сборки
    ssrManifest: true,         // Для использования в SSR
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'socket.io-client'],
  },
});