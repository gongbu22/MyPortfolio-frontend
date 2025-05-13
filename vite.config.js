import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'yujinfolio.com', 
      'localhost',   
      '127.0.0.1'     
    ],
    proxy: {
      '/ws': {
        target: 'ws://front-nodejs-svc:5173',  // Kubernetes 내 서비스 이름
        changeOrigin: true,
        ws: true,
      },
    },
  },
  plugins: [react()],
})
