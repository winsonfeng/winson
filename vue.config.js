module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'src': '@',
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //         {
    //             test: /\.tff$/i,
    //             use: ['url-loader'],
    //         },
    //     ],
    // },
}
