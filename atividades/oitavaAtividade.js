// app.js

import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

// const livros = [
//   {id: 1, "titulo": "Senhor dos Aneis"},
//   {id: 2, "titulo": "O Hobiit"}
// ]

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
})


function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app


////////////////////////////////////////////////////////

// index da router

import  express  from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros
    )
}

//export default routes;

///////////////////////////////////////////

/// livrosRoutes

import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
.get("/livros", LivroController.listarLivros)

//export default router;


/////////////////////////

// livros controller

import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    }
}

//export default LivroController;