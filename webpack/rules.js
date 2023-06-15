const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * 通用postcss配置
 */
const commonPostcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: ['postcss-preset-env', require('autoprefixer')]
    }
  }
};

const cssLoaderOptions = {
  modules: {
    auto: true,
    localIdentName: isDevelopment ? '[file]__[local]' : '[md5:hash:base64:12]',
    exportLocalsConvention: 'dashesOnly'
  }
};

module.exports = [
  {
    test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: [
      {
        loader: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },
  {
    test: /\.(gif|png|jpeg|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'img/[name]_[hash:6].[ext]'
      }
    }
  },
  {
    test: /\.m?js$/,
    type: 'javascript/auto',
    resolve: {
      fullySpecified: false
    },
    use: {
      loader: "swc-loader"
    }
  },
  {
    test: /\.(ts|tsx|js|jsx|)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: [['@babel/preset-env', { targets: { chrome: '49', ios: '10' } }], '@babel/preset-typescript', '@babel/preset-react'],
      plugins: [
        'react-hot-loader/babel',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  {
    test: /\.css$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { ...cssLoaderOptions, importLoaders: 1 }
      },
      commonPostcssLoader
    ]
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { ...cssLoaderOptions, importLoaders: 2 }
      },
      commonPostcssLoader,
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sourceMap: isDevelopment,
          
        }
      }
    ]
  },
  // {
  //   test: /\.less$/,
  //   use: [
  //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
  //     {
  //       loader: 'css-loader',
  //       options: { ...cssLoaderOptions, importLoaders: 2 }
  //     },
  //     commonPostcssLoader,
  //     {
  //       loader: 'less-loader',
  //       options: {
  //         lessOptions: {
  //           strictMath: true,
  //           javascriptEnabled: true,
  //           module: true,
  //           modifyVars: {
  //             '@use-css-vars': 1
  //           }
  //         }
  //       }
  //     }
  //   ]
  // }
];
