const mongoose = require('mogoose')

const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuario:String
})

const atividades = mongoose.model('atividades', modelo)

module.exports = atividades