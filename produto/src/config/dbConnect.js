import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:123@alura.fway2xr.mongodb.net/alura-node");
//mongoose.connect("mongodb+srv://alura:123@alura.fway2xr.mongodb.net/alura-node?retryWrites=true&w=majority");


let db = mongoose.connection;

export default db;
