const {Router} = require('express')
const  getCharById  = require('../controllers/getCharById')
const  getCharDetail = require('../controllers/getCharDetail')
const {favorite} = require('../DB_connection')
const getAllChars = require ('../controllers/getAllChars')

const router = Router();

router.get('/rickandmorty/allCharacters', getAllChars)

router.get("/onsearch/:id", getCharById)

router.get("/detail/:detailId", getCharDetail)

router.post('/fav', async(req, res) => {

    try{

    const newFav = await favorite.create(req.body);
    res.status(200).json(newFav)

    }catch(error){
        res.status(400).json({error: error.message})
    }



})

router.get('/fav', (req, res) => {

    res.status(200).json(favs)

})

router.delete('/fav/:id', (req, res) => {

    const {id} = req.params

    favs = favs.filter(fav => fav.id !== Number(id))

    res.status(200).json(favs)

    
})







module.exports = router;
