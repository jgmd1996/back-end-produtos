// criar um servidor local

const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'info sobre o projeto'
};


// criar o servidor 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`servidor escutando em http//localHost:${port}`);
})




// Foi feito rotas e isntalado o nodemon para fica atualizando os codigos.
