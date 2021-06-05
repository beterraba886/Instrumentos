const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.sendFile(__dirname + '/html/index.html');
})

app.get('/teste', function (req, res){
    res.send('Hello Worldaaaaaa')
})
app.listen(3000)