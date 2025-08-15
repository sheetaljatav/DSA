import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
    ,
     fs: { strict: false },
    middlewareMode: false,
    // For SPA fallback:
    historyApiFallback: true,
  }// <-- Add this line
})
