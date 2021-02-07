// o webpack converte arquivos js, css, png e outros importado dentro do js e ativar os loader para carregar esses 
// arquivos. Por exemplo usa o babel loader para converter arquivo js, mas tem loader de css e assim por diante

const path = require( 'path' );

module.exports = {
    entry: path.resolve( __dirname, 'src', 'index.js' ), // aquivo de entrada, ou arquivo principal de nossa aplicação
    output: { // qual arquivo será gerado após o código ser convertido para js que o browser entende
        path: path.resolve( __dirname, 'public' ), // nome pasta que irá receber o arquivo gerado
        filename: 'bundle.js' // o nome do arquivo gerado
    }, 
    devServer: { // util para fazer live-reload
        contentBase: path.resolve( __dirname, 'public' ) // caminho que contém os arquivos publicos da aplicação
    },
    module: { // para carregar loader
        rules: [
            {
                test: /\.js$/,  // irá converter arquivos que tem a extensão js
                exclude: /node_modules/, // o que não irá passar pelo processo do babel
                use: {
                    loader: 'babel-loader' // para converter arquivo java script
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' }, // injeta o css no html
                    { loader: 'css-loader' }, // interpreta o css
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}