const conexao = require('../../config/dbServer');

class Espaco {

    listar(res) {
        const sql = 'SELECT * FROM espacos';

        conexao.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            }
            res.status(201).json(results);
        });
    };
    buscaPorId(id, res){
        const sql = `SELECT * FROM espacos WHERE id = ${id}`; 
        conexao.query(sql, id, (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
        });
    }
    alteraPorId(id, valores, res){
        const sql = `UPDATE espacos SET ? WHERE id = ${id}`;        
        conexao.query(sql, [valores,id], (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
        });
    }
    remover(id, res){
        const sql = `DELETE FROM espacos WHERE id = ${id}`;

        conexao.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error)
            }
            res.status(201).json(results)
        });
    };

    inserir(espaco,req, res) {
        const sql = `INSERT INTO espacos SET ?`;
        //const sql = `INSERT INTO espacos (nome, rua, numero, bairro, cidade, estado, email, foto) VALUES ("${req.body.nome}", "${req.body.rua}","${req.body.numero}", "${req.body.bairro}","${req.body.cidade}", "${req.body.estado}","${req.body.email}", "${req.body.foto}")`;

        conexao.query(sql, espaco, (res, error, results) => {
            if(error){
                res.status(400).json(error)
            }
            res.status(201).json(results)
        });

    }
}

module.exports = new Espaco; 