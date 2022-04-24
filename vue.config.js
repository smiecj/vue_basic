const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:8000',
        ws: true,
        changeOrigin: true,
        server: true,
        secure: false,
        headers: {
          cookie: "login_status"
        },
        logLevel: 'debug'
      }
    }
  },
})
