import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://dgall6.github.io/medal-react-module-3/',
  plugins: [react()],
})
