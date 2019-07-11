module.exports = {
    plugins: [
        require('cssnano')(),
        require('autoprefixer')({
            'browsers': ['> 1%', 'last 2 versions']
        })
    ]
}