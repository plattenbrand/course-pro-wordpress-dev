const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Detect if we're in dev or production mode
const isDevelopment = process.env.NODE_ENV !== 'production';

// Entry points configuration
const adminEntryPoints = {
  'admin': './src/js/admin/admin.ts',
  // Add more admin entry points as needed
};

const frontendEntryPoints = {
  'frontend': './src/js/frontend/frontend.ts',
  // Add more frontend entry points as needed
};

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  
  // Set up entry points
  entry: {
    ...adminEntryPoints,
    ...frontendEntryPoints
  },
  
  // Output configuration
  output: {
    filename: 'js/[name]/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  // Enable sourcemaps for development
  devtool: isDevelopment ? 'source-map' : false,
  
  // Resolve TypeScript and JavaScript files
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  
  // Optimization settings
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin()
    ],
    minimize: !isDevelopment,
  },
  
  // Module rules
  module: {
    rules: [
      // TypeScript files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      
      // SCSS files
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin extracts CSS into separate files
          MiniCssExtractPlugin.loader,
          // Resolves CSS imports
          {
            loader: 'css-loader',
            options: { sourceMap: isDevelopment }
          },
          // Process PostCSS features
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              },
              sourceMap: isDevelopment
            }
          },
          // Compiles SCSS to CSS
          {
            loader: 'sass-loader',
            options: { sourceMap: isDevelopment }
          }
        ]
      },
      
      // Images and fonts (if needed)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  
  // Plugins
  plugins: [
    // Clean the dist folder before each build
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false // Don't remove assets not generated in this build
    }),
    
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name]/style.css'
    })
  ],
  
  // Handle admin and frontend style entry points
  // This requires CSS files that import the SCSS files
  // eg: src/js/admin/admin.ts should import '../scss/admin/style.scss'
  // eg: src/js/frontend/frontend.ts should import '../scss/frontend/style.scss'
};