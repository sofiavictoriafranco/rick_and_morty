const express = require('express');
const router = require('./routes/index');
const server = express();
const cors = require('cors')

server.use(express.json());
server.use(cors())


server.use('/rickandmorty', router)

module.exports = server;