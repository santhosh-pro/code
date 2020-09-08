const express = require('express');
const cors = require( 'cors' );
const consign = require('consign');
const dbConnectionProviderMiddleware = require('../src/middleware/connection-provider.middleware');
const context = require( '../src/server/server-context' );


context.createNamespace();
const app = express();
app.use( context.initContext() );

app.use( cors() );
app.use( express.json() );
app.use( dbConnectionProviderMiddleware );

/*
for (let i = 2; i < process.argv.length; i++) {
    hello( process.argv[i] );
}
*/

consign({ cwd: 'src', verbose: false })
    .include( 'routes' )
    .into( app );

const port = 9001;

app.listen( port, () => {
    console.log( `Server MyTravel running in the port ${port}...` );
});   


/*
    criar model com especificação de tipo
    ao gravar no csv forçar upper case - OK
    ajustar problema em subir o servidor - OK
    tirar styled cmp
    tirar express
    tirar console logs
    ajustar salvar com dois cliques
    quando salvar emiti mensagem se quer inserir outro
    na alteração quando salvar retornar para a página de bsca
    na tela de melhor rota colocar combo com opçoes 
    exibir melhor rota de forma mais grafica
    colocar efeitos nos botoes
    tirarr sass e colocar css
    fazer tdd
    musar nomes dos compoentes de page - actor para route
    deixar as imagens e arquivo que está sendo usado


*/