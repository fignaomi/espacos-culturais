// const mysql = require('mysql');

// const conexao = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '1234',
//     database: 'espacocult',
// });

// module.exports =  conexao;

let mysql = require('mysql');
let connectionMySql = function () {
    console.log('Iniciada a conexão com o banco de dados!');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'espacocult'
    })
};

module.exports = function() {
    return connectionMySql;
}
