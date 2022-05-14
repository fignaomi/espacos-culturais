class Tabela {
    init(conexao){
        this.conexao = conexao;
        this.criarEspaco();
    }
    

    criarEspaco(){
        const sql = `CREATE TABLE IF NOT EXISTS espacos (id int NOT NULL AUTO_INCREMENT,
        nome varchar(200) NOT NULL, rua varchar(200) NOT NULL,
        bairro varchar(50) NOT NULL, cidade varchar(200) NOT NULL,
        estado varchar(2) NOT NULL, email varchar(50) NOT NULL,
        link varchar(150) NOT NULL, PRIMARY KEY(id))`
        
        this.conexao.query(sql, error => {
            if(error) {
                throw error
            }
        });
    }

}
module.exports = new Tabela;