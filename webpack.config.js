const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: 'inline-source-maps',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  // This loader resolves url() and @imports inside CSS
                  'css-loader',

                  // Compiles Sass to CSS
                  // First we transform SASS to standard CSS
                  'sass-loader',
                ],
              },
        ]
    },
    resolve: { extensions: ['.ts', '.js', '.scss'] }
}