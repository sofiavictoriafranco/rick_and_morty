const axios = require("axios");

const getCharById = async(req, res) => {

    const {id} = req.params

    try {

    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  
   
        const character = {
            id: response.data.id,
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species
        }

        res.status(200).json(character)
   
    }catch (error) { 
     res.status(500).json({error: error.message})
    }

}



module.exports = getCharById;







 





