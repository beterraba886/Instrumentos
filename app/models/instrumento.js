const mongoose = require('mongoose');//from 'mongoose';
const { Schema } = mongoose;
const instrumentoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    classificacao:{
        type: String,
        required: true,
        enum: ['sopro', 'tecla', 'corda']
    },
    tipo:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true,
        min: 0
    },
    marca: {
        type: String,
        //required: true,
    },
    descricao: {
        type: String,
        required: true
    },
    itens:{
        type: [String],
        min: 1
    },
    especificacao: {
       type: [String],
       min: 4
    }
});

const Instrumento = mongoose.model('Instrumento', instrumentoSchema);
module.exports = Instrumento;
