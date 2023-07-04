const express = require('express');
const sequelize = require('./config/db.config');
const top10Controller = require('./controllers/top10Controller');


const app = express();
app.use(express.json());

//verifica a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao estabelecer conexão com o banco de dados:', error);
  });
  
//Rota para buscar todos os registros
app.get('/tops', top10Controller.getAllTOP10);

const port = 3000;

// Sincronizar o modelo com o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Sincronização concluída.');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.error('Erro na sincronização', error);
  });