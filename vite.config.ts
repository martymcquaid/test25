import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/5e187e2e-c575-46c1-b11f-24c7054f28f2/preview',
  plugins: [react()],
  server: {
    port: 5160,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5160,
    },
  },
})
