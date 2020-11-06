module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      }
    }
  }
}
