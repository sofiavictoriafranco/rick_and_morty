
const axios = require("axios");

const getCharDetail = (req, res) => {

    const {id} = req.params

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then( response => response.data)
    .then( data => {
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name
        }

        res.status(200).json(character)
    })
    .catch((error) => {
     res.status(500).json({error: error.message})
    })

}

module.exports = getCharDetail;

