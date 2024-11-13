// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Указываем корневую папку, чтобы Vite нашел index.html
  build: {
    
    outDir: '../dist/client', // Папка для клиентской сборки
    ssrManifest: true,         // Для использования в SSR
    rollupOptions: {
      input: './index.html',  // Убедитесь, что путь к `index.html` указан правильно
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'socket.io-client'],
  },
});