const Joi = require('joi');
const Espaco = require('../models/Espaco');

module.exports = app => {

    app.get('/api/espacos', (req, resp) => {
        Espaco.listar(resp);
    });

    app.get('/api/espacos/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        Espaco.buscaPorId(id, resp)
    });

    app.put('/api/espacos/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        const espaco = req.body;

        Espaco.alteraPorId(id, espaco, resp);
    });
    
    app.post('/api/espacos/', (req, resp) => {
        const espaco = req.body;
        Espaco.inserir(espaco, resp);
       
        
    });
    app.delete('/api/espacos/:id', (req,resp) => {
        const id = parseInt(req.params.id);
        Espaco.remover(id, resp);
    });

};
// app.get('/api/espacos/:id', (req, res) => {
//     const espaco = espacos.find(espaco => espaco.id === parseInt(req.params.id))
//     if (!espaco) return res.status(404).send("O espaco com ID especificado não foi encontrado");
//     res.send(espaco);
// });


// app.post('/api/espacos', (req, res) => {

//     const schema = Joi.object({
//         nome: Joi.string().min(1).max(200).alphanum().required(),
//         rua: Joi.string().min(1).max(200).alphanum().required(),
//         bairro: Joi.string().min(1).max(50).alphanum().required(),
//         cidade: Joi.string().min(1).max(50).alphanum().required(),
//         estado: Joi.string().min(2).max(2).alphanum().required(),
//         email: Joi.string().min(1).max(50).alphanum().required(),
//         link: Joi.string().min(3).max(150).alphanum().required(),
//     });

//     const result = schema.validate(req.body);
//     //console.log(result.error.details[0].message);

//     if (result.error) return res.status(400).send(result.error.details[0].message);

//     const espaco = {
//         id: espacos.length + 1,
//         nome: req.body.nome,
//         rua: req.body.rua,
//         bairro: req.body.bairro,
//         cidade: req.body.cidade,
//         estado: req.body.estado,
//         email: req.body.email,
//         link: req.body.link
//     }
//     espacos.push(espaco);
//     res.send(espaco);
//     return;
// })



// app.put('/api/espacos/:id', (req, res) => {
//     const espaco = espacos.find(espaco => espaco.id === parseInt(req.params.id));
//     if (!espaco) return res.status(404).send("O espaco com o ID específico não foi encontrado!");
//     const result = ValidataData(req.body);
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

// const ValidataData = (data) => {
//     const schema = Joi.object({
//         nome: Joi.string().min(3).max(50).required(),
//         rua: Joi.string().min(1).max(200).alphanum().required(),
//         bairro: Joi.string().min(1).max(50).alphanum().required(),
//         cidade: Joi.string().min(1).max(50).alphanum().required(),
//         estado: Joi.string().min(2).max(2).alphanum().required(),
//         email: Joi.string().min(1).max(50).alphanum().required(),
//         link: Joi.string().min(3).max(150).alphanum().required()

//     });
//     return schema.validate(data);
// }

// app.delete('/api/espacos/:id', (req, res) => {
//     const espaco = espacos.find(espaco => espaco.id == parseInt(req.params.id));
//     if (!espaco) return res.status(404).send("O espaco com o ID específico não foi encontrado!");

//     const indice = espacos.indexOf(espaco);
//     espacos.splice(indice, 1);

//     res.send(espaco);
//     return;
// })