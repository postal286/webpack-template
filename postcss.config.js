module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};