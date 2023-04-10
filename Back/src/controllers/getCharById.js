const axios = require("axios");
const {favorite} = require('../DB_connection')

const getCharById = async(req, res) => {

    const {id} = req.params

    try {

        const favorites = await favorite.findAll()

   

        res.status(200).json(favorites)
   
    }catch (error) { 
     res.status(500).json({error: error.message})
    }

}



module.exports = getCharById;







 





