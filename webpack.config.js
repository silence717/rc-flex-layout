const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { mode } = require('yargs').argv;
const resolve = dir => path.resolve(__dirname, dir);
const buildOutputDir = path.join(__dirname, './dist');

module.exports = {
    mode,
    entry: mode === 'development' ? './public/index.js' : './src/index.js',
    output: {
        filename: 'index.js',
        path: buildOutputDir,
    },
    resolve: {
        modules: [resolve(__dirname, './src'), resolve('./node_modules')],
        extensions: ['.js']
    },
    externals: mode === 'development' ? {} : {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, use: ['babel-loader'] }
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({ extractComments: false })],
    },
    plugins: mode === 'development' ? [
        new CleanWebpackPlugin({
            dry: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ] : [
        // new WebpackBundleAnalyzer(),
        new CleanWebpackPlugin({
            dry: true
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: path.join(__dirname, './package.json')},
              { from: path.join(__dirname, './README.md')}
            ]
        })
    ]
};
