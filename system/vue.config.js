module.exports = {
  lintOnSave: false,
  publicPath: './',
  configureWebpack: {
    externals: {
      AMap: 'AMap',
    },
  },
};
