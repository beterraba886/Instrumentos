const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Instrumento = require('./app/models/instrumento');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method')); // /path/:id?_method=PATCH ou PUT no request

mongoose.connect('mongodb://localhost:27017/instrumentos', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("CONNECTION OPEN!!!");
})
.catch(err =>{
    console.log(err);
});


app.get('/', async function (req, res){
    let data = await Instrumento.find({});
    console.log(data);
    res.render('index');
});

app.get('/instrumentos/:classificacao', async function (req, res){
    let c = req.params.classificacao;
    let data = await Instrumento.find({ classificacao: c});
    console.log(data);
    res.render('instrumentos');
});

app.get('/instrumentos/:classificacao/:tipo', async function (req, res){
    let t = req.params.tipo;
    let data = await Instrumento.find({ tipo: t});
    console.log(data);
    res.render('instrumentos', {instruments : data});
});

app.get('/instrumentos/:classificacao/:tipo/:id', async function (req, res){
    let id = req.params.id;
    let data = await Instrumento.findById(id);
    console.log(data);
    res.render('produto', {p : data});
});

app.get('/teste', function(req, res){
    res.render('teste', { rand: r, teste: "alo"});
});

app.get('/*', function(req,res){
    res.send('alo');
})

app.listen(8080);