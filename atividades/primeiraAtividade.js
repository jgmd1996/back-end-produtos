// criar um servidor local

const http = require("http");

const port = 3000;


// criar o servidor 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Curso de Node');
} );

server.listen(port, () => {
    console.log(`servidor escutando em http//localHost:${port}`);
})



//Basicamente é o que aconteceu, definimos uma porta, criamos um servidor local,
//fizemos uma requisição quando chamamos o “localhost:3000” e ele devolve uma resposta.
// Tudo se consolidando com o que foi visto no vídeo anterior, requisição, resposta, 
//servidor local. Adiante vamos só evoluindo passo a passo para ter a API robusta com
// Express, com Mongo cada vez mais sofisticada e de acordo com o mercado.
