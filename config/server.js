const express = require('express');
const consign = require('consign');

const port = process.env.PORT || 3000;
const app = express();
module.exports = () =>{
    

    app.use(express.json())
    
    consign()
    .include('./app/routes')
    .then('config/dbServer.js')
    .into(app)
    
        return app;
};
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
