const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/html/index.html');
})

app.get('/instrumentos', function (req, res){
    res.sendFile(__dirname + '/html/instrumentos.html');
})
app.listen(8080)