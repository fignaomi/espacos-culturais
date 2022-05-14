const Joi = require('joi');
const Espaco = require('../models/Espaco');

module.exports = app => {

    app.get('/api/espacos', (req, res) => {
        Espaco.listar(res);
    });

    app.get('/api/espacos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Espaco.buscaPorId(id, res)
    });

    app.put('/api/espacos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const espaco = req.body;
        const schema = Joi.object({
            nome: Joi.string().min(1).max(200).alphanum().required(),
            rua: Joi.string().min(1).max(200).alphanum().required(),
            numero: Joi.number().required(),
            bairro: Joi.string().min(1).max(50).alphanum().required(),
            cidade: Joi.string().min(1).max(50).alphanum().required(),
            estado: Joi.string().min(2).max(2).alphanum().required(),
            email: Joi.string().email().required(),
            foto: Joi.string().max(200).alphanum().required()

        });

        const result = schema.validate(req.body);

        if (result.error) return res.status(400).send(result.error.details[0].message);
        Espaco.alteraPorId(id, espaco, res);
    });
    
    app.post('/api/espacos', (req, res) => {

        const schema = Joi.object({
            nome: Joi.string().min(1).max(200).alphanum().required(),
            rua: Joi.string().min(1).max(200).alphanum().required(),
            numero: Joi.number().required(),
            bairro: Joi.string().min(1).max(50).alphanum().required(),
            cidade: Joi.string().min(1).max(50).alphanum().required(),
            estado: Joi.string().min(2).max(2).alphanum().required(),
            email: Joi.string().email().required(),
            foto: Joi.string().max(200).alphanum().required()

        });

        const result = schema.validate(req.body);

        if (result.error) return res.status(400).send(result.error.details[0].message);
        const espaco = req.body;
        res.send(espaco);
        Espaco.inserir(espaco, res); 
        
    })

    app.delete('/api/espacos/:id', (req,res) => {
        const id = parseInt(req.params.id);
        Espaco.remover(id, res);
    });

};

// ************codigo antigo****************

// app.get('/api/espacos', (req, res) => {
//     res.status(200).send(espacoCultural);

//     app.get('/api/espacos/:id', (req, res) => {
//         const espaco = espacoCultural.find(espaco => espaco.id === parseInt(req.params.id))
//         if (!espaco) return res.status(404).send("O espaco cultural não foi encontrado");
//         res.send(espaco);
//     });

    // app.post('/api/espacos', (req, res) => {

    //     const schema = Joi.object({
    //         nome: Joi.string().min(1).max(200).alphanum().required(),
    //         rua: Joi.string().min(1).max(200).alphanum().required(),
    //         numero: Joi.number().required(),
    //         bairro: Joi.string().min(1).max(50).alphanum().required(),
    //         cidade: Joi.string().min(1).max(50).alphanum().required(),
    //         estado: Joi.string().min(2).max(2).alphanum().required(),
    //         email: Joi.string().email().required(),
    //         foto: Joi.string().max(200).alphanum().required()

    //     });

    //     const result = schema.validate(req.body);

    //     if (result.error) return res.status(400).send(result.error.details[0].message);

    //     const espaco = {
    //         id: espacoCultural.length + 1,
    //         nome: req.body.nome,
    //         rua: req.body.rua,
    //         numero: req.body.numero,
    //         bairro: req.body.bairro,
    //         cidade: req.body.cidade,
    //         estado: req.body.estado,
    //         email: req.body.email,
    //         foto: req.body.foto,
    //     }
    //     espacoCultural.push(espaco);
    //     res.send(espaco);
    //     return;
    // })
    // const ValidateData = (data) => {
    //     const schema = Joi.object({
    //         nome: Joi.string().min(1).max(200).alphanum().required(),
    //         rua: Joi.string().min(1).max(200).alphanum().required(),
    //         numero: Joi.number().required(),
    //         bairro: Joi.string().min(1).max(50).alphanum().required(),
    //         cidade: Joi.string().min(1).max(50).alphanum().required(),
    //         estado: Joi.string().min(2).max(2).alphanum().required(),
    //         email: Joi.string().email().required(),
    //         foto: Joi.string().max(200).alphanum().required()
    //     });
    //     return schema.validate(data);
    // }
    // app.put('/api/espacos/:id', (req, res) => {
    //     const espaco = espacoCultural.find(espaco => espaco.id === parseInt(req.params.id));
    //     if (!espaco) return res.status(404).send("ID não foi encontrado!");
    //     const result = ValidateData(req.body);
    //     if (result.error) return res.status(400).send(result.error.details[0].message);

    //     espaco.nome = req.body.nome;
    //     espaco.rua = req.body.rua;
    //     espaco.bairro = req.body.bairro,
    //         espaco.cidade = req.body.cidade,
    //         espaco.estado = req.body.estado,
    //         espaco.email = req.body.email,
    //         espaco.link = req.body.link;

    //     res.send(espaco);
    //     return;
    // });

    // app.delete('/api/espacos/:id', (req, res) => {

    //     const espaco = espacoCultural.find(espaco => espaco.id === parseInt(req.params.id))
    //     if (!espaco) return res.status(404).send("ID não foi encontrado");

    //     const indice = espacoCultural.indexOf(espaco);
    //     espacoCultural.splice(indice, 1);

    //     res.send(espaco);
    //     return;
    // });

// });