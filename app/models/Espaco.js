const conexao = require('../../config/dbServer');

class Espaco {

    listar(resp) {
        const sql = 'SELECT * FROM espacos';

        conexao.query(sql, (error, results) => {
            if(error) {
                resp.status(400).json(error)
            }
            resp.status(201).json(results);
        });
    };
    buscaPorId(id, resp){
        const sql = 'SELECT * FROM espacos WHERE id = ?';
        conexao.query(sql, id, (error, result) =>{
            if(error){
                resp.status(400).json(error);
            }
            resp.status(201).json(result);
        });
    }
    alteraPorId(id, valores, resp){
        const sql = 'UPDATE espacos SET ? WHERE id = ?';        
        conexao.query(sql, [valores,id], (error, result) =>{
            if(error){
                resp.status(400).json(error);
            }
            resp.status(201).json(result);
        });
    }
    remover(id, resp){
        const sql = `DELETE FROM espacos WHERE id = ?`

        conexao.query(sql, id, (error, results) => {
            if(error){
                resp.status(400).json(error)
            }
            resp.status(201).json({
                mensagem: `espaco com ${id} removido com sucesso!`
            })
        });
    };

    inserir(espaco, resp) {
        const sql = `INSERT INTO espacos SET ?`;

        ///const agendamentoComData = {...espaco};

        conexao.query(sql, espaco, (error, results) => {
            if(error) {
                resp.status(400).json(error)
            };

            resp.status(201).json(results)
        });

    }
}

module.exports = new Espaco; 