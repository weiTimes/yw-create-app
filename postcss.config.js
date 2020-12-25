const pxtorem = require('postcss-pxtorem');
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: [
    cssnext({ autoprefixer: { browsers: 'ie >= 10, ...' } }),
    pxtorem({
      rootValue: 100,
      propList: [
        'font',
        'font-size',
        'width',
        'height',
        'margin',
        'margin-left',
        'margin-top',
        'margin-bottom',
        'margin-right',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'top',
        'right',
        'bottom',
        'left',
        'border-radius',
        'border-spacing'
      ],
    }),
  ],
  // plugins: {
  //   'postcss-preset-env': {
  //     browsers: 'last 2 versions',
  //   },
  // },
};
