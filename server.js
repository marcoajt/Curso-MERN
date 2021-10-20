const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();//Aqui vai receber o framework express
const port = process.env.PORT || 5000

const URI = 'mongodb://localhost:27017/curso-basico-mearn';

mongoose.connect(
    URI,
    async(err)=>{
        if(err) throw err;
        console.log('MongoDB CONECTADO COM SUCESSO!');
    }
)

app.use(cors());
app.use(cookieParser());
app.use(express.json());// serve para quando precisar enviar e receber json do front-end para o back-end

app.get('/', function(req, res){//Vai precissar receber essa requisição
    res.json({message: 'Hello World!'});
});

app.listen(4000, function(){
    console.log(`Server running on port ${port}`)
});//inicilizando  servidor