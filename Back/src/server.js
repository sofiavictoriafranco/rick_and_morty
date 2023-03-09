var http = require("http");
var characters = require('./utils/data')

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('rickandmorty/character')){

        const id = req.url.split('/')[3];
        const character = characters.filter(char => char.id === Number(id));

        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(character[0]))

    }
}).listen(3001, 'localhost');