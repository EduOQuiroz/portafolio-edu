const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
},
mode: 'development',
devtool: 'source-map',
resolve: {
    extensions: ['.js'],
    alias:{
        '@utils':path.resolve(__dirname,'src/utils/'),
        '@templates':path.resolve(__dirname,'src/assets/templates/'),
        '@styles':path.resolve(__dirname,'src/assets/styles/'),
        '@images':path.resolve(__dirname,'src/assets/images/'),
    }
},
module: {
    rules: [
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    },
    {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
        ],
    },
    {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
            filename: "assets/images/[hash][ext]",
            },
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
        filename: "assets/fonts/[hash][ext]",
        },
    },
    ]
},
plugins: [
    new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
    patterns: [
        {
        from: path.resolve(__dirname, "src", "assets/images"),
        to: "assets/images"
        }
    ]
    }),
],
devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
    open: true,
},
}
