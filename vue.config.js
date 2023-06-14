const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    proxy: {
      '/get-time-zone':{
        secure: false,
        changeOrigin: true, 
        target: 'http://api.timezonedb.com/v2.1',
      },
      
    }
  }
})
