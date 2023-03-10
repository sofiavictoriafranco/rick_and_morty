const http = require("http");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")

http.createServer((req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
 

    if (req.url.includes('onsearch')){

   const id = req.url.split("/").pop()

        getCharById(res, id)

       

    }

    if (req.url.includes('detail')){

   const id = req.url.split("/").pop()
      

        getCharDetail(res, id)

    }

}).listen(3001, 'localhost')