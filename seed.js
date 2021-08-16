const mongoose = require('mongoose');
const Instrumento = require('./app/models/instrumento.js');
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
        descricao: 'Desfrute da sensação de um verdadeiro piano em qualquer lugar. Além de portátil e muito fácil de usar, o piano digital P45 é compacto e muito elegante.',
        itens: [
            'Instrumento simulador de piano de cauda com 88 teclas e 3 níveis de sensibilidade (teclado GHS)',
            '12W de potência total',
            '64 notas de Polifonia',
            '10 Vozes no total',
            'Saída MONO compartilhada com FONE DE OUVIDO.',
            'Som AMW Stereo Sampling',
            'Fonte Original PA150 BiVolt',
            'Pedal Sustain FC5 + Porta partituras',
            'Peso de 11,5kg'
        ],
        especificacao: ['largura: 1326mm'].
        
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

