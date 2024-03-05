import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: "localhost",
    open: true,
    cors: true,
    proxy: {
      '/api/v1': {
        target: 'https://mall.shanghai.works', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        ws: true,
        secure: true,
        changeOrigin: true,
        withCredentials: true,
      }
    }
  },
  plugins: [
    vue(),
    Components({ resolvers: [VantResolver()] })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
