import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002, // react
    proxy: {
      "/api/login": {
        target: "http://localhost:3001", //express
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  plugins: [react()]
})
