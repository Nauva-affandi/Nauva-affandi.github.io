import { defineConfig } from "vite";



// https://vite.dev/config/
export default defineConfig({
  server: {
  	port: 3000,
  	host: true,
    watch: {
      ignored: ["**/node_modules/**", "**/dist/**", "**/.git/**"]
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html"
      }
    }
  }
});
