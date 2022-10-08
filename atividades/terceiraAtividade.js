
//Pasta server 

import app from "./src/app.js";

const port = process.send.PORT || 3000;



app.listen(port, () => {
    console.log(`servidor escutando em http//localHost:${port}`);
})


// pasta app.js

import express from "express";

const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos aneis",},
    {id: 2, "titulo": "O Hobiit",}
];

app.get('/', (req,res) => {
    res.status(200).send('Curso de node')
});

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
});

export default app;


// pasta  json apenas uma alteraçao 
//"type": "module",




// foi feito 



//Nessa aula começamos a ver a importância de se utilizar um 
//framework para poder ganhar agilidade no desenvolvimento e 
//evitar retrabalho escrevendo código ou fazendo melhorias já 
//implementadas. Para saber mais sobre frameworks em geral, 
//confira esse artigo que explica em detalhes os prós e contras 
//e exemplifica alguns frameworks por linguagem.

// link = https://www.alura.com.br/artigos/framework-o-que-e-pra-que-serve-essa-ferramenta


