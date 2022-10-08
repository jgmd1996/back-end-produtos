
import express from "express";

const app = express();

app.use(express.json());

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

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('LIvros foi cadastrado com sucesso');
});
export default app;





//conseguimos ler dados da API, fazer uma requisição para obter 
//livros e já conseguimos fazer uma requisição para cadastrar 
//livros na variável em memória



//Vimos que para testar nossa API e fazer requisições do tipo 
//POST, foi necessário utilizar o aplicativo Postman, que nos 
//permitiu selecionar de forma simples o verbo HTTP a ser 
//utilizado na requisição. Para complementar os estudos.