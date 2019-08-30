let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // прогоняем через babel
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production//в зависимости от режима работы подключаем карту кода
                    ? 'source-map' //сжатая версия
                    : 'eval-sourcemap'; //расширенная версия

    return conf;
}