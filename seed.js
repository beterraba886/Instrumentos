const mongoose = require('mongoose');
const Instrumento = require('./app/models/instrumento');
mongoose.connect('mongodb://localhost:27017/instrumentos', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("CONNECTION OPEN!!!");
})
.catch(err =>{
    console.log(err);
});

const seedInstrumentos = [
    {
        nome: 'P-45',
        classificacao: 'tecla',
        tipo: 'piano',
        url: 'https://alojadepianos.com.br/wp-content/uploads/2018/06/P-45-01-basic.jpg',
        preco: 2510.10,
        marca: 'Yamaha',
    },
    {
        nome: 'CDP-S100',
        classificacao: 'tecla',
        tipo: 'piano',
        url: 'https://www.casio-intl.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobheadername1=content-disposition&blobheadervalue1=inline%3Bfilename%3DCDP-S100_1.jpg&blobkey=id&blobtable=MungoBlobs&blobwhere=1426265751754&ssbinary=true',
        preco: 1430.30,
        marca: 'Casio',
    },
    {
        nome: 'STRATOCASTER FLOYD ROSE',
        classificacao: 'corda',
        tipo: 'guitarra',
        url: 'https://www.fender.com.br/imgs/produtos/gra/fender_10172268.jpg',
        preco: 6310.63,
        marca: 'Fender',
    },
    {
        nome: 'Soprano Yrs-23g',
        classificacao: 'sopro',
        tipo: 'flauta',
        url: 'https://a-static.mlcdn.com.br/618x463/flauta-doce-yamaha-soprano-germanica-yrs-23g/casasestrela/643128/54c48ddaacae6819664c88e83a290f3a.jpg',
        preco: 60.14,
        marca: 'Yamaha',
    },
    {
        nome: 'SA500-LN',
        classificacao: 'sopro',
        tipo: 'saxofone',
        url: 'https://mmsom.vteximg.com.br/arquivos/ids/166859-1000-1000/Saxofone-Alto-em-MIB-SA500-LN---Eagle.jpg?v=637402075392630000',
        preco: 3170.65,
        marca: 'EAGLE',
    },
]
Instrumento.insertMany(seedInstrumentos)
.then(seedInstrumentos => {
    console.log(seedInstrumentos);
})
.catch(err =>{
    console.log(err);
})

