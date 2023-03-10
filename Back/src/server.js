const express = require('express');
const router = require('./routes/index');
const server = express();
const PORT = 3001;

server.use(express.json());

server.use('/rickandmorty', router)

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});