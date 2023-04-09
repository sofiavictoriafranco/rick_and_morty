const {character} = require('../DB_connection')

async function getAllChars (req, res) {

    try {

        const allCharacters = await character.findAll();
        res.status(200).json(allCharacters)

    }catch (error){

        res.status(400).json({error: error.message})
        
    }



}

module.exports = getAllChars;