const axios = require("axios");

const getCharDetail = async(req, res) => {

    const {id} = req.params

    try{

    const response = axios(`https://rickandmortyapi.com/api/character/${id}`)

    
  
   
        const character = {
            id: response.data.id,
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            status: data.status,
            origin: data.origin?.name
        }

        res.status(200).json(character)
    
    }catch (error){
     res.status(500).json({error: error.message})
    }

}

module.exports = getCharDetail;




