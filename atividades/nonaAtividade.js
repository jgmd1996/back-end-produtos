// controller de livro 

import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    }

    static cadastrarLivro = (req, res) => {

        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falaha ao cadastra livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
}

//export default LivroController;


/// rotas de livro

import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
.get("/livros", LivroController.listarLivros)
.post("/livros", LivroController.cadastrarLivro)

//export default router;



//exclusao do metado post no index.js



