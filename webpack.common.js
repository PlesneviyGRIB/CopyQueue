const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env', {
                                targets: {
                                    esmodules: true
                                }
                            }],
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
    },
};