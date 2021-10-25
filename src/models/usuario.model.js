const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    nome_usuario:{type:String, require:true},
    email_usuario:{type:String, require:true},
    tipo_usuario:{type:Number, default:1},
    senha_usuario:{type:String, require:true},
},{
    timestamps:true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario,10);
    next();
});

const usuarios = mongoose.model('Usuarios', DataSchema);

module.exports = usuarios;