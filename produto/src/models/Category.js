import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    produto: [{ type: mongoose.Schema.Types.ObjectId, ref: 'produtos' }],
  }
);

const categories= mongoose.model('categories', categorySchema);

export default categories;