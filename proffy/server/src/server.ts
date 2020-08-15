import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', ( request, response) => {
    return response.send( 'Hello Word' );
}); // rota - endereco que preciso acessar para usar recursos do server - o recurso colocamos dentro de uma funcao

app.listen(3333); //houve um endereco e requiscoes http


