const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // proxy server for change of Origin
  devServer:{

    proxy: {
      //timezone proxy server
      '/get-time-zone':{
        secure: false,
        changeOrigin: true, 
        target: 'http://api.timezonedb.com/v2.1',
      },
      
    }
  }
})
