const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_produto:{type:String, require:true},
    descricao_produto:{type:String, require:true},
    preco_produto:{type:Number, require:true},
    qtd_produto:{type:Number, default:0, require:true}
},{
    timestamps:true
});

const produtos = mongoose.model('Produtos', DataSchema);

module.exports = produtos;