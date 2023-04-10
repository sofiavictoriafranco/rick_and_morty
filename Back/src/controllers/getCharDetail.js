const axios = require("axios");
const {favorite} = require('../DB_connection')

const getCharDetail = async(req, res) => {

    const {detailId} = req.params

    try{

        
        await favorite.destroy({ where: { id: detailId } });
        res.status(200).json({ message: 'Favorite deleted successfully!' });

   
    
    }catch (error){
     res.status(500).json({error: error.message})
    }

}

module.exports = getCharDetail;




