var mongoose = require('mongoose');
var Instrumento = require('../models/instrumentoModel');

class UserController {

    async create(req, res){
        try{
            const user = await Instrumento.create(req.body);
            return res.status(201).send({ user: user});
        }catch(error){
            return res.status(400).send({ erro: 'ERRO!'});
        }
    };

    async list(req, res){
        try{
            const user = await Instrumento.find();
            return res.status(200).send({ users: users});
        }catch(error){
            return res.status(404).send({ error: 'ERRO!!!'});
        }
    }
}

module.exports = Instrumento;