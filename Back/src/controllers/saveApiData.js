const axios = require('axios')
const {character} = require('../DB_connection')



async function getApiData () {
    try {

        let allCharacters = [];

        for( let i = 1 ; i < 6 ; i++){

        let pageCharacter = (await axios(`https://rickandmortyapi.com/api/character?page=${i}`)).data.results.map( c => ({ id: c.id, name: c.name, species: c.species, status: c.status, origin: c.origin.name , gender: c.gender, image: c.image})) 

        allCharacters = [... allCharacters, ... pageCharacter]


        }
 
        return allCharacters

        



    } catch (error){

        console.log(error)

    }
}


 async function saveApiData () {



    try{

        const allCharacters = await getApiData();
        await character.bulkCreate(allCharacters);
        return allCharacters



    }catch(error){

        console.log(error)

    }



}

module.exports = saveApiData;


