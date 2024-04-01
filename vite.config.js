import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/business-card/', // Replace 'repository-name' with your GitHub repository name

  plugins: [react()],
})
