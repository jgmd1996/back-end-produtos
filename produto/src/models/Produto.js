import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        quantidade: {type: Number, required: true},
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categories' }],
    },
    {
        versionKey: false
    }
)

const produtos = mongoose.model("produtos", produtoSchema)

export default produtos;