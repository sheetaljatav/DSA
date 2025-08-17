import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': env.VITE_API_BASE_URL || 'http://localhost:3001'
      },
      fs: { strict: false },
      middlewareMode: false,
      // For SPA fallback:
      historyApiFallback: true,
    }
  }
})
