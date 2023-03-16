const axios = require("axios");

const getCharDetail = async(req, res) => {

    const {detailId} = req.params

    try{

    const response = await axios.get(`https://rickandmortyapi.com/api/character/${detailId}`)

    
  
   
        const character = {
            id: response.data.id,
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            status: response.data.status,
            origin: response.data.origin?.name
        }

        res.status(200).json(character)
    
    }catch (error){
     res.status(500).json({error: error.message})
    }

}

module.exports = getCharDetail;




