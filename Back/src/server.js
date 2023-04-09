const server = require ('./app');
const { sequelize } = require('./DB_connection');
const PORT = 3001;
const saveApiData = require('./controllers/saveApiData')



server.listen(PORT, async() => {
   await sequelize.sync({force: true});
   await saveApiData();
   console.log('Server raised in port ' + PORT);
});